"use client";

import Image from "next/image";
import { Fuel, Cog, CalendarIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import { format } from "date-fns";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { enUS, fr } from "date-fns/locale";
import Link from "next/link";

interface CarCardProps {
  carClass: string;
  price: number;
  brand: string;
  fuel: "Diesel" | "Essence" | "Electrique";
  carType: "Manual" | "Automatic";
  image: string;
}

export default function CarCard({
  carClass,
  price,
  brand,
  fuel,
  carType,
  image, // fallback image
}: CarCardProps) {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(new Date());
  const [openPickup, setOpenPickup] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const t = useTranslations("carCard");

  const lang = useLocale(); // 'en' or 'fr'
  const dateFnsLocale = { en: enUS, fr }[lang] || fr; // fallback to fr

  // Disable past dates for both calendars
  const isPast = (date: Date) =>
    date < new Date(new Date().setHours(0, 0, 0, 0));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullname: formData.get("fullname"),
      phone: formData.get("phone"),
      pickupLocation: formData.get("pickup-location"),
      pickupDate: pickupDate ? format(pickupDate, "PPP") : "",
      returnLocation: formData.get("return-location"),
      returnDate: returnDate ? format(returnDate, "PPP") : "",
      carClass,
      brand,
      fuel,
      carType,
      price,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast(t("successBooking"));
        setOpenDialog(false);
      } else {
        toast(t("bookingError-1"), {
          style: {
            background: "red",
            color: "white",
          },
        });
      }
    } catch (err) {
      console.error(err);
      toast(t("bookingError-2"), {
        style: {
          background: "red",
          color: "white",
        },
      });
    } finally {
      setIsSubmitting(false);
      redirect("/");
    }
  };

  const whatsaapMessage = `
    *${t("WhatsAppBooking.request")}*

    🚗 *${t("WhatsAppBooking.car")}* ${brand}
    💰 *${t("WhatsAppBooking.price")}:* ${price} MAD/${t("WhatsAppBooking.day")}

${t("WhatsAppBooking.confirm")}`;

  const encodedMessage = encodeURIComponent(whatsaapMessage);
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white w-full max-w-sm h-full">
      <div className="bg-gray-100 p-2 h-[200px] flex items-center justify-center">
        <Image
          src={image}
          alt={brand}
          width={500}
          height={300}
          className="object-contain w-full"
        />
      </div>

      <div className="h-[250px] py-4 space-y-2 flex flex-col justify-between align-middle my-2">
        <div className="flex gap-6 items-center px-2">
          <div className="flex items-center justify-between flex-col flex-1">
            <h3 className="text-md font-semibold text-center">{carClass}</h3>
            <p className="text-lg w-full text-center text-gray-600">{brand}</p>
          </div>

          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-2">{t("features")}</p>
            <div className="flex flex-col gap-1 justify-between text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Fuel className="w-4 h-4" />
                {t(`fuel.${fuel}`)}
              </div>
              <div className="flex items-center gap-1">
                <Cog className="w-4 h-4" />
                {t(`carType.${carType}`)}
              </div>
            </div>
          </div>
        </div>

        <Separator />
        <div className="flex items-center gap-6 py-2 px-3">
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-lg font-bold">{price} MAD</p>
            <p className="text-xs text-gray-500">{t("perDay")}</p>
          </div>
          <div className="flex flex-col items-center flex-1 gap-4">
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild className="">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-2 w-full">
                  {t("bookNow")}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <DialogHeader className="pt-4">
                    <DialogTitle className="text-start">
                      {t("cardTitle")}
                    </DialogTitle>
                    <DialogDescription className="text-start">
                      {t("cardDescription-1")} <br />
                      {t("cardDescription-2")}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-3">
                    <Label htmlFor="fullname">{t("fullname")}</Label>
                    <Input id="fullname" name="fullname" required />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="phone">{t("phone")}</Label>
                    <Input id="phone" name="phone" required />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="pickup-location">
                      {t("pickupLocation")}
                    </Label>
                    <Input
                      id="pickup-location"
                      name="pickup-location"
                      required
                    />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="return-location">
                      {t("returnLocation")}
                    </Label>
                    <Input
                      id="return-location"
                      name="return-location"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between py-6">
                    <div className="grid gap-3">
                      <Label>{t("pickupDate")}</Label>
                      <Popover open={openPickup} onOpenChange={setOpenPickup}>
                        <PopoverTrigger asChild>
                          <Button className="w-full bg-blue-500 hover:bg-blue-600">
                            <CalendarIcon />
                            {pickupDate ? (
                              format(pickupDate, "PPP", {
                                locale: dateFnsLocale,
                              })
                            ) : (
                              <span>{t("pickDate")}</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 w-auto">
                          <Calendar
                            locale={dateFnsLocale}
                            mode="single"
                            selected={pickupDate}
                            onSelect={(date) => {
                              setPickupDate(date);
                              // reset end date if it's before new start date
                              if (returnDate && date && returnDate < date) {
                                setReturnDate(undefined);
                              }
                              setOpenPickup(false);
                            }}
                            disabled={isPast}
                            modifiersClassNames={{
                              disabled:
                                "[&>button]:opacity-50 pointer-events-none",
                            }}
                            className="rounded-lg border shadow-sm"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="grid gap-3">
                      <Label>{t("returnDate")}</Label>
                      <Popover open={openReturn} onOpenChange={setOpenReturn}>
                        <PopoverTrigger asChild>
                          <Button className="w-full bg-blue-500 hover:bg-blue-600">
                            <CalendarIcon />
                            {returnDate ? (
                              format(returnDate, "PPP", {
                                locale: dateFnsLocale,
                              })
                            ) : (
                              <span>{t("pickDate")}</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 w-auto">
                          <Calendar
                            locale={dateFnsLocale}
                            mode="single"
                            selected={returnDate}
                            onSelect={(date) => {
                              setReturnDate(date);
                              setOpenReturn(false);
                            }}
                            // ✅ Disable past + before startDate
                            disabled={(date) =>
                              isPast(date) ||
                              (pickupDate ? date < pickupDate : false)
                            }
                            modifiersClassNames={{
                              disabled:
                                "[&>button]:opacity-50 pointer-events-none",
                            }}
                            className="rounded-lg border shadow-sm"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <DialogFooter className="mt-2">
                    <DialogClose asChild>
                      <Button variant="outline">{t("cancel")}</Button>
                    </DialogClose>

                    <Button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {t("booking")}
                        </>
                      ) : (
                        t("bookNow")
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Link
              href={`https://wa.me/212715192639?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 w-full mr-3">
                <Image
                  width={100}
                  height={100}
                  src="/whatsapp-icon.png"
                  alt="WhatsApp"
                  className="w-6 h-6"
                />
                {t("bookNowWhatsapp")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// components/PageLoader.tsx
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

const PageLoader = () => {
  const t = useTranslations("loader");

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center space-y-4">
      <Loader2 className="h-10 w-10 animate-spin text-blue-600" />

      <p className="text-blue-600 font-semibold text-lg animate-pulse text-center px-6">
        {t("pageLoader")}
      </p>
    </div>
  );
};

export default PageLoader;

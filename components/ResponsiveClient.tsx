"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileComponent from "./MobileComponent";
import DesktopComponent from "./DesktopComponent";
import PageLoader from "@/components/PageLoader";

export default function ResponsiveClient() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <PageLoader />;

  return <>{isMobile ? <MobileComponent /> : <DesktopComponent />}</>;
}

// "use client";
// import { useEffect, useState } from "react";
// import PageLoader from "@/components/PageLoader";
// import { useMediaQuery } from "react-responsive";
// import MobileComponent from "@/components/MobileComponent";
// import DesktopComponent from "@/components/DesktopComponent";

// export default function Home() {
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     setHydrated(true);
//   }, []);

//   if (!hydrated) return <PageLoader />;

//   return <>{isMobile ? <MobileComponent /> : <DesktopComponent />}</>;
// }

// app/page.tsx — Server component
// app/[locale]/page.tsx
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  return <ClientWrapper />;
}

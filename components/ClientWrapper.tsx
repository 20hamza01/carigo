// components/ClientWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import PageLoader from "./PageLoader";

const ResponsiveClient = dynamic(() => import("./ResponsiveClient"), {
  ssr: false,
  loading: () => <PageLoader />,
});

export default function ClientWrapper() {
  return <ResponsiveClient />;
}

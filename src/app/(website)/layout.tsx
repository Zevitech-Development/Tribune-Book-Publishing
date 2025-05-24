import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

import LeadModal from "@/utils/lead-modal";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <LeadModal />
      <Footer />
    </>
  );
}

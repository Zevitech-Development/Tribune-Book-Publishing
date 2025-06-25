import BusinessHeader from "@/components/layouts/business-header";
import Footer from "@/components/layouts/footer";

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BusinessHeader />
      {children}
      <Footer />
    </>
  );
}

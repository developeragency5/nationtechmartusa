import Header from "./Header";
import Footer from "./Footer";
import SiteNotice from "@/components/shared/SiteNotice";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Global Layout Component
 * 
 * IMPORTANT: This layout includes the SiteNotice component which displays
 * the required independent retailer disclaimer. Do NOT remove the SiteNotice
 * from this layout or the Footer - it is legally required on all pages.
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* 
        REQUIRED: Footer includes SiteNotice disclaimer.
        The SiteNotice component is also imported here to ensure
        the disclaimer is always available in the global layout.
        See: src/components/shared/SiteNotice.tsx
      */}
      <Footer />
    </div>
  );
};

export default Layout;

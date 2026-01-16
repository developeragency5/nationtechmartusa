import Layout from "@/components/layout/Layout";
import SEO from "@/components/shared/SEO";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutUsSection from "@/components/home/AboutUsSection";
import ShopByUseCase from "@/components/home/ShopByUseCase";
import WhyNationTechMart from "@/components/home/WhyNationTechMart";
import OurApproach from "@/components/home/RealStorePromise";
import TransparencySection from "@/components/shared/TransparencySection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home Printers, Office Printers, Laser & Inkjet Printers"
        description="Shop quality home printers, office printers, laser printers, inkjet printers, and document scanners at competitive prices. Quick processing and easy returns."
        keywords="home printer, office printer, laser printer, inkjet printer, scanner, document scanner, buy printer online, printer shop"
        canonicalUrl="/"
      />
      <HeroSection />
      <FeaturedProducts />
      <AboutUsSection />
      <ShopByUseCase />
      <WhyNationTechMart />
      <OurApproach />
      <TransparencySection />
      <FAQSection />
    </Layout>
  );
};

export default Index;

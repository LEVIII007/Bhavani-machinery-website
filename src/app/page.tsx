import ContactSection from "@/components/contact";
import GraniteSection from "@/components/granite";
import HeroSection from "@/components/hero";
import Footer from "@/components/hooter";
import MachinerySection from "@/components/machines";
import Navbar from "@/components/navbar";


const Home = () => {
  return (
    <div id ='root'>
      <Navbar />
      <HeroSection />
      <MachinerySection />
      <GraniteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}


export default Home;
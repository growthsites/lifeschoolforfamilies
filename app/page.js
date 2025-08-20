import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <WhyUs />
      <Footer />
    </div>
  );
}

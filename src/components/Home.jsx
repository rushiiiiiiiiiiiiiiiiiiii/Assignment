import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import AtGlance from "./layout/AtGlance";
import OurPillars from "./layout/OurPiller";
import InfrastructureUpgradation from "./layout/InfrastructureUpgradation";
import StoriesOfChange from "./layout/StoriesOfChange";
import RealVoicesRealChange from "./layout/RealVoicesRealChange";
import NewsReports from "./layout/NewsReports";
import SocialUpdates from "./layout/SocialUpdates";
import Footer from "./layout/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#F7F5EF]">
      {/* NAVBAR (FIXED) */}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT / AT A GLANCE */}
      <section id="about">
        <AtGlance />
      </section>

      {/* OUR WORK */}
      <section id="our-work">
        <OurPillars />
      </section>

      {/* INFRASTRUCTURE */}
      <section id="infrastructure">
        <InfrastructureUpgradation />
      </section>

      {/* OUR IMPACT */}
      <section id="our-impact">
        <StoriesOfChange />
      </section>

      {/* TESTIMONIALS */}
      <section id="voices">
        <RealVoicesRealChange />
      </section>

      {/* MEDIA / NEWS */}
      <section id="media">
        <NewsReports />
      </section>

      {/* SOCIAL */}
      <section id="social">
        <SocialUpdates />
      </section>

      {/* CONTACT / FOOTER */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}

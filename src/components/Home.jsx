import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import AtGlance from "./layout/AtGlance";
import OurPillars from "./layout/OurPiller";
import InfrastructureUpgradation from "./layout/InfrastructureUpgradation";
import StoriesOfChange from "./layout/StoriesOfChange";
import RealVoicesRealChange from "./layout/RealVoicesRealChange";

export default function Home() {
  return (
    <main className="w-full bg-[#F7F5EF]">
      <Navbar />
      <Hero />
      <AtGlance/>
      <OurPillars/>
      <InfrastructureUpgradation/>
      <StoriesOfChange/>
      <RealVoicesRealChange/>
    </main>
  );
}

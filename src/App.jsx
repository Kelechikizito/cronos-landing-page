import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CommunitySection from "./components/CommunitySection";
import HubSection from "./components/HubSection";
import StakeSection from "./components/StakeSection";
import FeatureSection from "./components/FeatureSection";
import TechSection from "./components/TechSection";

function App() {
  return (
    <div className="bg-[#050505]">
      <Navbar />
      <HeroSection />
      <CommunitySection />
      <HubSection />
      <StakeSection />
      <FeatureSection />
      <TechSection />
    </div>
  );
}

export default App;

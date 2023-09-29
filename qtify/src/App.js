import Navbar from "./components/navbar/navbar.component";
import HeroSection from "./components/hero-section/hero-section.component";
import Card from "./components/card/card.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Card />
    </div>
  );
};

export default App;

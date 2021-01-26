import "./App.scss";
import Header from "./Components/Header";
import SocialMedia from "./Components/SocialMedia";
import Banner from "./Pages/Banner";
import Carbon from "./Pages/Carbon";
import Card from "./Pages/Card";
import FeaturesCard from "./Pages/FeaturesCard";
import Xbox from "./Pages/Xbox";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Card />
      <Xbox />
      <FeaturesCard />
      <Carbon />
      <SocialMedia />
    </div>
  );
}

export default App;

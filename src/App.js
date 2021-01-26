import "./App.scss";
import Header from "./Components/Header";
import Banner from "./Pages/Banner";
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
    </div>
  );
}

export default App;

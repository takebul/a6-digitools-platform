import "./App.css";
import Hero from "./components/Hero/Hero";
import MainStart from "./components/Main/MainStart/MainStart";
import Navbar from "./components/Navbar/Navbar";
import Stat from "./components/Stat/Stat";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <MainStart />
    </>
  );
}

export default App;

import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import MainStart from "./components/Main/MainStart/MainStart";
import Navbar from "./components/Navbar/Navbar";
import Stat from "./components/Stat/Stat";
import MainCenterProduct from "./components/Main/MainCenterProduct/MainCenterProduct";
import MainCenterCart from "./components/Ui/MainCenterCart";
import MainEnd from "./components/Main/MainEnd/MainEnd";
import MainEndPricing from "./components/Main/MainEnd/MainEndPricing/MainEndPricing";

const fetchDigiTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const digiToolsPromise = fetchDigiTools();

  const [centerCart, setCenterCart] = useState([]);

  return (
    <>
      <Navbar centerCart={centerCart} />
      <Hero />
      <Stat />
      <Suspense
        fallback={
          <div className="items-center">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        }
      >
        <MainStart
          digiToolsPromise={digiToolsPromise}
          centerCart={centerCart}
          setCenterCart={setCenterCart}
        />
      </Suspense>
      <MainEnd />
      <MainEndPricing />
    </>
  );
}

export default App;

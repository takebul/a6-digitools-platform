import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import MainStart from "./components/Main/MainStart/MainStart";
import Navbar from "./components/Navbar/Navbar";
import Stat from "./components/Stat/Stat";
import MainCenterProduct from "./components/Main/MainCenterProduct/MainCenterProduct";
import MainCenterCart from "./components/Ui/MainCenterCart";

const fetchDigiTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const digiToolsPromise = fetchDigiTools();
  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <Suspense
        fallback={
          <div className="items-center">
            <span className="loading loading-spinner text-primary"></span>
          </div>
        }
      >
        <MainStart digiToolsPromise={digiToolsPromise} />
        {/* <MainCenterProduct />
        <MainCenterCart /> */}
      </Suspense>
    </>
  );
}

export default App;

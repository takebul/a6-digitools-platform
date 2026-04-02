import { use, useState } from "react";
import MainCenterProduct from "../MainCenterProduct/MainCenterProduct";

const MainStart = ({ digiToolsPromise }) => {
  const digiTools = use(digiToolsPromise);
  const [productType, setProductType] = useState("product");
  const [digiToolsProduct, setDigiToolsProduct] = useState([]);
  return (
    <div>
      <div className="justify-items-center mt-18 mb-8 space-y-4">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-center text-gray-500">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex items-center border-2 border-gray-200 rounded-full">
          <button
            onClick={() => setProductType("product")}
            className={
              productType === "product"
                ? "btn bg-linear-gradient text-white rounded-full"
                : "btn rounded-full btn-ghost text-linear-gradient"
            }
          >
            Product
          </button>
          <button
            onClick={() => setProductType("cart")}
            className={
              productType === "cart"
                ? "btn bg-linear-gradient text-white rounded-full"
                : "btn rounded-full btn-ghost text-linear-gradient"
            }
          >
            Cart({digiTools.length})
          </button>
        </div>
      </div>
      <MainCenterProduct
        digiTools={digiTools}
        digiToolsProduct={digiToolsProduct}
        setDigiToolsProduct={setDigiToolsProduct}
        productType={productType}
      />
    </div>
  );
};

export default MainStart;

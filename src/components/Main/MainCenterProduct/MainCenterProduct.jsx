import Card from "../../Ui/Card";
import MainStart from "../MainStart/MainStart";

const MainCenterProduct = ({
  setDigiToolsProduct,
  digiToolsProduct,
  digiTools,
  productType,
  centerCart,
  setCenterCart,
}) => {
  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7.5 my-8">
      {digiTools.map((digiTool) => {
        return (
          <Card
            key={digiTool.id}
            digiTool={digiTool}
            setDigiToolsProduct={setDigiToolsProduct}
            digiToolsProduct={digiToolsProduct}
            productType={productType}
            centerCart={centerCart}
            setCenterCart={setCenterCart}
          />
        );
      })}
    </div>
  );
};

export default MainCenterProduct;

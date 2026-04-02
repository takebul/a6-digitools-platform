import Card from "../../Ui/Card";
import MainStart from "../MainStart/MainStart";

const MainCenterProduct = ({
  setDigiToolsProduct,
  digiToolsProduct,
  digiTools,
  productType,
}) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-7.5 my-8">
      {digiTools.map((digiTool) => {
        return (
          <Card
            digiTool={digiTool}
            setDigiToolsProduct={setDigiToolsProduct}
            digiToolsProduct={digiToolsProduct}
            productType={productType}
          />
        );
      })}
    </div>
  );
};

export default MainCenterProduct;

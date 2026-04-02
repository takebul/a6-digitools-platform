import { Check } from "lucide-react";

const Card = ({ digiTool, digiToolsProduct, setDigiToolsProduct }) => {
  //   console.log(digiTool);
  console.log(digiTool.name);
  const digiToolsFeatures = digiTool.features;
  console.log(digiToolsFeatures);
  const [feature1, feature2, feature3, feature4, feature5] = digiToolsFeatures;

  return (
    <div>
      <div className="bg-base-100 border-2 border-gray-200 rounded-2xl p-4 space-y-4">
        <div className="flex justify-between">
          <div className="p-3 border-2 border-gray-200 rounded-full">
            <img src={digiTool.icon} alt={digiTool.name} />
          </div>
          <div>
            <p className="bg-amber-100 px-3 text-amber-600 py-1 rounded-full">
              {digiTool.tag}
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold">{digiTool.name}</h3>
        <p className="text-gray-500">{digiTool.description}</p>
        <p>
          <span className="text-xl font-semibold">${digiTool.price}</span>
          <span className="text-gray-500">/{digiTool.period}</span>
        </p>
        <div className="text-gray-500">
          <p className="flex gap-1 items-center">
            <Check size={"22px"} color="green" />
            {feature1}
          </p>
          <p className="flex gap-1 items-center">
            <Check size={"22px"} color="green" />
            {feature2}
          </p>
          <p className="flex gap-1 items-center">
            <Check size={"22px"} color="green" />
            {feature3}
          </p>
          <p className="flex gap-1 items-center">
            <Check size={"22px"} color="green" />
            {feature4}
          </p>
          <p className="flex gap-1 items-center">
            {feature5 ? <Check size={"22px"} color="green" /> : ""}
            {feature5}
          </p>
        </div>
        <button className="btn bg-linear-gradient text-white w-full rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;

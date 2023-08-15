
import { imagez } from "../json2/json2";

export default function BestDelivered() {
  return (
    <div className="flex flex-wrap justify-center gap-20 p-20">
      {imagez.map((image, index) => (
        <div className="flex flex-col items-center w-1/4 text-center bg-white p-10" key={index}>
          <div className="w-4/5 h-120px bg-white p-5 flex justify-center items-center overflow-hidden">
            <img src={image.img} alt="Product" className="w-4/5 h-auto" />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-gray-700 head">{image.header}</h1>
            <div className="text-red-600 font-bold text-lg">
              {image.buttonText} <span className="text-gray-700">{image.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

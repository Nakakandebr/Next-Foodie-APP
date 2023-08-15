
import { images } from "../json/json";

function Product() {
  return (
    <div className="flex flex-wrap justify-center gap-20 p-25">
      {images.map((image, index) => (
        <div className="flex flex-col items-center w-1/4 text-center bg-white p-15" key={index}>
          <div className="w-1/2 h-120px bg-white p-5 flex justify-center items-center overflow-hidden">
            <img src={image.img} alt="Product" className="w-90 h-auto border-4 border-red-700 rounded-full" />
          </div>
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-gray-700">{image.header}</h1>
            <div className="text-gray-700">
              {image.stars} <span className="tag ml-10">{image.tag}</span>
            </div>
            <div className="text-gray-700 text-2xl font-bold">
              {image.currency} <button className="bg-red-600 text-white font-bold text-lg px-6 py-4">{image.buttonText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;

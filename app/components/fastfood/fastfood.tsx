

export default function Fastfood() {
  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="content text-center md:text-left md:mr-8">
        <h1 className="text-4xl font-semibold mb-4">All Fast Food is<br />Available at Foodle</h1>
        <p className="text-lg mb-8">We are Just A Click Away When You<br />Crave For Delicious Fast Food</p>
        <div className="buttons space-y-2 md:space-y-0 md:space-x-4">
          <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600'>
            <i className="bi bi-handbag-fill mr-2"></i>Buy Now
          </button>
          <button className='px-4 py-2 bg-gray-300 text-red-700 rounded-lg hover:bg-gray-400'>
            <i className="bi bi-play-circle mr-2"></i>How To Order
          </button>
        </div>
      </div>
      <div className="image-container ">
     
        <img className='w-1/2 md:w-80 lg:w-80' src={'./first image.jpeg'} alt='pr'/>
        
      </div>
      
    </div>

  );
}

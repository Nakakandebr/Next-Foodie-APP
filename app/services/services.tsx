import React from "react";

const Service = () => {
    return (
      <div className="services">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="circle-icon bg-blue-500 text-white flex items-center justify-center">
              <i className="bi bi-credit-card-2-front"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Fast Delivery</h1>
              <p className="text-sm">
                The Food Will Be Delivered To<br />
                Your Home Within 1-2 Hours Of<br />
                Your Ordering.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="circle-icon bg-green-500 text-white flex items-center justify-center">
              <i className="bi bi-arrow-clockwise"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Absolutely Free</h1>
              <p className="text-sm">
                No Cost<br />
                Just Order And Enjoy.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center space-x-4">
            <div className="circle-icon bg-red-500 text-white flex items-center justify-center">
              <i className="bi bi-truck"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Express Delivery</h1>
              <p className="text-sm">
                The Food Will Be Delivered To<br />
                Your Home Within 1-2 Hours Of<br />
                Your Ordering.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Service;
  
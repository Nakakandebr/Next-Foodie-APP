import React from 'react';

function Footer() {
  return (
    <div className="bg-pink-300 text-gray-500">
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="food-icons">
          <div className="food">
            <span className="text-4xl text-red-500  font-semibold">Foodish</span>
            <p className="text-m">Continue Foodish 2023 all rights reserved</p>
          </div>
          <div className="icons flex mt-4">
            <span className="mr-2  text-2xl  text-red-500 ">Follow Us On</span>
            <div className='iconz'>
              <i className="bi bi-pinterest text-xl mr-2"></i>
              <i className="bi bi-instagram text-xl mr-2"></i>
              <i className="bi bi-twitter text-xl mr-2"></i>
              <i className="bi bi-facebook text-xl"></i>
            </div>
          </div>
        </div>

        <div className="information">
          <span className="text-4xl  text-red-500 font-bold">Information</span>
          <ul className="mt-4">
            <li className="text-m">Menu</li>
            <li className="text-m">Quality</li>
            <li className="text-m">Make a Choice</li>
            <li className="text-m">Salad With Vegetable</li>
            <li className="text-m">Fast Delivery</li>
            <li className="text-m">Subscribe</li>
          </ul>
        </div>

        <div className="menu">
       

          <span className="text-4xl text-red-500 font-semibold">Menu</span>
          <ul className="mt-4">
            <li className="text-m">Home</li>
            <li className="text-m">Offers</li>
            <li className="text-m">Services</li>
            <li className="text-m">About Us</li>
          </ul>
        </div>

        <div className="contact">
          <span className="text-4xl text-red-500  font-bold ">Contact</span>
          <ul className="mt-4">
            <li className="text-m">+123 456 789</li>
            <li className="text-m">Explore</li>
            <li className="text-m">Info@Foodish.Com</li>
            <li className="text-m">1244, New York, USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

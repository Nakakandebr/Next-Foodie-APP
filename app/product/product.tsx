import React from 'react'

import {imagez } from "../json2/json2"


export default function BestDelivered() {
  return (
   
    <div className="product-container">
     
      {imagez.map((image, index) => (
        <div className="product-item" key={index}>
          <img src={image.img} alt="Product" className="productz-image" />
          <div className="product-details">
          <h1 className='head'>{image.header}</h1>
          
            <div className="product-starz">{image.buttonText} {image.icon}</div>

            


          </div>
        </div>
      ))}
    </div>
  );
}
        
      


 
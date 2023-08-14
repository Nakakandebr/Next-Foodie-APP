import React from "react";
// import humberger from '../images/burger.avif';
// import pizza from '../images/fries.jpg';
// import slice from '../images/slice.jpg';
// import './style.css'

// const Categories = () =>{
//     return(
//         <div>
//             <div className="categories">
//                 <h1>Best<strong className="del"> Delivered</strong><br/>Categories</h1>
//                 <p>Here Are Some Of Our Best Distributed<br/>Categories. If You Want You Can Order<br/>From Here</p>
//             </div>
//             <div className="container">
//              <div className="humb"><img  src={'./first image.jpeg'} alt='pr'/>
            
//                 <h2>Chicken Burger</h2>
//                 <h3>Order Now</h3>
//                 </div>
//                 <div><img  src={'./first image.jpeg'} alt='pr'/>
//                 {/* <img src={pizza} alt=""/> */}
//                 <h2>Chicken Pizza</h2>
//                 <h3>Order Now</h3>
//                 </div>
//               <div><img  src={'./first image.jpeg'} alt='pr'/>
//                 <h2>French Fries</h2>
//                 <h3>Order Now</h3>
//                 </div> 
//             </div>
//         </div>
//     )
// };

// export default Categories
// const Categories = () => {
//     return (
//         <div>
//             <div className="categories">
//                 <h1>Best<strong className="del"> Delivered</strong><br/>Categories</h1>
//                 <p>Here Are Some Of Our Best Distributed<br/>Categories. If You Want You Can Order<br/>From Here</p>
//             </div>
//             <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="humb">
//                     <img src={'./first image.jpeg'} alt='pr'/>
//                     <h2>Chicken Burger</h2>
//                     <h3>Order Now</h3>
//                 </div>
//                 <div className="humb">
//                     <img src={'./first image.jpeg'} alt='pr'/>
//                     <h2>Chicken Pizza</h2>
//                     <h3>Order Now</h3>
//                 </div>
//                 <div className="humb">
//                     <img src={'./first image.jpeg'} alt='pr'/>
//                     <h2>French Fries</h2>
//                     <h3>Order Now</h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Categories;
const Categories = () => {
    return (
        <div>
            <div className="categories">
                <h1>Best<strong className="del"> Delivered</strong><br/>Categories</h1>
                <p>Here Are Some Of Our Best Distributed<br/>Categories. If You Want You Can Order<br/>From Here</p>
            </div>
            <div className="container mx-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="humb">
                        <img src={'./first image.jpeg'} alt='pr' className="w-85 h-50" />
                        <h2>Chicken Burger</h2>
                        <h3>Order Now</h3>
                    </div>
                    <div className="humb">
                        <img src={'./first image.jpeg'} alt='pr' className="w-85 h-auto "  />
                        <h2>Chicken Pizza</h2>
                        <h3>Order Now</h3>
                    </div>
                    <div className="humb">
                        <img src={'./first image.jpeg'} alt='pr' className="w-85 h-auto" />
                        <h2>French Fries</h2>
                        <h3>Order Now</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;

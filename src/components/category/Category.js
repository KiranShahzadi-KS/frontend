import React from "react";
import "./category.css";
import { category } from "../../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
};
const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="category">
        <div className="content">
          <Slider {...settings}>
            {category.map((item) => (
              <div className="boxs">
                <div className="box" key={item.id}>
                  <img src={item.cover} alt="cover" />
                  <div className="overlay">
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Category;

// import React from 'react'
// import "./category.css"
// import { category } from "../../assets/data/data"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import {MdNavigateNext} from "react-icons/md"
// import {GrFromPrevious} from "react-icons/gr"

// const SmapleNextArrow =(props) =>{
//   const {onclick} = props
//   return(
//     <div className='control-btn' onclick={onclick}>
//       <button className='next'>
//         <MdNavigateNext className="icon"/>
//       </button>
//     </div>
//   )
// }

// const SmaplePrevArrow =(props) =>{
//   const {onclick} = props
//   return(
//     <div className='control-btn' onclick={onclick}>
//       <button className='prev'>
//         <GrFromPrevious className="icon"/>
//       </button>
//     </div>
//   )
// }

// const Category = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     nextArrow : <SmapleNextArrow/>,
//     nextArrow : <SmaplePrevArrow/>,
//     response:[{
//       breakpoint: 800,
//       settings:{
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       }
//     }]
//   };
//   return (
//     <>
//        <section className='category'>
//         <div className='content'>
//         <Slider {...settings}>
//             {category.map((item) => (
//               <div className='boxs' key={item.id}>
//                 <div className='box'>
//                   <img src={item.cover} alt='cover' />

//                   <div className='overlay'>
//                     <h4>{item.category}</h4>
//                     <p>{item.title}</p>
//                 </div>
//                 </div>
//               </div>
//             ))}
//             </Slider>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Category

import React from "react";

const Card = ({ image, Name }) => {
  return (
    <>
    <div className=" grid grid-cols-1  ">
      <div className="h-96 border w-72 overflow-hidden m-2  rounded-3xl  mx-auto">
        <div className="h-4/5 w-full overflow-hidden  border">
          <img
            src={image}
            alt={Name}
            className="h-full w-full transition-all hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="h-1/5 w-full text-center flex flex-col bg-black justify-evenly text-white  ">
          <div className="text-2 xl text-white">{Name}</div>
        </div>
      </div>
      <div className=""></div>
      </div>
    </>
  );
};

export default Card;


// import React from "react";
// import { Link } from "react-router-dom"; // Import Link

// const Card = ({ image, Name, idMeal }) => {
//   return (
//     <Link to={`/meal/${idMeal}`} className="w-full"> 
//       <div className="h-96 border w-72 overflow-hidden rounded-3xl mx-auto">
//         <div className="h-4/5 w-full overflow-hidden border border-white">
//           <img
//             src={image}
//             alt={Name}
//             className="h-full w-full transition-all hover:scale-110 cursor-pointer"
//           />
//         </div>
//         <div className="h-1/5 w-full text-center flex flex-col bg-slate-300 justify-evenly text-white italic">
//           <div className="text-3xl text-black">{Name}</div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;

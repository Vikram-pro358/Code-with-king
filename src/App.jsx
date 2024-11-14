import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Component/Nav'
import Home from './Component/Home'
import Meal from './Component/Meal'
import MealDetails from './Component/MealDetails'


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/meal' element={<Meal/>}/>
      <Route path="/meal/:idMeal" element={<MealDetails/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App




// import { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Router and Link
// import Card from "./Component/Card";
// import MealDetails from "./Component/MealDetails"; // The new component for meal details

// const App = () => {
//   const [country, setCountry] = useState("indian");
//   const [meal, setMeal] = useState(null);
//   const [filteritem, setfilteritem] = useState({
//     name: '',
//     ingredient: '',
//     Category: ''
//   });

//   const getdata = async () => {
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
//     );
//     const data = await response.json();
//     setMeal(data.meals);
//   };

//   const handleclick = (e) => {
//     const { name, value } = e.target;
//     setfilteritem((preuser) => ({ ...preuser, [name]: value }));
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     let response;
//     if (filteritem.name) {
//       response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filteritem.name}`
//       );
//     } else if (filteritem.ingredient) {
//       response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filteritem.ingredient}`
//       );
//     } else if (filteritem.Category) {
//       response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filteritem.Category}`
//       );
//     }

//     let data = await response.json();
//     setMeal(data.meals);
//     setfilteritem({
//       name: '',
//       ingredient: '',
//       Category: ''
//     });
//   };

//   useEffect(() => {
//     getdata();
//   }, [country]);

//   return (
//     <Router>
//       <div className="w-full max-w-none min-h-screen flex flex-col gap-5 ">
//         {/* Search and Country Selection */}
//         <div className="w-full flex flex-col gap-3 md:flex-row md:gap-8 items-center border-b-4">
//           <form
//             className="w-full flex gap-2 justify-center items-center md:w-2/5 text-center pt-4 md:pt-0"
//             onSubmit={handleSearch}
//           >
//             <input
//               type="text"
//               name="Category"
//               placeholder="Type Category Here .."
//               onChange={handleclick}
//               value={filteritem.Category}
//               className="input input-bordered w-full max-w-xs italic placeholder:italic "
//             />
//             <input
//               type="text"
//               name="ingredient"
//               placeholder="Type Ingredient Here .."
//               onChange={handleclick}
//               value={filteritem.ingredient}
//               className="input input-bordered w-full max-w-xs italic placeholder:italic "
//             />
//             <input
//               type="text"
//               name="name"
//               placeholder="Type name Here .."
//               onChange={handleclick}
//               value={filteritem.name}
//               className="input input-bordered w-full max-w-xs italic placeholder:italic "
//             />
//             <button type="submit" className="btn btn-outline btn-info">
//               <FaSearch className="text-xl" />
//             </button>
//           </form>
//           <div className="w-full md:w-3/5 flex justify-center gap-4 py-3 flex-wrap">
//             {/* Country buttons */}
//             <button
//               className="btn btn-outline btn-error text-lg"
//               onClick={() => setCountry("indian")}
//             >
//               Indian
//             </button>
//             <button
//               className="btn btn-outline btn-success text-lg"
//               onClick={() => setCountry("chinese")}
//             >
//               Chinese
//             </button>
//             <button
//               className="btn btn-outline btn-warning text-lg"
//               onClick={() => setCountry("italian")}
//             >
//               Italian
//             </button>
//             <button
//               className="btn btn-outline btn-info text-lg"
//               onClick={() => setCountry("British")}
//             >
//               British
//             </button>
//             <button
//               className="btn btn-outline btn-secondary text-lg"
//               onClick={() => setCountry("Canadian")}
//             >
//               Canadian
//             </button>
//           </div>
//         </div>

//         {/* Displaying Meal Cards */}
//         <div className={meal ? `w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-2` : `w-full h-52 flex justify-center text-center items-center`}>
//           {meal ? (
//             meal.map((item) => (
//               <Link to={`/meal/:${item.idMeal}`} key={item.idMeal}> {/* Wrap each card in a Link */}
//                 <Card
//                   Name={item.strMeal}
//                   image={item.strMealThumb}
//                 />
//               </Link>
//             ))
//           ) : (
//             <div>Sorry, No Result Found <br /><br /> Try another category</div>
//           )}
//         </div>

//         {/* Meal Details Route */}
//         <Routes>
//           <Route path="/meal/:idMeal" element={<MealDetails />} /> {/* Route for MealDetails */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const MealDetails = () => {
  const {idMeal}=useParams() 
  const [mealDetails, setMealDetails] = useState('');



  const CardDetails = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await response.json();
    setMealDetails(data.meals[0]);
    // console.log(data)

  };
console.log(mealDetails);


  useEffect(() => {
    CardDetails();
  }, []); 

  

  return (
    <div className="bg-black">
    <div className="w-full  max-w-3xl mx-auto ">
      <div className="text-center">
        <div className="p-4">
        <img
          src={mealDetails.strMealThumb}
        
          className="w-96 h-96  m-auto  rounded-2xl border border-white"
        />
        </div>
        <div className="text-lg">
          <p className="text-white"><strong>Id:-</strong> {mealDetails.idMeal}</p>
          <p className="text-white"><strong>Area:-</strong> {mealDetails.strArea}</p>
          <div className=" w-96 text-center text-white m-auto h-auto border rounded-xl border-black">
          <ul>
  {mealDetails.strIngredient1 &&( 
    <li>{mealDetails.strIngredient1} {mealDetails.strMeasure1}</li>
  )}
  {mealDetails.strIngredient2 &&(
    <li>{mealDetails.strIngredient2} {mealDetails.strMeasure2}</li>
  )}
  {mealDetails.strIngredient3 &&(
    <li>{mealDetails.strIngredient3} {mealDetails.strMeasure3}</li>
  )}
  {mealDetails.strIngredient4 &&(
    <li>{mealDetails.strIngredient4} {mealDetails.strMeasure4}</li>
  )}
  {mealDetails.strIngredient5 &&(
    <li>{mealDetails.strIngredient5} {mealDetails.strMeasure5}</li>
  )}
  {mealDetails.strIngredient6 &&(
    <li>{mealDetails.strIngredient6} {mealDetails.strMeasure6}</li>
  )}
  {mealDetails.strIngredient7 &&(
    <li>{mealDetails.strIngredient7} {mealDetails.strMeasure7}</li>
  )}
  {mealDetails.strIngredient8 &&(
    <li>{mealDetails.strIngredient8} {mealDetails.strMeasure8}</li>
  )}
  {mealDetails.strIngredient9 &&(
    <li>{mealDetails.strIngredient9} {mealDetails.strMeasure9}</li>
  )}
  {mealDetails.strIngredient10 &&(
    <li>{mealDetails.strIngredient10} {mealDetails.strMeasure10}</li>
  )}
  {mealDetails.strIngredient11 &&(
    <li>{mealDetails.strIngredient11} {mealDetails.strMeasure11}</li>
  )}
  {mealDetails.strIngredient12 &&(
    <li>{mealDetails.strIngredient12} {mealDetails.strMeasure12}</li>
  )}
  {mealDetails.strIngredient13 &&(
    <li>{mealDetails.strIngredient13} {mealDetails.strMeasure13}</li>
  )}
  {mealDetails.strIngredient14 &&(
    <li>{mealDetails.strIngredient14} {mealDetails.strMeasure14}</li>
  )}
  {mealDetails.strIngredient15 &&(
    <li>{mealDetails.strIngredient15} {mealDetails.strMeasure15}</li>
  )}
  {mealDetails.strIngredient16 &&(
    <li>{mealDetails.strIngredient16} {mealDetails.strMeasure16}</li>
  )}
  {mealDetails.strIngredient17 &&(
    <li>{mealDetails.strIngredient17} {mealDetails.strMeasure17}</li>
  )}
  {mealDetails.strIngredient18 &&(
    <li>{mealDetails.strIngredient18} {mealDetails.strMeasure18}</li>
  )}
  {mealDetails.strIngredient19 &&(
    <li>{mealDetails.strIngredient19} {mealDetails.strMeasure19}</li>
  )}
  {mealDetails.strIngredient20 &&(
    <li>{mealDetails.strIngredient20} {mealDetails.strMeasure20}</li>
  )}
</ul>
  
        </div >
          <p className="text-justify  text-white h-auto rounded-2xl mt-2 border border-black p-3 "><strong>Instructions:-</strong> {mealDetails.strInstructions}</p>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default MealDetails;





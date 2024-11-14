
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "./Card";
import { Link } from "react-router-dom";

const Meal = () => {
  const [country, setCountry] = useState("indian");
  const [meal, setMeal] = useState(null);
  const [filteritem, setfilteritem] = useState({
    name: '',
    ingredient: '',
    Category: ''
  });

  const getdata = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await response.json();
    setMeal(data.meals);
  };

  const handleclick = (e) => {
    const { name, value } = e.target;
    setfilteritem((preuser) => ({ ...preuser, [name]: value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let response;
    if (filteritem.name) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filteritem.name}`
      );
    } else if (filteritem.ingredient) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filteritem.ingredient}`
      );
    } else if (filteritem.Category) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filteritem.Category}`
      );
    }

    let data = await response.json();
    setMeal(data.meals);
    setfilteritem({
      name: '',
      ingredient: '',
      Category: ''
    });
  };

  useEffect(() => {
    getdata();
  }, [country]);

  return (
    <>
      {/* Search Bar and Category Buttons */}
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-8 items-center border-b-4 bg-black">
        <form
          className="w-full flex flex-col sm:flex-row gap-3 justify-center items-center sm:w-2/5 text-center pt-4 sm:pt-0"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            name="Category"
            placeholder="Category"
            onChange={handleclick}
            value={filteritem.Category}
            className="input input-bordered w-full sm:max-w-xs border border-red-100 bg-black text-white italic placeholder:italic"
          />
          {/* <input
            type="text"
            name="ingredient"
            placeholder="Ingredient"
            onChange={handleclick}
            value={filteritem.ingredient}
            className="input input-bordered w-full sm:max-w-xs border-blue-100 bg-black text-white italic placeholder:italic"
          />
          <input
            type="text"
            name="name"
            placeholder="Meal Name"
            onChange={handleclick}
            value={filteritem.name}
            className="input input-bordered w-full sm:max-w-xs border-blue-100 bg-black text-white italic placeholder:italic"
          /> */}
          <button
            type="submit"
            className="btn btn-outline btn-info mt-2 sm:mt-0"
          >
            <FaSearch className="text-xl" />
          </button>
        </form>

        <div className="w-full sm:w-3/5 flex justify-center gap-4 py-3 flex-wrap">
          <button
            className="btn btn-outline btn-error text-lg"
            onClick={() => setCountry("indian")}
          >
            Indian
          </button>
          <button
            className="btn btn-outline btn-success text-lg"
            onClick={() => setCountry("chinese")}
          >
            Chinese
          </button>
          <button
            className="btn btn-outline btn-warning text-lg"
            onClick={() => setCountry("italian")}
          >
            Italian
          </button>
          <button
            className="btn btn-outline btn-info text-lg"
            onClick={() => setCountry("British")}
          >
            British
          </button>
          <button
            className="btn btn-outline btn-secondary text-lg"
            onClick={() => setCountry("Canadian")}
          >
            Canadian
          </button>
        </div>
      </div>

      {/* Meal Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {meal ? (
          meal.map((item) => (
            <Link key={item.idMeal} to={`/meal/${item.idMeal}`}>
              <Card
                Name={item.strMeal}
                image={item.strMealThumb}
              />
            </Link>
          ))
        ) : (
          <p className="text-center text-white">
            Sorry, No Result Found. <br /> Try another category.
          </p>
        )}
      </div>
    </>
  );
};

export default Meal;

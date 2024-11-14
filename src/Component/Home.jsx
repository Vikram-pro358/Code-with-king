

import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LatestMeals from './LatestMeals';

const Home = () => {
  const [meals, setMeals] = useState(null);

  const getdata = async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
    let data = await response.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    getdata(); // Fetch data once on component mount
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-black min-h-screen'> 
      <h1 className='text-center text-3xl text-white pt-2 ml-2'>-: Popular Meals :-</h1>
      <hr className='w-72 m-auto mt-1' />
      <Slider {...settings} className='h-96 w-11/12 md:w-3/4 lg:w-2/3 m-auto py-3 px-5'>
        {meals && meals.map((meal) => (
          <div key={meal.idMeal} className='w-full rounded-2xl px-1 overflow-hidden'>
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
              className='object-cover h-full w-full rounded-xl' 
            />
          </div>
        ))}
      </Slider>
      <LatestMeals />
      
    </div>
  );
}

export default Home;
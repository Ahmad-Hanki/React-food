import React, { useEffect, useState, useCallback } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  const fetchmeals = useCallback(async () => {
    const response = await fetch('http://localhost:3000/meals');    
    if (!response.ok) {
      //...
    }
    const meals = await response.json();
    setLoadedMeals(meals);
  }, []);

  useEffect(() => {
    fetchmeals();
  }, [fetchmeals]);

  return (
    <ul id="meals">
      {loadedMeals.map((item) => 
        {
            // if(item.id === 'm1') {
                return  <MealItem key={item.id} meal={item}/>
            // }
    }
      )}
    </ul>
  );
}

export default Meals;

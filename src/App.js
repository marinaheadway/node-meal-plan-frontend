
import './App.css';
import {MyMeals} from './MyMeals';
import {useEffect, useState } from 'react';
import { getAllMeals, addMeal } from './FetchMeals';


function App() {

  const [myMeal, setMeal]= useState ([]);
  const [title, setTitle] = useState("")

  useEffect (() => {
    getAllMeals(setMeal)
  }, [])

  return (
    <div>
      <h1>Meal Plan</h1>
      <input 
      type="text"
      placeholder="Add a meal"
      value = {title}
      onChange={(e)=> setTitle (console.log(e.target.value))}
      />
      <button onClick = {()=> addMeal(title, setTitle, setMeal)}>ADD </button>

      {myMeal.map((meal)=> <MyMeals text = {meal.title} key = {meal._id}/>)}


 
      <p></p>
         </div>
  );
}

export default App;

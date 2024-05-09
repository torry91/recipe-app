import { useEffect, useState} from "react";
import './App.css';
import video from "./food.mp4";
import Component from './component';

function App () {

  const MY_ID = "8a1417a7";
  const MY_KEY = "905dd036e3ac889035846840a0c09e1f";

  const [mySearch,setMySearch] = useState("");
  const [mySearch2,setMySearch2] = useState([]);
  const[wordSubmit,setWordSubmit]= useState("avocado");
  
  useEffect (() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMySearch2(data.hits);
    }
    getRecipe()

    
  },[wordSubmit])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalWord = (e) => {
    e.preventDefault()
    setWordSubmit(mySearch)
    }

  return (
  <div className="App">
    <div className="container">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
        </div>

    <div className='container'>
      <form onSubmit={finalWord}>
        <input className="search" onChange = {myRecipeSearch} value={mySearch}></input>
        </form>
        </div>
            
        <div className='container'>
        <button  onClick={finalWord}>
    <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
  </button>
  </div>

{mySearch2.map((element,index )=> (
  <Component key={index}
  label = {element.recipe.label} 
  image={element.recipe.image} 
  calories = {element.recipe.calories} 
  condiments={element.recipe.ingredientLines}
  mealType={element.recipe.mealType}/>
))}
        </div>
        );
      }

export default App;
import React,{useState,useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const[recipes,setRecipes] = useState([])
  const[search,setSearch] = useState("")
  const[submit,setSubmit] = useState("chicken")

  const App_Id = "730ebe47"
  const App_key = "7d0d498a594ab9d96a1f4e6e00a1e4c6"

  useEffect(() => {
    getApi()
  },[submit]);

  const inputChanger = e => {
    setSearch(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    setSubmit(search)
    setSearch("")
  }

  const getApi = async () => {
    const recipeApp = await fetch(`https://api.edamam.com/search?q=${submit}&app_id=${App_Id}&app_key=${App_key}`)
    const data = await recipeApp.json();
    setRecipes(data.hits)
    console.log(data.hits)
    }

  return (
    <div className="App">
     <form className="form-action" onSubmit={submitHandler}>
       <input className="input-action" type="text" value={search} onChange={inputChanger}/>
       <button className="button-action" type="submit">Search</button>
     </form>
     <div className="list">
     {recipes.map((recipe) => (
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label} 
       calories = {recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients = {recipe.recipe.ingredients} />
    ))}
    </div>
    </div>
  );
}

export default App;

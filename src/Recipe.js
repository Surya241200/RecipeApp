import React from "react";
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className="heading">{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li className="list-action">{ingredient.text}</li>
                ))}
            </ol>
            <p><span>Calories : </span>{calories}</p>
            <img src={image} alt="" />
        </div>
    )
}
export default Recipe;
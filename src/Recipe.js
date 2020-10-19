import React from 'react';
import style from './recipe.module.css';
const recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ul>
				{ingredients.map((ingredient) => (
					<li className="ol">{ingredient.text}</li>
				))}
			</ul>
			<p className="calories">{calories} cal</p>
			<img src={image} alt="" />
		</div>
	);
};
export default recipe;

import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { Button } from '@material-ui/core';
import Image from './first.png';

import './App.css';

const App = () => {
	const APP_Id = '8fa1e871';
	const APP_key = '2f524aa2cebb7f7305fb112a05579c56	';
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${APP_key}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};
	const upDateSearch = e => {
		setSearch(e.target.value);
		console.log(search);
	};
	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};
	return (
		<div className="App">
			<img className="photo" src={Image} alt="hello there"></img>
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={upDateSearch}
				></input>
				<Button variant="outlined" color="secondary">
					search
				</Button>
			</form>
			<div className="recipe">
				{recipes.map(recipe => (
					<Recipe
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
			<div>
				<footer className="footer"> made with ❤ by  EMON </footer>
			</div>
		</div>
	);
};

export default App;

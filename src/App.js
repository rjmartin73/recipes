import React, { Component } from 'react';
import './App.css';

// components
// api key: e45ae5d3784bf0a04da28ddaa0f17e3b
import Form from './components/Form';
import Recipes from './components/Recipes';
const API_KEY = 'e45ae5d3784bf0a04da28ddaa0f17e3b';

class App extends Component {
	state = {
		recipes: []
	};
	getRecipe = async (e) => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();

		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);

		const data = await api_call.json();
		this.setState({ recipes: data.recipes });
	};
	componentDidMount = () => {
		const json = localStorage.getItem("recipes");
		const recipes = JSON.parse(json);
		this.setState({recipes})
	}
	componentDidUpdate() {
		const recipes = JSON.stringify(this.state.recipes)
		localStorage.setItem("recipes", recipes)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Recipe Search</h1>
				</header>
				<Form getRecipe={this.getRecipe} />
				<Recipes recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
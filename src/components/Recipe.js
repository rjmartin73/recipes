import React from 'react';

const API_KEY = 'e45ae5d3784bf0a04da28ddaa0f17e3b';

class Recipe extends React.Component {
	state = {
		activeRecipe: []
	};

	componentDidMount = async () => {
		const title = this.props.location.state.recipe.title;

		const req = await fetch(`https://www.food2fork.com/api/get?key=${API_KEY}&rId=${this.props.match.params.id}`);

		const res = await req.json();
		this.setState({ activeRecipe: res.recipe });
		console.log(this.state);
	};

	render() {
		// console.log(this.state.publisher);
		return <div>{this.state.activeRecipe.title}</div>;
	}
}
export default Recipe;

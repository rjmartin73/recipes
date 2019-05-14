import React from 'react';
import {Link} from 'react-router-dom';

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

		const recipe = this.state.activeRecipe;

		return (
			<div className="container">
				{this.state.activeRecipe.length !== 0 &&
					<div className="active-recipe">
						<img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
						<h3 className="active-recipe__title">{recipe.title}</h3>
						<h4 className="active-recipe__publisher">
							Publisher: <span>{recipe.publisher}</span></h4>
						<p className="active-recipe__website">
							Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
						<button className="active-recipe__button">
						<Link to="/">Return to Search</Link>
						</button>
					</div>}
			</div>)
	}
}
export default Recipe;

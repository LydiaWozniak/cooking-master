import React, { Component } from 'react';
import styled from 'styled-components';
import RecipePreview from '../molecules/RecipePreview.js'; 
import FullRecipe from '../molecules/FullRecipe.js'; 
import recipes from '../../assets/recipes.json'; 

const Container = styled.article`
	background: #FFFFFF; 
	border: 2px solid #635155;
	border-radius: 5px; 
	width: 100%; 
`;

export default class Newsfeed extends Component {

	// function findMatches(wordToMatch, recipes) {
	// 	return recipes.filter(place => {
	// 		//figure out if name or ingredients matches input
	// 		const regex = new RegExp(wordToMatch, 'gi'); //g searches globally, i means insensitive
	// 		return recipe.name.match(regex) || recipe.ingredients.match(regex);
	// 	});
	// }

	// recipes = findMatches(this.value, recipes);//inside sumbit button of search box?

	state = {
		openedRecipe: null 
	}

		handleExpandClick = (key) => {
			this.setState({openedRecipe: key});
		}

		handleCollapseClick = (key) => {
			this.setState({openedRecipe: null});
		}
		
		render() {
			const display = (
				<div>
					<Container>
						{Object.entries(recipes).map(([key, recipe]) => (
							key === this.state.openedRecipe ? (
								<FullRecipe
									onClick={() => this.handleCollapseClick(key)}
									key={key}
									name={recipe.name} 
									cookingTime={recipe.cookingTime}
									ingredients={recipe.ingredients} 
									image={recipe.image}
								/>
							) : (
								<RecipePreview
								 	onClick={() => this.handleExpandClick(key)}
									key={key}
									name={recipe.name} 
									image={recipe.image}
								/>
							) 
						))} 
					</Container>   
				</div>
			 )
			return (
			<div>
				{display}
			</div>
			)
		}
}

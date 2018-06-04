import React, { Component } from 'react';
import styled from 'styled-components';
import RecipePreview from '../molecules/RecipePreview.js'; 
import FullRecipe from '../molecules/FullRecipe.js'; 
import recipes from '../../assets/recipes.json'; 

const Container = styled.div`
	background: #FFFFFF; 
	border: 2px solid #635155;
	border-radius: 5px; 
	width: 100%; 
`;

export default class Newsfeed extends Component {
	state = {
		openedRecipe: null 
	}

		handleExpandClick = (key) => {
			console.log(this)
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
									mainIngredients={recipe.mainIngredients} 
									cookingTime={recipe.cookingTime}
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

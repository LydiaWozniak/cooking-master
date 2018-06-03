import React, { Component } from 'react';
import styled from 'styled-components';
import RecipePreview from '../molecules/RecipePreview.js'; 
import recipes from '../../assets/recipes.json'; 


const Container = styled.div`
	background: #FFFFFF; 
	border: 2px solid #635155;
	border-radius: 5px; 
	width: 100%; 
`;

export default class Newsfeed extends Component {
	render() {
		return (
			<div>
				<Container>
					{Object.entries(recipes).map(([key, recipe]) => (
						<RecipePreview
							key={key}
							name={recipe.name} 
							mainIngredients={recipe.mainIngredients} 
							cookingTime={recipe.cookingTime}
							image={recipe.image}
						/>
					))}
				</Container>    
			</div>
		)
	}
}

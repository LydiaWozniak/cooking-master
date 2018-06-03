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
	constructor(props){
		super(props);
			this.handleExpandClick = this.handleExpandClick.bind(this);
			this.handleCollapseClick = this.handleCollapseClick.bind(this);
			this.state = {isOpen: false};
		}

		handleExpandClick() {
			console.log(this)
			this.setState({isOpen: true});
		}

		handleCollapseClick() {
			this.setState({isOpen: false});
		}
		
		render() {
			const isOpen = this.state.isOpen;
			const display = !isOpen ? (
				<div>
					<Container onClick={this.handleExpandClick.bind(this)}>
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
			 ) : (
					<div>
					<Container onClick={this.handleCollapseClick.bind(this)}>
						{Object.entries(recipes).map(([key, recipe]) => (
							<FullRecipe
								key={key}
								name={recipe.name} 
								cookingTime={recipe.cookingTime}
								ingredients={recipe.ingredients} 
								image={recipe.image}
							/>
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

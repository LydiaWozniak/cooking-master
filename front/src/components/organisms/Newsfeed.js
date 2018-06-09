import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

	static propTypes = {
		filter: PropTypes.oneOf(['all', 'starred']),
		search: PropTypes.string
	}

	static defaultProps = {
		filter: 'all',
		search: ''
	}

	state = {
		openedRecipe: null, 
	}

	getFilteredRecipes = () => recipes
		.filter(recipe => this.props.filter === 'all' || recipe.star)
		.filter(recipe => this.props.search === '' || this.props.search.toLowerCase() === recipe.name.toLowerCase())

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
					{Object.entries(this.getFilteredRecipes()).map(([key, recipe]) => (
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RecipePreview from '../molecules/RecipePreview.js'; 
import FullRecipe from '../molecules/FullRecipe.js'; 
import recipes from '../../assets/recipes.json'; 

const Container = styled.article`
	display: flex;
	flex-direction: row; 
	flex-wrap: wrap; 
	background: #FFFFFF; 
	/* border: 2px solid #635155;
	border-radius: 5px;  */
	width: 100%; 
`; 

export default class Newsfeed extends Component {

	static propTypes = {
		filter: PropTypes.oneOf(['all', 'starred']),
		search: PropTypes.string
	}

	static defaultProps = {
		filter: 'all',
		search: '',
	}

	state = {
		openedRecipe: null, 
		starred: [], 
	}
	//lifecycle methods
	componentWillReceiveProps(nextProps) {
		this.handleCollapseClick(this.state.openedRecipe);
	}

	getFilteredRecipes = () => recipes
		.filter(recipe =>
			this.props.filter === 'all' ||
			this.state.starred.some(item => item === recipe)
		)
		.filter(recipe =>
			this.props.search === '' || 
			recipe.name.match(new RegExp(this.props.search, 'gi')) ||
			recipe.mainIngredients.some(ingredient => ingredient.match(new RegExp(this.props.search, 'gi'))) ||
			recipe.ingredients.some(({name}) => name.match(new RegExp(this.props.search, 'gi')))
		);

	starred = recipe => this.state.starred.some(item => item === recipe);

	handleExpandClick = (key) => {
		this.setState({openedRecipe: key});
	}

	handleCollapseClick = (key) => {
		this.setState({openedRecipe: null});
	}

	toggleStarred = (key) => {
		(this.state.starred.find(item => item === key) ? 
		(this.setState({starred: this.state.starred.filter(i => i !== key)})):
		(this.setState({starred: this.state.starred.concat([key])})));
    ; 
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
								starOnChange={() => this.toggleStarred(recipe)}
								starred={this.starred(recipe)}
							/>
						) : (
							<RecipePreview
								onClick={() => this.handleExpandClick(key)}
								key={key}
								name={recipe.name} 
								image={recipe.image}
								starOnChange={() => this.toggleStarred(recipe)}
								starred={this.starred(recipe)}
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

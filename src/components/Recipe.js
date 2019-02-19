import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import RecipeSEO from '../components/RecipeSEO';
import './Recipe.css';
import Img from 'gatsby-image';

class Recipe extends React.Component {


    getRecipeSection = (recipe, image) => {
        console.log(recipe);
        let recipeHtml = [];
        recipe.forEach(rec => {
            recipeHtml.push(<RecipeSection recipe={rec} image={image} />);
        })
        console.log(recipeHtml);
        return recipeHtml;
    }

  render() {
    const {name, recipe, image} = this.props;
    const recipeSections = this.getRecipeSection(recipe, image);
    

    return (
        <div className="recipe">
            <RecipeSEO data={recipe[0]} {...this.props} />
            <h3 className="recipe__title">{name}</h3>
            {recipeSections}
        </div>
    );
  }
}


class RecipeSection extends React.Component {
    render() {
        const {recipe, image} = this.props;
        const ingredientHTML = recipe.ingredients.map((ing, key) => {
            return <RecipeIngredients key={key} ingredientData={ing} />
        });
        console.log(image);

        const directionsHTML = recipe.instructions.map((ins, key) => {
            return <div className="recipe__instruction recipe__paragraph" index={key} key={key} >{ins}</div>
        });

        const assemblyHTML = (recipe.assembly) ? recipe.assembly.map((ass, key) => {
            return <div className="recipe__assembly recipe__paragraph" index={key} key={key} >{ass}</div>
        }) : [];

        return (
            <div className="recipe__section">
                {(recipe.subTitle) ? <h3 className="recipe__sub-title">{recipe.subTitle}</h3> : null }
                <div className="recipe__time">
                    <Img fluid={image} />
                    <em className="recipe__yield">{recipe.yield}</em>
                    <div className="recipe__prep-time">{`Prep: ${recipe.prepTime} minutes`}</div>
                    <div className="recipe__cook-time">{`Cook: ${recipe.cookTime} minutes`}</div>
                    <div className="recipe__total-time">{`Total: ${recipe.totalTime} minutes`}</div>
                </div>

                <div className="recipe__ingredients-container">
                    <div className="recipe__ingredients-title recipe__section-title">Ingredients</div>
                    {ingredientHTML}
                </div>

                <div className="recipe__instructions-container">
                    <div className="recipe__instructions-title recipe__section-title">Directions</div>
                    {directionsHTML}
                </div>

                {(assemblyHTML.length > 0) ? 
                    <div className="recipe__assembly-container">
                        <div className="recipe__assembly-title recipe__section-title">Assembly</div>
                        {assemblyHTML}
                    </div> 
                    : null
                }

            </div>
        )
    }
}

class RecipeIngredients extends React.Component {
    static propTypes = {
        ingredientData: PropTypes.array
    }
    static defaultProps = {
        ingredientData: []
    }

    render() {
        const {ingredientData} = this.props;
        const ingHtml = ingredientData.data.map((ing) => {
            return <li className="ingredient-section__ingredient-item" data-name={ing} >{ing}</li>
        });

        return (
            <div className="ingredient-section">
                <div className="ingredient-section__title">{ingredientData.title}</div>
                <div className="ingredient-section__ingredients">
                    {ingHtml}
                </div>
            </div>
        )
    }
}




export default Recipe;

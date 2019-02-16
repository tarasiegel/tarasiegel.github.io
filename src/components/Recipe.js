import React from 'react'
import { Link, graphql } from 'gatsby';
import RecipeSEO from '../components/RecipeSEO';
import './Recipe.css';

class Recipe extends React.Component {


    getRecipeSection = (recipe) => {
        console.log(recipe);
        let recipeHtml = [];
        recipe.forEach(rec => {
            recipeHtml.push(<RecipeSection recipe={rec} />);
        })
        return recipeHtml;
    }

  render() {
    const recipeSections = this.getRecipeSection(this.props.recipe);
    const {name, keywords, date, recipe} = this.props;

    return (
        <div className="recipe">
            <RecipeSEO data={recipe[0]} {...this.props} />
            {recipeSections}
        </div>
    );
  }
}


class RecipeSection extends React.Component {
    render() {
        const {recipe} = this.props;
        return (
            <div className="recipe__section">
                {(recipe.subTitle) ? <h3 className="recipe__title">{recipe.subTitle}</h3> : null }
                <em className="recipe__yield">{recipe.yield}</em>
            </div>
        )
    }
}

export default Recipe;

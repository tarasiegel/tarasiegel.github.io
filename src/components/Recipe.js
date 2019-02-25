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
        recipe.forEach((rec, sec) => {
            recipeHtml.push(<RecipeSection recipe={rec} image={image} sectionKey={sec} key={sec} />);
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
    getTime = (time) => {
        let hours = Math.floor( time / 60);
        let minutes = time % 60;
        let timeString = '';

        if (hours > 0) {
            timeString += `${hours} hour${(hours > 1) ? 's' : ''} & `;
        }

        timeString += `${minutes} minutes`;

        return timeString;
    }

    getRefData = (ingredients) => {
        let refData = [];
        ingredients.forEach((ingSection, sectionKey) => {
            const refSectionData = ingSection.data.map((ings) => {
                return (ings.reference) ? ings.reference : false;
            });

            refData.push(refSectionData);
        });
        return refData;
    }

    updateInstruction = (instruction, refData, recipeSectionKey) => {
        let updatedInstruction = instruction;
        refData.forEach((sec, secKey) => {
            sec.forEach((ref, refKey) => {
                if (updatedInstruction.indexOf(ref) !== -1) {
                    updatedInstruction = updatedInstruction.replace(ref, `<span id="ref-${recipeSectionKey}-${secKey}-${refKey}" >${ref}</span>`);
                }
            });
        });
        return updatedInstruction;
    }


    render() {
        const {recipe, image, sectionKey} = this.props;
        const refData = this.getRefData(recipe.ingredients);
        console.log(refData);
        const ingredientHTML = recipe.ingredients.map((ing, key) => {
            return <RecipeIngredients key={key} ingredientData={ing} sectionKey={sectionKey} ingredientKey={key} />
        });

        const directionsHTML = recipe.instructions.map((ins, key) => {
            return <div className="recipe__instruction recipe__paragraph" index={key} key={key} dangerouslySetInnerHTML={{ __html: this.updateInstruction(ins, refData, sectionKey)}} />
        });

        const assemblyHTML = (recipe.assembly) ? recipe.assembly.map((ass, key) => {
            return <div className="recipe__assembly recipe__paragraph" index={key} key={key} dangerouslySetInnerHTML={{ __html: ass}} />
        }) : [];

        return (
            <div className={`recipe__section recipe__section--${sectionKey}`}>
                {(recipe.subTitle) ? <h3 className="recipe__sub-title">{recipe.subTitle}</h3> : null }
                <div className="recipe__time">
                    <div className="recipe__time-image"><Img fluid={image} /></div>
                    <em className="recipe__yield">{recipe.yield}</em>
                    <div className="recipe__prep-time">{`Prep: ${this.getTime(recipe.prepTime)}`}</div>
                    <div className="recipe__cook-time">{`Cook: ${this.getTime(recipe.cookTime)}`}</div>
                    <div className="recipe__total-time">{`Total: ${this.getTime(recipe.totalTime)}`}</div>
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

    inputClicked = (e) => {
        let inputDiv = e.target,
            ingredient = inputDiv.dataset.ingredient,
            refDiv = document.getElementById(`ref-${ingredient}`);
        console.log(`ref-${ingredient}`);
        console.log(refDiv);
        if (refDiv !== null) {
            const decoration = (inputDiv.checked) ? 'line-through' : 'none';
            console.log(decoration);
            refDiv.setAttribute('style', `text-decoration: ${decoration};`);
        }

    }

    render() {
        const {ingredientData, sectionKey, ingredientKey} = this.props;
        const ingHtml = ingredientData.data.map((ing, key) => {
            const ingredientText = (typeof ing === 'object') ? ing.text : ing;
            return (
                <li className={`ingredient-section__ingredient-item ingredient--${sectionKey}-${ingredientKey}-${key}`} data-name={((ing.reference) ? ing.reference : ing)}>
                    <input className="ingredient-section__ingredient-item-input" type="checkbox" id={`cbx-${sectionKey}-${ingredientKey}-${key}`} data-ingredient={`${sectionKey}-${ingredientKey}-${key}`} onClick={this.inputClicked} />
                    <label htmlFor={`cbx-${sectionKey}-${ingredientKey}-${key}`} className="check">
                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C14,1 15,2 15,3.5 L15,14.5 C15,14 14,15 14.5,15 L3.5,15 C2,15 1,14 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                    <div dangerouslySetInnerHTML={{ __html: ingredientText}} />
                </li>)
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

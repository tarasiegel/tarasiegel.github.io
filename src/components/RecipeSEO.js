import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function RecipeSEO({ data, name, keywords, date, description }) {

    const getInstructions = (instructions) => {
      let allInstructions = [];
      instructions.forEach((inst) => {
        allInstructions.push([`{
            "@type": "HowToStep",
            "text": "${inst}"
        }`]);
      });
      return allInstructions;
   };

   const getIngredients = (ingredients) => {
        let allIngredients = [];
        ingredients.forEach((ing) => {
            allIngredients = allIngredients.concat(ing.data);
        });
        console.log(allIngredients);
        allIngredients = allIngredients.map((ing) => {
            return `"${ing}"`;
        })
        return allIngredients;
    };

    // "image": [
    //     ${data.image}
    // ],

    return (
        <StaticQuery
        query={detailsQuery}
        render={d => {
            return (
            <Helmet>
                <script type="application/ld+json">{`{
                    "@context": "https://schema.org/",
                    "@type": "Recipe",
                    "name": "${name}",
                    "author": {
                        "@type": "Person",
                        "name": "Tara Siegel"
                    },
                    "datePublished": "${date}",
                    "description": "${description}",
                    "prepTime": "${data.prepTime}",
                    "cookTime": "${data.cookTime}",
                    "totalTime": "${data.totalTime}",
                    "keywords": "${keywords}",
                    "recipeYield": "${data.yield}",
                    "recipeCategory": "Dessert",
                    "recipeCuisine": "Dessert",
                    "recipeIngredient": [${getIngredients(data.ingredients)}],
                    "recipeInstructions": [${getInstructions(data.instructions)}]
                }`}</script>
            </Helmet>
        )} }
    />)};

RecipeSEO.defaultProps = {
  data: {
    name: 'Cookies',
    image: '',
    datePublished: '',
    description: '',
    keywords: '',
    yield: '',
    ingredients: [],
    instructions: [],
  }
};

RecipeSEO.propTypes = {
  data: PropTypes.object,
};

export default RecipeSEO;

const detailsQuery = graphql`
  query RecipeSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import './recipes.css';

class Recipes extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Recipes" />
        
        <div className="recipes__container">
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                <div className="recipe" key={node.fields.slug}>
                    <div className="recipe__category" >{node.frontmatter.tags[0]}</div>                    
                     <div className="recipe__title">
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            {title}
                        </Link>
                    </div>
                    
                </div>
                )
            })}
        </div>
        
      </Layout>
    )
  }
}

export default Recipes;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
      filter: { fileAbsolutePath: { regex: "//blog//" } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
            tags
            image {
              childImageSharp {
                resize(width: 650, height: 650) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
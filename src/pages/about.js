import React from 'react';
import { graphql } from 'gatsby';

import { Icon } from 'react-icons-kit';
import {github} from 'react-icons-kit/fa/github';
import {instagram} from 'react-icons-kit/fa/instagram';
import {facebook} from 'react-icons-kit/fa/facebook';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare';
import {pinterest} from 'react-icons-kit/fa/pinterest';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import './about.css';

class About extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const pages = data.aboutData.edges;
    console.log(data);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        
        {pages.map(({ node }) => {
          return (
            <div className="about-container" key={node.fields.slug}>
              <div className="about-container__image">
                <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                <div className="about-container__icons-container">
                  <div className="about-container__icons">
                    <a className="about-container__icon" href="https://github.com/tarasiegel/fullstackkitchen"><Icon icon={github} size={30} /></a>
                    <a className="about-container__icon" href="https://www.instagram.com/taras.kitchen"><Icon icon={instagram} size={30} /></a>
                    <a className="about-container__icon" href="https://www.facebook.com/tarasiegelskitchen/"><Icon icon={facebookSquare} size={30} /></a>
                    <a className="about-container__icon" href="https://www.pinterest.com"><Icon icon={pinterest} size={30} /></a>                  
                  </div>
                </div>
              </div>
              <div className="about-container__text-container">
                <div className="blog-html" dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            </div>
          );
      })}
      </Layout>
    )
  }
}

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    aboutData: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, 
      filter: { fileAbsolutePath: { regex: "//pages//" } }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
            
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
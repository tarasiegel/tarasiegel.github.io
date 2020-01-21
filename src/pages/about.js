import React from 'react';
import { graphql } from 'gatsby';

import { Icon } from 'react-icons-kit';
// import {github} from 'react-icons-kit/fa/github';
import { instagram } from 'react-icons-kit/fa/instagram';
import { envelope } from 'react-icons-kit/fa/envelope';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import { pinterest } from 'react-icons-kit/fa/pinterest';
import InstagramPosts from '../components/InstagramPosts';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import './about.css';

class About extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const pages = data.aboutData.edges;

        return (
        <Layout location={this.props.location} title={siteTitle}> 
            {pages.map(({ node }) => {
                return (
                    <div className="about-container" key={node.fields.slug}>
                        <SEO 
                            title="About"
                            image={node.frontmatter.image.childImageSharp.fluid}
                        />
                        <div className="about-container__image">
                            <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                            <div className="about-container__icons-container">
                            <div className="about-container__icons">
                                <a className="about-container__icon" href="https://www.instagram.com/taras.kitchen" target="_blank"><Icon icon={instagram} size={30} /></a>
                                <a className="about-container__icon" href="https://www.facebook.com/tarasiegelskitchen/" target="_blank"><Icon icon={facebookSquare} size={30} /></a>
                                <a className="about-container__icon" href="https://www.pinterest.com/0nfiiuo5uh7y1wqmo900o9c6p2ic40/" target="_blank"><Icon icon={pinterest} size={30} /></a> 
                                <a className="about-container__icon" href="mailto:tarafsiegel@gmail.com" target="_blank"><Icon size={25} icon={envelope}/></a>                 
                            </div>
                            </div>
                            <div className="about-container__instagram desktop"><InstagramPosts /></div>
                        </div>
                        <div className="about-container__text-container">
                            <div className="blog-html" dangerouslySetInnerHTML={{ __html: node.html }} />
                        </div>
                        <div className="about-container__instagram mobile"><InstagramPosts /></div>
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
import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import Img from 'gatsby-image';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    console.log(posts);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Full Stack Kitchen"
          keywords={[`baking`]}
        />
        <div className="home-item__container">
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                <div className="home-item" key={node.fields.slug}>
                    <div className="home-item__image">
                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                            <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
                        </Link>
                    </div>
                    <div className="home-item__date" >{node.frontmatter.date}</div>
                    <div className="home-item__title">
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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

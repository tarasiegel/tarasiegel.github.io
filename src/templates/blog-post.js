import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo';
import Recipe from '../components/Recipe';
import { rhythm, scale } from '../utils/typography';
import './blog-post.css';

class BlogPostTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipeData: []
    };
  }

  componentDidMount() {
    const { slug } = this.props.pageContext;
    this.getRecipeData(slug).then((results) => {
      this.setState({
        recipeData: results.default
      });
    });
  }


  async getRecipeData(slug) {
    return import(`../../content/blog${slug}recipe.js`);
  }

  render() {
    console.log(this.props);
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        
        <div className="blog-post--left">
            <h1 className="blog-post__title">{post.frontmatter.title}</h1>
            <p className="blog-post__date" >
                {post.frontmatter.date}
            </p>
            <div className="blog-html" dangerouslySetInnerHTML={{ __html: post.html }} />
            
            {(this.state.recipeData) ? 
              <div className="recipe-container">
                <h3 className="recipe__title">{post.frontmatter.title}</h3>
                <Recipe 
                  recipe={this.state.recipeData}
                  name={post.frontmatter.title}
                  keywords={post.frontmatter.tags}
                  date={post.frontmatter.date}
                  description={post.frontmatter.description} />
              </div>
              : null
            }
            <hr
                style={{
                marginBottom: rhythm(1),
                }}
            />

            <ul className="blog-post__navigation">
                <li>
                {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                    </Link>
                )}
                </li>
                <li>
                {next && (
                    <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                    </Link>
                )}
                </li>
            </ul>
        </div>
        <div className="blog-post--right">
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

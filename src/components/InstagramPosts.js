import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby';
import { rhythm, scale } from '../utils/typography';

export default() => (
    <StaticQuery
        query={graphql`
        query InstagramPosts {
            allInstaNode {
                edges {
                    node {
                        id
                        likes
                        comments
                        mediaType
                        preview
                        original
                        timestamp
                        caption
                        localFile {
                            childImageSharp {
                                fixed(width: 150, height: 150) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                        # Only available with the public api scraper
                        thumbnails {
                            src
                            config_width
                            config_height
                        }
                        dimensions {
                            height
                            width
                        }
                    }
                }
            }
        }
    `}
        render={data => {
            console.log(edges);
            const edges = data.allInstaNode.edges;
           return (
               <div className="blog-post__instagram">
                    {edges.map(post => {
                        console.log(post);
                        return <a className="instagram-post__item" href={`https://www.instagram.com/p/${post.node.id}/`}><img src={post.node.thumbnails[1].src} /></a>
                    })}
                </div>
            )
        }}
    />
);

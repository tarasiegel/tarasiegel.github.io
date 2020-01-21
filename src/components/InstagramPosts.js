import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby';

export default() => (
    <StaticQuery
        query={
            graphql`
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
        render={
            data => {
                const edges = data.allInstaNode.edges;
                return (
                    <div className="blog-post__instagram">
                        {edges.map((post, key) => <a className="instagram-post__item" href={`https://www.instagram.com/p/${post.node.id}/`} target="_blank" key={key}><img src={post.node.thumbnails[1].src} /></a>)}
                    </div>
                )
            }
        }
    />
);

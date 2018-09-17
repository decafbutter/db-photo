import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import ImageList from '../layouts/ImageList/ImageList'

const IndexPage = props => {
  const imageEdges = props.data.allMarkdownRemark.edges;
  return (

    <div>
    <ImageList imageEdges={imageEdges} />
    </div>
  );
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            file {
              childImageSharp {
                sizes(maxWidth: 1500) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

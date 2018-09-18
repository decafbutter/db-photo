import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const About = () => (

  <article className="sheet">
    <div className="sheet__inner">
      <h1 className="sheet__title">About</h1>
{/*
      <p className="sheet__lead">About Subtitle</p>
*/}
      <div className="sheet__gallery">
      </div>
      <div className="sheet__body">
        I take photos of Los Angeles and beyond. Feel free to send me a message to get in touch.

        <br />
        <br />
        Email: sj.lukehong@gmail.com
        <br />
        Instagram: <Link to="https://www.instagram.com/decafbutter">@decafbutter</Link>
      </div>
    </div>
  </article>
  );

export default About

export const query = graphql`
  query AboutQuery {
    file(relativePath: { eq: "downtown.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }

`

import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const About = () => (
  <article className="sheet">
    <div className="sheet__inner">
      <h1 className="sheet__title">About Title</h1>
      <p className="sheet__lead">About Subtitle</p>
      <div className="sheet__gallery">
        {/*}<Img sizes={about.photo.sizes} />*/}
      </div>
      <div className="sheet__body" />
    </div>
  </article>
)

export default About

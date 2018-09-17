import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FaInstagram, FaPinterest, FaBehance } from 'react-icons/lib/fa';
import NavMobile from './navmobile';
import '../styles/index.sass'

const TemplateWrapper = ({ children, data }) => (
  <div className="container">
    <div className="container__sidebar">
      <div className="sidebar">
        <h6 className="sidebar__title">
          <Link to="/">SJ Hong</Link>
        </h6>
        <div className="sidebar__intro" />
        <ul className="sidebar__menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <p className="sidebar__social">
          <a href="https://www.instagram.com/decafbutter" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.pinterest.com/decafbutter" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
          </a>
        </p>
      </div>
    </div>
    <div className="container__body">
      <NavMobile />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

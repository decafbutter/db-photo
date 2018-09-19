import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FaInstagram, FaPinterest, FaBehance } from 'react-icons/lib/fa';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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
            <Link exact to="/" activeClassName="is-active">Work</Link>
          </li>
          <li>
            <Link exact to="/about" activeClassName="is-active">About</Link>
          </li>
        </ul>
        <p className="sidebar__social">
          <OutboundLink href="https://www.instagram.com/decafbutter" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </OutboundLink>
          <OutboundLink href="https://www.pinterest.com/decafbutter" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
          </OutboundLink>
          <OutboundLink href="https://www.behance.net/sjlukehongb916" target="_blank" rel="noopener noreferrer">
            <FaBehance />
          </OutboundLink>
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

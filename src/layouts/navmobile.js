import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FaInstagram, FaPinterest, FaBehance } from 'react-icons/lib/fa';
import { slide as Menu } from 'react-burger-menu';

export default class NavMobile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  render() {
    return (

  <div className="container__mobile-header">
    <div className="mobile-header">
      {/*
      <div className="mobile-header__menu">
        <Link to="#" />
      </div>

      <button className="hamburger hamburger-collapse" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      */}
      <div className="mobile-header__logo">
        <Link to="/">SJ Hong</Link>
      </div>

      <div className="mobile-header__menu">
        <Menu right isOpen={this.state.menuOpen} onStateChange={this.handleStateChange}
            customBurgerIcon={<img src="https://cdn.rawgit.com/encharm/Font-Awesome-SVG-PNG/master/black/svg/bars.svg" />}>

          <Link to="/" onClick={() => this.closeMenu()}>
            Work
          </Link>
          <Link to="/about" onClick={() => this.closeMenu()}>
            About
          </Link>

          <p>
          <a href="https://www.instagram.com/decafbutter" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.pinterest.com/decafbutter" target="_blank" rel="noopener noreferrer">
            <FaPinterest />
          </a>
          <a href="https://www.behance.net/sjlukehongb916" target="_blank" rel="noopener noreferrer">
            <FaBehance />
          </a>
          </p>
        </Menu>
      </div>


    </div>
  </div>

  )
  }
}

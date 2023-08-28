import PropTypes from 'prop-types'
import React from 'react'
import logoImage from '../images/logo.png';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logoImage} alt="Logo" style={{ width: '85px', height: '85px', borderRadius: '50%' }} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>WHAT I DO!</h1>
        <p>
          "Empower Your Digital Presence with Comprehensive Solutions
          <br />
          Elegance in Design, Scalable Backend Systems, and Custom Software Craftsmanship"
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

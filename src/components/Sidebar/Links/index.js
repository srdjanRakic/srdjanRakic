import React, { Component } from 'react'

// styles
import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

const Links = () => (
  <div className="links">
      <ul className="icons-list">
        <li className="icon">
          <a href="https://github.com/srdjanRakic" target="_blank">
            <i className="fa fa-github" />
          </a>
        </li>
        <li className="icon">
        <a href="https://twitter.com/srd_rakic" target="_blank">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li className="icon">
        <a href="https://www.linkedin.com/in/srdjan-rakic-7784b5113/" target="_blank">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li className="icon">
          <a href="mailto:hello@praagya.com" target="_blank">
            <i className="fa fa-envelope" />
          </a>
        </li>
      </ul>
      <div className="small">
        Built with ❤️ using <a href="https://www.gatsbyjs.org/" target="_blank">
          GatsbyJS
        </a>
      </div>
    </div>
);

export default Links;
import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return <div className="about">
        <div className="image" />
        <div className="bio">
          Software developer with a passion for making incredible web applications.
          <div className="emoji">🤖 &nbsp;🏔&nbsp;🎨&nbsp; ⚽️</div>
        </div>
      </div>;
  }
}

export default About
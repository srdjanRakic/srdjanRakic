import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import ConferenceSection from '../components/ConferenceSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
  <>
    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Srgjan Rakikj</span>
      </h5>
      <h4 className="bold">
        Software Engineer at Silverflow
      </h4>
      <ExperienceSection />
      <ProjectsSection />
      <ConferenceSection />
    </div>
    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>
  </>
)

export default IndexPage

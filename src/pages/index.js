import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import ConferenceSection from '../components/ConferenceSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Srdjan Rakic</span>
        </h5>
        <h4 className="bold">
          Full stack developer and Lead of Frontend Engineering at InPlayer
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
    </div>
)

export default IndexPage

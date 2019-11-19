import React from 'react'

// components
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

// logo
import inplayerLogo from '../../assets/images/experience/inplayer-logo.png'
import reactTsLogo from '../../assets/images/react-typescript.png'

const ProjectsSection = () =>  (
      <Section title="Creator/Maintainer of:">
        <div className="row">
          <ExperienceUnit
            logo={inplayerLogo}
            colour="#FFFFFF"
            title="InPlayer JS SDK"
            link="https://github.com/inplayer-org/inplayer.js"
            subtitle="InPlayer's JS API client wrapper."
          />
          <ExperienceUnit
            logo={inplayerLogo}
            colour="#FFFFFF"
            title="InPlayer React UI Components"
            link="https://github.com/inplayer-org/inplayer-ui"
            subtitle="Modern React UI library. Code less, do more."
          />
          <ExperienceUnit
            logo={reactTsLogo}
            colour="#FFFFFF"
            title="React TypeScript Starter"
            link="https://github.com/srdjanRakic/react-typescript-starter"
            subtitle="React TypeScript Starter Kit."
          />
        </div>
      </Section>
    )

export default ProjectsSection;

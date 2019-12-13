import React from 'react'

// components
import Section from '../Section'
import ExperienceUnit from '../Shuffle'

// logo
import inplayerLogo from '../../assets/images/experience/inplayer-logo.png'
import reactTsLogo from '../../assets/images/projects/react-typescript.png'
import reactHooksLogo from '../../assets/images/projects/react-hooks.png'

const ProjectsSection = () =>  (
      <Section title="Creator/Maintainer of:">
        <div className="row">
          <ExperienceUnit
            logo={inplayerLogo}
            colour="#FFFFFF"
            title="InPlayer JS SDK"
            link="https://github.com/inplayer-org/inplayer.js"
            description="InPlayer's JS API client wrapper"
          />
          <ExperienceUnit
            logo={inplayerLogo}
            colour="#FFFFFF"
            title="InPlayer React UI Components"
            link="https://github.com/inplayer-org/inplayer-ui"
            description="Modern React UI library. Code less, do more"
          />
          <ExperienceUnit
            logo={reactTsLogo}
            colour="#FFFFFF"
            title="React TypeScript Starter"
            link="https://github.com/srdjanRakic/react-typescript-starter"
            description="React TypeScript Starter Kit"
          />
          <ExperienceUnit
            logo={reactHooksLogo}
            colour="#FFFFFF"
            title="The Hook Cook Book"
            link="https://github.com/srdjanRakic/hook-cook-book"
            description="A collection of simple solution to complex problems using React Hooks"
          />
        </div>
      </Section>
    )

export default ProjectsSection;

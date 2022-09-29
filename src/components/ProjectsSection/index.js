import React from 'react'

// components
import Section from '../Section'
import Shuffle from '../Shuffle'

// logo
import inplayerLogo from '../../assets/images/experience/inplayer-logo.png'
import reactTsLogo from '../../assets/images/projects/react-typescript.png'
import reactHooksLogo from '../../assets/images/projects/react-hooks.png'

const ProjectsSection = () =>  (
      <Section title="Creator/Maintainer of:">
        <div className="row">
          <Shuffle
            logo={reactTsLogo}
            colour="#293953"
            title="React TypeScript Starter"
            link="https://github.com/srdjanRakic/react-typescript-starter"
            description="React TypeScript Starter Kit"
          />
          <Shuffle
            logo={reactHooksLogo}
            colour="#222222"
            title="The Hook Cook Book"
            link="https://github.com/srdjanRakic/hook-cook-book"
            description="A collection of simple solution to complex problems using React Hooks"
          />
        </div>
      </Section>
    )

export default ProjectsSection;

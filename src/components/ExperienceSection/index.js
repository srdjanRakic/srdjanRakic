import React from 'react'

// components
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

// logos
import mcaLogo from '../../assets/images/experience/mca-logo.png'
import seavusLogo from '../../assets/images/experience/seavus-logo.png'
import inscaleLogo from '../../assets/images/experience/inscale-logo.png'
import inplayerLogo from "../../assets/images/experience/inplayer-logo.png";

const ExperienceSection = () => (
  <Section title="Experience">
    <div className="row">
      <ExperienceUnit logo={mcaLogo} colour="#FFFFFF" title="MCA" link="https://www.mca.mk/" timeperiod="04.2016 - 06.2017" subtitle="Learnt the ins and outs of product development and
          built various features including a completely new product." />
      <ExperienceUnit logo={seavusLogo} colour="#FFFFFF" title="Seavus" link="https://seavus.com/" timeperiod="06.2017 - 12.2018" subtitle="Worked as a Product Engineer on the front-end on a Sports-Betting platform that provides a highly customizable front-end for each bookmaker, giving you all the tools you need for risk management." />
      <ExperienceUnit logo={inscaleLogo} colour="#FFFFFF" title="InScale" link="https://www.inscale.net/" timeperiod="12.2017 - 08.2018" subtitle="Worked as a Product Engineer on a scandinavian package holidaymaker." />
      <ExperienceUnit logo={inplayerLogo} colour="#FFFFFF" title="InPlayer" link="https://inplayer.com/" timeperiod="08.2018 - present" subtitle="Working as e Product Engineer on a next generation video and digital asset monetization platform." />
    </div>
  </Section>
);

export default ExperienceSection;

import React from 'react'

// components
import Section from '../Section'
import Shuffle from '../Shuffle'

// logos
import mcaLogo from '../../assets/images/experience/mca-logo.png'
import seavusLogo from '../../assets/images/experience/seavus-logo.png'
import inscaleLogo from '../../assets/images/experience/inscale-logo.png'
import inplayerLogo from "../../assets/images/experience/inplayer-logo.png";
import lightspeedLogo from "../../assets/images/experience/lightspeed-logo.png";
import silverflowLogo from "../../assets/images/experience/silverflow-logo.svg";

const ExperienceSection = () => (
  <Section title="Experience:">
    <div className="row">
      <Shuffle logo={mcaLogo} colour="#FFFFFF" title="MCA" link="https://www.mca.mk/" timeperiod="Feb 2016 - June 2017" description="Learnt the ins and outs of product development and
          built various features including a completely new product" />
      <Shuffle logo={seavusLogo} colour="#FFFFFF" title="Seavus" link="https://seavus.com/" timeperiod="June 2017 - Dec 2018" description="Worked as a Product Engineer on the front-end on a Sports-Betting platform that provides a highly customizable front-end for each bookmaker, giving you all the tools you need for risk management" />
      <Shuffle logo={inscaleLogo} colour="#FFFFFF" title="InScale" link="https://www.inscale.net/" timeperiod="Dec 2017 - Aug 2018" description="Worked as a Product Engineer on a scandinavian package holidaymaker" />
      <Shuffle logo={inplayerLogo} colour="#FFFFFF" title="InPlayer" link="https://inplayer.com/" timeperiod="Aug 2018 - Feb 2021" description="Worked as e Front-end Team Lead on a next generation video and digital asset monetization platform" />
      <Shuffle logo={lightspeedLogo} colour="#FFFFFF" title="Lightspeed Commerce" link="https://www.lightspeedhq.nl/" timeperiod="Feb 2021 - July 2022" description="Working as e Product Engineer on a complete entrepreneurial platform for hospitality, retail and e-Commerce worldwide" />
      <Shuffle logo={silverflowLogo} colour="#FFFFFF" title="Silverflow" link="https://www.silverflow.co/" timeperiod="July 2022 - present" description="Working as e Product Engineer on a innovative global payment technology for all payment service providers" />
    </div>
  </Section>
);

export default ExperienceSection;

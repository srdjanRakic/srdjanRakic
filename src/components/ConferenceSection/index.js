import React from 'react'

// components
import Section from '../Section'
import Shuffle from '../Shuffle'

// logos
import meetTheFuture from '../../assets/images/conferences/meetTheFuture.png'

const ConferenceSection = () => (
  <Section title="Conferences:">
    <div className="row">
      <Shuffle logo={meetTheFuture} colour="#151515" title="Meet the future: 2020" link="https://employers.wearelaika.com/?fbclid=IwAR3mKUcrc-F19ko5QyF4QqMOUGVYSKieadaBDGdT201qHXSwzb-fY8VsRZ0" timeperiod="12.12.2019" description="The best way to REST (is GraphQL)" />
    </div>
  </Section>
);

export default ConferenceSection;

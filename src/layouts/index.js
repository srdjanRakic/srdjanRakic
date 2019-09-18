import React from 'react'
import Helmet from 'react-helmet'
import './style.scss'

// images
import profileImage from '../assets/images/srdjan-rakic.jpg'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'

const TemplateWrapper = ({ children, data: { site: { siteMetadata: { title, keywords, url, description } } } }) => (
  <div className="template-wrapper">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { property: 'og:url', content: url },
        { property: 'og:image', content: profileImage },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 }
      ]}
    />
    <div className="template-wrapper-children">
      { children() }
    </div>
  </div>
);

export default TemplateWrapper

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        keywords
      }
    }
  }
`

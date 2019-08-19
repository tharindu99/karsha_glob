import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Introduction from '../components/home/Introduction'
import Card from '../components/home/Card'




class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMdx.edges')

    let image_data = [
      {
        name: 'resMBS',
        img: this.props.data.thumbResmbs.childImageSharp.fluid,
        link: '/resMBS/',
        type: 'local'
      }
    ]

    return (
      <Layout location={this.props.location}>
        <noscript>
          <a href="https://www.mozilla.com/">External Link</a>
        </noscript>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: 'Karsha' },
            { name: 'keywords', content: 'Karsha data visualization' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Introduction />
        <Card image_info={image_data} />
        
      </Layout>
      
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
    thumbResmbs: file(relativePath: { eq: "thumb_resmbs.png" }) {
      ...cardFluidImage
    }
    thumbGoogle: file(relativePath: { eq: "thumb_bayd3Google.png" }) {
      ...cardFluidImage
    }
    thumbSf: file(relativePath: { eq: "thumb_sf_muni.png" }) {
      ...cardFluidImage
    }
    thumbMagneto: file(relativePath: { eq: "thumb_magneto.png" }) {
      ...cardFluidImage
    }
    thumbExp: file(relativePath: { eq: "thumb_exp_dashboard.png" }) {
      ...cardFluidImage
    }
    thumbFaces: file(relativePath: { eq: "thumb_faces.png" }) {
      ...cardFluidImage
    }
    thumbParallel: file(relativePath: { eq: "thumb_parallel.png" }) {
      ...cardFluidImage
    }
    thumbPrecinct: file(relativePath: { eq: "thumb_precinct.png" }) {
      ...cardFluidImage
    }
    thumbAirportBar: file(relativePath: { eq: "thumb_airport_bar.png" }) {
      ...cardFluidImage
    }
    thumbPower: file(relativePath: { eq: "thumb_power_law.png" }) {
      ...cardFluidImage
    }
    thumbCollege: file(relativePath: { eq: "thumb_college_majors.png" }) {
      ...cardFluidImage
    }
  }
`






// Upcoming posts

// {
//   name: 'Kepler Map',
//   month: 'August, 2018',
//   img: this.props.data.thumbKepler.childImageSharp.fluid,
//   link: '/hi-folks/',
//   github: 'http://www.github.com',
//   type: 'local'
// },

// thumbKepler: file(relativePath: { eq: "thumb_kepler.png" }) {
//   ...cardFluidImage
// }


// {
//   name: 'Reusable Module In Action',
//   month: '2018',
//   img: this.props.data.thumbReusable.childImageSharp.fluid,
//   type: 'local'
// },

// thumbReusable: file(relativePath: { eq: "thumb_reusable.png" }) {
//   ...cardFluidImage
// }
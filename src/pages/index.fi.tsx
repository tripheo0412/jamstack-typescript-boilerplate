import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="kotisivu" lang="fi" description="kotisivu" />
    <h1>Hei ihmiset</h1>
    <p>Tervetuloa uudelle Gatsby-sivustollesi.</p>
    <p>Nyt rakenna jotain hienoa.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Siirry sivulle 2</Link>
  </Layout>
)

export default IndexPage

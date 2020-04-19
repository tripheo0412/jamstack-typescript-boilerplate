import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Toinen sivu" lang="fi" description="toiselta sivulta" />
    <h1>Hei toiselta sivulta</h1>
    <p>Tervetuloa sivulle 2</p>
    <Link to="/">Palaa kotisivulle</Link>
  </Layout>
)

export default SecondPage

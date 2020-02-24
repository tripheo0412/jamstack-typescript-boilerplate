/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  description?: string
  lang?: string
  meta?: []
  title: string
}

function SEO({ description, lang, meta, title }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            type
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description
  const shouldIndex = site.siteMetadata.type === 'production'
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        // {
        //   name: `og:image`,
        //   property: `og:image`,
        //   content: site.siteMetadata.image,
        // },
        {
          property: `og:image:width`,
          content: `1280`,
        },
        {
          property: `og:image:height`,
          content: `720`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    >
      {!shouldIndex && <meta name="robots" content="noindex" />}
    </Helmet>
  )
}

export default SEO

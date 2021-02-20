import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <h1 className={`text-4xl font-bold mb-2`}>
          <Link to="/">
              Matt Banner
          </Link>
      </h1>
      <p className={`text-lg sm:text-xl mb-1 text-gray-600`}><span role="img" aria-label="Waving hand" className={`pr-1`}>👋🏼</span> Hello, I'm Matt, a Web Developer and AWS Architect based in the UK.</p>
      <p className={`text-gray-500`}>I work with AWS, Laravel, Craft CMS, Vue, Gatsby, Alpine &amp; Tailwind.</p>
      
      <div className={`mt-6`}>
        <a
          id={`contact-me-button`}
          href="mailto:hello@mattbanner.co.uk"
          className={`px-4 py-2 rounded shadow text-white bg-blue-600 hover:bg-blue-700 border border-blue-600 transition duration-300 ease-in-out`}
        >Contact Me</a>
      </div>

    </div>
  </Layout>
)

export default IndexPage

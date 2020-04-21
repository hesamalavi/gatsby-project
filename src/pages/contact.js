import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Me</h1>
            <p>
                <a
                    href="https://www.linkedin.com/in/hesam-alavi-59b61987/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </p>
        </Layout>
    )
}

export default ContactPage

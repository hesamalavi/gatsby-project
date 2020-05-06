import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Grid } from "@horacioh/gatsby-theme-instagram"
import galleryStyles from "./gallery.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"

const Gallery = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode {
                edges {
                    node {
                        id
                        caption
                        localFile {
                            url
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Head title="Gallery" />
            <h1>Gallery</h1>
            <div className={galleryStyles.images}>
                <Grid />
            </div>
        </Layout>
    )
}

export default Gallery

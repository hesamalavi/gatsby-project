module.exports = {
    siteMetadata: {
        title: "Hesam's Blog",
        author: "Hesam Alavi",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: "2p36cc8tbq7i",
                accessToken: "pm507PdDUjhvJ-CNzORtQjw6_bVRmya0Ys1Yo29cYIU",
            },
        },
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: `src/favicon/Hesam.jpg`,
            },
        },
        // {
        //     resolve: `gatsby-source-twitter`,
        //     options: {
        //         credentials: {
        //             consumer_key: process.env.CONSUMER_KEY,
        //             consumer_secret: process.env.CONSUMER_SECRET,
        //             bearer_token: process.env.BEARER_TOKEN,
        //         },
        //         queries: {
        //             hesam: {
        //                 endpoint: "statuses/user_timeline",
        //                 params: {
        //                     screen_name: "hesamalavi27",
        //                     include_rts: false,
        //                     exclude_replies: true,
        //                     tweet_mode: "extended",
        //                 },
        //             },
        //             hesam2: {
        //                 endpoint: "search/tweets",
        //                 params: {
        //                     q: "#technology",
        //                     tweet_mode: "extended",
        //                 },
        //             },
        //         },
        //     },
        // },
        {
            resolve: `gatsby-source-instagram`,
            options: {
                username: `moshimoshi.au`,
            },
        },
        "@horacioh/gatsby-theme-instagram",
    ],
}

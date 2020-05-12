require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: `mirac`,
		description: `Wallpapers by Mirac`,
		author: `Mirac & Renaitare`,
		siteUrl: `https://thatmirac.com`,
	},
	plugins: [
		`gatsby-plugin-preact`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Mirac Wallpapers`,
				short_name: `wallpapers`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `standalone`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: 'gatsby-source-prismic',
			options: {
				repositoryName: process.env.PRISMIC_NAME,
				accessToken: process.env.PRISMIC_AUTH,
			},

			linkResolver: () => wallpaper => {
				return `/wallpaper/${wallpaper.uid}`;
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://thatmirac.com/`,
			},
		},
		// {
		// 	resolve: `gatsby-plugin-offline`,
		// 	options: {
		// 		precachePages: [`/wallpapers/`, `/credits/`, `/wallpapers/*`],
		// 	},
		// },
	],
};

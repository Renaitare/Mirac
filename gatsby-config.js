require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: `mirac`,
		description: `Home of Mirac's Dope Wallpapers`,
		author: `Mirac & Renaitare`,
	},
	plugins: [
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
				name: `mirac-wallpapers`,
				short_name: `wallpapers`,
				start_url: `/`,
				background_color: `#000000`,
				theme_color: `#000000`,
				display: `minimal-ui`,
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
	],
};

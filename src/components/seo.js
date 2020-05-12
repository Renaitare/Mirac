import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, title, image }) {
	const { site, file } = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
					description
					author
				}
			}

			file(name: { eq: "twitter_card" }) {
				publicURL
			}
		}
	`);

	const metaDescription = description || site.siteMetadata.description;
	const metaImage = image || file.publicURL;

	return (
		<Helmet
			htmlAttributes={{
				lang: 'en-US',
			}}
			title={title}
			titleTemplate={`%s`}
			meta={[
				{
					name: 'twitter:card',
					content: 'summary_large_image',
				},
				{
					name: 'twitter:creator',
					content: '@thatmirac',
				},
				{
					name: 'twitter:creator:id',
					content: '1153786059718889472',
				},
				{
					name: 'twitter:description',
					content: metaDescription,
				},
				{
					name: 'twitter:title',
					content: title + ' • Wallpapers by Mirac',
				},
				{
					name: 'twitter:image',
					content: metaImage,
				},
				{
					name: 'twitter:image:alt',
					content: title,
				},
				{
					name: 'og:type',
					content: 'website',
				},
				{
					name: 'og:title',
					content: title,
				},
				{
					name: 'og:site_name',
					content: 'thatmirac.com',
				},
				{
					name: 'og:image',
					content: metaImage,
				},
				{
					name: 'description',
					content: metaDescription,
				},
				{
					name: 'apple-mobile-web-app-capable',
					content: 'yes',
				},
				{
					name: 'apple-mobile-web-app-status-bar-style',
					content: 'black-translucent',
				},
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;

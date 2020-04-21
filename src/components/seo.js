import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import fallbackCard from '../images/twitter_card.png';

function SEO({ description, lang, meta, title, image }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaImage = image || fallbackCard;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
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
					content: title,
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
					content: site.siteMetadata.title,
				},
				{
					name: 'og:image',
					content: metaImage,
				},
				{
					name: 'description',
					content: metaDescription,
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

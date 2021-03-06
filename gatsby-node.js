const path = require('path');

exports.createPages = async ({ reporter, actions, graphql }) => {
	const { createPage } = actions;
	const wallpaperTemplate = path.resolve('src/templates/wallpaper.js');

	const result = await graphql(`
		{
			wallpapers: allPrismicWallpaper(
				sort: { fields: first_publication_date }
			) {
				edges {
					node {
						uid
						data {
							name {
								raw {
									text
								}
							}
							desktop_image {
								url
							}
							desktop_resolution
							mobile_image {
								url
							}
							mobile_resolution
							tablet_image {
								url
							}
							tablet_resolution
							screenshots {
								image {
									localFile {
										publicURL
									}
								}
							}
							related_wallpapers {
								wallpaper {
									document {
										data {
											preview_image {
												localFile {
													publicURL
												}
											}
											name {
												raw {
													text
												}
											}
										}
										uid
									}
								}
							}
							screenshots {
								image {
									localFile {
										publicURL
									}
								}
							}
							publish_date(formatString: "DD.MM.YYYY")
							credit_author {
								text
							}
							credit_author_image {
								url
							}
							credit_author_link {
								text
							}
							acknowledgement {
								text
							}
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panic(result.errors);
	}

	result.data.wallpapers.edges.forEach(({ node }) => {
		createPage({
			path: '/wallpapers/' + node.uid,
			component: wallpaperTemplate,
			context: {
				date: node.data.publish_date,
				name: node.data.name.raw[0].text,
				credits: {
					acknowledgement: node.data.acknowledgement.text,
					author: node.data.credit_author.text,
					link: node.data.credit_author_link.text,
					image: node.data.credit_author_image.url,
				},
				desktop: node.data.desktop_resolution,
				desktopImage: node.data.desktop_image.url,
				mobile: node.data.mobile_resolution,
				mobileImage: node.data.mobile_image.url,
				tablet: node.data.tablet_resolution,
				tabletImage: node.data.tablet_image.url,
				screenshots: node.data.screenshots,
				relatedPreviews: node.data.related_wallpapers,
			},
		});
	});
};

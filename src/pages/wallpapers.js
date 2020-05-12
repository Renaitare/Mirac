import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';

import '../styles/global.css';
import '../styles/index.css';

import headerLogo from '../images/header_image.png';

let reversed;
let wallpaperList;

const IndexPage = () => (
	<>
		<SEO title="Home" />
		<header>
			<div class="logo-container">
				<Link to="/">
					<img src={headerLogo} alt="Home" />
				</Link>
			</div>
		</header>
		<div class="showcase">
			<span>
				<h1>WALLPAPERS</h1>
				<h3>made by Mirac</h3>
			</span>
		</div>
		<div class="wallprev-container">
			<div class="wallprev">
				<Wallpapers />
			</div>
			<div class="footer fade">
				<p>© {new Date().getFullYear()} Mirac</p>
				<Link to="credits">
					<p>Credits</p>
				</Link>
				<p> </p>
			</div>
		</div>
	</>
);

export const Wallpapers = () => {
	const data = useStaticQuery(graphql`
		{
			allPrismicWallpaper(sort: { fields: data___publish_date }) {
				edges {
					node {
						uid
						data {
							name {
								raw {
									text
								}
							}
							preview_image {
								localFile {
									publicURL
								}
							}
						}
					}
				}
			}
		}
	`);

	if (!reversed) {
		wallpaperList = data.allPrismicWallpaper.edges.reverse();
		reversed = true;
	}

	return wallpaperList.map(({ node }) => (
		<Link to={'wallpapers/' + node.uid}>
			<img
				className="preload-fade"
				style={{
					width: '100%',
					height: 'auto',
				}}
				src={node.data.preview_image.localFile.publicURL}
				alt={node.data.name.raw[0].text}></img>
			<p></p>
		</Link>
	));
};

export default IndexPage;

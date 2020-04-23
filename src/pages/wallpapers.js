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
				<Wallpapers></Wallpapers>
			</div>
			<div class="footer">
				<p>
					© {new Date().getFullYear()}{' '}
					<a href="https://twitter.com/thatmirac">Mirac</a>
				</p>
			</div>
		</div>
	</>
);

export const Wallpapers = () => {
	const data = useStaticQuery(graphql`
		{
			allPrismicWallpaper(sort: { fields: first_publication_date }) {
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
								url
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
				style={{
					width: '100%',
					height: 'auto',
				}}
				src={
					node.data.preview_image.url.substring(
						0,
						node.data.preview_image.url.indexOf('?auto=compress')
					) + '?format&rect=0,0,368,368'
				}
				alt={node.data.name.raw[0].text}></img>
		</Link>
	));
};

export default IndexPage;

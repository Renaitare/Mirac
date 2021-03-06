import React from 'react';

import SEO from '../components/seo';
import { Link } from 'gatsby';

import '../styles/wallpaper.css';
import '../styles/global.css';

import headerLogo from '../images/header_image.png';

const Wallpaper = ({ pageContext }) => {
	const {
		date,
		name,
		credits,
		desktop,
		desktopImage,
		mobile,
		mobileImage,
		tablet,
		tabletImage,
		screenshots,
		relatedPreviews,
	} = pageContext;

	let acknowledgeHTML;
	let mobileHTML;
	let tabletHTML;
	let desktopHTML;
	let relatedHTML;

	if (credits.author) {
		acknowledgeHTML = (
			<div class="credits-section">
				<p>{credits.acknowledgement}</p>
				<div class="user">
					<img src={credits.image} alt={credits.author + ' Image'} />
					<a href={credits.link}>{credits.author}</a>
				</div>
			</div>
		);
	} else {
		acknowledgeHTML = <></>;
	}

	if (mobile) {
		mobileHTML = (
			<div class="download-container-phone">
				<div class="phone">
					<div class="phone-shape"></div>
					<div class="phone-home-button"></div>
				</div>
				<div class="resolution">1125 × 2436</div>
				<div class="download-button">
					<a
						href={mobileImage.substring(
							0,
							mobileImage.indexOf('?auto=compress')
						)}
						id="link">
						<h4>Download</h4>
					</a>
				</div>
			</div>
		);
	} else {
		mobileHTML = <></>;
	}

	if (tablet) {
		tabletHTML = (
			<div class="download-container-tablet">
				<div class="tablet">
					<div class="tablet-shape"></div>
					<div class="tablet-home-button"></div>
				</div>
				<div class="resolution">2388 × 1688</div>
				<div class="download-button">
					<a
						href={tabletImage.substring(
							0,
							tabletImage.indexOf('?auto=compress')
						)}
						id="link">
						<h4>Download</h4>
					</a>
				</div>
			</div>
		);
	} else {
		tabletHTML = <></>;
	}

	if (desktop) {
		desktopHTML = (
			<div class="download-container-computer">
				<div class="computer">
					<div class="computer-shape"></div>
					<div class="computer-stand"></div>
				</div>
				<div class="resolution">2560 × 1440</div>
				<div class="download-button">
					<a
						href={desktopImage.substring(
							0,
							desktopImage.indexOf('?auto=compress')
						)}
						id="link">
						<h4>Download</h4>
					</a>
				</div>
			</div>
		);
	} else {
		desktopHTML = <></>;
	}

	if (relatedPreviews[0].wallpaper) {
		relatedHTML = (
			<>
				<div class="related-title">
					<h1>More Like This</h1>
				</div>
				<div class="related-wrapper">
					{relatedPreviews.map(data => (
						<Link
							to={'wallpapers/' + data.wallpaper.document[0].uid}>
							<img
								className="fade"
								src={
									data.wallpaper.document[0].data
										.preview_image.localFile.publicURL
								}
								alt={
									data.wallpaper.document[0].data.name.raw[0]
										.text
								}
							/>
						</Link>
					))}
				</div>
			</>
		);
	}

	return (
		<>
			<SEO
				title={name}
				image={screenshots[0].image.localFile.publicURL}
			/>
			<header>
				<div class="logo-container">
					<Link to="/">
						<img src={headerLogo} alt="Home" />
					</Link>
				</div>
			</header>
			<div class="wallprev-container">
				<div class="top-image">
					<div class="top-image-background">
						<img
							className="fade"
							src={screenshots[0].image.localFile.publicURL}
							alt={name + ' Header Image'}
						/>
					</div>
					<div class="top-image-overlay"></div>
					<div class="top-image-elements">
						<div class="title">
							<h4>{date}</h4>
							<h1>{name}</h1>
						</div>
					</div>
				</div>
				{acknowledgeHTML}
				<div class="seperator"></div>
				<div class="screenshots-section">
					<div class="screenshots-title">
						<h1>Preview</h1>
					</div>
					<div class="screenshots-wrapper">
						{screenshots.map(data => (
							<img
								className="fade"
								src={data.image.localFile.publicURL}
								alt={name + 'Screenshot'}
							/>
						))}
						<p></p>
					</div>
				</div>
				<div class="seperator"></div>
				<div class="sizes-section">
					<div class="sizes-title">
						<h1>Sizes</h1>
					</div>
					<div class="download-grid">
						{mobileHTML}
						{tabletHTML}
						{desktopHTML}
					</div>
				</div>
				<div class="seperator"></div>
				<div class="related-section">
					{relatedHTML}
					<p></p>
				</div>
				<div class="seperator"></div>
				<div class="footer">
					<p>©{new Date().getFullYear()} Mirac</p>
					<Link to="credits">
						<p>Credits</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Wallpaper;

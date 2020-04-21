import React from 'react';

import { Link } from 'gatsby';
import SEO from '../components/seo';
import headerLogo from '../images/header_image.png';

const NotFoundPage = () => (
	<>
		<SEO title="404" />
		<header>
			<div class="logo-container">
				<Link to="/">
					<img src={headerLogo} alt="Home" />
				</Link>
			</div>
		</header>
		<div class="showcase">
			<span>
				<h1>404</h1>
				<h3>Page not Found</h3>
			</span>
		</div>
	</>
);

export default NotFoundPage;

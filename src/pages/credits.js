import React from 'react';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import '../styles/credits.css';

import headerLogo from '../images/header_image.png';
import miracLogo from '../images/credits/mirac.png';
import renaiLogo from '../images/credits/renai.png';

import githubLogo from '../images/credits/links/github.png';
import mailLogo from '../images/credits/links/mail.png';
import redditLogo from '../images/credits/links/reddit.png';
import twitterLogo from '../images/credits/links/twitter.png';

class Main extends React.Component {
	render() {
		return (
			<>
				<SEO title="Credits" />
				<header>
					<div class="logo-container">
						<Link to="/">
							<img src={headerLogo} alt="Home" />
						</Link>
					</div>
				</header>
				<div class="wallprev-container">
					<div class="credits-title">
						<h1>CREDITS</h1>
					</div>
					<div class="credits-section">
						<img src={renaiLogo} alt="profile" />
						<div class="credits-text">
							<h4>B A C K E N D &nbsp; D E V E L O P M E N T</h4>
							<h1>Renaitare</h1>
							<div class="social-links">
								<a href="mailto:support@renai.me">
									<img src={mailLogo} alt="mail" />
								</a>
								<a href="https://twitter.com/Renaitare">
									<img src={twitterLogo} alt="twitter" />
								</a>
								<a href="https://github.com/Renaitare">
									<img src={githubLogo} alt="github" />
								</a>
							</div>
						</div>
					</div>
					<div class="credits-section">
						<img src={miracLogo} alt="profile" />
						<div class="credits-text">
							<h4>
								F R O N T E N D &nbsp; D E V E L O P M E N T
							</h4>
							<h1>Mirac</h1>
							<div class="social-links">
								<a href="mailto:ozd.mirac@gmail.com">
									<img src={mailLogo} alt="mail" />
								</a>
								<a href="https://twitter.com/thatmirac">
									<img src={twitterLogo} alt="twitter" />
								</a>
								<a href="https://www.reddit.com/user/MiracoZ">
									<img src={redditLogo} alt="reddit" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Main;

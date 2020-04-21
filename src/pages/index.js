import React from 'react';
import { Redirect } from '@reach/router';
import SEO from '../components/seo';

class Main extends React.Component {
	render() {
		return (
			<>
				<SEO title="Wallpapers by Mirac" />
				<Redirect noThrow to={`/wallpapers`} />
			</>
		);
	}
}

export default Main;

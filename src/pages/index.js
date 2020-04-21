import React from 'react';
import { Redirect } from '@reach/router';

class Main extends React.Component {
	render() {
		return <Redirect noThrow to={`/wallpapers`} />;
	}
}

export default Main;

import React from 'react';
import { Link } from 'react-router';

// home page component. serves as welcome page with link to library
const HomePage = () => (
	<div className="jumbotron center">
		<h1 className="lead">Media Lib built with React, Redux, and Redux-saga.</h1>
		<div>
			<Link to="library">
				<button className="btn btn-lg btn-primary">View Library</button>
			</Link>
		</div>
	</div>
);

export default HomePage;

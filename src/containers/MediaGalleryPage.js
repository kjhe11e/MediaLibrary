import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../api/api';

// MediaGalleryPage component
class MediaGalleryPage extends Component {
	// get images and videos from API right after component renders.
	componentDidMount() {
		flickrImages('rain').then(images => console.log(images, 'Images'));
		shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
	}

	render() {
		// render videos and images here.
		return (<div></div>)
	}
}

export default MediaGalleryPage;


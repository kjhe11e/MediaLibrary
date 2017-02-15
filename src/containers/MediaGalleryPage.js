import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';
//import { flickrImages, shutterStockVideos } from '../api/api';


// MediaGalleryPage component
class MediaGalleryPage extends Component {

	// dispatches 'searchMediaAction' immediately after initial rendering.
	// uses dispatch method from store to execute this task.
	componentDidMount() {
		//flickrImages('rain').then(images => console.log(images, 'Images'));
		//shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
		this.props.dispatch(searchMediaAction('rain'));
	}

	render() {
		// render (and log) videos and images here.
		console.log(this.props.images, 'Images');
		console.log(this.props.videos, 'Videos');
		console.log(this.props.selectedImage, 'SelectedImage');
		console.log(this.selectedVideo, 'SelectedVideo');
		return (<div> </div>)
	}
}

// define PropTypes
MediaGalleryPage.propTypes = {
	// define PropTypes here.
};

// subscribe component to redux store and merge state into component's props.
const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
});

// connect method from react-router connects component with redux store.
export default connect( mapStateToProps )( MediaGalleryPage );


import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
	selectedImageAction, searchMediaAction, selectedVideoAction } from
	'../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
//import '../../styles/style.css';


// MediaGalleryPage component.
class MediaGalleryPage extends Component {
	constructor() {
		super();
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSelectImage = this.handleSelectImage.bind(this);
		this.handleSelectVideo = this.handleSelectVideo.bind(this);
	}

	// dispatches 'searchMediaAction' immediately after initial rendering.
	// uses dispatch method from store to execute this task.
	componentDidMount() {
		//flickrImages('rain').then(images => console.log(images, 'Images'));
		//shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
		this.props.dispatch(searchMediaAction('rain'));
	}

	// dispatches 'selectImageAction' when any image is clicked.
	handleSelectImage(selectedImage) {
		this.props.dispatch(selectedImageAction(selectedImage));
	}

	// dispatches 'selectVideoAction' when any video is clicked.
	handleSelectVideo(selectedVideo) {
		this.props.dispatch(selectedVideoAction(selectedVideo));
	}

	// dispatches 'searchMediaAction' with query param.
	// ensure action is dispatched to teh store only if query param is provided.
	handleSearch(event) {
		event.preventDefault();
		if (this.query !== null) {
			this.props.dispatch(searchMediaAction(this.query.value));
			this.query.value = '';
		}
	}

	render() {
		const { images, selectedImage, videos, selectedVideo } = this.props;
		return (
			<div className="container-fluid">
				{images ? <div>
					<input type="text" ref={ref => (this.query = ref)} />
					<input type="submit" className="btn btn-primary"
						value="Search Library" onCLick={this.handleSearch} />
					<div className="row">
						<PhotoPage
							iamges={images}
							selectedImage={selectedImage}
							onHandleSelectImage={this.handleSelectImage} />
						<VideoPage
							videos={videos}
							selectedVideo={selectedVideo}
							onHandleSelectVideo={this.handleSelectVideo} />
					</div>
				</div> : 'loading ....'}
			</div>
		);
	}
}

// define PropTypes
MediaGalleryPage.propTypes = {
	images: PropTypes.array,
	selectedImage: PropTypes.object,
	videos: PropTypes.array,
	selectedVideo: PropTypes.object,
	dispatch: PropTypes.func.isRequired
};

// subscribe component to redux store and merge state into component's props.
const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
});

// connect method from react-router connects the component with redux store.
export default connect( mapStateToProps ) ( MediaGalleryPage );

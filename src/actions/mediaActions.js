s types from '../constants/actionTypes';

// returns an action type, SELECTED_IMAGE and the image selected
export const selectImageAction = (image) => ({
	type: types.SELECTED_IMAGE,
	image
});

// returns an action type, SELECTED_VIDEO and the video selected
export const selectedVideoAction = (video) => ({
	type: types.SELECTED_VIDEO,
	video
});

// returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
export const searchMediaAction = (payload) => ({
	type: types.SEARCH_MEDIA_REQUEST,
	payload
});


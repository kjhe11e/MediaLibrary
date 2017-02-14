var config = require('../../config');
const FLICKR_API_KEY = config.FLICKR_API_KEY;
const SHUTTER_CLIENT_ID = config.SHUTTER_CLIENT_ID;
const SHUTTER_CLIENT_SECRET = config.SHUTTER_CLIENT_SECRET;

// basic auth for accessing Shutterstock API
const basicAuth = () => 'Basic '.concat(window.btoa('${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}'));
const authParameters = {
	headers: {
		Authorization: basicAuth()
	}
};

// access Shutterstock search endpoint for short videos
// @params { String } searchQuery
// @return { Array }
export const shutterStockVideos = (searchQuery) => {
	const SHUTTERSTOCK_API_ENDPOINT = 'https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10';
	
	return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
		.then(response => {
			return response.json();
		})
		.then(json => {
			return json.data.map(({ id, assets, description }) => ({
				id,
				mediaUrl: assets.preview_mp4.url,
				description
			}));
		});
};

// accesss Flickr search endpoint for photos
// @params { String } searchQuery
// @return { Array }
export const flickrImages = (searchQuery) => {
	const FLICKR_API_ENDPOINT = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10';

	return fetch(FLICKR_API_ENDPOINT)
		.then(response => {
			return response.json()
		})
		.then(json => {
			return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
				id,
				title,
				mediaUrl: 'https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg'
			}));
		});
};

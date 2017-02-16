require('dotenv').config();
var FLICKR_API_KEY = process.env.FLICKR_API_KEY;
var SHUTTER_CLIENT_ID = process.env.SHUTTER_CLIENT_ID;
var SHUTTER_CLIENT_SECRET = process.env.SHUTTER_CLIENT_SECRET;

// basic authentication for accessing Shutterstock API
const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

// access Shutterstock search endpoint for videos
// @params { String } searchQuery
// @return { Array }
export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?
  query=${searchQuery}&page=1&per_page=10`;

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


// access Flickr search endpoint for photos
// @params { String } searchQuery
// @return { Array }
export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;

  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};

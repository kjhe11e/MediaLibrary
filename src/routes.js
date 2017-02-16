import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import MediaGalleryPage from './containers/MediaGalleryPage';

// map components to different routes here.
// parent component wraps other components and serves as entrance to other React components.
// IndexRoute maps HomePage component to default route.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="library" component={MediaGalleryPage} />
  </Route>
);

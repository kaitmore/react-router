import React, { Component } from 'react';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

export default class Main extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Router>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
            <div className="col-xs-10">

              <Route exact path="/" component={StatefulAlbums} />
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
            </div>
        </div>
        <Player />
      </div>
       </Router>
    );
  }
}

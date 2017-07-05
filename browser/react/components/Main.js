import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
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
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">

          <Router>
            <div className="col-xs-10">

              <Route exact path="/" component={AllAlbums} />
              <Route exact path="/albums" component={AllAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
            </div>

          </Router>

        </div>
        <Player />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums'
import axios from 'axios';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Promise from 'bluebird';

export default class SingleArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            artistAlbums: [],
            artistSongs: []
        }
    }
    componentDidMount() {
        const artistId = this.props.match.params.artistId;
        Promise.all([axios.get(`/api/artists/${artistId}`), axios.get(`/api/artists/${artistId}/albums`), axios.get(`/api/artists/${artistId}/songs`)])
            .spread((artist, album, song) => {
                this.setState({
                    artist: artist.data,
                    artistAlbums: album.data,
                    artistSongs: song.data
                });
            })

    }


    render() {
        const artist = this.state.artist;
        const artistAlbums = this.state.artistAlbums;
        const artistSongs = this.state.artistSongs;

        return (
           
            <div>
                <h3>{artist.name}</h3>
                <ul className="nav nav-tabs">
                    <li><Link to={`${artist.id}/albums`}>ALBUMS</Link></li>
                    <li><Link to={`${artist.id}/songs`}>SONGS</Link></li>
                </ul>
                    <Route path = "/:artistId/albums" render={() => <AllAlbums albums = {artistAlbums}/>} />
                    <Route path = "/:artistId/songs" render={() => <Songs songs={artistSongs} />}  />
            </div>
        );

        // <div>
        //     <h4>{artist.name}</h4>
        //     <AllAlbums albums = {artistAlbums}/>
        //     <h4>SONGS</h4>
        //     <Songs songs={artistSongs} />
        // </div>
    }
}

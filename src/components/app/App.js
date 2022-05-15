import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../utils/Spotify";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Track 1",
          artist: "Artist 1",
          album: "Album 1",
        },
        {
          id: 2,
          name: "Track 2",
          artist: "Artist 2",
          album: "Album 2",
        },
        {
          id: 3,
          name: "Track 3",
          artist: "Artist 3",
          album: "Album 3",
        },
      ],
      playlistTracks: [
        {
          id: 1,
          name: "Plisttrack1",
          artist: "Luis Fonsi",
          album: "Despacito",
        },
        {
          id: 2,
          name: "Plisttrack2",
          artist: "Luis Fonsi",
          album: "Despacito",
        },
        {
          id: 3,
          name: "Plisttrack3",
          artist: "Luis Fonsi",
          album: "Despacito",
        },
      ],
      playListName: "Your Playlist",
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((playlistTrack) => {
      return playlistTrack.id === track.id})) {
      return;
    } else {
      this.setState({
        playlistTracks: this.state.playlistTracks.push(track),
      });
    }
  }
   updatePlaylistName(name) {
    this.setState({
      playListName: name,
    });
  }
  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(
        (playlistTrack) => playlistTrack.id !== track.id
      ),
    });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(
      (playlistTrack) => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playListName, trackURIs).then(
      (success) => {
        console.log(success);
        this.setState={ playListName: "New Playlist" };
      }
    );
  }

  search(term) {
    console.log(`Searching for ${term}`);
    Spotify.search(term).then((searchResults) => {
      this.setState({
        searchResults: searchResults,
      });
    } );
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search()} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playListName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

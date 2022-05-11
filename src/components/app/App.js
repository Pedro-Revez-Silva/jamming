import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';




export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SearchResults: [{
      id: 1,
      name: 'Track 1',
      artist: 'Artist 1',
      album: 'Album 1',
    },
    {
      id: 2,
      name: 'Track 2',
      artist: 'Artist 2',
      album: 'Album 2',
    },
    {
      id: 3,
      name: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
    }],
    playlistTracks : [
      {
          name: 'Plisttrack1',
          artist: 'Luis Fonsi',
          album: 'Despacito',
      },
      {
          name: 'Plisttrack2',
          artist: 'Luis Fonsi',
          album: 'Despacito'
      },
      {
          name: 'Plisttrack3',
          artist: 'Luis Fonsi',
          album: 'Despacito'
      }
  ],
  playListName: 'Your Playlist'
  };
  }

  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={this.state.SearchResults}/>
        <Playlist playlistName={this.state.playListName} playlistTracks={this.state.playlistTracks}/>
      </div>
    </div>
  </div>
    );
  }
}

  
import logo from './logo.svg';
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
    }]};
  }

  render() {
    return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <!-- Add a SearchBar component -->
      <SearchBar />
      <div className="App-playlist">
        <!-- Add a SearchResults component -->
        <SearchResults searchResults={this.state.SearchResults}/>
        <!-- Add a Playlist component -->
        <Playlist />
      </div>
    </div>
  </div>
    );
  }
}

  
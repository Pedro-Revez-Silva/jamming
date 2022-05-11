import React from "react";
import ReactDOM from "react-dom";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";


class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="playlist">
                <input defaultValue={'New Playlist'} />
                <TrackList tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export  default Playlist;
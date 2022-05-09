import React from "react";
import ReactDOM from "react-dom";
import "./Playlist.css";
import { TrackList } from "../TrackList/TrackList";


export class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="playlist">
                <input defaultValue={'New Playlist'} />
                <!-- Add a TrackList component -->
                <TrackList />
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}
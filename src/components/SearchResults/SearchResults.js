import  React from 'react';
import ReactDOM from 'react-dom';
import './SearchResults.css';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <!-- Add a TrackList component -->
                <TrackList tracks={this.props.searchResults}/>
            </div>
        )
    }   
}
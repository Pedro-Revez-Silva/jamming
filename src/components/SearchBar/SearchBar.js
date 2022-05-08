import  React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="search-bar">
                <input placeholder='Enter A Song, Album, or Artist' />
                <button className='SearchButton'>SEARCH</button>
            </div>
        )
    } 
}
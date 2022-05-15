import  React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';


export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search=this.search.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);

    }

    search(){
        this.props.search(this.state.term);
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    render() {
        return (
            <div className="search-bar">
                <input placeholder='Enter A Song, Album, or Artist' onChange={this.handleTermChange}/>
                <button className='SearchButton'>SEARCH</button>
            </div>
        )
    } 
}
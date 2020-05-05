import React, { Component } from 'react';

class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.state = { term: ''};
    }
    
    render() {
        return (
            <div className="search-bar" style={{display:"flex",justifyContent: "space-between"}}> 
                <input 
                value= {this.state.term}
                placeholder = "Search..."
                onKeyPress={event => this.clic(event)}
                onChange={event => this.onInputChange(event.target.value)}
                />
                <button onClick={() => this.search()}>Search</button>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
    }

    clic(term) {
        if(term.key === 'Enter') this.search();
    }

    search() {
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;
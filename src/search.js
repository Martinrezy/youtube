import React, { Component } from 'react';

class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.state = { term: ''};
    }
    
    render() {
        return (
            <div style={{display:"flex", justifyContent: "space-between", padding: "15px"}}> 
                <input 
                value= {this.state.term}
                placeholder = "Search..."
                onKeyPress={event => this.onEnterPressed(event)}
                onChange={event => this.onInputChange(event.target.value)}
                />
                <button onClick={() => this.onClick()}>Search</button>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
    }

    onEnterPressed(term) {
        if(term.key === 'Enter') this.onClick();
    }

    onClick() {
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;
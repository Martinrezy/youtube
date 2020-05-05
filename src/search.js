import React, { Component } from 'react';

class SearchBar extends Component {
    
    constructor(props){
        super(props);

        this.state = { inputValue: ''};
    }
    
    render() {
        return (
            <div style={{display:"flex", justifyContent: "space-between", padding: "15px"}}> 
                <input 
                value= {this.state.inputValue}
                placeholder = "Search..."
                onKeyPress={event => this.onEnterPressed(event)}
                onChange={event => this.onInputChange(event.target.value)}
                />
                <button onClick={() => this.onClick()}>Search</button>
            </div>
        );
    }

    onInputChange(inputValue){
        this.setState({inputValue});
    }

    onEnterPressed(inputValue) {
        if(inputValue.key === 'Enter') this.onClick();
    }

    onClick() {
        this.props.onSearchTermChange(this.state.inputValue);
    }
}

export default SearchBar;
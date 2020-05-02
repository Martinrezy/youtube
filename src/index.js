import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

const API_KEY = 'AIzaSyB30VGwFTy3Swu3EFtqZHJVuSTG79ne_F8';

class App extends Component {
    constructor(props){
        super(props);

        // Atribuindo a state o array de videos e o video selecionado
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards')
    }

    // Realizando consulta na API do Youtube
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
         
        // A funcao onVideoSelected retornara o video selecionado
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 
                <VideoDetail video={ this.state.selectedVideo } /> 
                <VideoList 
                    onVideoSelected = {selectedVideo => this.setState({ selectedVideo })} 
                    videos= { this.state.videos }  
                    /> 
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
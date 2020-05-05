import React, { Component } from 'react';

class VideoListItem extends Component {
    
    constructor(props){
        super(props);
    }

    imageUrl = this.props.video.snippet.thumbnails.default.url;
   
    render() {
        return ( 
        <li onClick={() => this.props.onVideoSelected(this.props.video)} className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={this.imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{ this.props.video.snippet.title }</div>
                </div>
            </div>
        </li>
        );
    }
};

export default VideoListItem;
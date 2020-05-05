import React, { Component } from 'react';
import VideoListItem from './videoItem';

class VideoList extends Component {

    render() {
        const videoItems =  this.props.videos.map(((video) => {
            return <VideoListItem  
            onVideoSelected = {this.props.onVideoSelected}
            key={video.etag} 
            video={video} />
        }));

        return (
            <ul className="col-md-4 list-group">
                {videoItems} 
            </ul>
        );
    }
}

export default VideoList;
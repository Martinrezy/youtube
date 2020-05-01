import React from 'react';
import VideoListItem from './videoItem';

const VideoList = (props) => {

    // map in list of videos and return component VideoListItem that represents unique video.
    const videoItens =  props.videos.map(((video) => {
        return <VideoListItem  
        onVideoSelected = {props.onVideoSelected}
        key={video.etag} 
        video={video} />
    }));

    //return list of videos laters.
    return (
        <ul className="col-md-4 list-group">
            { videoItens }
        </ul>
    );
}

export default VideoList;
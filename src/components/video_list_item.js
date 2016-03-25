import React from 'react';

// {video} is the same as const video = props.video
//we are just pulling stuff from props
const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  const videoUrl = video.snippet.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">

     <div className="video-list media">
       <div className="media-left">
         <img className="media-object" src={imageUrl}/>
       </div>

      <div className="media-body">
        <div className="media-heading">{videoTitle}</div>
      </div>

     </div>
    </li>
  );

};
export default VideoListItem;

import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'xxx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: 'kittens',
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('kittens');
  }
videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo : videos[0]
    });
    console.log(videos[0]);
  });
}
  render(){
    //we only want to fire search function every 300 ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
   return (
    <div>
     <SearchBar onSearch={videoSearch} />
     <VideoDetail video={this.state.selectedVideo}/>
     <VideoList
       onVideoSelect={selectedVideo => this.setState({selectedVideo})}
       videos={this.state.videos} />
    </div>
   );
  }
};


ReactDOM.render(<App/>, document.getElementById('container'));

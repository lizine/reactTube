import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDv0cVJLr3Amwx_G15padXGr8co0N07l1I';

const App = () => {
  return (
    <div>
     <SearchBar />
    </div>
  );
};


ReactDOM.render(<App/>, document.getElementById('container'));

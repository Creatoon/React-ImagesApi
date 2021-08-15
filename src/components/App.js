import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component  {

   state = { images: [] };

   onSearchSubmit = async (term) => {
      const response = await axios({
         method: 'GET',
         url: 'https://api.unsplash.com/search/photos',
         params: {
            query: term
         },
         headers: {
            Authorization: 'Client-ID DllE7VIkSjJf9XAKMdci-5Lvppep1W43DWl_k4XkehU'
         }
      });

      this.setState({ images: response.data.results });
   }

   render() {
      return (
         <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={ this.state.images }/>
         </div>
      )   
   }
}

export default App;

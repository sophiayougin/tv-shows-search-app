import React from 'react';
import Header from './Header';
import axios from 'axios';
import SearchInput from './SearchInput';
import Images from './Images';

class SearchPage extends React.Component{
  constructor(){
    super();
    this.state = {
      imageUrl : {},
      isSearchingFinished: false
    }
  }
  onSearch = (input) =>{
    const str = input;
    const url = `https://api.tvmaze.com/search/shows?q=${str}`;
    axios.get(url)
   .then(result =>{
      this.setState({
        isSearchingFinished: true
      });
      const obj = result.data.reduce((acc,item) => {
        if(item.show.image !== null){
          return {...acc,[item.show.id]: item.show.image.medium};
        }else{
          return {...acc};
        }
      },{});
     this.setState({
       imageUrl: obj
     })
     })
    .catch();
  }
  render(){
    const imageUrls = Object.entries(this.state.imageUrl);
    return(
      <div className="search-page">
        <Header/>
        <SearchInput search={this.onSearch}/>
        {this.state.isSearchingFinished
          ?Object.keys(imageUrls).length === 0
            ?<h4 style={{textAlign: 'center'}}>No Results found</h4>
            :<div className='images'>
            {imageUrls.map((url) => <Images url={url[1]} id={url[0]} key={url[0]}/>
            )}
          </div>
          :<div></div>}
      </div>
    );
  }
}

export default SearchPage;

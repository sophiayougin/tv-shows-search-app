import './App.css';
import React from 'react';
import Header from './Header';
import axios from 'axios';
import SearchInput from './SearchInput';
import Images from './Images';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      imageUrl : {}
    }
  }
  onSearch = (input) =>{
    console.log("Entered")
    var obj = {};
    const str = input;
    const url = `http://api.tvmaze.com/search/shows?q=${str}`;
   axios.get(url)
   .then(result =>{
     for(let key in result.data){
       if(result.data[key].show.image !== null){
        obj[result.data[key].show.id] = result.data[key].show.image.medium
       } 
     }
     this.setState({
       imageUrl: {...obj}
     })
     });
  }
  render(){
    const images = {...this.state.imageUrl};
    const imageUrls = Object.values(images);
    return(
      <div className="app">
        <Header/>
        <SearchInput search={(e)=>this.onSearch(e)}/>
        <div className='images'>
          {imageUrls.map((url) => <Images url={url}/>)}
        </div>
      </div>
    );
  }
}

export default App;

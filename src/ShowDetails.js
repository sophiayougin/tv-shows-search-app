import React from 'react';
import axios from 'axios';
import Images from './Images';
class ShowDetails extends React.Component{
  constructor(){
    super();
    this.state = {
      show:{},
      isLoading: true
    }
  }
  render(){
    const data = {...this.state.show};
    console.log(this.state.isLoading)
    return(
        this.state.isLoading?<h1 style={{color:'white',textAlign:'center'}}>Loading...</h1>:
        <div className="show-details-page">
            <h1>{data.name}</h1> 
            <h4>language: {data.language}</h4>
            <h4>year: {data.premiered}</h4>
            <p>{data.summary}</p>
            <img src={data.image.medium}/>
        </div>
    );
  }
  componentDidMount(){
    let showId = this.props.match.params.id
  axios.get(`http://api.tvmaze.com/shows/${showId}`)
  .then(result => {
      var temp = result.data;
      this.setState({
          show: {...temp},
          isLoading: false
      });
  });
}
}

export default ShowDetails;

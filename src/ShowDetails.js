import React from 'react';
import axios from 'axios';
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
    console.log(data)
    return(
        this.state.isLoading?<h1 style={{color:'white',textAlign:'center'}}>Loading...</h1>:
        <div className="show-details-page">
            <img src={data.image.medium} alt=''/>
            <div className='details'>
              <h1>{data.name}</h1> 
              <h4>Genre: {(data.genres.map(genre=>genre)).join(', ')}</h4>
              <h4>Language: {data.language}</h4>
              <h4>Year: {data.premiered.slice(0,4)}</h4>
              <div className='site-link'><h4>Official Site:</h4><a target="_blank" href={data.officialSite}>{data.officialSite}</a></div>
              <h4>Rating: {data.rating.average}</h4>
              <div dangerouslySetInnerHTML={{__html: data.summary}}></div>
            </div>
        </div>
    );
  }
  componentDidMount(){
    let showId = this.props.match.params.id
  axios.get(`https://api.tvmaze.com/shows/${showId}`)
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

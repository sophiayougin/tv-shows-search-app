import React from 'react';
import {Link} from 'react-router-dom';
class Images extends React.Component{ 
  render(){
    return(
        <div className='im'>
          <Link 
            to={`/shows/${this.props.id}`}>
            <img src={this.props.url} alt=''/>
          </Link> 
        </div>
    );
  }
}

export default Images;  
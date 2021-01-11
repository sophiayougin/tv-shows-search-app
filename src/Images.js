import React from 'react';
class Images extends React.Component{ 
  render(){
    console.log("images");
    return(
        <div className='im'>
            <img src={this.props.url} alt=''/>
        </div>
    );
  }
}

export default Images;
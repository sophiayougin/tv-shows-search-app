import React from 'react';
import { Input } from 'antd';

class SearchInput extends React.Component{
  render(){
    const { Search } = Input;
    return(
        <div className='search-input'>
            <Search
              className='search'
              placeholder='(eg: West World, The Boys)' 
              enterButton 
              onSearch ={this.props.search}
            />
        <br/>
        <br/>
        </div>
    );
  }
}

export default SearchInput;
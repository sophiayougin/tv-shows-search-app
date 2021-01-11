import React from 'react';
import { Input } from 'antd';

class SearchInput extends React.Component{
  render(){
    const {Search} = Input;
    return(
        <div className='search-input'>
            <Search
            style={{ width: 700 }}
            placeholder="input search text (eg: West World, Person of interest)" 
            enterButton 
            onSearch ={(inputText)=>this.props.search(inputText)}
            />
        <br/>
        <br/>
        </div>
    );
  }
}

export default SearchInput;
import React from 'react';
import { Typography } from 'antd';

class Header extends React.Component{  
  render(){
    const { Title } = Typography;
    return(
      <div className="header">
        <Title
          className='title'
          level={2}
          style={{color:'white'}}>
          Tv Shows Finder
        </Title>
      </div>
    );
  }
}

export default Header;
import './App.css';
import React from 'react';
import SearchPage from './SearchPage';
import ShowDetails from './ShowDetails';
import MetaTags from 'react-meta-tags';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="app">
          <MetaTags>
            <title>Tv Shows Finder</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </MetaTags>
          <Switch> 
            <Route path='/shows/:id' component={ShowDetails}/>
            <Route path='/' component={SearchPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

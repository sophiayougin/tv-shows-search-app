import './App.css';
import React from 'react';
import SearchPage from './SearchPage';
import ShowDetails from './ShowDetails';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="app">
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

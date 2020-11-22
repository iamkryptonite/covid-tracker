import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Statewise from './components/statewise/Statewise';
class App extends React.Component{
  state={key:'1'} 
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/map"><Statewise/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

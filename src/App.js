import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
import Statewise from './components/statewise/Statewise';
import Symptoms from './components/symptoms/Symptoms'
class App extends React.Component{
  state={key:'1'} 
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/map"><Statewise/></Route>
            <Route path="/symptoms"><Symptoms/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

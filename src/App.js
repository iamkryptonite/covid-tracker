import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home'
// import axios from 'axios';
class App extends React.Component{
  // state={statewise:1};
  // componentDidMount(){
  //   axios.get('https://api.covid19india.org/data.json').then(res=>{
  //     this.setState({
  //       statewise:res.data.statewise,
  //       casestimeseries:res.data.casestimeseries
  //     })
  //     this.getStatenames();
  //   }).catch(err=>{
  //     console.log(err);
  //   }).then(()=>{
  //     data=this.state;
  //     console.log(data)
  //   })
  // }
  // getStatenames(){
  //   var allstates=[];
  //   this.state.statewise.forEach(st => {
  //     if(st.statecode!=='TT'&& st.statecode!=='UN'){
  //       allstates.push(st.state);
  //     }      
  //   });
  //   this.setState({allstates});
  // }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Home/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }  
}
export default App;

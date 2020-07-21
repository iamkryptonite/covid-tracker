import React from 'react';
import './App.css';
import SideMenu from './constants/SideMenu'
import axios from 'axios';
class App extends React.Component{
  state={}
  componentDidMount(){
    axios.get('https://api.covid19india.org/data.json').then(res=>{
      console.log(res.data);
      this.setState({
        statewise:res.data.statewise,
        casestimeseries:res.data.casestimeseries
      })
      this.getStatenames();
    }).catch(err=>{
      console.log(err);
    })
  }
  getStatenames(){
    var allstates=[];
    this.state.statewise.forEach(st => {
      if(st.statecode!=='TT'&& st.statecode!=='UN'){
        allstates.push(st.state);
      }      
    });
    this.setState({allstates});
  }
  render(){
    return (
      <div className="App">
        <SideMenu states = {this.state.allstates} />      
      </div>
    );
  }  
}
export default App;

import React from 'react'
import axios from 'axios'
import { Table } from 'antd'
import './Home.css'
import SideMenu from '../../constants/SideMenu'
const columns = [
    {
      title: 'Name',
      dataIndex: "name",

     
    },
    {
      title: 'Active',
      dataIndex: 'active',
      // width:50,
      sorter: {
        compare: (a, b) => a.active - b.active,
        multiple: 4,
      },
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      // width:50,
      sorter: {
        compare: (a, b) => a.confirmed - b.confirmed,
        multiple: 3,
      },
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      // width:50,
      sorter: {
        compare: (a, b) => a.deaths - b.deaths,
        multiple: 2,
      },
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      // width:50,
      sorter: {
        compare: (a, b) => a.recovered - b.recovered,
        multiple: 1,
      },
    },
  ];
var data=[];
class Home extends React.Component{
    state={}        
    componentDidMount(){
      axios.get('https://api.covid19india.org/data.json').then(res=>{
      this.setState({
        statewise:res.data.statewise,
        casestimeseries:res.data.casestimeseries
      })
      var key=1;  
      this.state.statewise.forEach(el => {
        if(el.statecode!=='TT'){
          data.push({
            key:String(key++),
            name:el.state,
            active:parseInt(el.active),
            confirmed:parseInt(el.confirmed),
            deaths:parseInt(el.deaths),
            recovered:parseInt(el.recovered)  
          })
        }         
      });
    }).catch(err=>{
      console.log(err);
    }).then(()=>{
      this.setState({data:data});
      console.log(this.state.data)
    }) 
    }
    onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }
    render(){
        return(
            <>
              <SideMenu/>
              <main>                    
                  <Table columns={columns} dataSource={this.state.data} onChange={this.onChange} pagination={false} size={"small"}/>
              </main>
            </>
        )
    }
}
export default Home
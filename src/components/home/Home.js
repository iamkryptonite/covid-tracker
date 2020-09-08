import React from 'react'
import axios from 'axios'
import { Table,Row,Col } from 'antd'
import './Home.css'
import SideMenu from '../../constants/SideMenu'
import CanvasJSReact from '../../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const columns = [
    {
      title: 'Name',
      dataIndex: "name",

     
    },
    {
      title: 'Active',
      dataIndex: 'active',
      sorter: {
        compare: (a, b) => a.active - b.active,
        multiple: 4,
      },
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      sorter: {
        compare: (a, b) => a.confirmed - b.confirmed,
        multiple: 3,
      },
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      sorter: {
        compare: (a, b) => a.deaths - b.deaths,
        multiple: 2,
      },
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      sorter: {
        compare: (a, b) => a.recovered - b.recovered,
        multiple: 1,
      },
    },
  ];
  
var data=[];
var options = {
    
  animationEnabled: true,
  title:{
    text: ""
    
  },
  axisX: {
    // valueFormatString: "MMM"
  },
  axisY: {
    // title: "Sales (in USD)",
    // prefix: "$"
  },
  data: [{
    // yValueFormatString: "$#,###",
    // xValueFormatString: "MMMM",
    type: "spline",
    markerColor:"#bf422c",
    lineColor:"#bf422c",
    dataPoints: this.state.deaths
  }]
}
class Home extends React.Component{
    state={recovered:[],deaths:[],active:[]}        
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
      })
      var t=1;
      this.state.casestimeseries.forEach(el => {
        if(t<=20){
          this.state.active.push({x:el.date,y:el.totalconfirmed});
          this.state.deaths.push({x:el.date,y:el.totaldeceased});
          this.state.recovered.push({x:el.date,y:el.totalrecovered});
          t++;
        }
        

      })
      // options.data.dataPoints=this.state.deaths;
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
                <Row gutter={16}>
                  <Col span={12}>
                    <div className="table">
                      <Table columns={columns} dataSource={this.state.data} onChange={this.onChange} pagination={false} size={"small"}/>
                    </div>
                  </Col>
                  <Col span={12}>
                    <CanvasJSChart options = {options}/>
                    <br/>
                    <CanvasJSChart options = {options}/>
                    <br/>
                    <CanvasJSChart options = {options}/>
                  </Col>
                </Row>
              </main>
            </>
        )
    }
}
export default Home
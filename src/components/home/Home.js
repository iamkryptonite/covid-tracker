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
  const options = {
    
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
      dataPoints: [
        { x: new Date(2017, 0), y: 25060},
        { x: new Date(2017, 1), y: 27980 },
        { x: new Date(2017, 3), y: 32400 },
        { x: new Date(2017, 4), y: 35260 },
        { x: new Date(2017, 5), y: 33900 },
        { x: new Date(2017, 8), y: 32300 },
        { x: new Date(2017, 10), y: 37160 },
        { x: new Date(2017, 11), y: 38400 }
      ]
    }]
  }
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
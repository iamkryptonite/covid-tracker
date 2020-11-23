import React from 'react'
import axios from 'axios'
import { Table,Row,Col } from 'antd'
import './Home.css'
import SideMenu from '../../constants/SideMenu'
import {Line} from 'react-chartjs-2';
const {columns} = require('./func')
var {line1,line2,line3} = require('./func');
var data=[];
class Home extends React.Component{
    state={recovered:[],deaths:[],active:[],labels:[]};
    componentDidMount(){
      axios.get('https://api.covid19india.org/data.json').then(res=>{
      this.setState({
        statewise:res.data.statewise,
        casestimeseries:res.data.cases_time_series
      })
      var key=1;
      this.state.statewise.forEach(el => {
        if(el.statecode!=='TT' && el.statecode!=='UN'){
          data.push({
            key:String(key++),
            name:el.state,
            active:parseInt(el.active),
            confirmed:parseInt(el.confirmed),
            deaths:parseInt(el.deaths),
            recovered:parseInt(el.recovered)
          })
        }else if(el.statecode ==='TT'){
          this.setState({
            totalactive:Math.round(parseInt(el.active)/1000),
            totalconfirmed:Math.round(parseInt(el.confirmed)/1000),
            totaldeaths:parseInt(el.deaths),
            totalrecovered:Math.round(parseInt(el.recovered)/1000),
            updateTime:el.lastupdatedtime
          })
        }
      })
      var t=1;
      this.state.casestimeseries.forEach(el => {
          this.state.active.push(parseInt(el.dailyconfirmed));
          this.state.deaths.push(parseInt(el.dailydeceased));
          this.state.recovered.push(parseInt(el.dailyrecovered));
          this.state.labels.push(el.date);
          t++;
          if(t>8){
            this.state.active.shift();
            this.state.deaths.shift();
            this.state.recovered.shift();
            this.state.labels.shift();
          }
      })
    })
    .catch(err=>{
      console.log(err);
    })
    .then(()=>{
      this.setState({data:data});
      line1.datasets[0].data=this.state.active;
      line1.labels=this.state.labels;
      line2.labels=this.state.labels;
      line3.labels=this.state.labels;
      line2.datasets[0].data=this.state.deaths;
      line3.datasets[0].data=this.state.recovered;
      this.setState({line1:line1,line2:line2,line3:line3})

    })
    }
    onChange(pagination, filters, sorter, extra) {
      console.log('params', pagination, filters, sorter, extra);
    }
    render(){
       return(
            <>
              <SideMenu menuKey={'1'}/>
              <main>
                <div className="liveCount">
                  <h1>Live Count</h1>
                  <Row gutter={16}>
                    <Col span={8}>
                      <h2 className="active">Active : {this.state.totalactive}K</h2>
                    </Col>
                    <Col span={8}>
                      <h2 className="death">Deaths : {this.state.totaldeaths}</h2>
                    </Col>
                    <Col span={8}>
                      <h2 className="recovered">Recovered : {this.state.totalrecovered}K</h2>
                    </Col>
                  </Row>
                  <h5>Last updated: {this.state.updateTime}</h5>
                </div>
                <Row gutter={32}>
                  <Col span={12}>
                    <div className="table">
                      <Table columns={columns} dataSource={this.state.data} onChange={this.onChange} pagination={false} size={"small"}/>
                    </div>
                  </Col>
                  <Col span={1}/>
                  <Col span={10}>
                    <Line data={this.state.line1} />
                    <br/>
                    <br/>
                    <br/>
                    <Line data={this.state.line2} />
                    <br/>
                    <br/>
                    <br/>
                    <Line data={this.state.line3} />
                    <br/>
                    <br/>
                    <br/>
                  </Col>
                </Row>
              </main>
            </>
        )
    }
}
export default Home
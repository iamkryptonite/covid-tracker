import React from 'react'
import axios from 'axios'
import { Table,Row,Col } from 'antd'
import './Home.css'
import SideMenu from '../../constants/SideMenu'
import {Line} from 'react-chartjs-2';
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
var line1 = {
  labels: "",
  datasets: [
    {
      label: 'Daily Confirmed Cases',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '',
      borderColor: '',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: ""
    }
  ]
};
var line2 = {
  labels: "",
  datasets: [
    {
      label: 'Daily Confirmed Cases',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '',
      borderColor: '',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: ""
    }
  ]
};
var line3 = {
  labels:"",
  datasets: [
    {
      label: 'Daily Confirmed Cases',
      fill: false,
      lineTension: 0.4,
      backgroundColor: '',
      borderColor: '',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data: ""
    }
  ]
};

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
      // let line1=line;
      // let line2=line;
      console.log(line1);
      line1.datasets[0].label="Daily Confirmed Cases";
      line1.datasets[0].borderColor="#06418a";
      line1.datasets[0].pointBorderColor="#06418a";
      line1.datasets[0].pointHoverBackgroundColor="#06418a";
      line1.datasets[0].pointHoverBorderColor="#06418a";
      line1.datasets[0].data=this.state.active;
      line1.labels=this.state.labels;
      line2.labels=this.state.labels;
      line3.labels=this.state.labels;
      line2.datasets[0].label="Daily Deaths";
      line2.datasets[0].borderColor="#a31414";
      line2.datasets[0].pointBorderColor="#a31414";
      line2.datasets[0].pointHoverBackgroundColor="#a31414";
      line2.datasets[0].pointHoverBorderColor="#a31414";
      line2.datasets[0].data=this.state.deaths;
      line3.datasets[0].label="Daily Recovery";
      line3.datasets[0].borderColor="#118a06";
      line3.datasets[0].pointBorderColor="#118a06";
      line3.datasets[0].pointHoverBackgroundColor="#118a06";
      line3.datasets[0].pointHoverBorderColor="#118a06";
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
              <SideMenu/>
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
                  </Col>
                </Row>
              </main>
            </>
        )
    }
}
export default Home
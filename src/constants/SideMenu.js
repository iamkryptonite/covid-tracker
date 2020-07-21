import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  HomeOutlined,
  TeamOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import './styles/SideMenu.css'
import 'antd/dist/antd.css';
const { Sider } = Layout;
const { SubMenu } = Menu;
class SideMenu extends React.Component{
    state = {
        collapsed: false,
        allstates:this.props.states
      };
      // var names =  this.state.allstates.map((val,index)=>{
      //   <Menu.Item key={index}>{val}</Menu.Item>
      // });   
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
      printStates(){
        // var key = 3;
        var states = this.state.allstates;
        var statenames = states.map((val,index)=>(
          <Menu.Item key={index}>{val}</Menu.Item>
        ));
        // return statenames;
        // console.log(this.props.states)
      }    
      render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height:'100vh'}}>
              <div className="logo">LOGO</div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <a href="/">Home</a>
                </Menu.Item>
                {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Option 2
                </Menu.Item> */}
                <SubMenu key="sub1" icon={<LineChartOutlined />} title="Statewise">
                  {/* <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item> */}
                  {this.printStates()}
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
        )
    }
}
export default SideMenu
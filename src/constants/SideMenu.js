import React from 'react'
import { Layout, Menu} from 'antd';
import {
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
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
      render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height:'100vh'}}>
              <div className="logo">LOGO</div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <a href="/">Home</a>
                </Menu.Item>
                <Menu.Item key="2" icon={<LineChartOutlined />} title="Statewise">
                  <a href="/map">Statewise</a>
                </Menu.Item>
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
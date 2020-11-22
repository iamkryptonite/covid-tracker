import React from 'react'
import { Layout, Menu} from 'antd';
import {HomeOutlined,LineChartOutlined} from '@ant-design/icons';
import './styles/SideMenu.css'
import 'antd/dist/antd.css';
const { Sider } = Layout;
class SideMenu extends React.Component{
  state = {
      collapsed: false,
      key:this.props.menuKey
    };
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
    handleClick=(e)=>{
      console.log(e);
    }
    render() {
      console.log(this.props)
      return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{height:'100vh'}}>
          <div className="logo">LOGO</div>
          <Menu theme="dark" defaultSelectedKeys={[this.state.key]} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="2" icon={<LineChartOutlined />} title="Statewise">
              <a href="/map">Statewise</a>
            </Menu.Item>
          </Menu>
        </Sider>
      )
  }
}
export default SideMenu
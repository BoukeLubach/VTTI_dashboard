import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

function BaseLayout(props) {
  const { Content, Footer } = Layout;
  const [terminalList, setTerminalList] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/terminals/")
      .then((res) => {
        // console.log(res.data.results)
        setTerminalList(res.data.results)
      });
  }, []);



  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>

          <SubMenu key="VTTI_global" title="VTTI global">
                <Menu.Item key="Map"><Link to="/map">Map</Link></Menu.Item>
                <Menu.Item key="Projects">Projects</Menu.Item>
                <Menu.Item key="CO2">CO<sub>2</sub></Menu.Item>
          </SubMenu>

          <SubMenu key="terminal_dropdown" title="Terminals">
            {terminalList.map((terminal, index) => 
                <Menu.Item key={terminal.id}>{terminal.name}</Menu.Item>
              )}
          </SubMenu>     
            
          <Menu.Item key="9">Projects</Menu.Item>
          <Menu.Item key="9"><Link to="/about">About</Link></Menu.Item>
          {/* <Menu.Item key="terminals">Terminals</Menu.Item>
          <Menu.Item key="terminals">Terminals</Menu.Item>
          <Menu.Item key="terminals">Terminals</Menu.Item> */}

        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout >
    // <Layout>
    //   <Content style={{ padding: "100px 50px" }}>





    //     <Layout
    //       className="site-layout-background"
    //       style={{ padding: "24px 0" }}
    //     >
    //       {/* <div className="col-md-2">
    //                     <Submenu />
    //                 </div> */}
    //       <div className="col-md-12">
    //         <Content style={{ padding: "0 24px", minHeight: 280 }}>
    //           {props.children}
    //         </Content>
    //       </div>
    //     </Layout>
    //   </Content>
    //   <Footer style={{ textAlign: "center" }}>Footer</Footer>
    // </Layout>
  );
}

export default BaseLayout;

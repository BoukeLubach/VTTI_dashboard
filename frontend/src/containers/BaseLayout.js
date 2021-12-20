import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import HeaderInstance from "./Header"

const { Content, Footer } = Layout;
const { SubMenu } = Menu;

function BaseLayout(props) {
  const { Content, Footer } = Layout;



  return (
    <Layout className="layout">
      <HeaderInstance />
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

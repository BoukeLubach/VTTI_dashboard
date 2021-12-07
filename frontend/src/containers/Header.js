import React, { useEffect, useCallback, useMemo } from "react";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTerminals } from "../redux/actions/terminalsActions";


const { Header } = Layout;
const { SubMenu } = Menu;


function HeaderInstance() {

  const terminals = useSelector((state) => state.allTerminals.terminals);
  const dispatch = useDispatch();
  const fetchTerminals = async () => {
    const response = await axios
      .get("http://localhost:8000/api/terminals/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data.results)
    dispatch(setTerminals(response.data.results));
  };
  useEffect(() => {
    fetchTerminals();
  }, []);

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>

        <SubMenu key="VTTI_global" title="VTTI global">
          <Menu.Item key="Map"><Link to="/map">Map</Link></Menu.Item>
          <Menu.Item key="Projects">Projects</Menu.Item>
          <Menu.Item key="CO2">CO<sub>2</sub></Menu.Item>
        </SubMenu>

        <SubMenu key="terminal_dropdown" title="Terminals">
          {terminals.map((terminal, index) =>
            <Menu.Item key={terminal.id}><Link to={"/terminal/" + terminal.id}>{terminal.name}</Link></Menu.Item>
          )}
        </SubMenu>

        <Menu.Item key="9">Projects</Menu.Item>
        <Menu.Item key="9"><Link to="/about">About</Link></Menu.Item>
        {/* <Menu.Item key="terminals">Terminals</Menu.Item>
          <Menu.Item key="terminals">Terminals</Menu.Item>
          <Menu.Item key="terminals">Terminals</Menu.Item> */}

      </Menu>
    </Header>
  )
}

export default HeaderInstance

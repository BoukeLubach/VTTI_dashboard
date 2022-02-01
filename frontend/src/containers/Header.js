import React, { useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTerminals } from "../redux/actions/terminalsActions";
import {
  Container,
  Dropdown,
  Menu,
  Divider
} from 'semantic-ui-react'



function HeaderInstance() {

  const terminals = useSelector((state) => state.allTerminals.terminals);
  const dispatch = useDispatch();
  const fetchTerminals = async () => {
    const response = await axios
      .get("http://localhost:8000/api/terminals/")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setTerminals(response.data.results));
  };

  useEffect(() => {
    fetchTerminals();
  }, []);

  return (
    <Menu fixed='top' inverted>
      <Container>

        <Menu.Item as='a' href="/">Home</Menu.Item>
        <Menu.Item as='a' header href="/summary">
          VTTI ghg roadmap
        </Menu.Item >
        <Dropdown item simple text='Terminals'>
          <Dropdown.Menu>
            {terminals.map((terminal, index) =>
              <Dropdown.Item key={terminal.id} href={"/terminal/" + terminal.id}>{terminal.name}</Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item as='a' href="/map">Map</Menu.Item>
        <Menu.Item as='a' href="/terminallist">Terminal list</Menu.Item>
        <Menu.Item as='a' href="/projects">Projects</Menu.Item>
        <Menu.Item as='a' href="/emissions">Emissions</Menu.Item>
        {/* <Menu.Item as='a'>Projects</Menu.Item> */}

      </Container>
    </Menu>

  )
}

export default HeaderInstance

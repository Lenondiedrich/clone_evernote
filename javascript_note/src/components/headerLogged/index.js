import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Column, Dropdown, Navbar } from "rbx";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import LogoImage from "../../assets/images/logo-white.png";
import UserService from "../../services/users";
import "../../styles/header.scss";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  if (redirectToHome === true) return <Redirect to={{ pathname: "/" }} />;

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={LogoImage} alt="Logo" />
            </Link>
          </Column>
        </Column.Group>
        <Navbar.Burger
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment
          as="div"
          className="navbar-item navbar-start"
          align="start"
        >
          <Navbar.Item as="div">
            <Button
              className="open-button"
              color="white"
              outlined
              onClick={() => props.setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faList} />
            </Button>
          </Navbar.Item>
        </Navbar.Segment>
        <Navbar.Segment
          as="div"
          className="navbar-item navbar-end"
          align="right"
        >
          <Navbar.Item as="div">
            <Dropdown>
              <Dropdown.Trigger>
                <Button className="button" color="white" outlined>
                  <span>{user.name} ▼</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/users/edit">User Edit</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <a onClick={(e) => logOut()}>Log out</a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
}

export default HeaderLogged;

import React, { Component } from "react";
import styled from "styled-components";
import { Header, Image } from "semantic-ui-react";

const NavStyle = styled.div`
    display: flex;
    background-color: #00b5ad;
    color: white;
    font-size: 2rem;
    padding: 1.2rem;
    font-weight: 600;
    justify-content: space-between;
    .menu {
        align-content: center;
        width: 25%;
    }
`;

class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <Header as="h2">
                    <Image circular src={require("../../img/me.jpg")} alt="me" /> Woomj
                </Header>
                <div className="menu">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </NavStyle>
        );
    }
}

export default NavBar;

import React, { Component } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
    background-color: #e6f8e0;
    color: black;
    text-align: center;
    line-height: 40px;
    margin: 0;
    padding: 20px;
`;

class Contact extends Component {
    render() {
        return (
            <ContactContainer>
                <div className="contact">
                    <p>H.P : 010-8446-7066</p>
                    <p>E-mail : speedcross99@naver.com</p>
                    <p>COPYRIGHT ⓒ 2020, Woomj 우민제 ALL RIGHTS RESERVED.</p>
                </div>
            </ContactContainer>
        );
    }
}

export default Contact;

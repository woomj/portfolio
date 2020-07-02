import React, { Component } from "react";
import { FlexBox } from "../reuseable/styles";
import styled from "styled-components";

const AboutContainer = styled.div`
    position: flex;
    margin: 0 auto;
    width: 100%;
    height: 600px;
    .label {
        font-weight: bold;
        text-align: center;
    }
    .me {
        margin-top: 30px;
        width: 300px;
        height: 400px;
    }
    .job {
        color: #aaa;
        font-size: 18px;
        letter-spacing: 1.5px;
    }
    .name {
        font-size: 24px;
        font-weight: bold;
        margin-top: 5px;
        border-bottom: 0.5px solid black;
        padding-bottom: 10px;
        width: 90%;
    }
`;

class About extends Component {
    render() {
        return (
            <AboutContainer>
                <FlexBox>
                    <div className="flex-3" style={{ padding: "25px" }}>
                        <img className="me" src={require("../../img/me.jpg")} alt="profile" />
                    </div>
                    <div className="flex-4" style={{ paddingTop: "30px" }}>
                        <div className="job">Front-end Developer</div>
                        <div className="name">우 민제</div>
                        <br />
                        <FlexBox>
                            <div className="flex-2 label">School</div>
                            <div className="flex-1">&nbsp;</div>
                            <div className="flex-6">Good School</div>
                        </FlexBox>
                        <FlexBox style={{ marginTop: "7px" }}>
                            <div className="flex-2 label">Phone</div>
                            <div className="flex-1">&nbsp;</div>
                            <div className="flex-6">+1 908-111-2222</div>
                        </FlexBox>
                    </div>
                </FlexBox>
            </AboutContainer>
        );
    }
}

export default About;

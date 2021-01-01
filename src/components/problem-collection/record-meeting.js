import React from 'react';
import styled from 'styled-components';
import { Button, Typography, Icon } from 'antd';
import Notes from './meeting-notes';
import Problem from './problem';
import { Link } from 'react-router-dom';
import LandingPage from '../../landing-page';
import ProblemPreview from '../common-items/problem-preview';
import Heading from '../common-items/heading';
import BoxDiv from '../common-items/box';

const { Text } = Typography;
const { Title } = Typography;
const Btn = styled(Button)`
display: block;
    margin: 3%;
`
const Txt = styled.text`
width: 50%;
font-size: 140%;
padding: 1%;
border: 1px solid lightgray;
margin: 5%;
display: block;
`

function Record() {

    return (
        <div><center>
            <Heading link="/landingpage" text="Record Meeting after Mohalla Sabha" />
            <BoxDiv>

                <Link to="/notes/">
                    <Btn type="primary" id="btn"> Add meeting notes </Btn>
                </Link>
                <Link to="/problem/">
                    <Btn type="primary" id="btn"> Add Problem </Btn>
                </Link>
                <br />
                <Title level={3}> Today's Problems: </Title>
                <ProblemPreview />
                <ProblemPreview />
                <ProblemPreview />

            </BoxDiv></center>
        </div >

    );

}

export default Record;
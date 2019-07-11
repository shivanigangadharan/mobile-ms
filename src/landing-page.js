import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import ProblemList from './components/track-problem/problem-list';
import { Link } from 'react-router-dom';
import Record from './components/problem-collection/record-meeting';
import App from './components/mapping/App';
import Heading from './components/common-items/heading';

const Btn = styled(Button)`
display: block;
  font-size:140%;
  margin: 10%;
  width: 80%;
  height: 3rem;
 `
function LandingPage() {
    return (
        <center>
            <Heading link="/mobile" text="Hi! What would you like to do?"></Heading>
            <Link to="/record">
                <Btn type="primary"> Record Meeting </Btn>
            </Link>
            <Link to="/mobile/problemlist" >
                <Btn type="primary"> Track Problem </Btn>
            </Link>
            <Link to="/mapping/list">
                <Btn type="primary"> Mapping </Btn>
            </Link>
            <Link to="/mobile">
                <Btn type="primary"> Sign Out </Btn>
            </Link>
        </center>
    );
}

export default LandingPage;

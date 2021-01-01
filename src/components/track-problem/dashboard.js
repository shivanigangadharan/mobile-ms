import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Button, Tag, Icon } from 'antd';
import Filter from './filter';
import ProblemList from './problem-list';
import { Link } from 'react-router-dom';
import Heading from '../common-items/heading';
import BoxDiv from '../common-items/box';

const Btn = styled(Button)`
    margin: 2%;
`
const Tags = styled(Tag)`
display: inline;
`
const Label = styled.text`
display: inline !important;
font-weight: bold;
`
function Dashboard() {
    return (
        <div>
            <center>
                <Heading link="/problemlist" text="Dashboard" />
                <br />
                <Link to="/filter">
                    <Btn type="primary"> Filter </Btn>
                </Link>
                <Link to="/problemlist">
                    <Btn type="primary"> List View </Btn>
                </Link>
                <br />
                <Label>Active filters: </Label>
                <Tags> Category: Project </Tags>
                <Tags> Owner: xyz </Tags><br /><br />
                <Label> Status: </Label>
                <Tags color="red"> Pending </Tags><br /><br />
                <h4>Grievances:</h4>
                <BoxDiv>
                    Total: 5  <br />
                    Pending: 1  <br />
                    Resolved: 1 <br />
                    Deadline Missed: 1  <br />
                    Completed: 2    <br />
                </BoxDiv>
                <h4>Projects:</h4>
                <BoxDiv>
                    Total: 6  <br />
                    In consideration: 3  <br />
                    In construction: 1 <br />
                    Finished: 2    <br />
                </BoxDiv>
                <h4>Budget:</h4>
                <BoxDiv>
                    Total: 3  <br />
                    Remaining: 1  <br />
                </BoxDiv>
                <BoxDiv>
                    <h4> Visualization (filtered data): </h4>
                    <br />
                    <img width="140" alt="NA" src="https://cdn4.iconfinder.com/data/icons/business-and-office-3-2/65/138-512.png" />
                    <br /><br />
                </BoxDiv>
            </center>
        </div>
    );
}

export default Dashboard;

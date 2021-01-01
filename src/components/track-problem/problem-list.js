import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Tag, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Filter from './filter';
import Dashboard from './dashboard';
import ProblemPreview from '../common-items/problem-preview';
import Heading from '../common-items/heading';

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
function ProblemList() {

    return (
        <div>
            <center>
                <Heading link="/landingpage" text="Problem List" />
                <br />
                <Link to="/filter/">
                    <Btn type="primary"> Filter </Btn>
                </Link>
                <Link to="/dashboard/">
                    <Btn type="primary"> Dashboard </Btn>
                </Link><br />
                <Label>Active filters: </Label>
                <Tags> Category: Project </Tags>
                <Tags> Owner: xyz </Tags><br /><br />
                <Label> Status: </Label>
                <Tags color="green"> Resolved </Tags><br /><br />
                <ProblemPreview />
                <ProblemPreview />
                <ProblemPreview />
                <ProblemPreview />

            </center>

        </div>
    );
}

export default ProblemList;

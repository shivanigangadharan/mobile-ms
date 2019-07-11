import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Collapse, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
    
const getArea = gql`
query{
    Area{
       AreaName
    }
}
`
const Panel = Collapse.Panel;
const Drop = styled(Panel)`
    width: 80%;
    align-contents: left !important;
`

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

function ProblemPreview(props) {
    console.log("Area = ", props.data.Area);

    return (
        <div>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
            >  
                <Drop header="Problem:
                    Owner:
                    Assignee: N.O./Contractor
                    Status:" 
                 key="2" style={customPanelStyle}>
                    <h4> Problem Title </h4>
                <p> Problem description and photo </p>
                <p> Status: status </p>
                <p> Deadline: 10/10/20 </p>
                <p> Date: date of creation </p>
                <p>Owner: Person name </p>
                <p> Assignee: N.O./Contractor </p>
                <p> Latest activity: latest activity info </p>           
                <Link to="/mobile/details">
                    <Button type="primary"> Full details </Button>
                </Link>
                </Drop>
            </Collapse>
        </div >
    )
}
export default graphql(getArea)(ProblemPreview);
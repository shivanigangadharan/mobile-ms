import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Icon, Button } from 'antd';
import AddComment from './comment';
import { Link } from 'react-router-dom';
import Heading from '../common-items/heading';

const Label = styled.text`
display: inline !important;
font-weight: bold;
margin:2%;
`
const Left = styled.div`
text-align: left;
margin-left: 4%;
`
function Details() {
    return (
        <div>
            <center>
                <Heading link="/problemlist" text="Problem Details" />
                <br />
                <Left>
                    <Label> Problem Title: </Label>
                    Street Lights <br />
                    <Label> Problem Description: </Label>
                    Description of the problem<br />
                    <Label> Photos: </Label><br />
                    <img alt="example"
                        style={{
                            width: '25%',
                            padding: '2%',
                            margin: '2%',
                            border: '1px solid lightgray',
                            borderradius: '4%'
                        }} src="https://images.homedepot-static.com/productImages/cf7214a0-8071-40bf-b8f8-8d170c4dce07/svn/cinnamon-with-onyx-glaze-kraftmaid-cabinet-samples-rdcds-hd-ab9c4-a48c-64_1000.jpg" />
                    <img alt="example"
                        style={{
                            width: '25%',
                            padding: '2%',
                            margin: '2%',
                            border: '1px solid lightgray',
                            borderradius: '4%'
                        }} src="https://images.homedepot-static.com/productImages/cf7214a0-8071-40bf-b8f8-8d170c4dce07/svn/cinnamon-with-onyx-glaze-kraftmaid-cabinet-samples-rdcds-hd-ab9c4-a48c-64_1000.jpg" />
                    <img alt="example"
                        style={{
                            width: '25%',
                            padding: '2%',
                            margin: '2%',
                            border: '1px solid lightgray',
                            borderradius: '4%'
                        }} src="https://images.homedepot-static.com/productImages/cf7214a0-8071-40bf-b8f8-8d170c4dce07/svn/cinnamon-with-onyx-glaze-kraftmaid-cabinet-samples-rdcds-hd-ab9c4-a48c-64_1000.jpg" />
                    <br />
                    <Label> Status: </Label>
                    Resolved/Pending
             <br />
                    <Label> Date: </Label>
                    10/10/20
             <br />
                    <Label> Next Step: </Label>
                    Details of next step
             <br />
                    <Label> Deadline: </Label>
                    January 10, 2020
             <br />
                    <Label> Owner Name: </Label>
                    Ms Xyz
             <br />
                    <Label> Phone Number: </Label>
                    9811XXXXXX
                <Button style={{ margin: '2%' }}> Call <Icon type="phone" /> </Button>
                    <br />
                    <Label> Address: </Label>
                    15, Yemen Road, Yemen
             <br />
                    <Label> Email Address: </Label>
                    example@getMaxListeners.com
             <br />
                    <Label> Assignee: </Label>
                    Contractor name.
                <Button style={{ margin: '2%' }}> Call <Icon type="phone" /> </Button>
                    <br />
                </Left>
                <Link to="/problemlist">
                    <Button type="primary"> Reopen Problem </Button>
                </Link>
                <AddComment />
            </center>
        </div>
    );
}

export default Details;

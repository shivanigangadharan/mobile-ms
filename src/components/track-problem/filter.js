import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Checkbox, Menu, DatePicker, Dropdown, Button, Icon } from 'antd';
import ProblemList from './problem-list';
import { Link } from 'react-router-dom'
import { AutoComplete } from 'antd';
import Heading from '../common-items/heading';

const ownerlist = ['Kanishk Batra', 'G Shivani', 'Ansh Arora'];
const assigneelist = ['Kanishk Batra', 'G Shivani', 'Ansh Arora'];

const categoryOptions = [
    { label: 'Grievance', value: 'Grievance' },
    { label: 'Problem', value: 'Problem' },
];
const statusOptions = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Reopened', value: 'Reopened' },
    { label: 'Deadline Missed', value: 'Deadline Missed' },
    { label: 'Resolved', value: 'Resolved' },
    { label: 'Under consideration', value: 'Under consideration' },
    { label: 'Under construction', value: 'Under construction' },
];
const Label = styled.text`
display: inline !important;
font-weight: bold;
margin:2%;
`
const CheckboxCategory = styled(Checkbox.Group)`
`
const CheckboxStatus = styled(Checkbox.Group)`
text-align: center;
margin: 2%;
`
const Btn = styled(Button)`
    margin: 2%;
`

function Filter() {

    const menu = (
        <Menu>
            <Menu.Item key="Menu item 1" onClick={e => { setOwner(e.key) }} >
                <Icon type="user" />
                1st menu item
          </Menu.Item>
            <Menu.Item key="Menu item 2" onClick={e => { setOwner(e.key) }} >
                <Icon type="user" />
                2nd menu item
          </Menu.Item>
            <Menu.Item key="Menu item 3" onClick={e => { setOwner(e.key) }} >
                <Icon type="user" />
                3rd item
          </Menu.Item>
        </Menu>
    );
    const menu2 = (
        <Menu >
            <Menu.Item key="Menu item 1" onClick={e => { setAssignee(e.key) }}>
                <Icon type="user" />
                1st menu item
          </Menu.Item>
            <Menu.Item key="Menu item 2" onClick={e => { setAssignee(e.key) }} >
                <Icon type="user" />
                2nd menu item
          </Menu.Item>
            <Menu.Item key="Menu item 3" onClick={e => { setAssignee(e.key) }} >
                <Icon type="user" />
                3rd item
          </Menu.Item>
        </Menu>
    );


    const [category, setCategory] = useState('');
    const [owner, setOwner] = useState('');
    const [status, setStatus] = useState('');
    const [assignee, setAssignee] = useState('');
    const [date, setDate] = useState('');


    function handleSubmit() {
        console.log("Category is: ", category);
        console.log("Owner is: ", owner);
        console.log("Status is: ", status);
        console.log("Assignee is: ", assignee);
        console.log("Date is: ", date);

    }

    return (
        <div>
            <center>
                <Heading link="/mobile/problemlist" text="Filter" />
                <br />
                <Label>Category:</Label>
                <CheckboxCategory onChange={e => { setCategory(e) }} style={{ width: '100%' }} options={categoryOptions} /><br />
                <br />
                <Label>Owner:</Label>
                <AutoComplete
                    style={{ width: 200 }}
                    dataSource={ownerlist}
                    placeholder="Search owner"
                    onChange={e => { setOwner(e) }}
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                /> <br /> <br />
                <Label>Status:</Label> <br />
                <CheckboxStatus onChange={e => { setStatus(e) }} style={{ width: '100%' }} options={statusOptions} />
                <br /> <br />
                <Label>Assignee:</Label>
                <AutoComplete
                    style={{ width: 200 }}
                    dataSource={assigneelist}
                    placeholder="Search assignee"
                    onChange={e => { setAssignee(e) }}
                    filterOption={(inputValue, option) =>
                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
                <br /> <br />
                <Label> Date after: </Label>
                <DatePicker onChange={e => { setDate(e._d) }} /> <br /> <br />
                <Btn type="primary">Reset</Btn>
                <Link to="/mobile/problemlist">
                    <Btn type="primary" onClick={handleSubmit}>Done</Btn>
                </Link>
            </center>
        </div>
    );
}

export default Filter;

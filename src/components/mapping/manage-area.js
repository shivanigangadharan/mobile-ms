import React, { useState } from 'react';
import { Table, Menu, Dropdown, DatePicker, Icon, Button, Divider } from 'antd';

const columns = [
    {
        title: 'Area',
        key: 'area',
        dataIndex: 'area'
    },
    {
        title: 'Map',
        key: 'map',
        dataIndex: 'map'
    },
    {
        title: 'Assigned to',
        key: 'assignedto',
        dataIndex: 'assignedto'
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status'
    },
    {
        title: 'Date',
        key: 'date',
        dataIndex: 'date'
    },
    {
        title: 'No. of Mohalla Sabhas',
        key: 'numberofms',
        dataIndex: 'numberofms'
    },
]
function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="user" />
            1st menu item
      </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3">
            <Icon type="user" />
            3rd item
      </Menu.Item>
    </Menu>
);
function onChange(date, dateString) {
    console.log(dateString);
}

function ManageArea() {
    const [date, setDate] = useState('');
    const [assign, setAssign] = useState('');

    const data = [
        {
            area: "Laxmibai Nagar",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            status: "mapped",
            date: <DatePicker onChange={onChange} />,
            numberofms: 11,
        },
        {
            area: "Keshav Puram",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            status: "mapped",
            date: <DatePicker onChange={onChange} />,
            numberofms: 12,
        },
        {
            area: "Hauz Khas",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            status: "mapped",
            date: <DatePicker onChange={onChange} />,
            numberofms: 13,
        },
        {
            area: "RK Puram",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            status: "mapped",
            date: <DatePicker onChange={onChange} />,
            numberofms: 14,
        },
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default ManageArea;

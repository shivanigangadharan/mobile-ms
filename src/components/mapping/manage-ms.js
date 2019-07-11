import React, { useState } from 'react';
import { Table, Menu, Dropdown, DatePicker, Icon, Input, Button, Divider } from 'antd';

const columns = [
    {
        title: 'Mohalla Sabha',
        key: 'ms',
        dataIndex: 'ms'
    },
    {
        title: 'Area',
        key: 'area',
        dataIndex: 'area',
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
        title: 'Map by',
        key: 'mapby',
        dataIndex: 'mapby'
    },
    {
        title: 'Map on',
        key: 'mapon',
        dataIndex: 'mapon'
    },
    {
        title: 'Mohalla Sabha Location',
        key: 'mslocation',
        dataIndex: 'mslocation'
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

function ManageMS() {
    const [date, setDate] = useState('');
    const [assign, setAssign] = useState('');

    const data = [
        {
            ms: '10',
            area: "Laxmibai Nagar",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            mapby: <Input />,
            mapon: <Input />,
            mslocation: <Input />,
        },
        {
            ms: '11',
            area: "RK Ashram",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            mapby: <Input />,
            mapon: <Input />,
            mslocation: <Input />,
        },
        {
            ms: '12',
            area: "Shakurpur",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            mapby: <Input />,
            mapon: <Input />,
            mslocation: <Input />,
        },
        {
            ms: '10',
            area: "Laxmibai Nagar",
            map: <img src="map.jpg" />,
            assignedto: <Dropdown overlay={menu}>
                <Button>
                    Button <Icon type="down" />
                </Button>
            </Dropdown>,
            mapby: <Input />,
            mapon: <Input />,
            mslocation: <Input />,
        }
    ]
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default ManageMS;

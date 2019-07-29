import React, { useState } from 'react';
import styled from 'styled-components';
import { geolocated } from "react-geolocated";
import { Icon, Modal, Upload, Dropdown, Menu, Checkbox, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Heading from '../common-items/heading';
import BoxDiv from '../common-items/box';

const { Text } = Typography;
const Btn = styled(Button)`
margin-left: 37%;
margin-top:1%;
`
const { TextArea } = Input;
const IP = styled(Input)`
`
const CheckGPS = styled(Checkbox)`
    font-size: 120%;
`
const AutofillButton = styled(Button)`
  display: inline;
  margin: 1%;
`
function Problem(props) {
    var [category, setCategory] = useState('Select category');
    var [phone, setPhone] = useState('');
    var [fullname, setName] = useState('');
    var [address, setAddress] = useState('');
    var [email, setEmail] = useState('');
    var [location, setLocation] = useState('');
    const [gpsChecked, setGpsChecked] = useState(false);

    var [budget, setBudget] = useState('');
    var [option, setOption] = useState('Select option');
    var [description, setDescription] = useState('');

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const [fileList, setFileList] = useState('');

    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    function formSubmit() {
        console.log("Category = ", category);
        console.log("Photo = ", fileList);
        console.log("Phone no = ", phone);
        console.log("Full name = ", fullname);
        console.log("Address = ", address);
        console.log("Email = ", email);
        console.log("Location = ", location);
        if (gpsChecked && props.coords) {
            console.log("Latitude = ", props.coords.latitude, "Longitude = ", props.coords.longitude);
        }
        console.log("Budget = ", budget);
        console.log("Option = ", option);
        console.log("Description = ", description);

    }
    const menu1 = (
        <Menu onClick={e => { setCategory(e.key) }}>
            <Menu.Item key="Problem">
                Problem
          </Menu.Item>
            <Menu.Item key="Grievance">
                Grievance
          </Menu.Item>
        </Menu>
    );
    const menu2 = (
        <Menu onClick={e => { setOption(e.key) }}>
            <Menu.Item key="Option 1">
                Option 1
          </Menu.Item>
            <Menu.Item key="Option 2">
                Option 2
          </Menu.Item>
        </Menu>
    );

    return (
        <div>

            <Heading text="Add problem" link="/record" />
            <BoxDiv>
                <form onSubmit={formSubmit()}>
                    <Text> Category: </Text><br />
                    <Dropdown overlay={menu1}>
                        <Button className="input">
                            {category} <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <br /><br />
                    <Text> Photos: </Text>
                    <div className="clearfix">
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={e => { setFileList(e.fileList) }}
                        >
                            {fileList.length >= 20 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={() => { setPreviewVisible(false) }}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                    <br />
                    <Text> Owner: </Text>
                    <AutofillButton type="secondary"> Autofill </AutofillButton>
                    <br />
                    <Text> Phone no: </Text>
                    <Input className="input" type="number"
                        prefix={<Icon type="phone" />}
                        placeholder="Enter phone number"
                        onChange={e => { setPhone(e.target.value) }} /> <br />
                    <br />
                    <Text >Full name: </Text>
                    <Input className="input"
                        prefix={<Icon type="user" />}
                        placeholder="Enter full name"
                        type="text" onChange={e => { setName(e.target.value) }} /> <br />
                    <br />
                    <Text > Address: </Text>
                    <Input className="input"
                        prefix={<Icon type="home" />}
                        type="text"
                        placeholder="Enter Address"
                        onChange={e => { setAddress(e.target.value) }} /> <br />
                    <br />
                    <Text > Email: </Text>
                    <Input className="input"
                        placeholder="Enter your email"
                        onChange={e => { setEmail(e.target.value) }}
                        prefix={<Icon type="mail" />}
                    />
                    <br /><br />
                    <Text> Location:
                    </Text>
                    <Input className="input"
                        prefix={<Icon type="environment" />}
                        onChange={e => { setLocation(e.target.value) }}
                        height="40px" width="80px" type="text" placeholder="Manually typed address" />
                    <br /><br />
                    <center>
                        <CheckGPS
                            checked={gpsChecked}
                            onChange={e => { setGpsChecked(e.target.checked) }}
                        >Enable GPS Location</CheckGPS></center>
                    <div hidden={category === "Grievance" ? true : false}>
                        <br />
                        <Text> Budget: </Text>
                        <Input className="input"
                            prefix={<Icon type="dollar" />}
                            placeholder="Enter budget"
                            onChange={e => { setBudget(e.target.value) }}
                            type="number" />
                    </div>
                    {/* <div hidden={category === "Grievance" ? false : true}>
                        <Text> Category: </Text>
                        <Dropdown overlay={menu2}>
                            <Button className="input">
                                {option} <Icon type="down" />
                            </Button>
                        </Dropdown> <br />
                    </div> */}
                    <br />
                    <Text> Request/Proposal: </Text>
                    <TextArea
                        placeholder="Enter request/proposal"
                        onChange={e => { setDescription(e.target.value) }}
                        autosize={{ minRows: 2, maxRows: 6 }}
                    />

                    <Btn onClick={formSubmit} htmlType="submit" type="primary">Submit </Btn>

                </form>
            </BoxDiv>

        </div >
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    geolocationProvider: navigator.geolocation,
})(Problem);
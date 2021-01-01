import React, { useState } from 'react';
import {
    Card, Input, Menu, Checkbox, Upload, Icon,
    Radio, Modal, Form, Button, Typography
} from 'antd';
import styled from 'styled-components';
import RadioGroup from 'antd/lib/radio/group';
import Advanced from './advanced';
import { Link } from 'react-router-dom';
import BoxDiv from '../common-items/box';
import { graphql, compose } from 'react-apollo';
import { addMappingData } from '../services/queries';
import axios from 'axios'
import { MapView } from './map';

const { Title } = Typography;
const { TextArea } = Input;
const { Text } = Typography;

const UploadImg = styled(Upload)`

`

const Map = styled.div`
    width: 80%;
    margin: 2%;
`
const H4 = styled(Title)`
    margin-top: 2%;
    margin-left: 18%;
`

const Long = styled(TextArea)`

`
const Btn = styled(Button)`
    margin-left: 12%;
`

function List(props) {

    console.log(" data = ", props)

    //STATE OF BASIC
    const [choice, setChoice] = useState('Basic');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState('');
    const [fileList2, setFileList2] = useState('');
    const [areaName, setAreaName] = useState('');
    const [observer, setObserver] = useState('');
    const [msname, setMSName] = useState('');
    const [houseRange, setHouseRange] = useState('');
    const [numberOfHouses, setNoOfHouses] = useState('');
    const [mslocation, setMSLocation] = useState('');
    const [img, setImg] = useState('');

    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    //CONSOLE LOG FOR BASIC
    function handleSubmitBasic() {
        console.log("Selected: ", choice);
        console.log("Values of form: ");
        console.log("Overall area name: ", areaName);
        console.log("Name of observer: ", observer);
        console.log("Mohalla Sabha name: ", msname);
        console.log("House number range: ", houseRange);
        console.log("Number of houses: ", numberOfHouses);
        console.log("Photo of map with MS marked: ", fileList);
        console.log("Suggested location for MS: ", mslocation);
        console.log("Photo of location of MS: ", fileList2);
        props.addMappingData({
            variables: {
                AreaName: areaName,
                Observer: observer,
                MSName: msname,
                HouseRange: houseRange,
                NumberOfHouses: numberOfHouses,
                MSLocation: mslocation
            }
        });
        console.log('before axios');
        axios.post('http://13.235.24.104:8080/api/file/upload', fileList, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
            }
        }).then(response => {
            // handle your response;
            console.log("sent!");
        }).catch(error => {
            // handle your error
            console.log(error)
        });
        console.log("after axios")
    }


    return (
        <div>
            <BoxDiv>
                <Form>
                    <div hidden={choice == "Basic" ? false : true}>
                        {/* <Button> Show Notification </Button> */}
                        <H4 level={4}> Mapping Information </H4>
                        <br />
                        <Text > Overall Area Name: </Text>
                        <Input placeholder="area name" onChange={e => { setAreaName(e.target.value) }} />
                        <br /><br />
                        <Text > Name of the observer: </Text>
                        <Input placeholder="observer name" onChange={e => { setObserver(e.target.value) }} />
                        <br /><br />
                        <Text> Mohalla Sabha Name: </Text>
                        <Input placeholder="MS name" onChange={e => { setMSName(e.target.value) }} />
                        <br /><br />
                        <Text> House number range: </Text>
                        <Long placeholder="Autosize height based on content lines" onChange={e => { setHouseRange(e.target.value) }} autosize />
                        <br /><br />
                        <Text> Number of houses: </Text>
                        <Input placeholder="No. of houses" onChange={e => { setNoOfHouses(e.target.value) }} />
                        <br /><br />
                        <Text> Map with Mohalla Sabha marked: </Text>


                        <Map>
                            <MapView />
                        </Map>

                        <br />
                        <Text> Suggested location for Mohalla Sabha: </Text>
                        <Input placeholder="MS name" onChange={e => { setMSLocation(e.target.value) }} />
                        <br /><br />
                        <Text> Photo of location for Mohalla Sabha: </Text>
                        <div className="clearfix">
                            <UploadImg
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList2}
                                onChange={e => { setFileList2(e.fileList) }}
                            >
                                {fileList2.length >= 20 ? null : uploadButton}
                            </UploadImg>
                            <Modal visible={previewVisible} footer={null} onCancel={() => { setPreviewVisible(false) }}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div><br />
                        {/* <Link to="/mapping/advanced"> */}
                        <Btn onClick={e => { handleSubmitBasic(e) }} htmlType="submit" type="primary">Save and fill Advanced details
                            <Icon type="arrow-right" />
                        </Btn>
                        {/* </Link> */}
                        <br />
                    </div>
                </Form>
            </BoxDiv>
        </div>
    );
}

export default compose(
    graphql(addMappingData, { name: "addMappingData" }),
)(List);
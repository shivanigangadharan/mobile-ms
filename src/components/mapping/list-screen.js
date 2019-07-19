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
// import { App } from './map';
import { graphql, compose } from 'react-apollo';
import { addMappingData } from '../services/queries';
// import Push from 'push.js';


const { Title } = Typography;
const { TextArea } = Input;
const { Text } = Typography;

const UploadImg = styled(Upload)`

`

// const Map = styled.div`
//     width: 80%;
//     margin: 2%;
// `
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
    // function showNotif() {
    //     Push.Permission.request().then(
    //         Push.create('Hello world', {
    //             body: `Body of the notification
    //     `,
    //             timeout: 5000,
    //             icon: "data:image/png;base64,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",
    //             onClick: function () {
    //                 console.log("closed notif");
    //             }
    //         })
    //     );
    // }
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
        // console.log('before axios');
        // axios.post('http://13.235.24.104:8080/api/file/upload', fileList, {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Access-Control-Allow-Origin': '*',
        //     }
        // }).then(response => {
        //     // handle your response;
        //     console.log("sent!");
        // }).catch(error => {
        //     // handle your error
        //     console.log(error)
        // });
        // console.log("after axios")
    }


    return (
        <div>
            <BoxDiv>
                <Form>
                    <div hidden={choice == "Basic" ? false : true}>
                        <Button> Show Notification </Button>
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


                        {/* <Map><App /></Map> */}

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
import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker, Button, Upload, Modal, Icon, Input, Form, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Heading from '../common-items/heading';
import BoxDiv from '../common-items/box';
import axios from 'axios';

const { Text } = Typography;
const Btn = styled(Button)`
    margin-left: 37%;
`
function onChange(date, dateString) {
    console.log(dateString);
}

function Notes(props) {
    console.log(props.data)
    function formSubmit(e) {

        for (var i = 0; i < images.length; i++) {
            pics.push(images[i].name);
        }

        e.preventDefault();
        console.log("Venue = ", venue);
        console.log("Photo = ", images);
        console.log("Pics = ", pics);
        // console.log("Add = ", add);
        console.log("object = ", body)
        console.log("Images = ", images)
        console.log("Prob Status 1 = ", ps1);
        console.log("Prob Status 2 = ", ps2);
        console.log("Prob Status 3 = ", ps3);
        console.log("Description = ", description);
        console.log('before axios');
        axios.post('http://13.235.24.104:8080/api/upload', body, {
            headers:
            {
                'Postman-Token': '5ca18ea6-ebc8-4970-a980-c3f78798ba3e',
                'cache-control': 'no-cache',
                "Access-Control-Allow-Origin": "*",
                'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
            },
        }).then(function (response) {

            console.log("response received = ", response);

        }).catch(error => {
            // handle your error
            console.log(error)
        });
        console.log("after axios")
    }
    var body = new FormData();

    function handleChange(e) {
        const img = e.fileList
        setImages(img)
        body.append('file', {
            file: {
                value: "C:/Users/Shivani Gangadharan/Downloads/bot face.png", //address of image
                options: {
                    filename: img[0].name,  //filename
                    contentType: img[0].type    //type of image 
                }
            }
        });

    }

    const [venue, setVenue] = useState('');
    const [ps1, setPs1] = useState('');
    const [ps2, setPs2] = useState('');
    const [ps3, setPs3] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [pics, setPics] = useState([])
    const [add, setAdd] = useState([])

    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (

        < div >

            <Heading link="/record" text="Add meeting notes" />
            <BoxDiv>
                <Form onSubmit={formSubmit}>
                    <Text> Meeting: </Text><br />
                    <DatePicker className="input"
                        onChange={onChange} /><br /><br />
                    <Text> Venue: </Text>
                    <Input
                        onChange={e => { setVenue(e.target.value) }}
                        className="input" type="text" placeholder="Location" />
                    <br /><br />
                    <Text> Photos of meeting: </Text>
                    <div className="clearfix">
                        <Upload
                            listType="picture-card"
                            fileList={images}
                            onChange={handleChange}
                        >
                            {images.length >= 20 ? null : uploadButton}
                        </Upload>
                    </div><br />
                    <Text><b> AGENDA POINT-WISE NOTES :</b> </Text>
                    <br /><br />
                    <Text> Problem 1 - Status: </Text>
                    <Input onChange={e => { setPs1(e.target.value) }} placeholder="Enter problem" className="input" type="text" />
                    <br /><br />
                    <Text> Problem 2 - Status: </Text>
                    <Input onChange={e => { setPs2(e.target.value) }} placeholder="Enter problem" className="input" type="text" />
                    <br /><br />
                    <Text> Problem 3 - Status: </Text>
                    <Input onChange={e => { setPs3(e.target.value) }} placeholder="Enter problem" className="input" type="text" />
                    <br /><br />
                    <Text> Description: </Text>
                    <Input onChange={e => { setDescription(e.target.value) }} className="input" type="text" placeholder="Templated based on category" />
                    <br /><br />
                    {/* <Link to="/record"> */}
                    <Btn id="btn" htmlType="submit" type="primary"> Submit </Btn>
                    {/* </Link> */}
                </Form>
            </BoxDiv>

        </div >
    )
}

export default Notes;
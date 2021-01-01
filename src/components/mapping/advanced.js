import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Card, Input, Menu, Checkbox, Upload, Icon,
    Radio, Modal, Form, Button, Typography
} from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import { Link } from 'react-router-dom';
import BoxDiv from '../common-items/box';

const DivBox = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 2%;
    margin-top: 5%;
`
const { Meta } = Card;
const { Title } = Typography;
const { TextArea } = Input;
const { Text } = Typography;

const UploadImg = styled(Upload)`
margin: 1%;
`
const MyInput = styled(Input)`
margin-top: 3%;
border: 1px solid grey;
`
const Line = styled(Text)`
margin: 1% !important;
display: inline !important;
`
const H4 = styled(Title)`
    margin-top: 2%;
`

const Block = styled(Text)`
margin: 1% !important;
`
const RadioIP = styled(Radio.Group)`
margin: 1% !important;
`
const Long = styled(TextArea)`
    margin: 1% !important;
`
const Btn = styled(Button)`
    margin: 1%;
`

function Advanced() {
    const [description, setDescription] = useState('');
    const [guard, setGuard] = useState('');
    const [camera, setCamera] = useState('');
    const [functional, setFunctional] = useState('');
    const [fileList3, setFileList3] = useState('');
    const [numberofbins, setNumberOfBins] = useState('');
    const [clean, setClean] = useState('');
    const options = [
        { label: 'Well maintained', value: 'Well maintained' },
        { label: 'Cracks and uneven', value: 'Cracks and uneven' },
        { label: 'Needs urgent repair', value: 'Needs urgent repair' },
        { label: 'Other', value: 'Other' },
    ];
    var checked;
    function onChange(checkedValues) {
        checked = checkedValues;
    }
    const [fileList4, setFileList4] = useState('');
    const [parking, setParking] = useState('');
    const [lights, setLights] = useState('');
    const [watersupply, setWaterSupply] = useState('');
    const [drainage, setDrainage] = useState('');
    const [rwa, setRWA] = useState('');
    const [president, setPresident] = useState('');
    const [contact, setContact] = useState('');
    const [sulabh, setSulabh] = useState('');
    const [electricity, setElectricity] = useState('');
    const [security, setSecurity] = useState('');
    const [problem, setProblem] = useState('');
    const [remarks, setRemarks] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );




    // CONSOLE L1OG FOR ADVANCE
    function handleSubmitAdvanced(props) {
        console.log("Values of form: ");
        console.log("Description: ", description);
        console.log("Security guard: ", guard);
        console.log("CCTV Camera: ", camera);
        console.log("Cameras are: ", functional);
        console.log("Photos of dustbins: ", fileList3);
        console.log("No. of bins: ", numberofbins);
        console.log("Area is: ", clean);
        console.log("Condition of road: ", checked);
        console.log("Photos of road: ", fileList4);
        console.log("Planned/allotted parking: ", parking);
        console.log("Are the street lights functional: ", lights);
        console.log("Is there proper water supply system: ", watersupply);
        console.log("Proper drainage system?: ", drainage);
        console.log("Is RWA active: ", rwa);
        console.log("name and number of president: ", president);
        console.log("Name and no. of active POC: ", contact);
        console.log("Is Sulabh complex nearby: ", sulabh);
        console.log("Condition of electricity: ", electricity);
        console.log("Overall security: ", security);
        console.log("Any problem: ", problem);
        console.log("Remarks on locality: ", remarks);
    }
    return (
        <div>
            <BoxDiv>
                <Form onSubmit={e => { handleSubmitAdvanced(e) }}>
                    <Block level={2}> Extra Information </Block>
                    <MyInput onChange={e => [setDescription(e.target.value)]} placeholder="Description (optional)" />
                    <DivBox>
                        <Block level={4}> Is there any security guard in the locality? </Block>
                        <RadioIP onChange={e => { setGuard(e.target.value) }}>
                            <Radio value={'Yes'}>Yes</Radio>
                            <Radio value={'No'}>No</Radio>
                            <Radio value={'Other'}>Other</Radio>
                        </RadioIP>
                    </DivBox>
                    <DivBox>
                        <Block level={4}> Can you see the CCTV cameras in the locality? </Block>
                        <RadioIP onChange={e => { setCamera(e.target.value) }}>
                            <Radio value={'Yes'}>Yes</Radio>
                            <Radio value={'No'}>No</Radio>
                            <Radio value={'Maybe'}>Maybe</Radio>
                        </RadioIP>
                    </DivBox>
                    <DivBox>
                        <Block level={4}> Are the CCTV cameras functional? </Block>
                        <RadioIP onChange={e => { setFunctional(e.target.value) }}>
                            <Radio value={'Functional'}>Yes</Radio>
                            <Radio value={'Not functional'}>No</Radio>
                            <Radio value={'Other'}>Other</Radio>
                        </RadioIP>
                    </DivBox>
                    <DivBox>
                        <Block level={4}> Can you see dustbins in the locality? </Block>
                        <div className="clearfix">
                            <UploadImg
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList3}
                                onChange={e => { setFileList3(e.fileList) }}
                            >
                                {fileList3.length >= 20 ? null : uploadButton}
                            </UploadImg>
                            <Modal visible={previewVisible} footer={null} onCancel={() => { setPreviewVisible(false) }}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </DivBox>
                    {/* <Block level={4}> Number of dustbins in the locality: </Block> */}
                    <MyInput onChange={e => { setNumberOfBins(e.target.value) }} required placeholder="Enter number of dustbins in the locality" />

                    <DivBox hidden={true}>
                        <Block level={4}> Is the area clean? </Block>
                        <RadioIP onChange={e => { setClean(e.target.value) }}>
                            <Radio value={'clean'}>Yes</Radio>
                            <Radio value={'Not clean'}>No</Radio>
                            <Radio value={'Other'}>Other</Radio>
                        </RadioIP>
                    </DivBox>
                    <Block level={4}> What is the condition of roads? </Block>
                    <Checkbox.Group options={options} onChange={onChange} />
                    <Block level={4}> Add photos of the road: </Block>
                    <div className="clearfix">
                        <UploadImg
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList4}
                            onChange={e => { setFileList4(e.fileList) }}
                        >
                            {fileList4.length >= 20 ? null : uploadButton}
                        </UploadImg>
                        <Modal visible={previewVisible} footer={null} onCancel={() => { setPreviewVisible(false) }}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                    <Block level={4}> Is there planned/allotted parking? </Block>
                    <RadioIP onChange={e => { setParking(e.target.value) }}>
                        <Radio value={'Yes'}>Yes</Radio>
                        <Radio value={'No'}>No</Radio>
                        <Radio value={'Other'}>Other</Radio>
                    </RadioIP>
                    <Block level={4}> Are the street lights functional? </Block>
                    <RadioIP onChange={e => { setLights(e.target.value) }}>
                        <Radio value={'Yes'}>Yes</Radio>
                        <Radio value={'No'}>No</Radio>
                        <Radio value={'Other'}>Other</Radio>
                    </RadioIP>
                    <Block level={4}> Is there proper water supply system? </Block>
                    <RadioIP onChange={e => { setWaterSupply(e.target.value) }}>
                        <Radio value={'Yes'}>Yes</Radio>
                        <Radio value={'No'}>No</Radio>
                        <Radio value={'Other'}>Other</Radio>
                    </RadioIP>
                    <Block level={4}> Is there proper drainage system with covered sewers? </Block>
                    <RadioIP onChange={e => { setDrainage(e.target.value) }}>
                        <Radio value={'Yes'}>Yes</Radio>
                        <Radio value={'No'}>No</Radio>
                        <Radio value={'Other'}>Other</Radio>
                    </RadioIP>
                    <Block level={4}> Is the RWA (residential welfare association) active? </Block>
                    <RadioIP onChange={e => { setRWA(e.target.value) }}>
                        <Radio value={'Yes'}>Yes</Radio>
                        <Radio value={'No'}>No</Radio>
                        <Radio value={'Present but inactive'}>Present but inactive</Radio>
                        <Radio value={'Other'}>Other</Radio>
                    </RadioIP>
                    <Block level={4}> Name and Number of the RWA president: </Block>
                    <MyInput placeholder="RWA President" onChange={e => { setPresident(e.target.value) }} />
                    <Block level={4}> Name and number of active point of contact: </Block>
                    <MyInput placeholder="Contact" onChange={e => { setContact(e.target.value) }} />
                    <Block level={4}> Can you see the sulabh complex nearby? </Block>
                    <RadioIP onChange={e => { setSulabh(e.target.value) }}>
                        <Radio value={'Yes'}>Yes</Radio>
                        <Radio value={'No'}>No</Radio>
                        <Radio value={'Present but inactive'}>Present but inactive</Radio>
                        <Radio value={'Other'}>Other</Radio>
                    </RadioIP>
                    <Block level={4}> What is the condition of electricity in the locality(i.e., Number of hours and any other problems related)? </Block><br />
                    <Long placeholder="Condition of electricity" onChange={e => { setElectricity(e.target.value) }} autosize={{ minRows: 2, maxRows: 6 }} />
                    <Block level={4}> Describe the overall security of the locality: </Block>
                    <Long placeholder="Overall security" onChange={e => { setSecurity(e.target.value) }} autosize={{ minRows: 2, maxRows: 6 }} />
                    <Block level={4}> Any problem that you encountered? </Block>
                    <Long placeholder="Any problem" onChange={e => { setProblem(e.target.value) }} autosize={{ minRows: 2, maxRows: 6 }} />
                    <Block level={4}> Remarks on the locality: </Block>
                    <Long autosize={{ minRows: 2, maxRows: 6 }} placeholder="Remarks" onChange={e => { setRemarks(e.target.value) }} />
                    <br />
                    <Link to="/landingpage">
                        <Button onClick={handleSubmitAdvanced} htmlType="submit" type="primary">Submit</Button>
                    </Link>
                </Form>
            </BoxDiv>
        </div>
    )
}

export default Advanced;
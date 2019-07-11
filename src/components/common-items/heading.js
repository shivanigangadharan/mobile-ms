import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

const HeadingBox = styled.div`
border: 1px solid black;
padding: 2%;
align-contents: center;
text-align: center;
font-size: 150%;
font-weight: bold;
width: 90%;
margin: 3%;
`
const Arrow = styled(Icon)`
float: left;
color:black;
`
function Heading(props) {

    return (
        <div>
            <HeadingBox>
                <Link to={props.link}>
                    <Arrow type="arrow-left" />
                </Link> {props.text}
            </HeadingBox>

        </div>
    )
}

export default Heading;

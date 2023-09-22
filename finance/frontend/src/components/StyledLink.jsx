import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-left: 24px;
    padding-right: 24px;    

    display: flex;
    justify-content: center;

    &:hover {
        background-color: #000;
    }

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default (props) => <StyledLink {...props} />;
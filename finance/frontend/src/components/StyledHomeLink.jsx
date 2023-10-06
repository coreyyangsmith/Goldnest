//-------------------------------------------------------//
//  File Name: StyledHomeLink.jsx
//  Description: Override of React Router Dom's { Link }
//
//  Requirements:
//      - React Router Dom Link
//
//  Returns:
//      - Styled Link (to Remove Hyperlink Default Style)
//
// Created By: Corey Yang-Smith
// Date: October 6th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// React Import
import React from 'react';

// React Router Import
import { Link } from 'react-router-dom';

// Styled-Components Import
import styled from 'styled-components';


//  MAIN FUNCTION
//-------------------------------------------------------//

const StyledHomeLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 12px;
    margin-right: 12px;
    padding-left: 12px;
    padding-right: 12px;    

    display: flex;
    justify-content: center;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

//  EXPORTS
//-------------------------------------------------------//

export default (props) => <StyledHomeLink {...props} />;
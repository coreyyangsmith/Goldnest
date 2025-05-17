//-------------------------------------------------------//
//  File Name: StyledFooterLink.jsx
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

const StyledFooterLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;

    &:hover {
        background-color: #fff8e1;
        transform: scale(1.05);
    }

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }    
`;

//  EXPORTS
//-------------------------------------------------------//

export default (props) => <StyledFooterLink {...props} />;
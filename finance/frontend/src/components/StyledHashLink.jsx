//-------------------------------------------------------//
//  File Name: StyledHashLink.jsx
//  Description: Override of React Router Dom's { HashLink }
//
//  Requirements:
//      - React Router Dom Hash Link
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
import { HashLink } from 'react-router-hash-link';

// Styled-Components Import
import styled from 'styled-components';


//  MAIN FUNCTION
//-------------------------------------------------------//

const StyledHashLink = styled(HashLink)`
    text-decoration: none;
    color: white;
    margin-left: 12px;
    margin-right: 12px;
    padding-left: 12px;
    padding-right: 12px;    

    display: flex;
    justify-content: center;

    &:hover {
        background-color: #fff8e1;
    }

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

//  EXPORTS
//-------------------------------------------------------//

export default (props) => <StyledHashLink {...props} />;
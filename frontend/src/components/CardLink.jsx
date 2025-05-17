//-------------------------------------------------------//
//  File Name: CardLink.jsx
//  Description: Override of React Router Dom's { Link } for Card
//
//  Requirements:
//      - React Router Dom Link
//
//  Returns:
//      - Styled Link (to Remove Hyperlink Default Style)
//
// Created By: Corey Yang-Smith
// Date: October 5th, 2023
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

const CardLink = styled(Link)`
    text-decoration: none;
    color: primary;

    display: flex;
    justify-content: flex-start;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

//  EXPORTS
//-------------------------------------------------------//

export default (props) => <CardLink {...props} />;
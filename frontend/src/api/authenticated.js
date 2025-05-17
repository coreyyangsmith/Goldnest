//-------------------------------------------------------//
//  File Name: authenticated.js
//  Description: Utilizes axios to connect to main back-end apis, requires user token
//
//  Requirements:
//      - User Token
//
//  Returns:
//      - REST api to selected back-end
//
// Created By: Corey Yang-Smith
// Date: September 29th, 2023
//-------------------------------------------------------//

//  IMPORTS
//-------------------------------------------------------//

// Import Axios
import axios from "axios";

//  UTILITY
//-------------------------------------------------------//

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/",
});

//  MAIN FUNCTION
//-------------------------------------------------------//

export function getRequest(URL, token) {
  return axiosClient
    .get(`/${URL}`, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((response) => response);
}

export function postRequest(URL, payload, token) {
  return axiosClient
    .post(`/${URL}`, payload, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((response) => response);
}

export function putRequest(URL, payload) {
  return axiosClient.put(`/${URL}`, payload).then((response) => response);
}

export function deleteRequest(URL, token) {
  return axiosClient
    .delete(`/${URL}`, {
      headers: {
        Authorization: "token " + token,
      },
    })
    .then((response) => response);
}

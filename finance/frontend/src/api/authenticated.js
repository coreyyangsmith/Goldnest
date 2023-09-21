// Token Import
//import useToken from "../components/useToken"

// Import Axios
import axios from 'axios'

// Get Token
//const [token, setToken] = { useToken }

{/* 
src/api/posts.js
Responsible for setting up Axios' baseURL to be utilized throughout the project.
*/}
// headers: { Authorization: `Bearer ${token}` },
const axiosClient = axios.create({

    baseURL : `http://127.0.0.1:8000/api/`
});


export function getRequest(URL, payload) {
    return axiosClient.get(`/${URL}`, payload).then(response => response);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function putRequest(URL, payload) {
    return axiosClient.put(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL, payload) {
    return axiosClient.delete(`/${URL}`, payload).then(response => response);
}
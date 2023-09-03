// React
import React, { useEffect, useState } from "react"

// MUI Dependencies
import { Container } from "@mui/material"

// Axios
import axios from "axios";

// Components
import './App.css';
import NavBar from './components/NavBar';


const entityItems = [
  {
    "pk": 1,
    "name": "Steam",
    "created_at": "2023-09-03T18:02:06.450637Z",
    "updated_at": "2023-09-03T18:02:06.451033Z"
},
{
    "pk": 2,
    "name": "EB Games",
    "created_at": "2023-09-03T18:02:06.451590Z",
    "updated_at": "2023-09-03T18:02:06.451906Z"
}];

const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      <Container>
        <NavBar/>
      </Container>
    </div>
  )
}    

export default App;

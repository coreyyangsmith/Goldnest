import React, {useState} from 'react';
import { TextField, Button, Stack, FormLabel, Divider } from '@mui/material';
import { Link } from "react-router-dom"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
 
const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, 
            height, weight, gender,
            dateOfBirth, password) 
    }
 
    return (
        <React.Fragment>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <Divider/>
                <FormLabel>Date of Birth</FormLabel>
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label=""
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Height</InputLabel>
                    <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={height}
                        label="Height"
                        onChange={e => setHeight(e.target.value)}
                        >
                        <MenuItem value={122}>4'</MenuItem>
                        <MenuItem value={124}>4'1"</MenuItem>
                        <MenuItem value={127}>4'2"</MenuItem>
                        <MenuItem value={130}>4'3"</MenuItem>
                        <MenuItem value={132}>4'4"</MenuItem>
                        <MenuItem value={135}>4'5"</MenuItem>
                        <MenuItem value={137}>4'6"</MenuItem>
                        <MenuItem value={140}>4'7"</MenuItem>
                        <MenuItem value={142}>4'8"</MenuItem>
                        <MenuItem value={145}>4'9"</MenuItem>                                                                                                     
                        <MenuItem value={147}>4'10"</MenuItem>
                        <MenuItem value={150}>4'11"</MenuItem>
                        <MenuItem value={152}>5'</MenuItem>
                        <MenuItem value={155}>5'1"</MenuItem>
                        <MenuItem value={157}>5'2"</MenuItem>
                        <MenuItem value={160}>5'3"</MenuItem>
                        <MenuItem value={163}>5'4"</MenuItem>
                        <MenuItem value={165}>5'5"</MenuItem>
                        <MenuItem value={168}>5'6"</MenuItem>
                        <MenuItem value={170}>5'7"</MenuItem>
                        <MenuItem value={173}>5'8"</MenuItem>
                        <MenuItem value={175}>5'9"</MenuItem>        
                        <MenuItem value={178}>5'10"</MenuItem>     
                        <MenuItem value={180}>5'11"</MenuItem>     
                        <MenuItem value={183}>6'"</MenuItem>     
                        <MenuItem value={185}>6'1"</MenuItem>   
                        <MenuItem value={188}>6'2"</MenuItem>     
                        <MenuItem value={191}>6'3"</MenuItem>     
                        <MenuItem value={193}>6'4"</MenuItem>     
                        <MenuItem value={196}>6'5"</MenuItem>      
                        <MenuItem value={198}>6'6"</MenuItem>  
                        <MenuItem value={201}>6'7"</MenuItem>  
                        <MenuItem value={203}>6'8"</MenuItem>  
                        <MenuItem value={206}>6'9"</MenuItem>   
                        <MenuItem value={208}>6'10"</MenuItem>      
                        <MenuItem value={211}>6'11"</MenuItem>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    </Select>
                </FormControl>
                   <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Weight"
                        onChange={e => setWeight(e.target.value)}
                        value={weight}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Gender"
                        onChange={e => setGender(e.target.value)}
                        value={gender}
                        fullWidth
                        required
                    />

                </Stack>




                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
    )
}
 
export default RegisterForm;
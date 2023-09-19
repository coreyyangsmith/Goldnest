// React Import
import React, {useState} from 'react';
import { Link } from "react-router-dom"

// MUI Import
import { TextField, Button, Stack, FormLabel, RadioGroup, 
FormControlLabel, Radio } from '@mui/material';
import FormControl from '@mui/material/FormControl';

// Day JS/Date Picker
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

 {/* TODO - Refactor Login and Register forms to user RHF */}

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('') 
    const [lastName, setLastName] = useState('') 
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
        console.log(username, email, password,
            firstName, lastName,
            gender, dateOfBirth)
    }
 
    return (
        <React.Fragment>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack>
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    fullwidth="true"
                    required
                    sx={{mb: 4}}                    
                />
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
                    fullwidth="true"
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
                    fullwidth="true"
                    sx={{mb: 4}}
                />

                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Confirm Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullwidth="true"
                    sx={{mb: 4}}
                />                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date of Birth" 
                                sx={{mb: 4}}
                                required
                                animateYearScrolling
                                size="small"                              
                                onChange={(e) => setDateOfBirth(dayjs(e.$d).format('YYYY-MM-DD'))}/>
                </LocalizationProvider>

                <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                    defaultValue=""
                    name="radio-buttons-group"
                    fullwidth="true"
                    required                  
                    onChange={e => setGender(e.target.value)}
                    sx={{mb: 4}}
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />                        
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </FormControl>
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </Stack>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
    )
}
 
export default RegisterForm;
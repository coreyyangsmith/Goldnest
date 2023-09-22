// React Import
import React, {useState} from 'react';
import { Link } from "react-router-dom"

// MUI Import
import { TextField, Button, Stack, FormLabel, RadioGroup, 
FormControlLabel, Radio } from '@mui/material';
import FormControl from '@mui/material/FormControl';

// Router
import { useNavigate } from 'react-router-dom';

// Day JS/Date Picker
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Context
import useToken from "../../hooks/useToken"
import { useAuth } from "../../context/AuthContext"

 {/* TODO - Refactor Login and Register forms to user RHF */}

 async function signupUser(credentials) {
    return fetch('http://127.0.0.1:8000/api/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json())
}

const RegisterForm = () => {
    // User Context
    const { token, setToken } = useToken();
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()

    // Form
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [first_name, setFirstName] = useState('') 
    const [last_name, setLastName] = useState('') 
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [gender, setGender] = useState('')

    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)    
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const [firstNameError, setFirstNameError] = useState(false) 
    const [lastNameError, setLastNameError] = useState(false) 
    const [dateOfBirthError, setDateOfBirthError] = useState(false)
    const [genderError, setGenderError] = useState(false)    
    
    // Navigation
    const navigate = useNavigate();

    //--------------------------------//

    function validateSubmit() {
        var passedChecks = true;
        if (username === '') {
            setUsernameError(true)
            passedChecks = false;
        }
    
        if (email === '') {
            setEmailError(true)
            passedChecks = false;
        }
        
        if (password === '') {
            setPasswordError(true)
            passedChecks = false;
        }     
        
        if (confirmPassword === '' || confirmPassword !== password) {
            setConfirmPasswordError(true)
            passedChecks = false;
        }   
        
        if (first_name === '') {
            setFirstNameError(true)
            passedChecks = false;
        }    
        
        if (last_name === '') {
            setLastNameError(true)
            passedChecks = false;
        }            
    
        if (dateOfBirth === '') {
            setDateOfBirthError(true)
            passedChecks = false;
        }   
        
        if (gender === '') {
            setGenderError(true)
            passedChecks = false;
        }           
        return passedChecks;
    }    

    const handleSubmit = async e => {
        e.preventDefault();

        setUsernameError(false);
        setEmailError(false);
        setPasswordError(false);
        setFirstNameError(false);
        setLastNameError(false);
        setDateOfBirthError(false);
        setGenderError(false);

        // Validation
        if (validateSubmit())
        {
            const token = await signupUser({
                user: {
                    username,
                    email,
                    password,
                    first_name,
                    last_name},
                dateOfBirth,
                gender
            });
    
            if (token.detail !== "Not found."){
                console.log("signup successful")
                setToken(token);
                setAuthUser(username);
                setIsLoggedIn(true);
    
                navigate("/")
                window.location.reload(false);  //Trigger Refresh                      
            }
        }
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
                    error={usernameError}                    
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
                        value={first_name}
                        error={firstNameError}                           
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={last_name}
                        error={lastNameError}                           
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
                    error={emailError}                       
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
                    error={passwordError}                       
                    required
                    fullwidth="true"
                    sx={{mb: 4}}
                />

                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Confirm Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    error={confirmPasswordError}                       
                    required
                    fullwidth="true"
                    sx={{mb: 4}}
                />                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date of Birth" 
                                sx={{mb: 4}}
                                animateYearScrolling
                                size="small"          
                                error={dateOfBirthError}                                                       
                                onChange={(e) => setDateOfBirth(dayjs(e.$d).format('YYYY-MM-DD'))}
                                slotProps={{
                                    textField: {
                                      required: true,
                                    },
                                  }}/>
                </LocalizationProvider>

                <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                    name="radio-buttons-group"
                    value={gender}
                    error={genderError}                       
                    fullwidth="true"         
                    onChange={e => setGender(e.target.value)}
                    sx={{mb: 4}}
                >
                    <FormControlLabel value={"male"} control={<Radio required={true}/>} label="Male" />                        
                    <FormControlLabel value={"female"} control={<Radio required={true}/>} label="Female" />
                    <FormControlLabel value={"other"} control={<Radio required={true}/>} label="Other" />
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
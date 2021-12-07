import React, { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import InputField from "./components/inputField";
import Radiobtn from './components/radioButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
//Toolbar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@material-ui/core';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';


export const App = () => {


  const [users, setUsers] = useState([]);
  const [firstname, setFirst] = useState("");
  const [lastname, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  //error states
  const [firstError, setFirstError] = useState("");
  const [lastError, setLastError] = useState("");
  const [emailError, setEmailError] = useState("");


  //Dialog functionality
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  //Form validation
  const handleValidate = (e) => {
    const re = /^[A-Za-z]+$/;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let firsterror = "";
    let lasterror = "";
    let emailerror = "";

    if (!re.test(firstname)) {
      firsterror = "*Only characters are allowed";
      setFirstError(firsterror);
    } else {
      setFirstError("");
    }

    if (!re.test(lastname)) {
      lasterror = "*Only characters are allowed";
      setLastError(lasterror);
    } else {
      setLastError("");
    }

    if (!regex.test(email)) {
      emailerror = "*Please enter a valid email";
      setEmailError(emailerror);
    } else {
      setEmailError("");
    }

    if (firsterror || lasterror || emailerror) {
      return false;
    } else {
      return true;
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidate();
    if (isValid) {
      setOpen(true);
      setUsers([
        ...users,
        {
          id: users.length + 1,
          first: firstname.trim(),
          last: lastname.trim(),
          email: email.trim(),
          gender: gender.trim()
        }
      ]);
      setFirst("");
      setLast("");
      setEmail("");
      setGender("");
      setFirstError("");
      setLastError("");
    }

  }

  //For accessing data from local storage to state concurrently
  useEffect(() => {
    setUsers(JSON.parse(window.localStorage.getItem("users")));
  }, []);

  //For storing the data in local storage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])



  return (
    <div className="container">
      <AppBar style={{ background: '#2E3B55' }} position="static">
        <Toolbar variant="dense">
          <span className="navtext">Enter User Data</span>
        </Toolbar>
      </AppBar>


      <form className="form_center" onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>

            <div className="container">

              <InputField value={firstname} id="firstname" placeholder="firstname" type="text" label="First Name*" onChange={(e) => setFirst(e.target.value)} />
              {firstError ? (<div style={{ fontSize: 15, color: 'red' }}>{firstError}</div>
              ) : null}
              <br />

              <InputField value={lastname} id="lastname" placeholder="lastname" type="text" label="Last Name*" onChange={(e) => setLast(e.target.value)} />
              {lastError ? (<div style={{ fontSize: 15, color: 'red' }}>{lastError}</div>
              ) : null}
              <br />

              <InputField value={email} id="email" placeholder="email" type="text" label="Email*" onChange={(e) => setEmail(e.target.value)} />
              {emailError ? (<div style={{ fontSize: 15, color: 'red' }}>{emailError}</div>
              ) : null}
              <br />

            </div>

          </Grid>
          <Grid item xs={6}>

            <div className="container">

              <Radiobtn value={gender} id="gender" placeholder="gender" label="Gender*" onChange={(e) => setGender(e.target.value)} />
              <br />

              <Button variant="contained" type="submit" disabled={!firstname || !lastname || !email || !gender} >Submit</Button>

              <div class="divider" />

              <Button variant="contained" className="sub-btn" component={Link} to="/display">Cancel</Button>
              <br />

            </div>

          </Grid>

        </Grid>
      </form>


      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">

        <DialogTitle >
          <div class="content">
            User created sucessfully
            <CheckSharpIcon />
          </div>
        </DialogTitle>

        <DialogActions>
          <Button component={Link} to="/display" autoFocus>
            Ok
          </Button>
        </DialogActions>

      </Dialog>



    </div>




  );
}

export default App;





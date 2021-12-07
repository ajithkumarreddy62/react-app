import React, { useState, useEffect } from 'react';
import './display.css';
import { BrowserRouter, Link } from 'react-router-dom';
import InputField from './inputField';
import Radiobtn from './radioButton';
//Buttons
import Button from '@mui/material/Button';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
//Dialog button
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
//Toolbar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Snackbar from '@mui/material/Snackbar';


export const Display = () => {

    //error states
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");
    const [emailError, setEmailError] = useState("");

    const [users, setUsers] = useState(() => {

        const users = localStorage.getItem("users");

        if (users) {
            return JSON.parse(users);
        } else {
            return [];
        }

    });

    //For dialog to open

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (user) => {
        setOpen(true);
        setCurrentUsers({ ...user });
    };

    const handleClose = () => {
        setOpen(false);
    };

    //For snackbar to open
    const [openSnack, setOpenSnack] = React.useState(false);
    const [DelSnack, setDelSnack] = React.useState(false);

    //Edit form error handling

    const handleValidate = (e) => {
        const re = /^[A-Za-z]+$/;
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let firsterror = "";
        let lasterror = "";
        let emailerror = "";

        if (!re.test(currentUsers.first)) {
            firsterror = "*Only characters are allowed";
            setFirstError(firsterror);
        } else {
            setFirstError("");
        }

        if (!re.test(currentUsers.last)) {
            lasterror = "*Only characters are allowed";
            setLastError(lasterror);
        } else {
            setLastError("");
        }

        if (!regex.test(currentUsers.email)) {
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

    //Editing functionality


    const [currentUsers, setCurrentUsers] = useState({});

    const handleEditFirstInputChange = (e) => {
        setCurrentUsers({ ...currentUsers, first: e.target.value });
    }

    const handleEditLastInputChange = (e) => {
        setCurrentUsers({ ...currentUsers, last: e.target.value });
    }

    const handleEditEmailInputChange = (e) => {
        setCurrentUsers({ ...currentUsers, email: e.target.value });
    }

    const handleEditGenderInputChange = (e) => {
        setCurrentUsers({ ...currentUsers, gender: e.target.value });
    }

    const handleEditFormSubmit = (e) => {
        e.preventDefault();
        const isValid = handleValidate();
        if (isValid) {
            setOpen(false);
            setOpenSnack(true);
            handleUpdateTodo(currentUsers.id, currentUsers);
        }

    }

    const handleUpdateTodo = (id, updatedUser) => {
        const updatedItem = users.map((user) => {
            return user.id === id ? updatedUser : user;
        });
        setUsers(updatedItem);
    }



    //Delete functionality

    const handleDeleteClick = (id) => {
        const removeItem = users.filter((user) => {
            return user.id !== id;
        })
        setUsers(removeItem);
        alert("Do you want to proceed?");
        setDelSnack(true);
    }


    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        setUsers(users);
    }, [users])


    return (
        <div className="container">

            <AppBar style={{ background: '#2E3B55' }} position="static">
                <Toolbar variant="dense">
                    <span className="navtext">User Data</span>
                    <div className="create-button">
                        <Button component={Link} to="/userform" style={{ backgroundColor: '#FFFFFF', color: '#0000FF' }} variant="contained" startIcon={<AddIcon color="primary" />}>
                            Create User
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>

            {users !== null ?
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.first}</td>
                                <td>{user.last}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <IconButton variant="contained" onClick={() => handleClickOpen(user)}>
                                        <ModeEditIcon />
                                    </IconButton>
                                </td>
                                <td>
                                    <IconButton variant="contained" onClick={() => handleDeleteClick(user.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <h6>No user data found</h6>}



            <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <h5>
                        Edit user form
                    </h5>
                </DialogTitle>

                <DialogContent>
                    <form onSubmit={handleEditFormSubmit}>

                        <InputField value={currentUsers.first} onChange={handleEditFirstInputChange} id="firstname" placeholder="First Name" type="text" label="First Name" />
                        {firstError ? (<div style={{ fontSize: 15, color: 'red' }}>{firstError}</div>
                        ) : null}
                        <br />

                        <InputField value={currentUsers.last} onChange={handleEditLastInputChange} id="lastname" placeholder="Last Name" type="text" label="Last Name" />
                        {lastError ? (<div style={{ fontSize: 15, color: 'red' }}>{lastError}</div>
                        ) : null}
                        <br />

                        <InputField value={currentUsers.email} onChange={handleEditEmailInputChange} id="email" placeholder="Email" type="email" label="Email" />
                        {emailError ? (<div style={{ fontSize: 15, color: 'red' }}>{emailError}</div>
                        ) : null}
                        <br />

                        <Radiobtn value={currentUsers.gender} onChange={handleEditGenderInputChange} id="gender" label="Gender" />
                        <br />

                        <Button variant="contained" type="submit" class="btn btn-primary">
                            Save
                        </Button>

                    </form>
                </DialogContent>

                <DialogActions>
                    <Button variant="contained" class="btn btn-primary" onClick={handleClose}>Cancel</Button>
                </DialogActions>

            </Dialog>

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={() => setOpenSnack(false)} message="User details edited sucessfully!" />
            <Snackbar open={DelSnack} autoHideDuration={6000} onClose={() => setDelSnack(false)} message="User deleted sucessfully!" />

        </div >
    );
}


export default Display;


import React from 'react';
import auth from '../services/authService';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Forms from './Form/Forms';
import { useHistory } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import formService from '../services/formService';
import styles from './Dashboard.module.css'

export interface IDashboardProps {}


const Dashboard: React.FunctionComponent<IDashboardProps> = (props) => {
    
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const [formTitle, setFormTitle] = useState('');
    const [formDescription, setFormDescription] = useState("");

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser(auth.getCurrentUser())
    }, []);


    const logout =() => {
        let logoutConfirmation:string | boolean = window.confirm('Really do you want Logout')
        if (logoutConfirmation) {
            auth.logout();
            history.push('/login')
        }
    }

    const cancelAddForm = () => {
        handleClose();
        setFormTitle('')
        setFormDescription('')
    }

    const createForm = () => {
        let data:any = {
            name: formTitle,
            formDescription: formDescription,
            createdBy: user.id
        }
        if (data.name !== '') {
            formService.createForm(data).then((result) => {
                console.log(result);
                history.push('/form/'+result._id)
            },
            error => {
                const resMessage = 
                (error.respon)
            }
            )
        }
    }

    
    






}





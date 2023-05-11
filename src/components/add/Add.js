import { Alert, AlertTitle, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Button, Switch } from 'react-materialize';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import './Add.css';

export default function Add() {
    const baseUrl = 'https://63fd532a859df29986cd4969.mockapi.io/api/test/Players';
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            nation: "",
            club: "",
            cost: 0,
            clip: "",
            info: "",
            img: "",
            top: false
        },
        onSubmit: (values) => {
            fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(values), headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
                .then(data => setOpen(true))
                .catch(error => console.log(error.message));
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            nation: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            club: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            program: Yup.number().integer().typeError("Please type a number."),
            info: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            clip: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            img: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
        }),
    });
    return (
        <div className='p-6 bg-cyan-100'>
            <h4 className='mb-5 text-left uppercase'>Add a new player</h4>
            <form onSubmit={formik.handleSubmit} className='form-add border border-solid p-6 shadow-md bg-white'>
                    <TextField
                        autoFocus
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    /> <br />
                {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
                <TextField
                    margin="dense"
                    name="club"
                    label="Club"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.club}
                    onChange={formik.handleChange} />
                {formik.errors.club && (<Typography variant="caption" color="red">{formik.errors.club}</Typography>)}
                <TextField
                    margin="dense"
                    name="nation"
                    label="Nation"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.nation}
                    onChange={formik.handleChange}
                />
                {formik.errors.nation && (<Typography variant="caption" color="red">{formik.errors.nation}</Typography>)}
                <TextField
                    margin="dense"
                    name="img"
                    label="URL of image"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                />
                {formik.errors.img && (<Typography variant="caption" color="red">{formik.errors.img}</Typography>)}
                <TextField
                    margin="dense"
                    name="cost"
                    label="Market value"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={formik.values.cost}
                    onChange={formik.handleChange}
                />
                {formik.errors.cost && (<Typography variant="caption" color="red">{formik.errors.cost}</Typography>)}
                <TextField
                    margin="dense" name="clip"
                    label="Intro video"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.clip}
                    onChange={formik.handleChange}
                />
                {formik.errors.clip && (<Typography variant="caption" color="red">{formik.errors.clip}</Typography>)}
                <TextField
                    multiline
                    rows={2}
                    margin="dense"
                    name="info"
                    label="Information"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.info}
                    onChange={formik.handleChange}
                />
                {formik.errors.info && (<Typography variant="caption" color="red" display="block">{formik.errors.info}</Typography>)}
                <FormControlLabel control={<Switch />} className='mt-5 '
                    label="Top players" name='agree'
                />
                <br />
                <Button className='m-4' variant="contained" size="small" type='submit'>Add</Button>
            </form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button><Link to='/dashboard' className='text-white' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

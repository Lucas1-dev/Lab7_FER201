import { useFormik } from 'formik';
import React, { useState } from 'react'
import './ModalTrailer.css'
import * as Yup from 'yup';
import { Alert, AlertTitle, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, TextField, Typography } from '@mui/material';
import { Button, Switch } from 'react-materialize';
import { Link } from 'react-router-dom';

export default function ModalEdit({ setIsOpen, player, handleOpenEdit }) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        // setOpen(false);
        handleOpenEdit()
        window.location.reload()
    };
    const formik = useFormik({
        initialValues: {
            name: player.name,
            nation: player.nation,
            club: player.club,
            cost: player.cost,
            clip: player.clip,
            info: player.info,
            img: player.img,
            top: player.top
        },
        onSubmit: (values) => {
            console.log("value", values)
            fetch(`https://63fd532a859df29986cd4969.mockapi.io/api/test/Players/${player.id}`, {
                method: 'PUT',
                body: JSON.stringify(values), headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            }).then(response => {
                console.log(response, "asdas")
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
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id='modalEdit' className='modal' style={{ display: 'block', top: '35%' }}>
                <div className='modal-content'>
                    <h4 className='mb-5 text-left uppercase'>Update Player</h4>
                    <form onSubmit={formik.handleSubmit} className='form-add border border-solid p-6 shadow-md bg-white'>
                        <div className=''>
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
                        </div>
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
                        <Button className='m-4' variant="contained" size="small" type='submit'>Update</Button>
                        <Button className='m-4' onClick={handleClose} size="small" type='reset'>Cancel</Button>
                    </form>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-info"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Congraturation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-info">
                                <Alert severity="success">
                                    <AlertTitle>Update successful!</AlertTitle>
                                </Alert>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Link to={`/detail/${player.id}`}>
                                {console.log(player.id +"asdad" )}
                                <Button autoFocus onClick={handleClose}>
                                    Close
                                </Button>
                               
                            </Link>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className='modal-footer'>
                <a className='modal-close red-text'>Close</a>
            </div>
        </div>
    )
}
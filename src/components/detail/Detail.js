import { History } from '@mui/icons-material';
import { Alert, AlertTitle, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Badge, Button, Chip, Icon } from 'react-materialize';
import { Link, useParams } from 'react-router-dom';
import ModalEdit from './ModalEdit';
import ModalTrailer from './ModalTrailer';

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const { id } = useParams();
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    fetch(`https://63fd532a859df29986cd4969.mockapi.io/api/test/Players`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const playerr = data.find(obj => obj.id == id);
        setPlayer(playerr);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);
  console.log(player);

  const handleOpenEdit = () => {
    setIsEditOpen(!isEditOpen)
  }
  const handleOpenDelete = () => {
    setIsDelOpen(!isDelOpen)
  }
  const handleClose = () => {
    setIsDelOpen(!isDelOpen)
  }
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://63fd532a859df29986cd4969.mockapi.io/api/test/Players/${id}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          console.log(`Error: ${response.status}`)

        } else {
          window.location.onload();
          handleClose();

        }
      })

  }

  return (
    <div className="container">
      {isOpen && <ModalTrailer setIsOpen={setIsOpen} player={player} />}
      {isEditOpen && <ModalEdit handleOpenEdit={handleOpenEdit} player={player} />}
      <div className="player-details">
        <h1 className="title text-7xl uppercase font-bold text-red-400 mb-5">
          {player.name}
          {player.famous ? <Chip close={false} className="blue text-white" closeIcon={<Icon className="close">close</Icon>} options={null}>TOP</Chip> : ""}
        </h1>
        <div className="image lg:flex flex-row mx-10 mt-5 gap-10">
          <img className="imageDetail sm:max-h-screen" src={`${player.img}`} alt={player.name} />

          <div className="player-detail">
            <p className="text-left text-4xl m-2">From: <b>{player.nation}</b></p>
            <p className="text-left text-4xl m-2">Club: <b>{player.club ? player.club : "None"}</b></p>
            <p className="text-left text-2xl m-2">Cost: <b>{player.cost}$</b></p>
            <p className="text-left text-2xl m-2">Description:</p>
            <p className="text-left text-xl m-2">{player.info}</p>
          </div>
          <button onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon>ondemand_video</Icon>
          </button>
          <div className='columns-1'>
            <Button onClick={() => setIsEditOpen(true)} className="large">
              <Icon>create</Icon>
            </Button>
            <br />
            <Button className="mt-10" onClick={() => { handleOpenDelete(`${player.id}`) }}>
              <Icon>delete</Icon>
            </Button>
          </div>

        </div>

      </div>
      <Dialog
        open={isDelOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Alert severity="success">
              <AlertTitle>You are about to delete</AlertTitle>
            </Alert>
          </DialogContentText>

        </DialogContent>

        <DialogActions>

          <Button autoFocus className='bg-red-600 red text-white' onClick={() => { handleDelete(player.id) }}>
            <Link className='text-white' to={`/dashboard`}>Delete</Link>
          </Button>

          <Button autoFocus onClick={() => { handleClose() }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

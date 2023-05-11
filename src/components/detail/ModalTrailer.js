import React from 'react'
import './ModalTrailer.css'

export default function ModalTrailer({ setIsOpen, player }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id='modalTrailer' className='modal' style={{ display: 'block', top: '35%' }}>
                <div className='modal-content'>
                    <h4>Trailer for {player.name}</h4>
                    <p><iframe width='100%' height='400px' src={player.clip} title={player.name} frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen /> </p>
                </div>
            </div>
            <div className='modal-footer'>
                <a className='modal-close red-text'>Close</a>
            </div>
        </div>
    )
}

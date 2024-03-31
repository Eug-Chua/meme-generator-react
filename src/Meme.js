import React from 'react'
import './Meme.css'

export default function Meme () {
    return (
        <div className="meme-container">
            <p>Top Text</p>
            <input/>
            <p>Bottom Text</p>
            <input/>
            <div className='meme-button'>
                <h1>Get a new meme image</h1>
                <img src='is-this-a-meme.png'/>
            </div>
            <div className='meme-image'>
                <img src="shut-up-and-take-my-money.png"/>
            </div>
        </div>
    )
}
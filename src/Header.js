import React from 'react'
import "./Header.css"

export default function Header(){
    return (
        <div className='header-container'>
            <img src="winnie-pooh.png" className='header-logo'/>
            <h2 className='header-title'>Meme Generator</h2>
        </div>
    )
}
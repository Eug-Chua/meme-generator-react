import React, {useState} from 'react'
import './Meme.css'
import memesData from './memesData'

export default function Meme () {
    
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemes] = React.useState(memesData)
    
    function getMemeImage() {

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    return (
        <main className="meme-container">
            <div className='form'>
                <div>
                    <label>Top Text
                        <input type='text' placeholder="Shut up" className='form-input'/>
                    </label>
                </div>
                <div>
                    <label>Bottom Text
                        <input type='text' placeholder="and take my money" className='form-input'/>
                    </label>
                </div>
                <button className='form-button' onClick={getMemeImage}>Get a new meme image
                    <img src='is-this-a-meme.png' className='button-image' alt='meme'/>
                </button>
            </div>
            
            <div className='meme-image' >
                <img src={meme.randomImage} className='meme' alt='meme'/>
            </div>
        </main>
    )
}
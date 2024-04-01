import React, {useState} from 'react'
import './Meme.css'
import memesData from './memesData'

export default function Meme () {
    // function generateImage () {
    //     const memesArray = memesData.data.memes
    //     let memeId = Math.floor(Math.random() * memesArray.length)
    //     let memeUrl = memesArray[memeId].url
    //     console.log(memeUrl)
    // }
    const [url, setUrl] = React.useState("");
    
    function getMemeImage() {

        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        setUrl(memesArray[randomNumber].url)
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
                <img src={url} className='meme' alt='meme'/>
                {/* <img src="shut-up-and-take-my-money.png" className='meme'/> */}
            </div>
        </main>
    )
}
function addItem() {
    // We'll work on this next
    let newArrayLength = thingsArray.length + 1
    let newThing = `Thing ${newArrayLength}`
    // console.log(newThing)
    setThingsArray(prevThingsArray => prevThingsArray.push(newThing))
}

import { useEffect, useState } from "react";
import React from "react";


export default function Main(){
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 

    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect (()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes))

    },[])
    

    function getMemeImage(){
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const randomUrl = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : randomUrl
        }))
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))

    }
    return(
        <main>
            <div className="form">
                <input 
                type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                 />
                <input type="text"
                placeholder="bottom text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                
                 />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className="meme--container">
                <img src={meme.randomImage} alt="meme" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )

}

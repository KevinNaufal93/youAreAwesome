import React from 'react'
import { useEffect, useState } from 'react';
import "./main.css";
import { ActionButton } from '../components/actionButton';
import profPic from "../assets/img/testKevin.jpg"

export const MainPage = () => {
    useEffect(() => {
        imageClicked ? 
        console.log(imageClicked) : 
        console.log("False no")
      });
    const [imageClicked, setImageClicked] = useState(false)
    return (
        <div>
            <div className="header">
                Button Button on the wall who's the most beautiful of them all?
            </div>
            {imageClicked ?
                <img 
                    src={profPic} 
                    alt="test-pictures"
                    className="profilePicture"
                /> :
                <ActionButton
                    onClick={()=> {setImageClicked(true)}}
                 />    
            }
        </div>
    )
}

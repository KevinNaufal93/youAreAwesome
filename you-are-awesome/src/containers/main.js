import React from 'react'
import { useEffect, useState } from 'react';
import "./main.css";
import { ActionButton } from '../components/actionButton';
import profPic from "../assets/img/2.png"

export const MainPage = () => {

    const [imageClicked, setImageClicked] = useState(false)
    const [buttonActivated, setButtonActivated] = useState("none")
    const MINUTE_MS = 60000;

    const clickHandler = () => {
        console.log("entering click Handler")
        setButtonActivated("hidden")
        setImageClicked(true)
        console.log(`imageClicked is ${imageClicked} and buttonActivated is ${buttonActivated}`)
    }

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     console.log('Logs every minute');
    //     setImageClicked(false)
    //   }, MINUTE_MS);
    //   return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    // }, [])

    return (
        <div className="h-screen">
        <div
        className="flex flex-col items-center h-screen">
            {imageClicked ? 
                <div className="subheader">
                <span className='font-semibold'>You</span> have the cutest eyes 
                </div>
                :
                <div className="header">
                Button Button on the wall who's the most beautiful of them all?
                </div>
                }
            <div
                onClick={()=>clickHandler()}>
                    {imageClicked ?
                        <img 
                            src={profPic}
                            className="max-w-xs max-h-fit" 
                        /> : 
                        <ActionButton
                        style={{visibility: buttonActivated}}
                        className="flex-none "
                    />
                    } 

            </div>
        </div>
        </div>
        
    )
}

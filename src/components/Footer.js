import React, { useState } from 'react'
import './Footer.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';



export default function Footer() {

    const [selected, setSelected] =  useState(true)
    const handleOnclickIcon = () =>{
        // setSelected(!selected)
    }

    return (
        <div className='footer' >
            <div onClick={handleOnclickIcon } className={`Icon ${selected && 'selected'}`}>
                <HomeIcon className='mainIcon' />
                <h3>Home</h3>
            </div>
            <div onClick={handleOnclickIcon } className='Icon' >
                <WhatshotIcon className='mainIcon' />
                <h3>Trending</h3>
            </div>
            <div onClick={handleOnclickIcon } className='Icon' >
                <AddCircleOutlineIcon className='mainIcon' />
            </div>
            <div onClick={handleOnclickIcon } className='Icon' >
                <SubscriptionsIcon className='mainIcon' />
                <h3>Subscriptions</h3>
            </div>
            <div onClick={handleOnclickIcon } className='Icon' >
                <VideoLibraryIcon className='mainIcon' />
                <h3>Library</h3>
            </div>

        </div>
    )
}

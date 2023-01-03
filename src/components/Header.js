import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Button } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';



export default function Header() {

  const [state, dispatch] = useStateValue()
  const {toggle,user} = state
  // https://www.youtube.com/results?search_query=youtube+clone+react+js

  const handleToggle = () =>{
    // console.log('toggle')
    dispatch({
      type : actionTypes.toggleBar,
      toggle : !toggle
    })
  }
  // console.log(user?.photoURL)
  // console.log(user?.accessToken)
  return (
    <div className='header' >
      <div className="header_left">
        {/* <Button> */}
        <MenuIcon onClick={handleToggle} className= 'menuIcon ' />
        {/* </Button> */}
        <img className='header_logo' src="https://www.freeiconspng.com/uploads/youtube-logo-png-picture-2.png" alt="" />
      </div>
      <div className="header_input">
        <form  
        target='blank'
        action="https://www.youtube.com/results"
        >
        <input placeholder='Search' type="text" name="search_query" id="" />
        <button className='header_inputButton' type='submit' >
        <SearchIcon className='header_inputButton' />
        </button>
        </form>
        <div className='header_inputMic'>
        <MicIcon />
        </div>
      </div>
      <div className="header_icons">
        {user && <VideoCallIcon className='header_icon call' />}
        <AppsIcon  className='header_icon'/>
        {user && <NotificationsIcon className='header_icon' />}
        {!user && <MoreVertIcon className='header_icon' />}
        {user && <Avatar src={user?.photoURL} />}
        {!user &&  <Link to='/signIn' className='header_signIn' ><SignIn/></Link> }
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
import {auth, provider } from '../firebase'
import { signOut } from 'firebase/auth';


export default function Sidebar({user}) {


  const [state, dispatch] = useStateValue()
  const {toggle} = state

  const logOut = async () =>{
    console.log('clicked')
    dispatch({
      type : actionTypes.log_out
    })
    await signOut(auth)
  }
  // console.log(toggle)

  return (
    <div className={`sidebar ${toggle?'toggleBarTrue':'toggleBarFalse'}`}>
      <SidebarRow toggle={toggle}  selected Icon={HomeIcon} title='Home' />
      {user && <SidebarRow toggle={toggle}  Icon={WhatshotIcon} title='Trending' />}
      <SidebarRow toggle={toggle}  Icon={ExploreIcon} title='Explore' />
      <SidebarRow toggle={toggle}  Icon={SubscriptionsIcon} title='Subscriptions' />
      <hr className='hr' />
      <SidebarRow toggle={toggle}  Icon={VideoLibraryIcon} title='Library' />
      <SidebarRow toggle={toggle}  Icon={HistoryIcon} title='History' />
      {user && <SidebarRow toggle={toggle}  Icon={OndemandVideoIcon} title='Your videos' />}
      {user && <SidebarRow toggle={toggle}  Icon={WatchLaterIcon} title='Watch later' />}
      {user && <SidebarRow toggle={toggle}  Icon={ThumbUpAltIcon} title='Liked videos' />}
      {user && <SidebarRow toggle={toggle}  Icon={ExpandMoreIcon} title='Show more' />}
      <hr className='hr' />
      <div onClick={logOut} >
      {user && <SidebarRow  toggle={toggle}  Icon={LogoutIcon} title='Log Out' />}
      </div>

      {!user && (<div className="sidebar_signIn">
        <p className='signIn_message' >Sign in to like videos, comment, and subscribe</p>
        <Link className='link' to ='./signIn' ><SignIn /></Link>
        <hr className='hr' />
      </div>)}
    </div>
  )
}

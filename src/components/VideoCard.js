import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './VideoCard.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';


export default function VideoCard(props) {
  const { videoId, image, title, channel, views, timestamp, channelId } = props

  const baseUrl2 = 'https://youtube.googleapis.com/youtube/v3/channels'
  const [channelImg, setChannelImg] = useState('')

    useEffect( async ()=>{
        const responce = await fetch(`${baseUrl2}?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyDTCblLcUMca7lueoKh64qJ5-x1MuM7GzA`, {
            method : 'GET',
            headers : {
                'Accept' : 'application/json'
            }
        })
        const data = await responce.json()
        if (data) {
          // console.log(data)
          // console.log('url : ',data.items[0].snippet.thumbnails.high.url )
          setChannelImg(data.items[0].snippet.thumbnails.high.url)
        }
    },[videoId])
  return (
    <div className='videoCard' >
      <Link to={`/play/${videoId}`}> <img className='videoCard_thumbnail' src={image} alt="Thumbnail unavailable" /></Link>
      <div className="videoCard_info">
        <Avatar className='videoCard_avatar' src={channelImg} />
        <div className="videoCard_text">
        <Link className='decoration' to={`/play/${videoId}`}><h4 className='videoCard_title' >{title.slice(0,60)+'...'}</h4></Link>
          <p>{channel}</p>
          <p>{views} views • {timestamp.slice(0,10)} </p>
        </div>
        <div>
          <MoreVertIcon  className='more' />
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import VideoCard from './VideoCard'
import './VideoPlayer.css'


export default function VideoPlayer() {

  const [state, dispatch] = useStateValue()
  const {videos} = state
  
  // console.log(videos)
  const { videoId } = useParams()
  // console.log(videoId)

  return (
    <div className='videoPlayer'>
      {/* <div className="frame"> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      {/* </div> */}
      <div className='videoPlayer_videos' >
        {videos?.map((video,i) => {
                  return video.id!==videoId && <VideoCard key={i} videoId={video.id} image={video.snippet.thumbnails.high.url} title={video.snippet.title} channel={video.snippet.channelTitle} views={video.statistics.viewCount} timestamp={video.snippet.publishedAt} channelId={video.snippet.channelId} />
        })}
      </div>
    </div>
  )
}

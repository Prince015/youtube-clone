import React, { useEffect } from 'react'
import './RecommendedVideos_videos.css'
import { useStateValue } from './StateProvider'
import VideoCard from './VideoCard'
import { actionTypes } from './Reducer';

export default function RecommendedVideos_videos(props) {

    const [state, dispatch] = useStateValue()
    const {videos} = state

    return (
        // <div className='scroll-2'>
            <div className="recommendedVideos_videos">
                {videos?.map((video) => {
                    return <VideoCard key={video.id} videoId={video.id} image={video.snippet.thumbnails.high.url} title={video.snippet.title} channel={video.snippet.channelTitle} views={video.statistics.viewCount} timestamp={video.snippet.publishedAt} channelId={video.snippet.channelId} />
                })}
            </div>
        // </div>
    )
}

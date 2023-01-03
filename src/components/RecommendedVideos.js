import React, { useEffect } from 'react'
import Footer from './Footer'
import './RecommendedVideos.css'
import RecommendedVideosCategory from './RecommendedVideosCategory'
import RecommendedVideos_category from './RecommendedVideos_category'
import RecommendedVideos_videos from './RecommendedVideos_videos'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'
import VideoCard from './VideoCard'



export default function RecommendedVideos(props) {
  const KEY= props.apiKey;
  const [state, dispatch] = useStateValue()
  const {toggle} = state

  const baseUrl = 'https://www.googleapis.com/youtube/v3/videos'
    useEffect( async ()=>{
            props.setProgress(10)
            const responce = await fetch(`${baseUrl}?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&key=${KEY}&maxResults=10`, {
                method : 'GET'
            })
            props.setProgress(30)
            const data = await responce.json()
            props.setProgress(70)
            // console.log(data)
            if (data) {
                dispatch({
                    type : actionTypes.fetch_videoList,
                    video : data.items,
                    nextPageToken : data.nextPageToken,
                    totalResults : data.pageInfo.totalResults
                })
                props.setProgress(100) 
            }
    },[])

  return  (
    <div className={`recommendedVideos ${toggle && 'toggled' }`} >
      <RecommendedVideos_category/>
      
        <RecommendedVideos_videos />
      {/* <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      <VideoCard image='https://i.ytimg.com/vi/ZyiFeREyLYo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIWfkAqmkKblfES4GcKQS1N18Y4w' title='Kiska Hai Ye Tumko Intezar Main Hoon Na - Shahrukh Khan | Sonu Nigam | 90s Hits Hindi Songs' channel='Music Fever' views={6956821} timestamp='17 Nov 2021' channelImg='https://yt3.ggpht.com/TSTpwmYuJMur9fY6nePSlI3-whkO4tFb6AvsvbhwAhLNwo2IET7vInnj9kBUFySKlE-_nkr72g=s88-c-k-c0x00ffffff-no-nd-rj' />
      </div>
      <Footer/> */}
    </div> 
)
}

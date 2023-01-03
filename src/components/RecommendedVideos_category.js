import React from 'react'
import './RecommendedVideos_category.css'
import RecommendedVideosCategory from './RecommendedVideosCategory'

export default function RecommendedVideos_category() {
  return (
      // <div className="scroll-x">
        <div className="recommendedVideos_category1">
          <RecommendedVideosCategory selected category='All' />
          <RecommendedVideosCategory category='JavaScript' />
          <RecommendedVideosCategory category='Computer Science' />
          <RecommendedVideosCategory category='Courses' />
          <RecommendedVideosCategory category='Computers' />
          <RecommendedVideosCategory category='Game Shows' />
          <RecommendedVideosCategory category='Android' />
          <RecommendedVideosCategory category='Comedies' />
          <RecommendedVideosCategory category='Mixes' />
          <RecommendedVideosCategory category='Bhajan Music' />
          <RecommendedVideosCategory category='Sales' />
          <RecommendedVideosCategory category='Bollywood Music' />
        </div>
      // </div>

  )
}

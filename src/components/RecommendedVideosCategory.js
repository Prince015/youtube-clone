import React from 'react'
import './RecommendedVideosCategory.css'


export default function RecommendedVideosCategory(props) {
    const {category, selected}= props
  return (
    <span className={`RecommendedVideosCategory ${selected && 'selected'}`}>
      {category}
    </span>
  )
}

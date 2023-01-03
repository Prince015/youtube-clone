import React from 'react'
import './SidebarRow.css'

export default function SidebarRow(props) {
  const {toggle, selected, Icon, title} = props
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className="sidebarRow_icon" />
        <h3 className='sidebarRow_title' >{title}</h3>
    </div>
  )
}

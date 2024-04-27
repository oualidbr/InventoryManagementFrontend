import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search....' />
          <SearchOutlinedIcon className='icons' />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon  className='icons' />
            Englesh</div>
          <div className="item">
            <DarkModeOutlinedIcon  className='icons' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icons'  />
            <div className="conter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icons'  />
            <div className="conter">2</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className='icons'  />
          </div>
          <div className="item">
            <Avatar className='icons' src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  />
          </div>
        </div>

      </div>
    </div>
  )
}
export default Navbar

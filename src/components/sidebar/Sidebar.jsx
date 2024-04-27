import React from 'react'
import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useTranslation } from 'react-i18next';
function Sidebar() {
  const {t}=useTranslation();
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> Novatech </span>
      </div>

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <li>
          <DashboardOutlinedIcon className='icons' />
          <span>Dachebord</span>
          </li>
          <p className="title">LIST</p>
        <li>
          <PeopleAltOutlinedIcon className='icons'/>
          <span>{t("Users")}</span>
        </li>
        <li>
          <Inventory2OutlinedIcon className='icons'/>
          <span>Prodact</span>
        </li>
        <li>
          <ShoppingCartOutlinedIcon className='icons'/>
          <span>Order</span>
        </li>
        <p className="title">USFULE</p>
        <li>
          <StackedBarChartOutlinedIcon className='icons'/>
          <span>Stats</span>
        </li>
        <li>
          <DeliveryDiningOutlinedIcon className='icons'/>
          <span>Delivery</span>
        </li>
        <li>
          <NotificationsOutlinedIcon className='icons'/>
          <span>Notifcations</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className='icons'/>
          <span>Profail</span>
        </li>
        <li>
          <SettingsOutlinedIcon className='icons'/>
          <span>Setting</span>
        </li>
        <li>
          <LogoutOutlinedIcon className='icons'/>
          <span>Logout</span>
        </li>
      </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar

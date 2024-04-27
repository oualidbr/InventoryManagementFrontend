import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title"> Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize='small' className='icon' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                <CircularProgressbar value={70} text='70%' strokeWidth={4} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$3000</p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Today</div>
                        <div className="itemResult nigative ">
                            <ExpandMoreOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$2.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last week</div>
                        <div className="itemResult positive">
                            <ExpandLessOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$16.4</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <ExpandLessOutlinedIcon fontSize='small'/>
                            <div className="resultAmount">$12.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured

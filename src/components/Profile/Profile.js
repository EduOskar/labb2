import { Typography } from '@mui/material'
import React from 'react'
import CustomTimeLine, {CustomTimelineSeperator} from '../TimeLine/Timeline';
import resumeData from '../../utilities/resumeData'
import PersonIcon from '@mui/icons-material/Person';

import './Profile.css'
import { TimelineContent, TimelineItem } from '@mui/lab';

const CustomTimeLineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeperator/>
        <TimelineContent>
            {link ? (<Typography>
                <span>{title}</span> <a href={link} target='_blank'>{text}</a>
            </Typography>) : (
                <Typography><span>{title}</span>{text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>

)


const Profile=()=>{
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
            <Typography className='name'>{resumeData.name}</Typography>
            <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <figure className='profile_image'>
                <img src={require('../../images/oskar.jpg')} alt=''/>
            </figure>

            <div className='profile_information'>
             <CustomTimeLine icon={<PersonIcon/>}></CustomTimeLine>
                <br/>
                <button>My button</button>
            </div>
        </div>
    )
}
export default Profile
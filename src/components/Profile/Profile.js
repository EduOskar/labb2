import { Typography} from '@mui/material'
import React from 'react'
import CustomTimeLine, {CustomTimelineSeperator} from '../TimeLine/Timeline';
import resumeData from '../../utilities/resumeData'
import PersonIcon from '@mui/icons-material/Person';
import CustomButton from '../Button/Button.js';
import { TimelineContent, TimelineItem } from '@mui/lab';
import './Profile.css'
import FaceIcon from '@mui/icons-material/Face';


const CustomTimeLineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeperator/>
        <TimelineContent className="timeline_content">
            {link ? (
            <Typography className='timelineItem_text'>
                <span>{title}: </span>{" "} 
                <a href={link} target="_blank">
                    {text}
                </a>
            </Typography>) : (
                <Typography className='timelineItem_text'>
                    <span>{title}</span>{text}
                </Typography>
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
             <CustomTimeLine icon={<PersonIcon/>}> 
             <CustomTimeLineItem title='Name: ' text={resumeData.name}/>
             <CustomTimeLineItem title= 'Title: ' text={resumeData.title}/>
             <CustomTimeLineItem title='Mail: ' text={resumeData.email}/>

             {Object.keys(resumeData.socials).map(key =>(
                 <CustomTimeLineItem title={key} text={ resumeData.socials[key].text } link={resumeData.socials[key].link}/>
             ))}
             </CustomTimeLine>
                <div className='button_container'>
                    <CustomButton  text={'Download my Cv'} icon={<FaceIcon/>}/>
                </div>
            </div>
        </div>
    )
}
export default Profile
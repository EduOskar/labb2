import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Title, Work } from '@mui/icons-material';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import "../TimeLine/TimeLine.css"

const CustomTimeLine = ({title,icon ,children}) => {
    
    return (
        <Timeline className={"timeline"}>
            {/* Item Header */}
        <TimelineItem className={"timeline_firstItem"}>
          <TimelineSeparator>
            <TimelineDot className={"timeline_dot_header"}>
            {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography 
            variant='h6' 
            className={'timeline_header'}>
            </Typography>
            </TimelineContent>
        </TimelineItem>
        {children}
        </Timeline>  
    );
}

export const CustomTimelineSeperator = () => (
    <TimelineSeparator className={'seperator_padding'}>
        <TimelineDot variant={'outlined'} className={'timeline_dot'} />
        <TimelineConnector />
     </TimelineSeparator>
)

export default CustomTimeLine
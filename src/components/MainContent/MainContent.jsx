import * as React from 'react';
import Box from '@mui/material/Box';
import ProfilePic from '../../resources/images/platform/profilePic.png';
import ContentBox from '../ContentBox/ContentBox';
import Banner from '../Banner/Banner';
import WelcomeImage from '../../resources/images/banners/welcomeImage.png';
import BlueBanner from '../../resources/images/banners/banner1.png';
import YellowBanner from '../../resources/images/banners/banner2.png';
import ProgressStats from '../ProgressStats/ProgressStats';
import ActivityList from '../ActivityList/ActivityList';
import EventCarrousel from '../EventCarrousel/EventCarrousel';
import Clock from '../../resources/images/platform/clock.png';
import Clock2 from '../../resources/images/platform/clock2.png';
import BlueEvent from '../../resources/images/platform/event1.png';
import YellowEvent from '../../resources/images/platform/event2.png';
import EventsToday from '../EventsToday/EventsToday';
import ProgressOverview from '../ProgressOverview/ProgressOverview';
import { styled } from '@mui/material/styles';

function MainContent(props) {

  const currentUser={
      lenguage:'English',
      notifications:[
        {
          title:'You have a new session to review',
          category:'Session',
          date:'Yesterday',
          hour:'10:30AM',
        },
        {
          title:'You have a new virtual session to review',
          category:'VirtualMeeting',
          date:'Yesterday',
          hour:'10:00PM',
        },
        {
          title:'You have a face to face session',
          category:'Meeting',
          date:'Today',
          hour:'10:30AM',
        },
      ],
      profilePic:ProfilePic,
      userName:'John Doe',
  }

  const dashboard={
    title:'Dashboard',
    width:'100%',
    height:'40%',
    mobileHeight:'60%',
    dash:false,
    lenguage:currentUser.lenguage,
    content: 
      <Banner 
        content={{
            smallFont:false,
            width:'100%',
            height:'80%',
            mobileHeight:'90%',
            title:'Welcome back, '+currentUser.userName,
            subtitle:"Ta-da! You're up to date. 🥳",
            backgroundImage: BlueBanner,
            mainImage: WelcomeImage,
        }}/>,
  }

  const events={
    title:'Events',
    width:'100%',
    height:'50%',
    mobileHeight:'75%',
    content: 
    <Box sx={{
      display:'flex',
      width:'100%',
      height:'100%', 
      flexDirection:{ xs: 'column', sm: 'row' }}}>
        <EventCarrousel content={{
            slides:[
              {
                backgroundImage:Clock,
                topic:'Sience',
                title:'Youth Talent & Education',
                date:'May, 20'
              },
              {
                backgroundImage:Clock2,
                topic:'Sience',
                title:'Youth Talent & Education',
                date:'May, 20'
              },
            ]
            
        }} />
        <EventsToday content={{
               events:[
                {
                  icon:BlueEvent,
                  title:'Youth Talent & Education',
                  time:'10:30AM'
                },
                {
                  icon:YellowEvent,
                  title:'Youth Talent & Education 2',
                  time:'11:35AM'
                },
                {
                  icon:BlueEvent,
                  title:'Youth Talent & Education',
                  time:'10:30AM'
                },
              ]
        }}/>
    </Box>
  }

  const activity={
    title:'Activity',
    width:'100%',
    height:'45%',
    mobileHeight:'60%',
    dash:true,
    nextBtn:true,
    content: 
      <ActivityList 
        content={{
            activities:[
                {
                  type:'Followers',
                  list:[{name:'Kathrun Crawford'},{name:'Piper Shaw'},{},{},{}],
                },
                {
                  type:'Events',
                  list:[{},{},{}],
                },   
                {
                  type:'Assignments',
                  list:[{},{},{}],
                },            
            ]
        }}/>,
  }

  const progress={
    title:'Progress',
    width:'60%',
    height:'54.5%',
    mobileHeight:'80%',
    dash:true,
    content: 
    <Box style={{width:'100%',height:'100%'}}>
      <ProgressStats
        content={{
          width:'100%',
          height:'80%',
          mobileHeight:'65%',
          items:[
            {
              highlight:false,
              title:'Total Webinars',
              number:9
            },
            {
              highlight:false,
              title:'Pending Assignments',
              number:1
            }, 
            {
              highlight:false,
              title:'Total Units',
              number:5
            }, 
            {
              highlight:false,
              title:'Total Readings',
              number:14
            }, 
            {
              highlight:true,
              title:'Total Videos',
              number:5
            },
          ]
      }}/>
      <Banner 
        content={{
          smallFont:true,
          width:'100%',
          height:'20%',
          mobileHeight:'35%',
          title:'Confirm your account details. ',
          subtitle:" Please confirm you email and phone number. 😨",
          backgroundImage: YellowBanner,
       }}/>
    </Box>,
  }

  const progressOverview={   
     title:false,
    width:'35%',
    height:'55%',
    mobileHeight:'60%',
    content:  
      <ProgressOverview 
        content={{
          height:'100%',
          colors:["rgb(255,209,53)", "rgb(255,122,86)"],
          data:[
            {
              "name": "Completed",
              "value": 20
            },
            {
              "name": "Left",
              "value": 30
            },   
          ]
        }}
    />
  }

  const Container = styled(Box)(({ theme }) => ({
    paddingLeft:'10%',
    paddingRight:'10%',
    overflow:'scroll',
    display:'flex',
    justifyContent:'space-between', 
    width:'100%',
    height:'100%',
    flexWrap:'wrap',
    [theme.breakpoints.down('sm')]: {
      marginTop:'100px',
      paddingLeft:'5%',
      paddingRight:'5%',
    },
  }));

  return (
      <Container>
        <ContentBox content={dashboard}/>
        <ContentBox content={events}/>
        <ContentBox content={activity}/>
        <ContentBox content={progressOverview}/>
        <ContentBox content={progress}/>
      </Container>
  );
}

export default MainContent;
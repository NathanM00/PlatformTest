import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

function EventsToday(props) {

    const [content, setContent] = React.useState(props.content.events);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        dotsClass: "slick-dots slick-thumb",
        adaptiveHeight: true,
        initialSlide: 0,
        swipe:true,
        arrows:false,
        dragable:true, 
    }

    function CustomSlide(props){
        const data = props.data;
        return(
            <Box sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between',
              height:'160px',
              width:'100%',
            }}>
                <SlideContainer >
                    <img src={data.icon}
                    style={{
                        borderRadius:10,
                        height:'auto',
                        width:'40%',
                    }}
                    />
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'90%',height:'60%',}}>
                    <p 
                        style={{
                        textOverflow: 'ellipsis',
                        margin:0,
                        textAlign:'left',
                        fontSize:15,
                        color:'rgb(156,154,183)',
                        fontWeight:'bold',
                        fontFamily:'Gotham',
                    }}>
                        {data.time}
                    </p>
                    <p 
                        style={{
                        textOverflow: 'ellipsis',
                        fontSize:16,
                        textAlign:'left',
                        whiteSpace:'nowrap',
                        overflow:'hidden',
                        width:'90%',
                        color:'rgb(19,24,73)',
                        margin:0,
                        fontFamily:'GilroyExtraBold',
                        }}>
                        {data.title}.
                    </p>
                    </div>
                </SlideContainer>
              </Box>
        )
    }
    const SlideContainer = styled(Box)(({theme})=>({
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100%',
      padding:'4%',
      backgroundColor:'#fff',
      borderRadius:15,
      width:'90%',
      [theme.breakpoints.only('sm')]: {
        width:'85%',
      },
      [theme.breakpoints.only('xs')]: {
        width:'150px',
      }
    })); 

    const SlideBox = styled('div')(({theme})=>({
      width:'100%',
      height:'250px',
      marginTop:'5%',
    })); 

    function EventBox(data){

       return( 
       <Container   
           sx={{
             height:'70%',
             overflow:'scroll',
             width:'100%',
             padding:0,
             display: {sm:'flex',xs:'none'},
             flexDirection:'column',
             alignItems:'center',
           }}>
             {content.map((noti,index) => (
     
               <Event data={noti} key={index} />
     
             ))}
     
         </Container>
    )};
       
    const EventPic = styled('img')(({theme})=>({
      borderRadius:10,
      width:'20%',
      height:'auto',
      [theme.breakpoints.down('lg')]: {
        width:'25%',
      },
      [theme.breakpoints.down('md')]: {
        width:'30%',
        marginRight:'5%',
      }  
    })); 

    const EventTime = styled('p')(({theme})=>({
      textOverflow: 'ellipsis',
      margin:0,
      textAlign:'left',
      fontSize:15,
      color:'rgb(156,154,183)',
      fontWeight:'bold',
      fontFamily:'Gotham',
      [theme.breakpoints.down('lg')]: {
        fontSize:12,
      },
      [theme.breakpoints.down('md')]: {
        fontSize:11,
      }  
    })); 

    const EventTitle = styled('p')(({theme})=>({
      textOverflow: 'ellipsis',
      fontSize:16,
      textAlign:'left',
      whiteSpace:'nowrap',
      overflow:'hidden',
      width:'90%',
      color:'rgb(19,24,73)',
      margin:0,
      fontFamily:'GilroyExtraBold',
      [theme.breakpoints.down('lg')]: {
        width:'80%',
        fontSize:13,
      },
      [theme.breakpoints.down('md')]: {
        fontSize:12,
      }  
    })); 

    const EventContainer = styled(Box)(({theme})=>({
      display:'flex',
      backgroundColor:'#fff',
      justifyContent:'space-between',
      height:'45%',
      padding:'4%',
      marginTop:'5%',
      alignItems:'center',
      borderRadius:10,
      mb:'0%',
      mt:'0%',
      width:'100%',
      [theme.breakpoints.down('lg')]: {
        height:'40%',
      },
      [theme.breakpoints.down('md')]: {
        height:'35%',
      },
    })); 

    function Event(props){

        const data = props.data;
          return(
            <EventContainer >
              <EventPic src={data.icon}/>
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'70%',height:'100%',}}>
                <EventTime>
                  {data.time}
                </EventTime>
                <EventTitle>
                  {data.title}.
                </EventTitle>
              </div>
            </EventContainer>
        )
    }

    const TitleBox = styled('Box')(({theme})=>({
        display:'flex',
        alignItems:'center',
        height:'20%',
        paddingTop:'10%',
        width:'100%',
        [theme.breakpoints.down('sm')]: {
          height:'10%',
        },   
    })); 

    const Title = styled('p')(({theme})=>({
        fontSize:12,
        fontWeight:600,
        width:'40%',
        textTransform:'capitalize',
        color:'rgb(13,53,94)',
        fontFamily:'Gotham',
        textAlign:'left',
        marginBottom:'15%',
        marginLeft:'7%',
        [theme.breakpoints.down('lg')]: {
          width:'45%',
        },
        [theme.breakpoints.down('md')]: {
          fontSize:10,
          width:'60%',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize:9,
          marginLeft:'0%',
          width:'30%',
        },
        [theme.breakpoints.only('xs')]: {
          fontSize:12,
          marginTop:'10%',
          width:'40%',
        }
    })); 
    
    const Dash = styled('div')(({theme})=>({
        backgroundColor:'lightgray',
        height:'2px',
        marginBottom:'12%',
        width:'45%',
        [theme.breakpoints.down('lg')]: {
          width:'35%',
        },
        [theme.breakpoints.down('md')]: {
          width:'20%',
        },
        [theme.breakpoints.down('sm')]: {
            width:'80%',
        },
        [theme.breakpoints.only('xs')]: {
          width:'60%',
          marginTop:'7%',
        }
    }));

    return (
        <Box sx={{height:{sm:'100%',xs:'60%'},margin:0,   marginLeft:{sm: '0%', xs:'0%'},width: {sm: '30%', xs:'100%'}}}>
            <TitleBox>
                <Title>EVENTS TODAY</Title>
                <Dash/>
            </TitleBox>
           
             <EventBox />
             <SlideBox sx={{opacity: {xs:'1', sm: '0' } }} >
                <Slider {...settings} >
                    {content.map((item,index)=> (
                        <CustomSlide key={index} data={item}/>
                    ))}
                </Slider>
            </SlideBox>
        </Box>       
    );
}


export default EventsToday;
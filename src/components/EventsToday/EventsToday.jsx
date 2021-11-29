import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

function EventsToday(props) {

    const [content, setContent] = React.useState(props.content.events);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        dotsClass: "slick-dots slick-thumb",
        adaptiveHeight: true,
        initialSlide: 0,
        swipe:true,
        arrows:'false',
        dragable:true,
        
    }

    function CustomSlide(props){
        const data = props.data;
        return(
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                height:'200px',
                borderRadius:3,
                width:'470px'
              }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between',
                    height:'100%',
                    padding:'4%',
                    backgroundColor:'#fff',
                    borderRadius:3,
                    width:'35%',
                }}>
                    <img src={data.icon}
                    style={{
                        borderRadius:10,
                        height:'35%',
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
                </Box>
              </Box>
        )
    }


    const SlideBox = styled('div')(({theme})=>({
        width:'30%',
        height:'100%',
        [theme.breakpoints.down('sm')]: {
            width:'470px',
        }   
    })); 


    function EventBox(data){

       return( 
       <Container   
           sx={{
             height:'59%',
             width:'100%',
             padding:0,
             display: {sm:'flex',xs:'none'},
             flexDirection:'column',
             justifyContent:'space-between',
             alignItems:'center',
           }}>
             {content.map((noti,index) => (
     
               <Event data={noti} key={index} />
     
             ))}
     
         </Container>
      )}; 

      function Event(props){

        const data = props.data;
          return(
            <Box sx={{
              display:'flex',
              backgroundColor:'#fff',
              justifyContent:'space-between',
              height:'45%',
              padding:'4%',
              alignItems:'center',
              borderRadius:3,
              mb:'0%',
              mt:'0%',
              width:'100%'
            }}>
              <img src={data.icon}
              style={{
                borderRadius:10,
                height:'80%',
              }}
              />
              <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'70%',height:'100%',}}>
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
            </Box>
        )
      }

    const TitleBox = styled('Box')(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height:'20%',
        [theme.breakpoints.down('sm')]: {
          height:'10%',
          width:'100%',
        },   
        width:'90%',
    })); 

    const Title = styled('p')(({theme})=>({
        fontSize:13,
        fontWeight:600,
        width:'40%',
        textTransform:'capitalize',
        color:'rgb(13,53,94)',
        fontFamily:'Gotham',
        textAlign:'left',
        marginBottom:'15%',
        marginLeft:'5%',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'0%',
            width:'30%',
        }
      })); 
    
      const Dash = styled('div')(({theme})=>({
        backgroundColor:'lightgray',
        height:'2px',
        marginBottom:'12%',
        width:'50%',
        [theme.breakpoints.down('sm')]: {
            width:'80%',
        }
      }));
    

    return (
        <Box sx={{marginLeft:{sm: '0%', xs:'0%'}, width: {sm: '30%', xs:'100%'},height:'100%'}}>
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
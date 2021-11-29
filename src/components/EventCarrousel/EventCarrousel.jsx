import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';

function EventCarrousel(props) {

    const [content, setContent] = React.useState(props.content);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        dotsClass: "slick-dots slick-thumb",
        adaptiveHeight: true,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Next />,
        prevArrow: <Prev />,
        customPaging:  i => 
            <button 
                style={{                    
                    zIndex:2,
                    position:'absolute', 
                    bottom:'100%'}}>
                        {i + 1}
            </button>,
    }

    function CustomSlide(data){
        return(
            <Container style={{backgroundImage: `url(${data.data.backgroundImage})`}}>
                <Title>{data.data.title}</Title>
                <SubTitle>{data.data.date}</SubTitle>
            </Container>
        )
    }

    function Next(props){
        return(
            <Button 
                onClick={props.onClick}
                sx={{ 
                    position:'absolute', 
                    right:'5%',
                    bottom:'45%',
                    zIndex:2,
                    color:'black',
                    backgroundColor:'#fff',
                    }}>
                <ArrowForwardIcon sx={{color:'rgb(62,52,109)', margin:0, fontSize:15}}/>
            </Button>
        )
    }

    function Prev(props){
        return(
            <Button 
                onClick={props.onClick}
                sx={{
                    left:'5%',
                    top:'45%',
                    zIndex:2,
                    position:'absolute', 
                    color:'black',
                    backgroundColor:'#fff',
                    }}>
                <ArrowBackIcon sx={{color:'rgb(62,52,109)', margin:0, fontSize:15}}/>
            </Button>
        )
    }

    const Container = styled('div')(({theme})=>({
        display:'flex',
        zIndex:1,
        borderRadius:10,
        paddingRight:'15%',
        paddingLeft:'15%',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'100%',
        height:'250px',
        [theme.breakpoints.down('sm')]: {
            paddingRight:'15%',
            paddingLeft:'5%',
            height:'330px',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'flex-start',
        }
    })); 

    const SlideBox = styled('div')(({theme})=>({
        width:'70%',
        height:'100%',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
        }   
    })); 

    const Title = styled('p')(({theme})=>({
        fontSize: 40,
        fontWeight:600,
        width:'55%',
        textAlign:'left',
        margin:0,
        lineHeight:1,
        color:'#fff',
        fontFamily:'Gotham',
        [theme.breakpoints.down('sm')]: {
            marginTop:'7%',
            width:'85%',
        },
    })); 

    const SubTitle = styled('p')(({theme})=>({
        fontSize: 40,
        fontWeight:600,
        width:'30%',
        margin:0,
        color:'#fff',
        textAlign:'center',
        fontFamily:'Gotham',
        [theme.breakpoints.down('sm')]: {
            textAlign:'left',
            width:'50%',
            fontSize: 20,
        },
    })); 

    return (
            <SlideBox >
                <Slider {...settings} >
                    {content.slides.map((item,index)=> (
                        <CustomSlide key={index} data={item}/>
                    ))}
                </Slider>
            </SlideBox>
    );
}


export default EventCarrousel;
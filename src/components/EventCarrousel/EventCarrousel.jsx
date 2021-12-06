import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';

function EventCarrousel(props) {

    const [content, setContent] = React.useState(props.content);

    function CustomSlide(data){
        return(
            <Container style={{backgroundImage: `url(${data.data.backgroundImage})`}}>
                <Title>{data.data.title}</Title>
                <SubTitle>{data.data.date}</SubTitle>
            </Container>
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
        height:'295px',
        [theme.breakpoints.down('lg')]: {
            paddingRight:'15%',
            paddingLeft:'5%',
            paddingTop:'5%',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'flex-start',
            height:'290px',
        },
        [theme.breakpoints.down('md')]: {
            height:'283px',
        },
        [theme.breakpoints.down('sm')]: {
            height:'200px',
        }
    })); 

    const SlideBox = styled('div')(({theme})=>({
        width:'70%',
        height:'100%',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            height:'45%',
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
        [theme.breakpoints.down('lg')]: {
            width:'75%',
            fontSize: 30,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 25,
        },
        [theme.breakpoints.down('sm')]: {
            margin:'0%',
            fontSize: 22,
            width:'85%',
        },
    })); 

    const SubTitle = styled('p')(({theme})=>({
        fontSize: 35,
        fontWeight:600,
        width:'30%',
        margin:0,
        color:'#fff',
        textAlign:'center',
        fontFamily:'Gotham',
        [theme.breakpoints.down('lg')]: {
            textAlign:'left',
            marginTop:'1%',
            fontSize: 20,
        },
        [theme.breakpoints.down('md')]: {
            marginTop:'4%',
            fontSize: 18,
        },
        [theme.breakpoints.down('sm')]: {
            width:'50%',
            margin:'0%',
        },
    })); 

    const ScrollNextButton = styled(Button)(({theme})=>({
        position:'absolute',
        right:'2%', 
        top:'45%',  
        zIndex:1,
        width:'8%',
        height:'12%', 
        background: "#fff" ,
        [theme.breakpoints.down('lg')]: {
            right:'5%', 
        },
    })); 

    const ScrollBackButton = styled(Button)(({theme})=>({
        position:'absolute',
        left:'2%', 
        top:'45%',  
        zIndex:1,
        width:'8%',
        height:'12%', 
        background: "#fff" ,
        [theme.breakpoints.down('lg')]: {
            left:'5%', 
        },
    })); 

    function Next(props) {
        const { className, style, onClick } = props;
        return (
          <ScrollNextButton onClick={onClick}>
              <ArrowForwardIcon  sx={{color:"#000" ,width:'30%' }}/>
          </ScrollNextButton>
        );
    }      

    function Prev(props) {
        const { className, style, onClick } = props;
        return (
          <ScrollBackButton onClick={onClick}>
              <ArrowBackIcon  sx={{color:"#000" ,width:'30%' }}/>
          </ScrollBackButton>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow:  <Next/> ,
        prevArrow:  <Prev/>,

        appendDots:  dots => 
            <div 
                style={{   
                    backgroundColor: "transparent",
                    borderRadius: "10px",
                    bottom:'0',
                    padding: "10px"}}>
                        <Button sx={{backgroundColor:'transparent'}}>{dots}</Button>
            </div>
    }

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
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

function Banner(props) {

  const [content, setContent] = React.useState(props.content);


  const Container = styled('div')(({theme})=>({
    width: '100%',
    backgroundImage: `url(${content.backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center',
    height: content.height,
    display:'flex',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    [theme.breakpoints.down('sm')]: {
      height: content.mobileHeight,
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'center',
    },

  })); 

  const Title = styled('p')(({theme})=>({
    fontSize: content.smallFont ?  15 : 30,
    fontWeight:600,
    margin: content.smallFont ? '' : 0,
    color:'#fff',
    fontFamily:'Gotham',
    [theme.breakpoints.down('lg')]: {
      fontSize: content.smallFont ?  13 : 25,
      margin: content.smallFont ? 0 : 0,
      alignSelf:'center',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: content.smallFont ?  13 : 20,
    },
    alignSelf:'flex-start'
  })); 

  const SubTitle = styled('p')(({theme})=>({
    fontSize: content.smallFont ?  15 : 20,
    margin: content.smallFont ? '' : 0,
    color:'#fff',
    fontFamily:'Nunito',
    [theme.breakpoints.down('lg')]: {
      fontSize: content.smallFont ?  13 : 20,
      margin: content.smallFont ? 0 : 0,
      alignSelf:'center'
    },
    alignSelf:'flex-start'
  }));  

  const MainImage = styled('img')(({theme})=>({
    alignSelf:'flex-end',
    [theme.breakpoints.down('sm')]: {
      alignSelf:'center',
      width:'190px',
      height:'220px',
    },
    width:'220px',
    height:'250px',
    marginRight:'1%',
  }));  

  const TextsBox = styled('Box')(({theme})=>({
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: content.smallFont ? 'row' : 'column',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
    height:'100%',
    width:'100%',
  }));  
          
  return (
    <Container >
      <CssBaseline />
        {content.mainImage && <MainImage  src={content.mainImage}/>}
        <TextsBox>
          {content.title && <Title>{content.title}</Title>}
          {content.subtitle && <SubTitle>{content.subtitle}</SubTitle>}
        </TextsBox>
    </Container>
  );
}

export default Banner;
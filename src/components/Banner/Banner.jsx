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
    fontSize: content.smallFont ?  16 : 30,
    fontWeight:600,
    margin:0,
    color:'#fff',
    fontFamily:'Gotham',
    [theme.breakpoints.down('sm')]: {
      alignSelf:'center',
    },
    alignSelf:'flex-start'
  })); 

  const SubTitle = styled('p')(({theme})=>({
    fontSize: content.smallFont ?  16 : 20,
    margin:0,
    color:'#fff',
    fontFamily:'Nunito',
    [theme.breakpoints.down('sm')]: {
      alignSelf:'center'
    },
    alignSelf:'flex-start'
  }));  

  const MainImage = styled('img')(({theme})=>({
    alignSelf:'flex-end',
    [theme.breakpoints.down('sm')]: {
      alignSelf:'center',
    },
    width:'200px',
    height:'200px',
    marginRight:'1%',
  }));  

  const TextsBox = styled('Box')(({theme})=>({
    display:'flex',
    [theme.breakpoints.up('xs')]: {
      flexDirection: content.smallFont ? 'row' : 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop:'5%',
      flexDirection: 'column',
      alignItems: 'center',
    },
    justifyContent:'center',
    height:'80%',
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
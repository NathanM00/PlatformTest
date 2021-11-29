import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import AmericanFlag from '../../resources/images/platform/americanFlag.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

function ContentBox(props) {

  const [content, setContent] = React.useState(props.content);

  const Container = styled('div')(({theme})=>({
    width: content.width,
    height:content.height,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'flex-start',
    marginTop:'3%',
    [theme.breakpoints.down('sm')]: {
      height: content.mobileHeight,
      width: '100%',
    },
  })); 

  const Title = styled('p')(({theme})=>({
    fontSize:30,
    fontWeight:600,
    color:'rgb(13,53,94)',
    fontFamily:'Gotham',
    marginRight:'2%',
  })); 

  const Dash = styled('div')(({theme})=>({
    backgroundColor:'lightgray',
    height:'2px',
    width:'100%',
  })); 

  const LenguageBox = styled('div')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    height:'100%',
    width: '15%',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    boxShadow:3,
  })); 

  const TitleBox = styled('Box')(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    height:'30%',
    [theme.breakpoints.down('sm')]: {
      height:'20%',
    },   
    width:'100%',
  })); 

  const LenguageText = styled('p')(({theme})=>({
      fontSize:23,
      marginLeft:'5%',
      fontFamily:'GilroyExtraBold',
      color:'rgb(13,53,94)',
  })); 

  const FlagBox = styled('div')(({theme})=>({
      flexDirection:'row',
      display:'flex',
      padding:0,
      height:'60%',
      margin:0,
      alignItems:'center',
      justifyContent:'center',
      width:'100%',    
  })); 

  const LearningText = styled('p')(({theme})=>({
      fontWeight:800,
      fontSize:12,
      margin:0,
      fontFamily:'Gotham',
      color:'rgb(162,163,182)'
  }));
  
  const ArrowButton= styled(Button)(({theme})=>({
    color:'black',
    backgroundColor:'rgb(229,229,238)',
    width:'5%',
    marginLeft:'1%',
  }));

  return (
    <Container>
      <CssBaseline />
        <TitleBox>
          {content.title && <Title>{content.title}</Title>}
          {content.dash && <Dash/>}
          {content.nextBtn &&  <ArrowButton><ArrowForwardIcon sx={{ color:'rgb(62,52,109)', margin:0, fontSize:15}}/></ArrowButton>}
          {content.lenguage && <LenguageBox>
              <LearningText>
                Currently learning
              </LearningText>
              <FlagBox>
                <img style={{width:'15%',height:'55%'}} src={AmericanFlag}/>
                <LenguageText>{content.lenguage}</LenguageText>
              </FlagBox>
            </LenguageBox>}
        </TitleBox>
        <Box   
          sx={{
            alignItems:'flex-end',
            flexWrap:'wrap',
            display:'flex',
            height: content.lenguage ? '80%' : '90%',
            width:'100%',
          }}>
          {content.content}
        </Box>
    </Container>
  );
}

export default ContentBox;
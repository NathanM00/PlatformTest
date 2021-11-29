import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';

function ProgressStats(props) {

  const [content, setContent] = React.useState(props.content);

  const Container = styled('div')(({theme})=>({
    width: '100%',
    height: content.height,
    display:'flex',
    flexWrap:'wrap',
    borderRadius:15,
    flexDirection:'row',
    padding:0,
    [theme.breakpoints.down('sm')]: {
      height: content.mobileHeight,
    },

  })); 

  const Title = styled('p')(({theme})=>({
    flexDirection:'row',
    display:'flex',
    margin:0,
    width:'30%',
    fontSize:16,
    fontFamily:'GilroyExtraBold',
    textAlign:'left',
    color:'rgb(162,163,182)'
  })); 

  const Number = styled('p')(({theme})=>({
    fontWeight:800,
    fontSize:40,
    margin:0,
    fontFamily:'Gotham',
    color:'rgb(13,53,94)',
  }));
  
  const TitleHighlight  = styled('p')(({theme})=>({
    flexDirection:'row',
    display:'flex',
    margin:0,
    width:'30%',
    fontFamily:'GilroyExtraBold',
    textAlign:'left',
    color:'#fff',
  })); 

  const NumberHighlight = styled('p')(({theme})=>({
    fontWeight:800,
    fontSize:40,
    margin:0,
    fontFamily:'Gotham',
    color:'#fff',
  })); 

  const ItemBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    padding:'4%',
    marginRight:'3.333%',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    height:'30%',
    borderRadius:5,
    width:'30%',
    [theme.breakpoints.down('sm')]: {
      height:'25%',
      width:'45%',
      marginRight:'5%',
    },   
  }));  

  const ItemBoxHighlight = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    padding:'4%',
    marginRight:'3.333%',
    justifyContent:'space-between',
    backgroundColor:'rgb(0,132,246)',
    height:'30%',
    borderRadius:5,
    width:'30%',
    boxShadow:1,
    [theme.breakpoints.down('sm')]: {
      height:'25%',
      width:'45%',
      marginRight:'5%',
    },   
  })); 

  return (
    <Container >
      <CssBaseline />
      {content.items.map((item,index)=>(
        item.highlight 
          ? 
          <ItemBoxHighlight key={index} >
            {item.title && <TitleHighlight>{item.title}</TitleHighlight>}
            {item.number && <NumberHighlight>{item.number}</NumberHighlight>}
          </ItemBoxHighlight> 
          :
          <ItemBox key={index} >
            {item.title && <Title>{item.title}</Title>}
            {item.number && <Number>{item.number}</Number>}
          </ItemBox> 
        ))}
    </Container>
  );
}

export default ProgressStats;
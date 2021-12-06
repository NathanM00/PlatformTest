import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Assignments from '../../resources/images/platform/assignment.png';
import Events from '../../resources/images/platform/events.png';
import Followers from '../../resources/images/platform/followers.png';
import ArrowRight from '../../resources/images/platform/arrowRight.png';
import { Button } from '@mui/material';

function ActivityList(props) {

  const [content, setContent] = React.useState(props.content);

  const Container = styled('div')(({theme})=>({
    width: '100%',
    height: '100%',
    justifyContent:'space-between',
    display:'flex',
    flexDirection:'column',
  })); 

  const Title = styled('p')(({theme})=>({
    margin:0,
    width:'90%',
    fontSize:18,
    textTransform:'capitalize',
    fontFamily:'Nunito',
    textAlign:'left',
    color:'rgb(162,163,182)',
    [theme.breakpoints.down('lg')]: {
      fontSize:17,
    },
    [theme.breakpoints.down('md')]: {
      fontSize:14,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:15,
      width:'70%'
    } 
  })); 

  const Icon = styled('img')(({theme})=>({
    margin:0,
    height:'auto',
    width:'4.5%',
    [theme.breakpoints.down('lg')]: {
      width:'5%'
    },
    [theme.breakpoints.down('md')]: {
      width:'6%'
    },
    [theme.breakpoints.down('sm')]: {
      width:'13%'
    }
  })); 

  const ItemBox = styled(Button)(({theme})=>({
    display:'flex',
    alignItems:'center',
    paddingLeft:'2%',
    paddingRight:'2%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft:'5%',
      paddingRight:'5%',
    },
    justifyContent:'space-between',
    backgroundColor:'#fff',
    height:'30%',
    borderRadius:5,
    width:'100%', 
  }));  

  const IconButton = styled(Box)(({theme})=>({
    height:'20%',
    alignSelf:'center',
    marginBottom:'1%',
    padding:0,
    [theme.breakpoints.down('sm')]: {
      marginBottom:'0%',
      height:'15%',
    }
  }));  

  return (
    <Container >
      <CssBaseline />
      {content.activities.map((item,index)=>(
          <ItemBox  key={index} >
             <Icon src={item.type === 'Events' ? Events : item.type === 'Assignments' ? Assignments : Followers} /> 
             {item.type === 'Events' && <Title>
               {item.list.length} new events were added to your calendar
              </Title>}
             {item.type === 'Assignments' && <Title>
               You have {item.list.length} pending readings to complete 🤓
              </Title>}
             {item.type === 'Followers' && <Title>
               You have {item.list.length} new followers including 
               <span style={{marginLeft:'5px',marginRight:'5px', color:'rgb(0,132,246)',}}> {item.list[0].name} </span>
               and
               <span style={{ marginLeft:'5px',color:'rgb(0,132,246)',}}> {item.list[1].name}</span>
              </Title>}
              <IconButton>
                <img style={{width:'100%',height:'100%'}} src={ArrowRight}/>
              </IconButton>
          </ItemBox> 
        ))}
    </Container>
  );
}

export default ActivityList;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../resources/images/platform/logo.png';
import ArrowDown from '../../resources/images/platform/arrowDown.png';
import Notifications from '../../resources/images/platform/notifications.png';
import UserChat from '../../resources/images/platform/chat.png';
import ProfilePic from '../../resources/images/platform/profilePic.png';
import SessionIcon from '../../resources/images/platform/sessionIcon.png'
import MeetingIcon from '../../resources/images/platform/meetingIcon.png'
import VirtualIcon from '../../resources/images/platform/virtualIcon.png'
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, Icon, ImageListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';


function MainSearchBar(props) {

  const [openNotis, setOpenNotis] = React.useState(false),
        [openMobileNotis, setOpenMobileNotis] = React.useState(false);


  const handleDrawerToggle = () => {
    props.onClick(!props.open);
    console.log('ya');
  };

  const handleNotisToggle = () => {
    setOpenNotis(!openNotis);
  };

  const handleMobileNotisToggle = () => {
    setOpenMobileNotis(!openMobileNotis);
  };

  const currentUser={
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

  const Search = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    height:'80%',
    [theme.breakpoints.up('xs')]: {
      height: '100%',
    },
    marginLeft:'15%',
    [theme.breakpoints.up('xs')]: {
      marginLeft: '0%',
    },
    backgroundColor: 'rgb(245,245,251)',
    '&:hover': {
      backgroundColor: 'rgba(225,225,251,0.6)',
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '22%',
    },
  }));

  const SearchIconWrapper = styled('div')(() => ({
    height: '100%',
    width:'10%',
    marginRight:'5%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    color:'rgb(37,37,91)',
    letterSpacing: '0.1',
    [theme.breakpoints.down('md')]: {
      fontSize:13,
    },
    fontFamily:'Nunito',
    paddingLeft:'4%',
    height:'80px',
    width: '85%'
  }));

  const UserAvatar = styled(Avatar)(({theme}) => ({
      display:'inline-block',
      width: '13%',
      height: 'auto',
  }));

  const MobileAvatar = styled(Avatar)(({theme}) => ({
    display:'inline-block',
    width:'80%',
    height:'80%',
    opacity: openMobileNotis ? 0.8 : 1,
  }));

  const RightContainer =styled(Box)(({theme})=>({
    margin:0, 
    display:'flex',
    alignItems:'center', 
    justifyContent:'space-between', 
    flexDirection:'row', 
    paddingRight:'1%',
    paddingLeft:'0.6%',
    height:'85%',
    width:'33%',
    [theme.breakpoints.down('lg')]: {
      width:'40%',
    },
  }));
  
  const AddButton = styled(Button)(()=>({
    backgroundColor:'rgb(55,135,251)',
    borderRadius:18,
    marginRight:'5%',
    fontFamily:'Gilroy',
    fontWeight:'bolder',
    color:'#fff',
    width:'18%',
    height:'80%',
  }));

  const UserNameText = styled('p')(({theme})=>({
    
    fontSize:16,
    [theme.breakpoints.down('lg')]: {
      fontSize:14,
    },
    [theme.breakpoints.down('md')]: {
      display:'none',
    },
    width:'27%',
    fontFamily:'Nunito',
    display:'inline-block',
    color:'rgb(62,59,109)'
  }));

  const NotificationDot = styled('div')(({theme})=>({
      position:'absolute',
      right:-10,
      bottom:0,
      background:'rgb(55,135,251)',
      width:'60%',
      height:'48%',
      borderRadius:30,
  })); 

  const MobileDot = styled('div')(({theme})=>({
    position:'absolute',
    right:10,
    top:45,
    background:'rgb(55,135,251)',
    width:'15%',
    height:'18%',
    borderRadius:30,
  })); 

  const LogoImage = styled(ImageListItem)(({theme})=>({
    width:'12%',
    height:'auto',    
    [theme.breakpoints.down('lg')]: {
      width:'15%',
    }
  })); 

  const NotificationBox = (
   <Box     
      sx={{
        backgroundColor:'#fff',
        borderRadius:1,
        position:'absolute',
        zIndex:1,
        right:'17%',
        height:'300%',
        padding:'1%',
        boxShadow:3,
        width:'23%',
        overflow:'scroll',
        display:'flex',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        alignItems:'flex-start',
        top:'85%'
      }}>
        {currentUser.notifications.map((noti,index) => (

          <Notification data={noti} key={index} />

        ))}

    </Box>
 ); 

 const MobileNotificationBox = (
  <Box     
     sx={{
       backgroundColor:'#fff',
       borderRadius:1,
       position:'absolute',
       zIndex:1,
       right:'3%',
       height:'300%',
       padding:'1%',
       boxShadow:3,
       width:'40%',
       overflow:'scroll',
       display:'flex',
       justifyContent:'flex-start',
       flexWrap:'wrap',
       alignItems:'flex-start',
       top:'100%'
     }}>
       {currentUser.notifications.map((noti,index) => (

         <MobileNotification data={noti} key={index} />

       ))}

   </Box>
); 

  function Notification(props){

    const data = props.data;
      return(
        <Box sx={{
          display:'flex',
          height:'25%',
          mb:'2%',
          mt:'2%',
          overflow:'hidden',
          width:'100%'
        }}>
          <img src={data.category === 'Session' ? SessionIcon : data.category === 'VirtualMeeting' ?  VirtualIcon : MeetingIcon}
          style={{
            borderRadius:15,
            marginRight:'5%',
            height:'100%',
          }}
          />
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'75%',height:'100%',}}>
            <p 
              style={{
                textOverflow: 'ellipsis',
                 fontSize:15,
                 whiteSpace:'nowrap',
                 overflow:'hidden',
                 textAlign:'left',
                 color:'rgb(19,24,73)',
                 margin:0,
                 fontWeight:'bold',
                 fontFamily:'Gotham',
            }}>
              {data.title}.
            </p>
            <p 
              style={{
                textOverflow: 'ellipsis',
                fontSize:12,
                margin:0,
                whiteSpace:'nowrap',
                overflow:'hidden',
                textAlign:'left',
                color:'rgb(156,154,183)',
                fontWeight:'bold',
                fontFamily:'Gotham',
            }}>
              {data.date}, {data.hour}
            </p>
          </div>
        </Box>
    )
  }

  function MobileNotification(props){

    const data = props.data;
      return(
        <Box sx={{
          display:'flex',
          height:'30%',
          mb:'2%',
          alignItems:'center',
          mt:'2%',
          overflow:'hidden',
          width:'100%'
        }}>
          <img src={data.category === 'Session' ? SessionIcon : data.category === 'VirtualMeeting' ?  VirtualIcon : MeetingIcon}
          style={{
            borderRadius:15,
            marginRight:'5%',
            height:'80%',
          }}
          />
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'75%',height:'100%',}}>
            <p 
              style={{
                textOverflow: 'ellipsis',
                 fontSize:12,
                 whiteSpace:'nowrap',
                 overflow:'hidden',
                 textAlign:'left',
                 color:'rgb(19,24,73)',
                 margin:0,
                 fontWeight:'bold',
                 fontFamily:'Gotham',
            }}>
              {data.title}.
            </p>
            <p 
              style={{
                textOverflow: 'ellipsis',
                fontSize:10,
                margin:0,
                whiteSpace:'nowrap',
                overflow:'hidden',
                textAlign:'left',
                color:'rgb(156,154,183)',
                fontWeight:'bold',
                fontFamily:'Gotham',
            }}>
              {data.date}, {data.hour}
            </p>
          </div>
        </Box>
    )
  }

  return (
      <AppBar
        position="static"
        sx={{
          backgroundColor:'#fff',
          width:'100%',
          zIndex: 1 ,
          height:'65px',
        }}
      >

        <Toolbar sx={{display: { xs: 'none', sm: 'flex' },}} >
           <Box 
              sx={{
                width:  '100%',
                height:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
            }}>

              <LogoImage>
                <img src={Logo}/>
              </LogoImage>

              <Search>
                <StyledInputBase
                  placeholder="Search and Find"
                  inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIconWrapper>
                  <SearchIcon  sx={{color:'rgb(157,157,181)'}}/>
                </SearchIconWrapper>
              </Search>

              <RightContainer  >
                
                  <AddButton >
                    <p>+ ADD</p>
                  </AddButton>

                  <IconButton onClick={handleNotisToggle} sx={{width:'20px',padding:0}}>
                    <img style={{width:'100%',height:'100%'}} src={Notifications}/>
                    {currentUser.notifications.length >=1 && <NotificationDot></NotificationDot>}
                  </IconButton>

                  <IconButton sx={{width:'20px',padding:0}}>
                    <img style={{width:'100%',height:'100%'}} src={UserChat}/>
                  </IconButton>

                  <UserNameText >{currentUser.userName}</UserNameText>

                  <UserAvatar variant="circular" alt={currentUser.userName} src={currentUser.profilePic} />

                  <IconButton sx={{width:'10px',padding:0}}>
                    <img style={{width:'100%',height:'100%'}} src={ArrowDown}/>
                  </IconButton>

                  {openNotis && NotificationBox}
                                    
              </RightContainer>  

           </Box>
        </Toolbar>

        <Toolbar sx={{padding:0, display: { xs: 'flex', sm: 'none' },}} >
          <Box sx={{
            width:  '100%',
            height:'100%',
            flexDirection:'column',
            display: 'flex',
            justifyContent:'space-between',
          }}>
              <Box 
                  sx={{
                    padding:'0 5%',
                    display:'flex', 
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'100%',
                    height:'100%',
                  }}>

                 <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{marginTop:'1%', mr: 2, display: { sm: 'none' } }}
                  >
                    <MenuIcon sx={{color:'rgb(157,157,181)'}} />
                  </IconButton>

                  <img style={{width:'30%',marginTop:'1%',height:'auto'}} src={Logo}/>

                  <Button 
                    onClick={handleMobileNotisToggle}
                    style={{
                      padding:0,
                      width:'40px',
                      height:'auto',
                      marginTop:'1%'
                    }}>
                    <MobileAvatar variant="circular" alt={currentUser.userName} src={currentUser.profilePic} />      
                    {currentUser.notifications.length >=1 && <MobileDot></MobileDot>}            
                  </Button>  

                  {openMobileNotis && MobileNotificationBox}

              </Box>
                          
              <Box  
                  sx={{ 
                    marginTop:'1.5%',
                    display:'flex',
                    backgroundColor:'#fff',
                    padding:'0 5%',
                    alignItems:'center',
                    width:'100%',
                    height:'100px',
                }}>
                  <Search>
                    <StyledInputBase
                      placeholder="Search and Find"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchIconWrapper>
                      <SearchIcon  sx={{color:'rgb(157,157,181)'}}/>
                    </SearchIconWrapper>
                  </Search>
              </Box>
              
          </Box>
        </Toolbar>

      </AppBar>
  );
}

export default MainSearchBar;
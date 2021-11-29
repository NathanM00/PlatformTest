import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeBold from '../../resources/images/menu/homeBold.png';
import Squares from '../../resources/images/menu/squares.png';
import Doc from '../../resources/images/menu/doc.png';
import Stats from '../../resources/images/menu/stats.png';
import Chat from '../../resources/images/menu/chat.png';
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


function MainDrawer(props) {

  const [openDrawer, setOpenDrawer] = React.useState(false),
        [openNotis, setOpenNotis] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleNotisToggle = () => {
    setOpenNotis(!openNotis);
  };

  const NavButtons=[
    {
      icon:MenuIcon,
      selected:false,
    },
    {
      icon:HomeBold,
      selected:true,
    },
    {
      icon:Squares,
      selected:false,
    },
    {
      icon:Stats,
      selected:false,
    },
    {
      icon:Doc,
      selected:false,
    },
    {
      icon:Chat,
      selected:false,
    },
  ];

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
      ],
      profilePic:ProfilePic,
      userName:'John Doe',
  }

  const DrawerContent = (
      <List sx={{height:'100%',marginTop:'120%',border:'none',}}>
        <IconButton sx={{height:'8%', marginLeft:'5%',display: { xs: 'block', sm: 'none' }}} onClick={handleDrawerToggle}>
            <ChevronLeftIcon sx={{color:'#fff'}} />
        </IconButton> 
        {NavButtons.map((option,index) => (
          <ListItem button key={index} 
          sx={{ 
            backgroundColor: option.selected ? 'rgb(0,99,250)' : 'transparent', 
            height:'8%', alignItems:'center'}}>
            <ListItemIcon >
                {option.icon !== MenuIcon 
                  ?  <ImageListItem sx={{marginLeft: { xs: '0', sm: '5%' }}}> <img src={option.icon}/>  </ImageListItem>
                  : <MenuIcon sx={{display: { xs: 'none', sm: 'block' },color: '#fff' }}/>
                }
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
  );

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
    paddingRight:'5%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    color:'rgb(37,37,91)',
    letterSpacing: '0.1',
    fontSize:15,
    fontFamily:'Nunito',
    paddingLeft:'4%',
    '& .MuiInputBase-input': {
      transition: theme.transitions.create('width'),
      width: '100%'
    },
  }));

  const UserAvatar = styled(Avatar)(({theme}) => ({
      display:'inline-block',
      width: '13%',
      height: '100%',
  }));

  const MobileAvatar = styled(Avatar)(({theme}) => ({
    display:'inline-block',
    width:'80%',
    height:'100%',
  }));

  const RightContainer =styled(Box)(()=>({
    margin:0, 
    display:'flex',
    alignItems:'center', 
    justifyContent:'space-between', 
    flexDirection:'row', 
    paddingRight:'1%',
    paddingLeft:'0.6%',
    height:'85%',
    width:'33%',
  }));
  
  const AddButton = styled(Button)(()=>({
    backgroundColor:'rgb(55,135,251)',
    borderRadius:18,
    marginRight:'5%',
    fontFamily:'Gilroy',
    fontWeight:'bolder',
    color:'#fff',
    height:'80%',
    width:'18%',
  }));

  const UserNameText = styled('p')(()=>({
    fontSize:16,
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
    width:'18%',
    height:'21%',
    borderRadius:30,
  })); 

  const NotificationBox = (
   <Container     
      sx={{
        backgroundColor:'#fff',
        borderRadius:1,
        position:'absolute',
        zIndex:2,
        right:'17%',
        height:'300%',
        boxShadow:3,
        width:'23%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-end',
        top:'85%'
      }}>
        {currentUser.notifications.map((noti,index) => (

          <Notification data={noti} key={index} />

        ))}

    </Container>
 ); 

  function Notification(props){

    const data = props.data;
      return(
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
          height:'25%',
          mb:'2%',
          mt:'2%',
          width:'100%'
        }}>
          <img src={data.category === 'Session' ? SessionIcon : data.category === 'VirtualMeeting' ?  VirtualIcon : MeetingIcon}
          style={{
            borderRadius:20,
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
                 width:'100%',
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
                margin:0,
                textAlign:'left',
                fontSize:12,
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="static"
        sx={{
          width:  '100%',
        }}
      >

        <Toolbar 
          sx={{
            zIndex:1,
            display: { xs: 'none', sm: 'flex' },
            justifyContent:'space-between',
            paddingY:'0.5%',
            backgroundColor:'#fff',
          }}>
          
          <ImageListItem sx={{width:'12%'}}>
            <img src={Logo}/>
          </ImageListItem>

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

              <IconButton onClick={handleNotisToggle} sx={{width:'5%',padding:0}}>
                <img style={{width:'100%',height:'100%'}} src={Notifications}/>
                {currentUser.notifications.length >=1 && <NotificationDot></NotificationDot>}
              </IconButton>

              <IconButton sx={{width:'5.5%',padding:0}}>
                <img style={{width:'100%',height:'100%'}} src={UserChat}/>
              </IconButton>

              <UserNameText >{currentUser.userName}</UserNameText>

              <UserAvatar alt={currentUser.userName} src={currentUser.profilePic} />

              <IconButton sx={{width:'2.5%',padding:0}}>
                <img style={{width:'100%',height:'100%'}} src={ArrowDown}/>
              </IconButton>

              {openNotis && NotificationBox}
                                
          </RightContainer>            

        </Toolbar>

        <Toolbar 
          sx={{
            flexDirection:'column',
            display: { xs: 'flex', sm: 'none' },
            justifyContent:'space-between',
            paddingY:'0.5%',
            backgroundColor:'#fff',
          }}>
          
          
          <Box 
            sx={{
              marginTop:'2%', 
              display:'flex', 
              justifyContent:'space-between',
              width:'100%',
            }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon sx={{color:'rgb(157,157,181)'}} />
            </IconButton>

              <img style={{width:'40%',height:'90%'}} src={Logo}/>

            <Button 
              style={{
                padding:0,
                width:'16%',
                height:'60px',
              }}>
              <MobileAvatar alt={currentUser.userName} src={currentUser.profilePic} />      
              {currentUser.notifications.length >=1 && <MobileDot></MobileDot>}            
            </Button>  
          </Box>
                    
          <Box  
            sx={{ 
              paddingTop:'1%',
              paddingBottom:'1%',
              display:'flex',
              alignItems:'center',
              height:'80px',
              width:'100%',
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

        </Toolbar>

      </AppBar>

      <Box
        sx={{ zIndex:0,display:'box', flexShrink: { sm: 0 } }}>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {border:'none',
             backgroundColor:'rgb(55,135,251)', boxSizing: 'border-box', width: '4%' },
          }}
          open
        >
          {DrawerContent}
        </Drawer>

        <Drawer
          variant="temporary"
          open={openDrawer}x
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {backgroundColor:'rgb(55,135,251)', boxSizing: 'border-box', width: '10%' },
          }}
        >
          {DrawerContent}
        </Drawer>

      </Box>
    </Box>
  );
}

export default MainDrawer;
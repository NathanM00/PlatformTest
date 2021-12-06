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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Home from '../../resources/images/menu/home.png';
import Squares from '../../resources/images/menu/squares.png';
import Doc from '../../resources/images/menu/doc.png';
import Stats from '../../resources/images/menu/stats.png';
import Chat from '../../resources/images/menu/chat.png';
import HomeBold from '../../resources/images/menu/homeBold.png';
import SquaresBold from '../../resources/images/menu/squaresBold.png';
import DocBold from '../../resources/images/menu/docBold.png';
import StatsBold from '../../resources/images/menu/statsBold.png';
import ChatBold from '../../resources/images/menu/chatBold.png';
import {ImageListItem } from '@mui/material';


function MainDrawer(props) {

  const [openDrawer, setOpenDrawer] = React.useState(props.open),
        [currentPage, setCurrentPage] = React.useState('Home');

  const handleDrawerToggle = () => {
    props.onClick(!props.open);
  };

  const handlePage = (page) => {
    if(page !== false){
      setCurrentPage(page);
    }
  };


  const NavButtons=[
    {
      icon:MenuIcon,
      selected:false,
      page:false,
    },
    {
      icon:Home,
      boldIcon:HomeBold,
      page:'Home',
    },
    {
      icon:Squares,
      boldIcon:SquaresBold,
      page:'Squares',
    },
    {
      icon:Stats,
      boldIcon:StatsBold,
      page:'Stats',
    },
    {
      icon:Doc,
      boldIcon:DocBold,
      page:'Doc',
    },
    {
      icon:Chat,
      boldIcon:ChatBold,
      page:'Chat',
    },
  ];

  const DrawerContent = (
      <List 
      sx={{
          height:'100%',
          width:'100%',
          border:'none',}}>

        <IconButton 
          sx={{
            height:'8%',alignItems:'center',
            justifyContent:'center',
            display: { xs: 'flex', sm: 'none' }
          }} 
          onClick={handleDrawerToggle}>
            <ChevronLeftIcon sx={{color:'#fff'}} />
        </IconButton> 

        {NavButtons.map((option,index) => (
          <ListItem button key={index}  
          onClick={()=>handlePage(option.page)}
          sx={{ 
            display: {  xs: option.icon === MenuIcon ?  'none' : 'flex', sm: 'flex' },
            backgroundColor: option.icon !== MenuIcon && option.page === currentPage ? 'rgb(0,90,255)' : 'transparent',
            width:'100%',justifyContent:'center',
            height:'8%', alignItems:'center'}}>
           
            <ListItemIcon 
              sx={{
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'100%'}}>
                {
                  option.icon !== MenuIcon && currentPage !== option.page ?  <ImageListItem><img src={option.icon}/></ImageListItem> :
                  option.icon !== MenuIcon && currentPage === option.page ?  <ImageListItem><img src={option.boldIcon}/></ImageListItem>
                  : <MenuIcon sx={{color: '#fff' }}/>
                }
            </ListItemIcon>
          </ListItem>
        ))}

      </List>
  );


  return (
    <Box >
      <CssBaseline />

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            '& .MuiDrawer-paper': {border:'none',
             backgroundColor:'rgb(55,135,251)',marginTop:'65px', height:'100%',width: '5%' },
          }}
          open
        >
          {DrawerContent}
        </Drawer>

        <Drawer
          variant="temporary"
          open={props.open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'flex', sm: 'none' },
            '& .MuiDrawer-paper': {backgroundColor:'rgb(55,135,251)', width: '10%' },
          }}
        >
          {DrawerContent}
        </Drawer>

    </Box>
  );
}

export default MainDrawer;
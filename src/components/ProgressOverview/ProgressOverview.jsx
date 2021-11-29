import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import {PieChart,Pie, RadialBarChart, RadialBar,Legend,Tooltip } from 'recharts';
import { Divider } from '@mui/material';


function ProgressOverview(props) {

    const [content, setContent] = React.useState(props.content);

    const Container = styled('div')(({theme})=>({
        width: '100%',
        height: content.height,
        padding:'4%',
        display:'flex',
        alignItems:'center',
        alignSelf:'flex-start',
        backgroundColor:'rgb(24,48,123)',
        borderRadius:15,
        flexDirection:'column',
        [theme.breakpoints.down('sm')]: {
          height: content.mobileHeight,
        },
    })); 

    const Title = styled('p')(({theme})=>({
        flexDirection:'row',
        margin:0,
        textAlign:'center',
        width:'100%',
        fontWeight:800,
        fontSize:30,
        fontFamily:'Gotham',
        color:'#fff'
    })); 

    const GraphDetails = styled(Box)(({theme})=>({
        backgroundColor:'rgba(255,255,255,0.1)',
        borderRadius:10,
        height:'25%',
        width:'90%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row', 
        justifyContent:'center', 
        height:'30%'
    })); 

    const HourText = styled('p')(({theme})=>({
        fontWeight:800,
        fontSize:40,
        margin:0,
        fontFamily:'nunito',
        color:'#fff',
    })); 
  

    const LabelText = styled('p')(({theme})=>({
        fontWeight:800,
        fontSize:15,
        margin:0,
        fontFamily:'Nunito',
        color:'#fff',
    })); 


    return(

        <Container>
            <CssBaseline />
            <Title>Progress overview</Title>
                <PieChart width={200} height={215} >
                        <Pie innerRadius={60} paddingAngle={5} label data={content.data} dataKey="value" 
                        nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="rgb(255,209,53)" />
                </PieChart>
             
            <GraphDetails >
               <div style={{height:'50%',width:'50%' }}>
                    <div style={{width:'80%', marginTop:'5%',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                        <div style={{backgroundColor:'rgb(255,209,53)',borderRadius:10,width:'12px',height:'12px'}}/>
                        <LabelText>Completed</LabelText>
                    </div>
                    <HourText>20<span style={{fontSize:20}}>hours</span></HourText>
               </div>
               <Divider orientation="vertical" color='red' variant="middle"/>
               <div style={{height:'50%',width:'40%'}}>
                    <div style={{width:'80%',marginTop:'5%',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                        <div style={{backgroundColor:'rgb(255,122,86)',borderRadius:10,width:'12px',height:'12px'}}/>
                        <LabelText>Left to go</LabelText>
                    </div>
                    <HourText>30<span style={{fontSize:20}}>hours</span></HourText>
               </div>
            </GraphDetails>
        </Container>
    );
}


export default ProgressOverview;
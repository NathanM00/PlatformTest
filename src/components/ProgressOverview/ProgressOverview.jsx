import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import {PieChart,Pie,Cell,Label} from 'recharts';
import { Divider } from '@mui/material';


function ProgressOverview(props) {

    const [content, setContent] = React.useState(props.content);

    const currentCompleted = content.data[0].value;
    const currentLeft = content.data[1].value;

    const currentPercentage = (currentCompleted*100)/(currentCompleted + currentLeft);

    const Container = styled('div')(({theme})=>({
        width: '100%',
        padding:'4%',
        display:'flex',
        alignItems:'center',
        height:'110%',
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
        color:'#fff',
        [theme.breakpoints.down('lg')]: {
            fontSize: 25
        },
        [theme.breakpoints.only('xs')]: {
            fontSize:30,
        }
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
    })); 

    const HourText = styled('p')(({theme})=>({
        fontWeight:800,
        fontSize:40,
        margin:0,
        fontFamily:'nunito',
        color:'#fff',
        [theme.breakpoints.down('lg')]: {
            fontSize: 30
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 25
        },
        [theme.breakpoints.only('xs')]: {
            fontSize:40,
        }
    })); 

    const LabelText = styled('p')(({theme})=>({
        fontWeight:800,
        fontSize:15,
        margin:0,
        fontFamily:'Nunito',
        color:'#fff',
        [theme.breakpoints.down('lg')]: {
            fontSize: 12
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 8.5
        },
        [theme.breakpoints.only('xs')]: {
            fontSize:15,
        }
    })); 

    const LabelSection = styled('div')(({theme})=>({
        height:'100%',
        flexDirection:'column', 
        width:'50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    })); 

    const HourSpan = styled('span')(({theme})=>({
        fontSize:20,
        [theme.breakpoints.down('lg')]: {
            fontSize: 15
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 12
        },
        [theme.breakpoints.only('xs')]: {
            fontSize:20,
        }
    })); 

    return(

        <Container>
            <CssBaseline />
            <Title>Progress overview</Title>
                <PieChart width={200} height={215} >
                        <Pie innerRadius={60} stroke={'none'}  data={content.data} dataKey="value" 
                        nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="rgb(255,209,53)" >
                        {
                            content.data.map((entry, index) => <Cell fill={content.colors[index % content.colors.length]}/>)
                        }
                        <Label 
                            value={currentPercentage+'%'} 
                            position="center"  
                            style={{
                                fill:'#ffffff',
                                fontWeight:800,
                                fontSize:30,
                                fontFamily:'nunito',
                            }} />
                        </Pie>
                </PieChart>
             
            <GraphDetails >
               <LabelSection >
                    <div style={{width:'80%', display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                        <div style={{backgroundColor:'rgb(255,209,53)',borderRadius:10,width:'12px',height:'12px'}}/>
                        <LabelText>Completed</LabelText>
                    </div>
                    <HourText>{currentCompleted}<HourSpan>hours</HourSpan></HourText>
               </LabelSection>
               <Divider orientation="vertical" color='white' sx={{height:'50%'}} variant="middle"/>
               <LabelSection>
                    <div style={{width:'80%',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
                        <div style={{backgroundColor:'rgb(255,122,86)',borderRadius:10,width:'12px',height:'12px'}}/>
                        <LabelText>Left to go</LabelText>
                    </div>
                    <HourText>{currentLeft}<HourSpan>hours</HourSpan></HourText>
               </LabelSection>
            </GraphDetails>
        </Container>
    );
}


export default ProgressOverview;
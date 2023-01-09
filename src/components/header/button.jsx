import React from 'react'
// import useNavigate from 'react-router-dom';
import {Box,Button,Typography} from '@mui/material'
import styled from '@emotion/styled'
import Shopping from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
// import Log from '../login'

const Switch = styled(Box)`
   margin: 0 1% 0 auto;
    display: flex;
    // & > button,& > p, & > div {
    //     margin-right: 40px,
    //     // textDecoration: 'none',
    //     // color: '#FFFFFF',
    //     font-size:14px;
    //     // alignItems: 'center',
`;

const Loginbtn = styled(Button)`
margin-right:1.8cm;
width:0ccm;
padding:1px;
`;


const Cart = styled(Shopping)`
color:black;
`;




export default function button() {

// const navigate = useNavigate();

// const navigateToContacts = () => {
//   // 👇️ navigate to /contacts
//   navigate('/login');
// };

  return (
    <Switch>
        <Link to = "/shop" style={{ textDecoration: 'none' }}> <Typography style={{width:0 ,marginTop:3, marginRight:100}}> Shop</Typography> </Link>
       <Link to = "/login" style={{ textDecoration: 'none' }} > <Loginbtn variant="contained" > Login </Loginbtn> </Link>
       <Link to = "/about" style={{ textDecoration: 'none' }}> <Typography style={{width:0 ,marginTop:3, marginRight:100}}>AboutUs</Typography></Link>
       <Link to = "/contact" style={{ textDecoration: 'none' }}> <Typography style={{width:150 ,marginTop:3}}> contact </Typography> </Link>
         <Cart/>
        <Typography style={{color: 'black ' , marginTop:3}}> Cart </Typography>
    </Switch>
  )
}

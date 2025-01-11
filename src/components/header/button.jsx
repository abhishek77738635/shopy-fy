import React from 'react'
// import useNavigate from 'react-router-dom';
import {Box,Button,Typography} from '@mui/material'
import styled from '@emotion/styled'
import Shopping from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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




const Buttonw = () => {
  const cart = useSelector((state) => state.cart.items);

  const storedEmail = localStorage.getItem("email");
  // const history = useNavigate();

// const navigate = useNavigate();

// const navigateToContacts = () => {
//   // 👇️ navigate to /contacts
//   navigate('/login');
// };

const handleLogout = () => {
  localStorage.clear();
  // history.push("/login");
}

  return (
    <Switch>
        <Link to = "/shop" style={{ textDecoration: 'none' }}> <Typography style={{width:0 ,marginTop:3, marginRight:70}}> Shop</Typography> </Link>
       <a  onClick={() => handleLogout()} href='/login' style={{ textDecoration: 'none' }} > <Loginbtn variant="contained" hidden={!storedEmail}> Log out </Loginbtn> </a>
       <Link to = "/login" style={{ textDecoration: 'none' }} > <Loginbtn variant="contained" hidden={storedEmail}> Login </Loginbtn> </Link>
       <Link to = "/about" style={{ textDecoration: 'none' }}> <Typography style={{width:0 ,marginTop:3, marginRight:100}}>About</Typography></Link>
       <Link to = "/contact" style={{ textDecoration: 'none' }}> <Typography style={{width:150 ,marginTop:3}}> Contact </Typography> </Link>
         <Cart/><div style={{backgroundColor:"red",width:"14px",height:"14px",borderRadius:"100%",fontSize:"10px",display:'flex',alignItems:'center',justifyContent:"center",fontWeight:'bold'}}>{cart.length}</div>
        <Link style={{color: 'black ' , marginTop:3,textDecoration: 'none' }} to='/cart'> Cart </Link>
    </Switch>
  )
}

export default Buttonw

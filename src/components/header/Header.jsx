import React from 'react'
import Search from './search'
import {AppBar,Toolbar,styled,Typography} from '@mui/material'
import Button from './button'
import {Link} from 'react-router-dom'

const StyledHeader = styled(AppBar)`
    background: #4AE7C3;
    height: 55px;
`;

const Subhead = styled(Typography)`
font-size:30px;
margin-top:2px;
width:4cm;
height:1.4cm;
color:black;
margin-left:4cm;
display:flex;
`;



export default function Header() {

  return (
    
    <StyledHeader>
        <Toolbar style={{display:'flex'}}>
            
                 <Subhead>
                   <Link to='/shop' style={{ marginLeft:'-2CM' ,textDecoration: 'none' , fontSize:'0.7cm', color:'black' , fontStyle:'Fantasy' , fontWeight:'bold'}}>SHOPY'FY</Link> 
                </Subhead>
                
            <Search/>
            <Button/>
            
        </Toolbar>
    </StyledHeader>
  )
}


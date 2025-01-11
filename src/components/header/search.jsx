import React from 'react'
import {styled,Box,InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import "./textx.css"


const SearchCon = styled(Box)`

border-radius: 2px;
margin-left: 10px;
width: 38%;
background-color: #fff;
display: flex;

`;

const InputSearch = styled(InputBase)`
padding-left:20px;
// margin-bottom:2px;
width:100%;
margin:auto;
`;

const Iconn = styled(Box)`color:blue; margin-top:5px;`;
 
 export default function search() {
  return (
    // <SearchCon>
    //     <InputSearch
    //     placeholder='search for products ' />
    //     <Iconn>
    //         <SearchIcon/>
    //     </Iconn>
    // </SearchCon> 

    <div className="containerx">
    <div className="animatedText"> 40% OFF on Clothes and Electronics ! Hurry Up! 🛍️</div>
  </div>
  )
}

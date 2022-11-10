import React from 'react';
import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';


function Header() {
    return(
    <div className="header">
        <IconButton>
            <AccountCircleIcon className="header__icon" fontSize="large" />
        </IconButton>
        <img
            className="header__logo" 
            src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
             alt="podpal logo"
             />
         <IconButton>  
        <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>  

    </div>
    )
}

export default Header; 
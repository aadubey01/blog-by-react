import React, { useState } from 'react';
import {AppBar, Button, Toolbar, Typography , Box ,Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
// import { authActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const [value,setValue] = useState();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);
  return (
    <AppBar 
    position = "sticky" 
    sx ={{background:'radial-gradient(circle, rgba(236,175,230,0.9136904761904762) 0%, rgba(152,146,232,1) 100%)'}}>
      <Toolbar>
        <Typography variant  = "h4">Priority</Typography>
       { isLoggedIn && (<Box display="flex" marginLeft={'auto'} marginRight="auto">
          <Tabs 
          textColor='inherit' 
          value ={value} 
          onChange={(e,val) => setValue(val) } 
          >
            <Tab  
            LinkComponent={Link} 
            to ="/blogs"
            label ="All Blogs" 
            />
            <Tab  LinkComponent={Link} 
            to ="/myBlogs"
            label = "My Blogs" />
            <Tab LinkComponent={Link}
            to= "blogs/add"
            label= "Add Blog"/>
          </Tabs>
        </Box>)}
        <Box display = "flex" marginLeft= 'auto'>
          <Button LinkComponent={Link} 
            to ="/auth"
            variant = 'contained'
            sx ={{ margin:1, borderRadius:10}}
            color ="warning"> Login </Button>
          <Button LinkComponent={Link} 
            to ="/auth"
            variant = 'contained' 
            sx = {{margin:1 ,borderRadius:10}} 
            color= "warning">Signup</Button>
         { isLoggedIn && (<Button
            onClick={()=>dispatch(authActions.logout())}
            LinkComponent={Link} 
            to ="/auth"
            variant = 'contained'
            sx ={{ margin:1, borderRadius:10}}
            color ="warning"> Logout </Button>)}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
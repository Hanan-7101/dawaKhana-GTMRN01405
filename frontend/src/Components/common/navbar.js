import React,{useState}from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import MenuItem from '@mui/material/MenuItem';





const Navbar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorElNav, setAnchorElNav] = useState(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [anchorElUser, setAnchorElUser] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
     
    const handleLogout=()=>{
      localStorage.removeItem("token")
     window.location='/login'
     

    }
  return (
    <AppBar  position="static"  style={{background:" linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))" }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
      
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/homepage"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
         DawaKhana
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            
              <MenuItem component="a"
          href="/homepage" onClick={handleCloseNavMenu}>
                <Typography    textAlign="center">Products</Typography>
                
              </MenuItem>
              <MenuItem   component="a"
          href="/addmedicine" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Add Medicine</Typography>
                
              </MenuItem>
             
         
          </Menu>
        </Box>
       
        <Typography
          variant="h5"
          noWrap
    
          
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
         DawaKhana
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
            <Button
              component="a"
              href="/homepage"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}

            >
              Products
            </Button>
            <Button
             
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
             Pricing
            </Button>
            <Button
              component="a"
              href="/addmedicine"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Add Medicine
            </Button>
         
        </Box>
      
        

      
         
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/02/Asta-Demon-Form-Cropped.jpg" />
              </IconButton>
            </Tooltip><Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
           
              <MenuItem  onClick={handleCloseUserMenu}>
             
                <Typography textAlign="center" onClick={handleLogout}
            >logout</Typography>
              </MenuItem>
              </Menu>
              </Box>
             
         
            
        
       
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar
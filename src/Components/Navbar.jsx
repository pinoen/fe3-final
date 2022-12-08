import React, { useContext } from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

const Navbar = () => {

  const { state, dispatch } = useContext(GlobalContext)

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color='primary' position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DH Odonto
            </Typography>
            <Button color="inherit"><Link to={"/home"}>Home</Link></Button>
            <Button color="inherit"><Link to={"/contact"}>Contact</Link></Button>
            <Button color="inherit"><Link to={"/destacados"}>Favs</Link></Button>
            <IconButton onClick={() => dispatch(state === '' ? { type: 'dark' } : { type: 'light' })}>
              {state === 'dark' ? <LightModeIcon /> : <NightlightIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  )
}

export default Navbar
import React, { useContext } from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';
// import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  // const { state, dispatch } = useContext(ContextGlobal)

  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DH Odonto
            </Typography>
            <Button color="inherit"><Link to={"/home"}>Home</Link></Button>
            <Button color="inherit"><Link to={"/contact"}>Contact</Link></Button>
            <Button color="inherit"><Link to={"/destacados"}>Favs</Link></Button>
            <IconButton>
              <NightlightIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar
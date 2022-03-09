import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useScrollTrigger } from '@material-ui/core'
import { Slide } from '@material-ui/core'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function ElevationScroll(props) {
  const { children} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


function Header() {

  const style= {
    background: 'linear-gradient(#000000,#0c1c23,#001c23)',
    height: '8vh',
    opacity:'0.993'
    // boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'

  }

  return (
    
    <ElevationScroll>
      <AppBar style={style}>
      <Toolbar>
          <Typography variant='h4'>Java : from 0 to Hero</Typography>
      </Toolbar>
      </AppBar>
    </ElevationScroll>

  
  )
}

export default Header
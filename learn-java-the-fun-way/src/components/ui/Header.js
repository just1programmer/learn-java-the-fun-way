import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useScrollTrigger } from '@material-ui/core'
import { Slide } from '@material-ui/core'
import  {makeStyles} from '@material-ui/styles'
import theme from './Theme'

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


/*function ElevationScroll(props) {
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
*/

const useStyles = makeStyles(theme => ({

  toolbarMargin : {
    ...theme.mixins.toolbar
  }
}))


function Header() {


  const classes = useStyles();

  return (
    
    <React.Fragment>
     <HideOnScroll>
      <AppBar color="primary">
      <Toolbar>
          <Typography variant='h5'>Java : from 0 to Hero</Typography>
      </Toolbar>
      </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  
  )
}

export default Header
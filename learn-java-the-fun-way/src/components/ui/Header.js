import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Button, Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useScrollTrigger } from '@material-ui/core'
import { Slide } from '@material-ui/core'
import  {makeStyles} from '@material-ui/styles'
import { Tabs } from '@material-ui/core'
import { Tab } from '@material-ui/core'


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
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo : {
    height : "7em",
    width : "10em"
  } ,
  tabsContainer : {
    marginLeft :"auto"
  },
  tab: {

    fontFamily: "Raleway, sans-serif",
    fontWeight: "800",
    fontSize: "1rem",
    textTransform: "none",
    minWidth :10 ,
    marginLeft : "25px"
  },
  button : {
    marginLeft: "25px",
    marginRight: "10px",
    fontFamily: "monospace",
    fontWeight: "600",
    fontSize: "1rem",
    borderRadius :"50px",
    textTransform: "none",
    color: "white",
    height: "45px"
  }
}))


function Header() {


  const classes = useStyles();

  return (
    
    <React.Fragment>
     <HideOnScroll>
      <AppBar color="primary">
      <Toolbar disableGutters={true}>
       { /* <img alt="logo" src={logoimage} className={classes.logo}/> */}
        <Typography variant='h5'>Transylvania Codecamp</Typography>
        <Tabs className={classes.tabsContainer}>
          <Tab className={classes.tab} label="Home"/>
          <Tab className={classes.tab} label="About me"/>
          <Tab className={classes.tab} label="Project overview"/>
          <Tab className={classes.tab} label="Contact"/>
        </Tabs>
        <Button variant="contained" color="secondary" className={classes.button}>Sign up</Button>
      </Toolbar>
      </AppBar>
      </HideOnScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  
  )
}

export default Header
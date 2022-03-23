import React from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width:'100vw',
    height:'6vh',
    backgroundColor:'#0c1c23',
    color: 'white',
    textAlign: 'center',
  },
  toolbarMargin : {
    ...theme.mixins.toolbar,
    
  }
}))

export default function Footer() {
  
  const classes = useStyles();

  return (
    <React.Fragment>
       <div className={classes.toolbarMargin}/>
       <div className={classes.footer} >
         <Grid container spacing={5}>
            <Grid item xs={12} >
              <Typography variant='h6'>Copyright Ⓒ 2022 Transylvania Codecamp</Typography>
            </Grid>
            
         </Grid>
        </div>
    </React.Fragment>
   
  )
}

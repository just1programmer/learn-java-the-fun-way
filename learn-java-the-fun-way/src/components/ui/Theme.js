import { green } from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core/styles'

const darkBlue = "#0c1c23"
const lightBlue = "#328561"
const theme=createMuiTheme({
    palette:{
        common:{
            dark:`${darkBlue}`,
            light: `${lightBlue}`
        },
        primary:{
            main:`${darkBlue}`
        },
        secondary : {
            main: `${lightBlue}`
        }
       

    },
    typography :{
            h5 : {
                marginLeft:"15px"
                
            },
            tab : {
                color:"green"
            }

    }
})
 
export default theme
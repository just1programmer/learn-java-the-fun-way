import { green } from '@material-ui/core/colors'
import {createMuiTheme} from '@material-ui/core/styles'

const darkBlue = "#0c1c23"
const lightBlue = "#C2FAF8"
const ThemeReadColor = "#107896"
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
            h6 : {
                fontSize: '48px',
                color: `${ThemeReadColor}`
            }
    }
})
 
export default theme
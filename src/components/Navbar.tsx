import { Box, ButtonBase, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {ModeNight, WbSunnyRounded} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { appActions, selectCurrentThemeState } from '../store/features/app'
import Button from './Button'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar(): JSX.Element {

    const classes = useStyles()
    const dispatch = useDispatch()
    const currentTheme = useSelector(selectCurrentThemeState)
    const {pathname} = useLocation()

    const toggleTheme = ():void=>{
  
      dispatch(appActions.toggleTheme())
  
    }

    return (
        <Box
            className={classes.navbar}
        >

            <Stack
                direction="row"
                spacing={2}
            >
                <Button variant={pathname === "/" ? 'filled' : 'outlined'}>
                    <Link className={classes.link} to="/">Home</Link>
                </Button>

                <Button variant={pathname === "/preferred-characters" ? 'filled' : 'outlined'}>
                    <Link className={classes.link} to="/preferred-characters">Preferred Characters</Link>
                </Button>

            </Stack>

            <ButtonBase onClick={toggleTheme} sx={{padding: ".3rem", borderRadius: "100%"}} >
                {
                    currentTheme === "light" ? <WbSunnyRounded color="secondary" /> : <ModeNight color="secondary" />
                }
            </ButtonBase>
            
        </Box>
    )
}

const useStyles = makeStyles({

    navbar:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    link:{
        textDecoration: "none",
        color: "inherit"
    }

})
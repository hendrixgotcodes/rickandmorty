import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'
import {FC} from 'react'
import { useSelector } from 'react-redux'
import { selectBackdropVisibility, selectCurrentThemeState } from '../store/features/app'

interface IProp{}
type StyleType = {

    currentTheme: string

}

const Backdrop : FC<IProp> =  ({children}) =>{

    const currentTheme = useSelector(selectCurrentThemeState)
    const backdropVisibility = useSelector(selectBackdropVisibility)
    const classes = useStyles({currentTheme})

    if(backdropVisibility === "hidden") return <></>
    
    return (
        <div
            className={classes.backdrop}
        >
            {children}
        </div>
    )
}

export default Backdrop

const useStyles = makeStyles<Theme, StyleType>({

    backdrop:{

        width: "100vw",
        height: "100vh",
        backgroundColor: ({currentTheme})=> currentTheme === "light" ? "rgba(0,0,0,0.5)" : "rgba(100, 100, 100,0.9)",
        backdropFilter: "blur(2px)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"

    }

})
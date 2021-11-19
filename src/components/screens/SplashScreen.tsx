import { Box, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Lottie from 'react-lottie'


export default function SplashScreen():JSX.Element {

    const classes = useStyles()
    const theme = useTheme()

    return (
        <Box
            className={classes.splash}
            sx={{backgroundColor: theme.palette.primary.main}}
        >
            <Lottie

                options={{
                    animationData: require("../../assets/animations/morty.json"),
                    autoplay: true,
                    loop: true,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    },
                }}
                width={120}
                height={120}
                isPaused={false}
                isStopped={false}
                
            />


        </Box>
    )
}

const useStyles = makeStyles({

    splash:{

        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }

})
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import RickSanchez from './svgs/RickSanchez'


export default function Logo(): JSX.Element {

    const classes = useStyles()

    return (
        <Box
            className={classes.logo}
        >
            <RickSanchez />
        </Box>
    )
}

const useStyles = makeStyles({
    logo:{
        width: "50px",
        height: "50px"
    }
})
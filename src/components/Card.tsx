import { ButtonBase, Theme, Typography } from '@mui/material'
import { makeStyles,  } from '@mui/styles'
import { Box } from '@mui/system'
import {MouseEvent, MouseEventHandler} from 'react'
// import { useSelector } from 'react-redux'
// import { selectCurrentThemeState } from '../store/features/theme'

interface ICardProps{

    data: {
        title: string,
        subtitle: string,
        image: string,
        key?:any
    },
    onClick: MouseEventHandler<HTMLButtonElement>

}

export default function Card({data, onClick}:ICardProps) {

    const classes = useStyles()

    return (
        <ButtonBase
            onClick={onClick}
        >
            <Box
                className={classes.card}
                key={data.key}
            >
                <img
                    src={data.image}
                    alt={data.title}
                    className={classes.img}
                />
                <Box
                    className={classes.cardContent}
                >
                    <Typography textAlign="center" variant="caption" >{data.title}</Typography>
                    <Typography textAlign="center" variant="subtitle1" >{data.subtitle}</Typography>

                </Box>
            </Box>
        </ButtonBase>
    )
}

const useStyles = makeStyles<Theme>(theme=>({

    card: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        overflow: "hidden",
        marginRight: ".1rem",
        padding: 0
    },
    img: {
        height: "100%",
        width: "100%"
    },
    cardContent:{

        height: "100%",
        flex: 1,
        backgroundColor: "inherit"

    }

}))

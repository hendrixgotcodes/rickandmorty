import {FC} from 'react'
import {Button as MUIButton} from '@mui/material'
import {makeStyles} from '@mui/styles'

interface IPrimaryProps{

    icon? : FC,
    title?: string,
    variant: string,

}

interface IProps{
    icon? : FC
    title?: string,
}

const Button: FC<IPrimaryProps> = ({title, variant, children}) => {
   
    return variant === "outlined" ? <BtnOutlined title={title}>{children}</BtnOutlined> : <BtnFilled title={title}>{children}</BtnFilled>

}

const BtnFilled : FC<IProps> = ({icon, title, children})=>{

    const classes = useStyles()

    return(

        <MUIButton 
            variant='contained' 
            startIcon={icon} 
            color="secondary"
            disableElevation
            className={classes.BtnFilled}
        >
            {title}{children}
        </MUIButton>

    )

}

const BtnOutlined : FC<IProps> = ({icon, title, children})=>{

    const classes = useStyles()

    return(

        <MUIButton 
            variant='outlined' 
            startIcon={icon} 
            color="secondary"
            disableElevation
            className={classes.BtnOutlined}
        >
            {title}{children}
        </MUIButton>

    )

}

export default Button;

const useStyles = makeStyles({

    BtnFilled: {
        color: '#FFF',
        padding: ".5rem 2.5rem",
        borderRadius: "16px",
        width: "fit-content",
        textTransform: "capitalize"
    },
    BtnOutlined: {
        color: '#A3A3CD',
        padding: ".5rem 2.5rem",
        borderRadius: "16px",
        border: `1px solid #A3A3CD`,
        textTransform: "capitalize"
    }

})
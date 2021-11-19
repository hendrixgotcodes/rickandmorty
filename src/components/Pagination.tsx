import React, { useState, ChangeEvent} from 'react'
import { Pagination as MUIPagination } from '@mui/material'
import { makeStyles, styled, withTheme } from '@mui/styles'
import { useSelector } from 'react-redux'
import { selectCurrentThemeState } from '../store/features/app'

interface IProps{

    onChange: (page:number)=>void

}

export default function Pagination({onChange}:IProps): JSX.Element {

    const [currentPage, setCurrentPage] = useState(1)
    const currentTheme = useSelector(selectCurrentThemeState)

    const handleOnChange = (e:ChangeEvent<unknown>, value:number): void =>{

        setCurrentPage(value)
        onChange(value)

    }


    const useStyles = makeStyles(() => ({
        ul: {
            "& .MuiPaginationItem-root": {
                color: currentTheme === "light" ? "#232323" : "#FDFDFD"
            }
        }
    }));

    const classes = useStyles()

    return (
        <MUIPagination 
            color="secondary" 
            count={42} 
            page={currentPage} 
            onChange={handleOnChange}
            className={classes.ul}
        />
    )

}

// const CustomPagination = (props)=>{

//     const currentTheme = useSelector(selectCurrentThemeState)

//     return(

//         styled(withTheme(MUIPagination))(()=>({

//             '& .MuiPagination-text': currentTheme === "light" ? "#232323" : "#FDFDFD"
        
//         }))

//     )

// }
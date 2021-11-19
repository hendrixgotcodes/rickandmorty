import { gql, useQuery } from '@apollo/client'
import { CloseRounded, FavoriteBorderOutlined, FavoriteOutlined, FavoriteRounded } from '@mui/icons-material'
import { Box, ButtonBase, Grid, Stack, Theme, Tooltip, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import { useSnackbar } from 'notistack'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentThemeState, appActions, selectCurrentCharacterID, selectPreferredCharacters } from '../store/features/app'

type StyleType={

    currentTheme: string

}

export default function CharacterModal() {

    const currentTheme = useSelector(selectCurrentThemeState)
    const classes = useStyles({currentTheme})
    const dispatch = useDispatch()
    const {enqueueSnackbar} = useSnackbar()
    const currentCurrecterID = useSelector(selectCurrentCharacterID)
    const preferredCharacters = useSelector(selectPreferredCharacters)

    console.log(preferredCharacters);
    


    const fetchCharacter = gql`
    
        query fetchCharacter($ID: ID!) {

            character(id: $ID) {
                name
                species
                image
              location{
                residents{
                  name
                }
                dimension
                name
              }
            }

        }

    `
    const {loading, error, data, refetch} = useQuery(fetchCharacter,{
        variables:{
            ID: currentCurrecterID
        }
    })

    if(data){
        console.log(data);
        
    }

    const handleOnClose  = ()=>{

        dispatch(appActions.toggleBackdropVisibility())

    }

    const toggleLike = ()=>{

        if(preferredCharacters.includes(currentCurrecterID)){
            dispatch(appActions.removePreferedCharacter(currentCurrecterID))
            enqueueSnackbar("Removed from preferred characters", {
                variant: "warning"
            })
        }else{
            dispatch(appActions.addPreferredCharacter(currentCurrecterID))
            enqueueSnackbar("Added to preferred characters", {
                variant: "success"
            })
        }

    }

    return (

        <div 
            className={classes.modal}
        >

            <Box
                className={classes.imageWrapper}
            >
                <img
                    src={data?.character.image}
                    alt={data?.character.name}
                    className={classes.img}
                />

                <Box
                    className={classes.closeBtn}
                >
                    <ButtonBase
                        onClick={handleOnClose}
                    >
                        <Tooltip title="close">
                            <CloseRounded color="primary" />
                        </Tooltip>
                    </ButtonBase>
                </Box>

            </Box>

            <Box
                className={classes.details}
            >

                <Box
                    className={classes.likeBtn}
                >
                    <ButtonBase
                        onClick={toggleLike}
                    >
                            {
                                preferredCharacters.includes(currentCurrecterID) ? (
                                    <Tooltip title="Remove from preferred characters">
                                        <FavoriteRounded fontSize="small" htmlColor="red" />
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="Add to preferred characters">
                                        <FavoriteBorderOutlined fontSize="small" htmlColor="red" />
                                    </Tooltip>
                                )
                            }
                    </ButtonBase>
                </Box>

                <Stack
                    sx={{width: "100%", height: "100%"}}
                    display="flex"
                    flexDirection="column"
                    spacing={1.5}
                >
                    
                    <Grid container spacing={1.5}>

                        <Grid item xs={6}>
                            <Typography
                                noWrap
                            >
                                <Typography 
                                    variant="h6" 
                                    fontWeight="bold" 
                                    color={currentTheme === "light" ? "#232323" : "#FDFDFD"} 
                                    noWrap
                                >
                                    {data?.character.name}
                                </Typography>
                                <Typography color={currentTheme === "light" ? "#232323" : "#ffffffa6"}>{data?.character.species}</Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            {/* <Typography
                                noWrap
                            >
                                <Typography color={currentTheme === "light" ? "#232323" : "#ffffffa6"}>origin</Typography>
                                <Typography 
                                    variant="subtitle2" 
                                    // fontWeight="bold" 
                                    color={currentTheme === "light" ? "#232323" : "#FDFDFD"}
                                    noWrap 
                                >
                                    
                                </Typography>
                            </Typography> */}
                        </Grid>
                        <Grid 
                            item xs={12} 
                        >
                            
                            <Stack
                                display="flex"
                                justifyContent="space-between"
                                flexDirection="row"
                            >

                                <Typography
                                
                                >
                                    <Typography noWrap color={currentTheme === "light" ? "#232323" : "#ffffffa6"}>origin</Typography>
                                    <Typography 
                                        variant="subtitle2" 
                                        // fontWeight="bold" 
                                        color={currentTheme === "light" ? "#232323" : "#FDFDFD"}
                                        noWrap 
                                    >
                                        {data?.character.location.name}
                                    </Typography>
                                </Typography>

                                <Typography noWrap >
                                    Dimension: 
                                    <Typography noWrap>
                                        {data?.character.location.dimension}
                                    </Typography>
                                </Typography>

                                <Typography noWrap >
                                    Residents: 
                                    <Typography noWrap>
                                        {data?.character.location.residents.length}
                                    </Typography>
                                </Typography>

                            </Stack>

                        </Grid>
                    </Grid>
                    
                </Stack>

            </Box>


        </div>

    )
}

const useStyles = makeStyles<Theme, StyleType>(theme=>({

    modal:{
        width: "30%",
        height: "80%",
        backgroundColor: ({currentTheme})=>currentTheme === "light" ? "#FDFDFD" : "#232323",
        borderRadius: theme.shape.borderRadius,
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        position: "relative"
    },
    imageWrapper:{
        width: "100%",
        flex: 3,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: theme.shape.borderRadius,
        position: "relative",
        overflow: "hidden"
    },
    details:{
        width: "100%",
        flex: 1,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        marginTop: "1rem",
        padding: "1rem",
        position: "relative"
    },
    closeBtn:{
        position: "absolute",
        top: 0,
        right: 0,
        padding: "0.2rem",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.secondary.main
    },
    img:{
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    likeBtn: {
        position: "absolute",
        top: "10%",
        right: "3%",
        padding: "0.1rem",
        borderRadius: "100%",
    }

}))
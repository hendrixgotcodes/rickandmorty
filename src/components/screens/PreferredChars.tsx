import { gql, useQuery } from '@apollo/client'
import { FavoriteRounded } from '@mui/icons-material'
import { Theme, Stack, Box, Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import app, { appActions, selectPreferredCharacters } from '../../store/features/app'
import CryingMorty from '../animations/CryingMorty'
import Card from '../Card'
import Pagination from '../Pagination'


export default function PreferredCharacters() {

    const classes = useStyles()
    const dispatch = useDispatch()
    const preferredCharacters = useSelector(selectPreferredCharacters)

    const fetchCharacters = gql`
    
        query getCharacters($preferredChars: [ID!]!) {

            charactersByIds(ids: $preferredChars) {
                id
                name
                species
                image
            }

        }

    `
    const {loading, error, data} = useQuery(fetchCharacters,{
        variables:{
            preferredChars: preferredCharacters
        }
    })


    const handleOnCardClick = (id:number):void=>{

        dispatch(appActions.setCurrentCharacterID(id))
        dispatch(appActions.toggleBackdropVisibility())
    

    }

    if(loading) return <p>loading...</p>
    if(error) {
        console.log(error.message);
        return <p>There was error</p>
        
    }

    console.log(data);
    
    


    // return <p>eiheie</p>

    return (
        <>

            <Stack
                direction="column"
                spacing={2}
                sx={{width: "100%", display: "flex", alignItems: "center"}}
            >

                <Grid
                    className={classes.cardWrapper}
                    spacing={2}
                    container
                >

                    {
                        preferredCharacters.length > 0 ? (
                            <>
                                {
                                    data.charactersByIds.map((character:{image: string, species: string, name: string, id: number})=>(

                                        <Grid
                                            item
                                            xs={4}
                                        >
                                            <Card
                                                data={{
                                                    image: character.image,
                                                    subtitle: character.species,
                                                    title: character.name
                                                }}
                                                onClick={()=>handleOnCardClick(character.id)}
                                            />
                                        </Grid>

                                    ))
                                }

                            </>
                        ):
                        (
                            <Grid item xs={12} >
                                <Stack
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        width: "100%"
                                    }}
                                >
                                    <CryingMorty />
                                    <Typography>No preferred characters added</Typography>
                                </Stack>
                            </Grid>
                        )
                    }

                </Grid>
                
            </Stack>
            
        </>
    )
}

const useStyles = makeStyles<Theme>(theme=>({

    cardWrapper:{
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
        height: "65vh",
        borderRadius: theme.shape.borderRadius,
        overflow: "auto",
        padding: "1rem",
    }

}))
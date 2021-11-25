import { gql, useQuery } from '@apollo/client'
import { FavoriteRounded } from '@mui/icons-material'
import { Theme, Stack, Box, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import app, { appActions } from '../../store/features/app'
import Card from '../Card'
import Pagination from '../Pagination'


export default function Home() {

    let currentPage = 1
    const classes = useStyles()
    const dispatch = useDispatch()

    const fetchCharacters = gql`
    
        query getCharacters($pageNumber: Int!) {

            characters(page: $pageNumber) {
                info {
                    count
                }
                results {
                    id
                    name
                    species
                    image
                }
            }

        }

    `
    const {loading, error, data, refetch} = useQuery(fetchCharacters,{
        variables:{
            pageNumber: currentPage
        }
    })

    const handleOnPagination = (page:number):void=>{
        currentPage = page
        
        refetch({
            pageNumber: currentPage
        })
    }

    const handleOnCardClick = (id:number):void=>{

        dispatch(appActions.setCurrentCharacterID(id))
        dispatch(appActions.toggleBackdropVisibility())
    

    }

    if(loading) return <p>loading...</p>
    if(error) {
        console.log(error.message);
        return <p>There was error</p>
        
    }


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
                        data.characters.results.map((character:{image: string, species: string, name: string, id: number})=>(

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

                </Grid>
                

                <Pagination onChange={handleOnPagination} />

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
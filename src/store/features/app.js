import {createSlice} from '@reduxjs/toolkit'

const app = createSlice({

    name:"app",
    initialState:{

        currentTheme: "dark",
        currenttPage: 1,
        backdropVisibility: "shown",
        currentCharacterID: 1,
        preferredCharacters: []

    },
    reducers:{
        toggleTheme: (state)=>{

            state.currentTheme = state.currentTheme === "light" ? "dark": "light"

        },
        setCurrentPage: (state, action)=>{
            state.currenttPage = action.payload
        },
        toggleBackdropVisibility: (state)=>{
            state.backdropVisibility = state.backdropVisibility === "hidden" ? "shown" : "hidden"
        },
        setCurrentCharacterID: (state, action)=>{
            state.currentCharacterID = action.payload
        },
        addPreferredCharacter: (state, action)=>{
            state.preferredCharacters.push(action.payload)
        },
        removePreferedCharacter: (state, action)=>{
            state.preferredCharacters = state.preferredCharacters.filter((item)=>item !== action.payload)
        }
    }

})

export const appActions = app.actions
export const selectCurrentThemeState = (state)=>state.app.currentTheme
export const selectCurrentPage = (state)=>state.app.currenttPage
export const selectBackdropVisibility = (state)=>state.app.backdropVisibility
export const selectCurrentCharacterID = (state)=>state.app.currentCharacterID
export const selectPreferredCharacters = (state)=>state.app.preferredCharacters

export default app.reducer
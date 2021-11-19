import { ThemeProvider } from '@mui/system';
import SplashScreen from './components/screens/SplashScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {lighttheme, darktheme} from './theme'
import {selectCurrentThemeState} from './store/features/app'
import Navbar from './components/Navbar';
import { makeStyles, useTheme } from '@mui/styles';
import { Box, Stack } from '@mui/material';
import Logo from './components/Logo';
import Home from './components/screens/Home';
import PreferredChars from './components/screens/PreferredChars';
import Backdrop from './components/Backdrop';
import CharacterModal from './components/CharacterModal';
import { useEffect, useState } from 'react';


function App() {

  
  const [hasAppLoaded, setHasAppLoaded] = useState(false)
  const currentTheme = useSelector(selectCurrentThemeState)

  useEffect(()=>{

    window.addEventListener("load", ()=>{

      setTimeout(()=>{
        setHasAppLoaded(true)
      }, 3000)

    })

  }, [])
 

  return hasAppLoaded === true ? 
  (<Application />) 
  : (
      <ThemeProvider
        theme={currentTheme === "dark" ? darktheme : lighttheme}
      >
        <SplashScreen />
      </ThemeProvider>
  );
}

const Application = ()=>{

  const currentTheme = useSelector(selectCurrentThemeState)
  const classes = useStyles()

    return(

      <ThemeProvider
        theme={currentTheme === "dark" ? darktheme : lighttheme}
      >
        <div 
          className="App"
          style={{
            backgroundColor: currentTheme === "dark" ? "#232323" : "#fff"
          }}
        >
            
            <Box
              className={classes.contentWrapper}
            >

              <Stack
                direction="column"
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "inherit",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
                spacing={3}
              >

                <Router>

                  <Logo />
                  <Navbar />

                  <Routes>

                      <Route path="/" element={<Home />} />
                      <Route path="/preferred-characters" element={<PreferredChars />} />

                  </Routes>


                </Router>

              </Stack>

            </Box>

            <Backdrop>
              <CharacterModal />
            </Backdrop>
          
        </div>
      </ThemeProvider>

    )

}

export default App;

const useStyles = makeStyles({

  contentWrapper:{

    height: "100%",
    width: "70%",
    padding: "2rem 0",

  }

})

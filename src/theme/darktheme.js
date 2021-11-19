import { createTheme } from "@mui/material";

export default createTheme({

    palette: {
        type: 'dark',
        primary: {
          main: '#232323',
        },
        secondary: {
          main: '#A3A3CD',
        },
    },
    typography: [
      '-apple-system','system-ui','BlinkMacSystemFont',"Segoe UI",'Roboto',"Helvetica Neue",'Arial','sans-serif'
    ].join(','),
    shape:{
      borderRadius: "8px"
    }

})


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Audiowide',
  },
});

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
  },
};

export default function Navbar() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar sx={{ height: 64 }}>
            <Grid container justifyContent="center" alignItems="center" style={styles.navbar} md={12} sm={12} xl={12} lg={12}>
             
            <Grid item md={4} sm={4} xl={4} lg={4}>
                
              </Grid>
              <Grid  >
                <Typography style={{right: '3em', left:'5em'}} variant="h3">audice</Typography>
              </Grid>
              
              <Grid item md={4} sm={4} xl={4} lg={4}>
                
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

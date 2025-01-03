import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4285F4', // Google kék
    },
    secondary: {
      main: '#34A853', // Google zöld
    },
    error: {
      main: '#EA4335', // Google piros
    },
    warning: {
      main: '#FBBC05', // Google sárga
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;

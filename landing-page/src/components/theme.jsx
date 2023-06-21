import { createTheme } from '@mui/material/styles';
import Montserrat from '../fonts/Montserrat-VariableFont_wght.ttf'; // Importe a fonte

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif', // Substitua pelo nome da sua fonte personalizada
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'Montserrat',
          src: `url(${Montserrat})`, // Utilize a fonte importada
        },
      },
    },
  },
});

export default  theme;
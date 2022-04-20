import { createTheme } from '@mui/material';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },
  typography: {
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'common.white'
    },
    tab: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1rem',
      textTransform: 'none',
      color: 'common.white',
    }
  },
  zIndex: {
    appBar: 1301
  }
});

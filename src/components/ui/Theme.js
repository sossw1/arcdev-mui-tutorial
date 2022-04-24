import { createTheme } from '@mui/material';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686'

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
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 300,
    color: arcGrey
  },
  learnButton: {
    borderColor: 'common.blue',
    color: 'common.blue',
    borderWidth: '2px',
    textTransform: 'none',
    borderRadius: '50px',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  }
});

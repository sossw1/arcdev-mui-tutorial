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
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: arcBlue
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: arcBlue,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: 300
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300
    }
  },
  zIndex: {
    appBar: 1301
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

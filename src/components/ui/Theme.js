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
  mixins: {
    toolbar: {
      minHeight: '7em'
    }
  },
  typography: {
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'common.white'
    }
  }
});

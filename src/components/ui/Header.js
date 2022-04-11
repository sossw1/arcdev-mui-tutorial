import { cloneElement, useState } from 'react';
import { AppBar, Button, CssBaseline, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';

import logo from '../../assets/logo.svg';
import theme from './Theme';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const sxTabs = {
  ml: 'auto'
}

const sxTab = {
  ...theme.typography.tab,
  minWidth: 10,
  ml: '1.5rem'
}

const sxButton = {
  ...theme.typography.estimate,
  borderRadius: '50px',
  ml: '3.5rem',
  mr: '1.75rem',
  height: '45px'
}

export default function Header(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <img alt='company logo' src={logo} style={{ height: '7em' }} />
            <Tabs value={value} textColor={'secondary'} onChange={handleChange} sx={sxTabs}>
              <Tab sx={sxTab} value={0} label='Home' />
              <Tab sx={sxTab} value={1} label='Services' />
              <Tab sx={sxTab} value={2} label='The Revolution' />
              <Tab sx={sxTab} value={3} label='About Us' />
              <Tab sx={sxTab} value={4} label='Contact Us' />
            </Tabs>
            <Button sx={sxButton} variant='contained' color='secondary'>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

import React from 'react';
import { AppBar, Button, CssBaseline, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';

import logo from '../../assets/logo.svg';
import theme from './Theme';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
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
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <img alt='company logo' src={logo} style={{ height: '7em' }} />
            <Tabs sx={sxTabs}>
              <Tab sx={sxTab} label='Home' />
              <Tab sx={sxTab} label='Services' />
              <Tab sx={sxTab} label='The Revolution' />
              <Tab sx={sxTab} label='About Us' />
              <Tab sx={sxTab} label='Contact Us' />
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

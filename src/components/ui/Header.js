import React from 'react';
import { AppBar, CssBaseline, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';

import logo from '../../assets/logo.svg';

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
  fontFamily: 'Raleway',
  fontWeight: 700,
  textTransform: 'none'
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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

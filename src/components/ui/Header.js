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

export default function Header(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <img alt='company logo' src={logo} style={{ height: '7em' }} />
            <Tabs sx={{ ml: 'auto' }}>
              <Tab sx={{ fontFamily: 'Raleway' }} label='Home' />
              <Tab sx={{ fontFamily: 'Raleway' }} label='Services' />
              <Tab sx={{ fontFamily: 'Raleway' }} label='The Revolution' />
              <Tab sx={{ fontFamily: 'Raleway' }} label='About Us' />
              <Tab sx={{ fontFamily: 'Raleway' }} label='Contact Us' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

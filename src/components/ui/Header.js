import { cloneElement, useState, useEffect } from 'react';
import { AppBar, Button, CssBaseline, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

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

const sxLogoButton = {
  padding: 0
}

const styleLogoImage = {
  height: '8em'
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

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (location.pathname === '/contact' && value !== 4) {
      setValue(4);
    }
  }, [location.pathname, value])

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Button component={Link} to='/' sx={sxLogoButton} disableRipple>
              <img alt='company logo' src={logo} style={styleLogoImage} />
            </Button>
            <Tabs value={value} textColor={'secondary'} onChange={handleChange} sx={sxTabs} aria-label="navigation tabs">
              <Tab sx={sxTab} component={Link} to='/' label='Home' disableRipple />
              <Tab sx={sxTab} component={Link} to='/services' label='Services' disableRipple />
              <Tab sx={sxTab} component={Link} to='/revolution' label='The Revolution' disableRipple />
              <Tab sx={sxTab} component={Link} to='/about' label='About Us' disableRipple />
              <Tab sx={sxTab} component={Link} to='/contact' label='Contact Us' disableRipple />
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

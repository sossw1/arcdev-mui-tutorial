import { cloneElement, useState, useEffect } from 'react';
import { AppBar, Button, CssBaseline, Menu, MenuItem, Tab, Tabs, Toolbar, useScrollTrigger } from '@mui/material';
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

const sxButton = {
  ...theme.typography.estimate,
  borderRadius: '50px',
  ml: '3.5rem',
  mr: '1.75rem',
  height: '45px'
}

const sxPaper = {
  sx: {
    backgroundColor: 'common.blue',
    color: 'common.white',
    borderRadius: 0
  }
}

const sxMenuItem = {
  ...theme.typography.tab,
  opacity: 0.7,
  '&:hover': {
    opacity: 1
  }
}

export default function Header(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
  }, [location.pathname, value]);

  const sxTab = (val, opaqueOnHover = false) => {
    return {
      ...theme.typography.tab,
      minWidth: 10,
      ml: '1.5rem',
      opacity: (value === val ? 1 : 0.7),
      '&:hover': {
        opacity: (opaqueOnHover ? 0.7 : 1)
      }
    }
  }

  const handleChange = (event, value) => {
    setValue(value);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  }

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  }

  const menuOptions = [
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Custom Software Development',
      link: '/custom-software'
    },
    {
      name: 'Mobile App Development',
      link: 'mobile-apps'
    },
    {
      name: 'Website Development',
      link: 'websites'
    }
  ];

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to='/'
              sx={sxLogoButton}
              disableRipple
            >
              <img alt='company logo' src={logo} style={styleLogoImage} />
            </Button>
            <Tabs
              value={value}
              textColor={'secondary'}
              onChange={handleChange}
              sx={sxTabs}
              aria-label="navigation tabs"
            >
              <Tab
                sx={sxTab(0)}
                component={Link}
                to='/'
                label='Home'
                disableRipple
              />
              <Tab
                sx={sxTab(1, true)}
                component={Link}
                to='/services'
                label='Services'
                disableRipple
                aria-owns={anchorEl ? 'services-menu' : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={event => handleClick(event)}
              />
              <Tab
                sx={sxTab(2)}
                component={Link}
                to='/revolution'
                label='The Revolution'
                disableRipple
              />
              <Tab
                sx={sxTab(3)}
                component={Link}
                to='/about'
                label='About Us'
                disableRipple
              />
              <Tab
                sx={sxTab(4)}
                component={Link}
                to='/contact'
                label='Contact Us'
                disableRipple
              />
            </Tabs>
            <Button sx={sxButton} variant='contained' color='secondary'>
              Free Estimate
            </Button>
            <Menu
              id='services-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              PaperProps={sxPaper}
              elevation={0}
            >
              {menuOptions.map((option, index) =>
                <MenuItem
                  key={option}
                  onClick={(event) => {
                    handleMenuItemClick(event, index);
                    setValue(1);
                  }}
                  selected={index === selectedIndex && value === 1}
                  component={Link}
                  to={option.link}
                  sx={sxMenuItem}
                >
                  {option.name}
                </MenuItem>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

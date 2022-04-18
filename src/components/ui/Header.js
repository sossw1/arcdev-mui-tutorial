import { cloneElement, useState, useEffect } from 'react';
import { AppBar, Button, CssBaseline, Menu, MenuItem, Tab, Tabs, Toolbar, useMediaQuery, useScrollTrigger } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

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
  height: '8em',
  textTransform: 'none'
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
  },
  '&.Mui-selected': {
    color: '#FFBA60',
    opacity: 1
  }
}

export default function Header(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/custom-software':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobile-apps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
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

  const tabs = (
    <>
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
    </>
  )

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
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139" style={styleLogoImage}><style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style><path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" /><path className="st0" d="M-1 139h479.92v.01H-1z" /><text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text><text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text><path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" /><path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" /><path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" /><g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words"><path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" /></g></g></g><path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" /></svg>

            </Button>
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

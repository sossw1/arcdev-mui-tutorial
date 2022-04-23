import { cloneElement, useState, useEffect } from 'react';
import { AppBar, Button, CssBaseline, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, SwipeableDrawer, Tab, Tabs, Toolbar, useMediaQuery, useScrollTrigger } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
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

const StyledSvg = styled('svg')(({ theme }) => ({
  height: '8em',
  textTransform: 'none',
  [theme.breakpoints.down('lg')]: {
    height: '7em'
  },
  [theme.breakpoints.down('sm')]: {
    height: '5.5em'
  }
}))

const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: '3em',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '2em'
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.25em'
  }
}));

export default function Header(props) {
  const location = useLocation();
  const isMedAndDown = useMediaQuery(theme.breakpoints.down('lg'));
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { value, setValue, selectedMenuIndex, setSelectedMenuIndex } = props;

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
          setSelectedMenuIndex(0);
        }
        break;
      case '/custom-software':
        if (value !== 1) {
          setValue(1);
          setSelectedMenuIndex(1);
        }
        break;
      case '/mobile-apps':
        if (value !== 1) {
          setValue(1);
          setSelectedMenuIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedMenuIndex(3);
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
  }, [location.pathname, value, setValue, setSelectedMenuIndex]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  }

  const handleClose = () => {
    setMenuAnchorEl(null);
    setIsMenuOpen(false);
  }

  const handleMenuItemClick = (event, index) => {
    setMenuAnchorEl(null);
    setIsMenuOpen(false);
    setSelectedMenuIndex(index);
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

  const tabs = (
    <>
      <Tabs
        value={value}
        textColor={'secondary'}
        onChange={handleChange}
        sx={{ ml: 'auto' }}
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
          aria-owns={menuAnchorEl ? 'services-menu' : undefined}
          aria-haspopup={menuAnchorEl ? true : undefined}
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
          label='Contact'
          disableRipple
        />
      </Tabs>
      <Button
        sx={{
          ...theme.typography.estimate,
          borderRadius: '50px',
          ml: '25px',
          mr: '25px',
          height: '45px',
          lineHeight: '1rem',
          '&:hover': {
            backgroundColor: theme.palette.secondary.light
          }
        }}
        variant='contained'
        color='secondary'
      >
        Free Estimate
      </Button>
      <Menu
        id='services-menu'
        anchorEl={menuAnchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        PaperProps={{
          sx: {
            backgroundColor: 'common.blue',
            color: 'common.white',
            borderRadius: 0
          }
        }}
        sx={{ zIndex: 1301 }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, index) =>
          <MenuItem
            key={`${option}-${index}`}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
            }}
            selected={index === selectedMenuIndex && value === 1}
            component={Link}
            to={option.link}
            sx={{
              ...theme.typography.tab,
              opacity: 0.7,
              '&:hover': {
                opacity: 1
              },
              '&.Mui-selected': {
                color: '#FFBA60',
                opacity: 1
              }
            }}
          >
            {option.name}
          </MenuItem>
        )}
      </Menu>
    </>
  )

  const listItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'The Revolution',
      link: '/revolution'
    },
    {
      name: 'About Us',
      link: '/about'
    },
    {
      name: 'Contact',
      link: '/contact'
    },
    {
      name: 'Free Estimate',
      link: '/estimate'
    }
  ]

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpen={() => setIsDrawerOpen(true)}
        PaperProps={{
          sx: {
            backgroundColor: 'common.blue'
          }
        }}
      >
        <Offset />
        <List disablePadding>
          {listItems.map((item, index) => (
            <ListItem
              key={`${item}-${index}`}
              component={Link}
              to={item.link}
              divider
              disablePadding
              sx={{
                ...(index === 5 && {
                  backgroundColor: 'secondary.main'
                })
              }}
            >
              <ListItemButton
                selected={value === index}
                onClick={() => { setIsDrawerOpen(false); setValue(index) }}
                disableRipple
                sx={{
                  ...theme.typography.tab,
                  opacity: 0.7,
                  '&.Mui-selected': {
                    opacity: 1
                  },
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                <ListItemText disableTypography>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        disableRipple
        sx={{
          ml: 'auto'
        }}
      >
        <MenuIcon
          sx={{
            width: '50px',
            height: '50px'
          }} />
      </IconButton>
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
              sx={{ padding: 0 }}
              disableRipple
            >
              <StyledSvg id="Layer_1" alt="company logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139"><style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style><path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" /><path className="st0" d="M-1 139h479.92v.01H-1z" /><text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text><text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text><path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" /><path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" /><path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" /><g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words"><path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" /></g></g></g><path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" /></StyledSvg>
            </Button>
            {isMedAndDown ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Offset />
    </>
  );
}

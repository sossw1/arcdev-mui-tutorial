import { Button, Grid, useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg';
import theme from './ui/Theme';
import websitesIcon from '../assets/websiteIcon.svg';

export default function Services() {
  const isSmallAndDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        sx={{
          ml: isSmallAndDown ? 0 : '5em',
          mt: '2em'
        }}
      >
        <Typography
          variant='h2'
          align={isSmallAndDown ? 'center' : undefined}
          sx={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: 'common.blue',
            lineHeight: 1.5
          }}
        >
          Services
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          mt: isSmallAndDown ? '5em' : '12em'
        }}
      >
        <Grid container direction='row' justifyContent={isSmallAndDown ? 'center' : undefined}>
          <Grid
            item
            sx={{
              ml: isSmallAndDown ? 0 : '5em',
              textAlign: isSmallAndDown ? 'center' : undefined,
              [theme.breakpoints.down('md')]: {
                padding: '25px'
              }
            }}
          >
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Raleway',
                fontSize: '1.75rem',
                color: theme.palette.common.blue,
                fontWeight: 700
              }}
            >
              Custom Software Development
            </Typography>
            <Typography variant='subtitle1' sx={{ ...theme.subtitle, mb: '1em' }}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1' sx={{ ...theme.subtitle }}>
              Complete digital solutions, from investigation to{' '}
              <span style={{ fontFamily: 'Pacifico', color: theme.palette.common.orange }}>celebration.</span>
            </Typography>
            <Button
              variant='outlined'
              component={Link}
              to='/custom-software'
              sx={{
                ...theme.learnButton,
                fontSize: '0.7rem',
                height: '35px',
                padding: '5px',
                [theme.breakpoints.down('md')]: {
                  mb: '2em'
                }
              }}
            >
              <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                Learn More
              </span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              ml: '2em',
              [theme.breakpoints.down('sm')]: {
                ml: 0
              }
            }}
          >
            <img alt='custom software icon' src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/*-----iOS/Android Block-----*/}
      <Grid
        item
        sx={{
          mt: isSmallAndDown ? '5em' : '12em'
        }}
      >
        <Grid container direction='row' justifyContent={isSmallAndDown ? 'center' : 'flex-end'}>
          <Grid
            item
            sx={{
              ml: isSmallAndDown ? 0 : '5em',
              mr: isSmallAndDown ? 0 : '5em',
              [theme.breakpoints.down('md')]: {
                textAlign: 'center',
                padding: '25px'
              }
            }}
          >
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Raleway',
                fontSize: '1.75rem',
                color: theme.palette.common.blue,
                fontWeight: 700
              }}
            >
              iOS/Android App Development
            </Typography>
            <Typography variant='subtitle1' sx={{ ...theme.subtitle, mb: '1em' }}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1' sx={{ ...theme.subtitle }}>
              Integrate your web experience or create a standalone app {isSmallAndDown ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              variant='outlined'
              component={Link}
              to='/mobile-apps'
              sx={{
                ...theme.learnButton,
                fontSize: '0.7rem',
                height: '35px',
                padding: '5px',
                [theme.breakpoints.down('md')]: {
                  mb: '2em'
                }
              }}
            >
              <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                Learn More
              </span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              mr: isSmallAndDown ? 0 : '5em',
              ml: '2em',
              [theme.breakpoints.down('sm')]: {
                ml: 0
              }
            }}
          >
            <img alt='mobile phone icon' src={mobileAppsIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Websites Block-----*/}
      <Grid
        item
        sx={{
          mt: isSmallAndDown ? '5em' : '12em'
        }}
      >
        <Grid container direction='row' justifyContent={isSmallAndDown ? 'center' : undefined}>
          <Grid
            item
            sx={{
              ml: isSmallAndDown ? 0 : '5em',
              textAlign: isSmallAndDown ? 'center' : undefined,
              [theme.breakpoints.down('md')]: {
                padding: '25px'
              }
            }}
          >
            <Typography
              variant='h4'
              sx={{
                fontFamily: 'Raleway',
                fontSize: '1.75rem',
                color: theme.palette.common.blue,
                fontWeight: 700
              }}
            >
              Website Development
            </Typography>
            <Typography variant='subtitle1' sx={{ ...theme.subtitle, mb: '1em' }}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1' sx={{ ...theme.subtitle }}>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              variant='outlined'
              component={Link}
              to='/websites'
              sx={{
                ...theme.learnButton,
                fontSize: '0.7rem',
                height: '35px',
                padding: '5px',
                [theme.breakpoints.down('md')]: {
                  mb: '2em'
                }
              }}
            >
              <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                Learn More
              </span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid
            item
            sx={{
              ml: '2em',
              [theme.breakpoints.down('sm')]: {
                ml: 0
              },
              mb: '5em'
            }}
          >
            <img alt='website icon' src={websitesIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
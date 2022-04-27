import Lottie from 'react-lottie';
import { Button, Card, CardContent, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';
import CallToAction from './ui/CallToAction';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import infoBackground from '../assets/infoBackground.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import theme from './ui/Theme';
import websitesIcon from '../assets/websiteIcon.svg';

export default function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const isSmallAndDown = useMediaQuery(theme.breakpoints.down('md'));
  const isXS = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction='column'
      sx={{
        mt: '5em',
        [theme.breakpoints.down('lg')]: {
          mt: '3em'
        },
        [theme.breakpoints.down('sm')]: {
          mt: '2em'
        }
      }}
    >
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
          <Grid
            item
            sm
            sx={{
              minWidth: '21.5em',
              ml: '1em',
              [theme.breakpoints.down('sm')]: {
                ml: 0
              }
            }}
          >
            <Typography
              variant='h2'
              align='center'
              sx={{
                fontFamily: 'Raleway',
                fontWeight: 700,
                fontSize: '2.5rem',
                color: 'common.blue',
                lineHeight: 1.5
              }}
            >
              Bringing West Coast Technology<br />
              to the Midwest
            </Typography>
            <Grid container justifyContent='center' sx={{ mt: '1em' }}>
              <Grid item>
                <Button
                  variant='contained'
                  component={Link}
                  to='/estimate'
                  sx={{
                    ...theme.typography.estimate,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 50,
                    height: '45px',
                    width: '145px',
                    marginRight: '40px',
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.light
                    }
                  }}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  component={Link}
                  to='/revolution'
                  sx={{
                    ...theme.learnButton,
                    height: '45px',
                    width: '145px'
                  }}
                >
                  <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                    Learn More
                  </span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sm
            sx={{
              marginTop: '2em',
              marginLeft: '10%',
              [theme.breakpoints.down('md')]: { maxWidth: '30em' }
            }}
          >
            <Lottie
              style={{
                minWidth: '20em',
                maxWidth: '50em'
              }}
              options={defaultOptions}
              height={'100%'}
              width={'100%'}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*-----Custom Software Block-----*/}
      <Grid
        item
        sx={{
          mt: '12em'
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
          mt: '12em'
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
          mt: '12em'
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
      {/*-----The Revolution Block-----*/}
      <Grid item>
        <Grid container style={{ height: '50em' }} alignItems='center' justifyContent='center'>
          <Card sx={{
            position: 'absolute',
            boxShadow: theme.shadows[10],
            borderRadius: 15,
            padding: '5em',
            [theme.breakpoints.down('md')]: {
              padding: '5em 0',
              borderRadius: 0,
              width: '100%'
            }
          }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant='h3' gutterBottom sx={{
                    fontFamily: 'Pacifico',
                    fontSize: '2.5rem',
                    color: 'common.blue'
                  }}>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    component={Link}
                    to='/revolution'
                    sx={{
                      ...theme.learnButton,
                      height: '45px',
                      width: '145px'
                    }}
                  >
                    <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                      Learn More
                    </span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div
            style={{
              backgroundImage: `url(${revolutionBackground})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '100%',
              width: '100%'
            }}
          ></div>
        </Grid>
      </Grid>
      {/*-----Information Block-----*/}
      <Grid container style={{ height: '50em' }} alignItems='center' direction='row'>
        <Grid
          container
          position='absolute'
          textAlign={isXS ? 'center' : 'inherit'}
          direction={isXS ? 'column' : 'row'}
          spacing={isXS ? 10 : 0}
        >
          <Grid item sm style={{
            marginLeft: isXS ? 0 : isSmallAndDown ? '2em' : '10em'
          }}>
            <Grid container direction='column'>
              <Typography variant='h2' sx={{
                fontFamily: 'Raleway',
                fontWeight: 700,
                fontSize: '2.5rem',
                color: 'common.white',
                lineHeight: 1.5
              }}>About Us</Typography>
              <Typography variant='subtitle2' sx={{
                color: 'common.white',
                fontSize: '1.25rem',
                fontWeight: 300
              }}>Let's get personal.</Typography>
              <Grid item>
                <Button
                  variant='outlined'
                  component={Link}
                  to='/about'
                  sx={{
                    ...theme.learnButton,
                    fontSize: '0.7rem',
                    height: '35px',
                    padding: '5px',
                    [theme.breakpoints.down('md')]: {
                      mb: '2em'
                    },
                    color: 'common.white',
                    borderColor: 'common.white',
                    '&:hover': {
                      borderColor: 'common.white'
                    }
                  }}
                >
                  <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                    Learn More
                  </span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.white}></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm style={{
            marginRight: isXS ? 0 : isSmallAndDown ? '2em' : '10em',
            textAlign: isXS ? 'center' : 'right'
          }}>
            <Grid container direction='column'>
              <Typography variant='h2' sx={{
                fontFamily: 'Raleway',
                fontWeight: 700,
                fontSize: '2.5rem',
                color: 'common.white',
                lineHeight: 1.5
              }}>Contact Us</Typography>
              <Typography variant='subtitle2' sx={{
                color: 'common.white',
                fontSize: '1.25rem',
                fontWeight: 300
              }}>Say hello!</Typography>
              <Grid item>
                <Button
                  variant='outlined'
                  component={Link}
                  to='/contact'
                  sx={{
                    ...theme.learnButton,
                    fontSize: '0.7rem',
                    height: '35px',
                    padding: '5px',
                    [theme.breakpoints.down('md')]: {
                      mb: '2em'
                    },
                    color: 'common.white',
                    borderColor: 'common.white',
                    '&:hover': {
                      borderColor: 'common.white'
                    }
                  }}
                >
                  <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                    Learn More
                  </span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.white}></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div style={{
          backgroundImage: `url(${infoBackground})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%'
        }}></div>
      </Grid>
      {/*-----Call to Action Block-----*/}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid >
  )
};

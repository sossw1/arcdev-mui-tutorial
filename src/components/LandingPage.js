import Lottie from 'react-lottie';
import { Button, Grid, Typography } from '@mui/material';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import theme from './ui/Theme';

export default function LandingPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

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
      <Grid item> {/*-----Hero Block-----*/}
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
      {/*-----Services Block-----*/}
      <Grid
        item
        sx={{
          mt: '12em'
        }}
      >
        <Grid container direction='row'>
          <Grid item sx={{ ml: '5em' }}>
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
              sx={{
                ...theme.learnButton,
                fontSize: '0.7rem',
                height: '35px',
                padding: '5px'
              }}
            >
              <span style={{ marginRight: '5px', marginLeft: '5px' }}>Learn More</span>
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
    </Grid >
  )
};

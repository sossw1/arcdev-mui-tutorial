import Lottie from 'react-lottie';
import { Button, Grid, Typography } from '@mui/material';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';
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
                    borderColor: theme.palette.common.blue,
                    color: theme.palette.common.blue,
                    borderWidth: '2px',
                    textTransform: 'none',
                    borderRadius: '50px',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    height: '45px',
                    width: '145px'
                  }}
                >
                  <span style={{ marginRight: '5px', marginLeft: '5px' }}>Learn More</span>
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
    </Grid >
  )
};

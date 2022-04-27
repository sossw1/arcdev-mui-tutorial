import { Button, Grid, useMediaQuery, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonArrow from './ButtonArrow';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import theme from './Theme';


export default function CallToAction() {
  const isMedAndDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmAndDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      alignItems='center'
      justifyContent={isSmAndDown ? 'center' : 'space-between'}
      direction={isSmAndDown ? 'column' : 'row'}
      sx={{
        backgroundImage: `url(${isMedAndDown ? mobileBackground : background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMedAndDown ? undefined : 'fixed',
        height: '60em',
        width: '100%'
      }}
    >
      <Grid item textAlign={isSmAndDown ? 'center' : 'inherit'} sx={{ ml: isSmAndDown ? 0 : '5em' }}>
        <Grid container direction='column'>
          <Grid item>
            <Typography
              variant='h2'
              sx={{
                fontFamily: 'Raleway',
                fontWeight: 700,
                fontSize: '2.5rem',
                color: 'common.blue',
                lineHeight: 1.5
              }}
            >
              Simple Software.<br />Revolutionary Results.
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{
                color: 'common.white',
                fontSize: '1.5rem',
                fontWeight: 300
              }}
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid item container justifyContent={isSmAndDown ? 'center' : undefined}>
              <Button
                variant='outlined'
                component={Link}
                to='/revolution'
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
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          component={Link}
          to='/estimate'
          sx={{
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 80,
            width: 205,
            backgroundColor: 'common.orange',
            fontSize: '1.5rem',
            mr: isSmAndDown ? 0 : '5em',
            ml: isSmAndDown ? 0 : '2em',
            '&:hover': {
              backgroundColor: theme.palette.secondary.light
            }
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  )
}
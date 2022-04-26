import { Button, Grid, useMediaQuery, Typography } from '@mui/material';
import ButtonArrow from './ButtonArrow';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import theme from './Theme';


export default function CallToAction() {
  const isMedAndDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container style={{ height: '60em' }}>
      <Grid item style={{ position: 'absolute' }}>
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
                fontSize: '1.25rem',
                fontWeight: 300
              }}
            >
              Take advantage of the 21st century.
            </Typography>
            <Grid item container>
              <Button
                variant='outlined'
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
      <div style={{
        backgroundImage: `url(${isMedAndDown ? mobileBackground : background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
      }}></div>
    </Grid>
  )
}
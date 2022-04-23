import Lottie from 'react-lottie';
import { Button, Grid, Typography } from '@mui/material';

import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';

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
    <Grid container direction='column'>
      <Grid item>
        <Grid container direction='row' justifyContent='flex-end' alignItems='center'>
          <Grid item sm>
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
            <Grid container>
              <Grid item>
                <Button variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>
                  Learn More
                  <ButtonArrow width={15} height={15} fill='red'></ButtonArrow>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm sx={{ marginTop: '2em', marginLeft: '10%' }}>
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
    </Grid>
  )
};

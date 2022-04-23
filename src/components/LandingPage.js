import Lottie from 'react-lottie';
import { Button, Grid, Typography } from '@mui/material';

import animationData from '../animations/landinganimation/data';

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
        <Grid container direction='row'>
          <Grid item>
            <Typography>
              Bringing West Coast Technology<br />to the Midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>Learn More</Button>
              </Grid>
            </Grid>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
};

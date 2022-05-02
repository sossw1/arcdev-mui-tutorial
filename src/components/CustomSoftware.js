import { Grid, IconButton, Typography } from '@mui/material';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

export default function CustomSoftware() {
  return (
    <Grid container direction='column'>
      <Grid item container direction='row'>
        <Grid item sx={{ mt: '0.75em' }}>
          <IconButton sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <img src={backArrow} alt='Back to Services Page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column' sx={{
          maxWidth: '40em'
        }}>
          <Grid item>
            <Typography variant='h2' sx={{
              fontFamily: 'Raleway',
              fontWeight: 700,
              fontSize: '2.5rem',
              color: 'common.blue',
              lineHeight: 1.5
            }}>Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Whether we're replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
            </Typography>
            <Typography variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
            </Typography>
            <Typography variant='body1' paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ mt: '0.75em' }}>
          <IconButton sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <img src={forwardArrow} alt='Forward to iOS/Android App Development Page' />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
import { Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import backArrow from '../assets/backArrow.svg';
import cash from '../assets/cash.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import stopwatch from '../assets/stopwatch.svg';

export default function CustomSoftware(props) {
  const { setSelectedMenuIndex } = props;
  return (
    <Grid container direction='column' sx={{
      padding: '2em 5em 10em 5em'
    }}>
      <Grid item container direction='row'>
        <Grid item sx={{ mt: '0.75em', mr: '1em', ml: '-3.5em' }}>
          <IconButton
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            component={Link}
            to='/services'
            onClick={() => setSelectedMenuIndex(0)}
          >
            <img src={backArrow} alt='Back to Services Page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column' sx={{
          maxWidth: '40em'
        }}>
          <Grid item>
            <Typography variant='h2'>Custom Software Development</Typography>
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
          <IconButton
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            component={Link}
            to='/mobile-apps'
            onClick={() => setSelectedMenuIndex(2)}
          >
            <img src={forwardArrow} alt='Forward to iOS/Android App Development Page' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction='row' justifyContent='center' sx={{ mt: '15em', mb: '20em' }}>
        <Grid item container direction='column' md alignItems='center' style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4'>
              Save Energy
            </Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems='center' style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4'>
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid item container direction='column' md alignItems='center' style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4'>
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
import { Grid, IconButton, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import backArrow from '../assets/backArrow.svg';
import cash from '../assets/cash.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import stopwatch from '../assets/stopwatch.svg';

export default function CustomSoftware(props) {
  const { setSelectedMenuIndex } = props;

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

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
      <Grid item container direction='row'>
        <Grid item container sx={{ maxWidth: '40em' }}>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4'>Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie options={documentsOptions} style={{
              maxHeight: 325, maxWidth: 275, minHeight: 275
            }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
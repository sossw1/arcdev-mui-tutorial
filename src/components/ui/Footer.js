import { Grid, Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import theme from './Theme';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.common.blue,
  zIndex: 1301,
  position: 'relative'
}))

const StyledSvg = styled('svg')(({ theme }) => ({
  width: '25em',
  verticalAlign: 'bottom',
  [theme.breakpoints.down('lg')]: {
    width: '21em'
  },
  [theme.breakpoints.down('sm')]: {
    width: '15em'
  }
}))

const GridLink = styled(Grid)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: 'Arial',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  textDecoration: 'none'
}))

const SocialLogo = styled('img')(({ theme }) => ({
  height: '4em',
  width: '4em',
  [theme.breakpoints.down('sm')]: {
    height: '2.5em',
    width: '2.5em'
  }
}))

export default function Footer(props) {
  const { setValue, setSelectedMenuIndex } = props;
  return (
    <StyledFooter>
      <Hidden lgDown>
        <Grid
          container
          sx={{
            position: 'absolute',
            justifyContent: 'center'
          }}
        >
          <Grid item sx={{ m: '3em' }}>
            <Grid container spacing={2} direction='column'>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(0)}
                to='/'
              >Home</GridLink>
            </Grid>
          </Grid>
          <Grid item sx={{ m: '3em' }}>
            <Grid container spacing={2} direction='column'>
              <GridLink
                item
                component={Link}
                onClick={() => { setValue(1); setSelectedMenuIndex(0) }}
                to='/services'
              >
                Services
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => { setValue(1); setSelectedMenuIndex(1); }}
                to='/custom-software'
              >
                Custom Software Development
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => { setValue(1); setSelectedMenuIndex(2) }}
                to='/mobile-apps'
              >
                iOS/Android App Development
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => { setValue(1); setSelectedMenuIndex(3) }}
                to='/websites'
              >
                Website Development
              </GridLink>
            </Grid>
          </Grid>
          <Grid item sx={{ m: '3em' }}>
            <Grid container spacing={2} direction='column'>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/revolution'
              >
                The Revolution
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/revolution'
              >
                Vision
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/revolution'
              >
                Technology
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/revolution'
              >
                Process
              </GridLink>
            </Grid>
          </Grid>
          <Grid item sx={{ m: '3em' }}>
            <Grid container spacing={2} direction='column'>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
              >
                About Us
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
              >
                History
              </GridLink>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
              >
                Team
              </GridLink>
            </Grid>
          </Grid>
          <Grid item sx={{ m: '3em' }}>
            <Grid container spacing={2} direction='column'>
              <GridLink
                item
                component={Link}
                onClick={() => setValue(4)}
                to='/contact'
              >
                Contact
              </GridLink>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <StyledSvg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.4 180"><style>{`.st1{fill:#fff}.st2{font-family:&apos;ArialMT&apos;}.st3{font-size:8px}`}</style><path d="M294.4 0L166.3 227H-4V0z" /><path fill="none" d="M111-24v376" /><text transform="translate(5 175)" className="st1 st2 st3">?? Arc Development 2019</text><text transform="translate(147.442 175)" className="st1 st2 st3">Wichita, KS</text></StyledSvg>
      <Grid
        container
        spacing={2}
        sx={{
          position: 'absolute',
          mt: '-6em',
          right: '1.5em',
          justifyContent: 'flex-end',
          [theme.breakpoints.down('sm')]: {
            right: '0.6em'
          }
        }}
      >
        <Grid
          item
          href='https://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
          component={'a'}
        >
          <SocialLogo
            alt='facebook logo'
            src={facebook}
          />
        </Grid>
        <Grid
          item
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
          component={'a'}
        >
          <SocialLogo
            alt='twitter logo'
            src={twitter}
          />
        </Grid>
        <Grid
          item
          href='https://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
          component={'a'}
        >
          <SocialLogo
            alt='instagram logo'
            src={instagram}
          />
        </Grid>
      </Grid>
    </StyledFooter>
  )
}
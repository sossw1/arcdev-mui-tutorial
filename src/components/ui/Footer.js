import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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

export default function Footer() {
  return (
    <StyledFooter>
      <Grid
        container
        sx={{
          position: 'absolute',
          justifyContent: 'center'
        }}
      >
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item component={Link} to='/'>Home</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item component={Link} to='/services'>Services</GridLink>
            <GridLink item component={Link} to='/custom-software'>Custom Software Development</GridLink>
            <GridLink item component={Link} to='/mobile-apps'>Mobile App Development</GridLink>
            <GridLink item component={Link} to='/websites'>Website Development</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item component={Link} to='/revolution'>The Revolution</GridLink>
            <GridLink item component={Link} to='/revolution'>Vision</GridLink>
            <GridLink item component={Link} to='/revolution'>Technology</GridLink>
            <GridLink item component={Link} to='/revolution'>Process</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item component={Link} to='/about'>About Us</GridLink>
            <GridLink item component={Link} to='/about'>History</GridLink>
            <GridLink item component={Link} to='/about'>Team</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item component={Link} to='/contact'>Contact</GridLink>
          </Grid>
        </Grid>
      </Grid>
      <StyledSvg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.4 180"><style>{`.st1{fill:#fff}.st2{font-family:&apos;ArialMT&apos;}.st3{font-size:8px}`}</style><path d="M294.4 0L166.3 227H-4V0z" /><path fill="none" d="M111-24v376" /><text transform="translate(5 175)" className="st1 st2 st3">© Arc Development 2019</text><text transform="translate(147.442 175)" className="st1 st2 st3">Wichita, KS</text></StyledSvg>
    </StyledFooter>
  )
}
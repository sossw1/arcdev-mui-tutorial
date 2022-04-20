import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  fontWeight: 'bold'
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
            <GridLink item>
              Home
            </GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item>Services</GridLink>
            <GridLink item>Custom Software Development</GridLink>
            <GridLink item>Mobile App Development</GridLink>
            <GridLink item>Website Development</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item>The Revolution</GridLink>
            <GridLink item>Vision</GridLink>
            <GridLink item>Technology</GridLink>
            <GridLink item>Process</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item>About Us</GridLink>
            <GridLink item>History</GridLink>
            <GridLink item>Team</GridLink>
          </Grid>
        </Grid>
        <Grid item sx={{ m: '3em' }}>
          <Grid container spacing={2} direction='column'>
            <GridLink item>
              Contact
            </GridLink>
          </Grid>
        </Grid>
      </Grid>
      <StyledSvg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.4 180"><style>{`.st1{fill:#fff}.st2{font-family:&apos;ArialMT&apos;}.st3{font-size:8px}`}</style><path d="M294.4 0L166.3 227H-4V0z" /><path fill="none" d="M111-24v376" /><text transform="translate(5 175)" className="st1 st2 st3">© Arc Development 2019</text><text transform="translate(147.442 175)" className="st1 st2 st3">Wichita, KS</text></StyledSvg>
    </StyledFooter>
  )
}
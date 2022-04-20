import { styled } from '@mui/material/styles';

const StyledFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.common.blue
}))

export default function Footer() {
  return (
    <StyledFooter>Example Footer</StyledFooter>
  )
}
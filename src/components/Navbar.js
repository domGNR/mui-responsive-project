import { Box,AppBar,styled,Toolbar, Typography } from "@mui/material"
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
  })

  const Search = styled('div') (({ theme }) => ({
    backgroundColor:'white'
  }))
  const Icon = styled('div') (({ theme }) => ({
    backgroundColor:'white'
  }))
  

  return (
    <AppBar>
      <StyledToolbar>
        <Typography></Typography>
        
        <Search/>
        <Icon/>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar

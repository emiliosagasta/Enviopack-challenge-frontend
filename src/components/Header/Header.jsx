import { AppBar, Toolbar , Typography, Box} from "@mui/material"
import ProfileJson from '../../profile.json'
import './header.css'

export const Navbar = () => {
  const profile = ProfileJson.profile
  return (
    <AppBar position='static' style={{backgroundColor:"black"}}>
        <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <Typography className='left'variant='h6' component='div' sx={{ flexgrow: 1}}>
        Tienda de productos
        </Typography>
        </Box>
        <Box style={{display:"flex", justifyContent:'space-around'}}>
        <Typography className='right' variant='h6' component='div' sx={{ flexgrow: 1}} >
        {profile.firstName}
        </Typography>
        <Typography className='right' variant='h6' component='div' sx={{ textAlign:"center", fontSize:"md", fontWeight:"400"}}>
        Carrito()
        </Typography>
        <Typography className='right' variant='h6' component='div' sx={{ flexgrow: 1}}>
        Créditos: ${profile.credit}
        </Typography>
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar

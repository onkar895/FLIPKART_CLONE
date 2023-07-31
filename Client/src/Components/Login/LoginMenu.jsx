/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MenuItem, Typography } from "@mui/material"
import { Box, Menu, styled } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from "react-router-dom";


const menuData = [
  { id: 1, icon: <PersonIcon />, text: "My Profile" },
  { id: 2, icon: <AddIcon />, text: "Flipkart Plus Zone" },
  { id: 3, icon: <FolderIcon />, text: "Orders" },
  { id: 4, icon: <FavoriteIcon />, text: "Wishlist" },
  { id: 5, icon: <ConfirmationNumberIcon />, text: "Rewards" },
  { id: 6, icon: <AccountBalanceWalletIcon />, text: "Gift Cards" },

]


const LoginMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open)
  return (
    <StyledMenu
      sx={{ mt: "0.5rem" }}
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
    >
      <Container>
        <Typography>New customer</Typography>
        <Link>Sign up</Link>
      </Container>
      {
        menuData.map((data) => (

          <MenuItem key={data.id} >
            {data.icon}
            <Typography>{data.text}</Typography>
          </MenuItem>

        ))
      }
    </StyledMenu>
  )
}

const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: "0.5rem",
  "& ul>li": {
    margin: "0.3rem",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    "& svg": {
      color: "#2974f1"
    }
  }
}))

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0.5rem 1.5rem",
  width: "300px",
  justifyContent: "space-between",
  "& a": {
    textDecoration: "none",
    color: "#2974f1"
  }
}))


export default LoginMenu

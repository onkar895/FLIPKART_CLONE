/* eslint-disable no-unused-vars */
import React from 'react'
import { AppBar, Toolbar, styled, Box, Typography, Button } from '@mui/material'
import FlipKartLogo from './Images/flipkart.png'
import PlusLogo from './Images/plus.png'
import SearchBar from './SearchBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react'


const Header = () => {

  const [open, setOpen] = useState("false");

  const openDbox = () => {
    setOpen(true)
  }

  return (

    <>

      <MainContainer>

        <AppBarContainer>

          <Toolbar variant="dense">

            <LogoBox>
              <img src={FlipKartLogo} alt="FlipKartLogo" />
              <SubLogo>Explore
                <Box sx={{ color: '#E8D919', fontWeight: 'bold', marginLeft: '2px' }}>Plus</Box>
                <Box><img src={PlusLogo} alt="PlusLogo" style={{ width: '10px', marginBottom: '2px' }} /></Box>
              </SubLogo>
            </LogoBox>

            <SearchBar />


            <ButtonContainer variant='contained' onClick={() => openDbox()}>LogIn
            </ButtonContainer>

            <Container>
              <Typography>Become a Seller</Typography>
              <Typography>More</Typography>
              <ArrowDropDownIcon sx={{ marginTop: '1px' }} />
            </Container>

            <Box sx={{ display: 'flex', margin: '5px 0 0 20px', cursor: 'pointer' }}>
              <ShoppingCartIcon variant='contained' size='small' />
              <Typography sx={{ fontFamily: "Trebuchet MS" }}>Cart</Typography>
            </Box>

          </Toolbar>

        </AppBarContainer>

      </MainContainer>

    </>
  )
}

const MainContainer = styled(Box)`

`

const AppBarContainer = styled(AppBar)`
margin : 0;
height : 55px;
background : #2874F0;
`
const LogoBox = styled(Box)`
margin : 0.7rem 0 0 9rem;
line-height : 0;
cursor : pointer;

& > img {
  width : 6vw;
}
`
const SubLogo = styled(Typography)`
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
display : flex;
font-size : 11px;
font-style : italic;
cursor : pointer;
`

const ButtonContainer = styled(Button)`
background : #FFFFFF;
color : #2874f0;
text-transform : none;
margin : 6px 0 0 25px;
width : 9vw;
height : 5.5vh;
border-radius : 2px;
box-shadow : none;
font-weight : bold;
cursor : pointer;
`

const Container = styled(Box)`
display : flex;
margin-top : 5px;
cursor : pointer;

& > p{
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  margin-left : 30px;
}
`

export default Header

/* eslint-disable no-unused-vars */
import React from 'react'
import { AppBar, Toolbar, styled, Box, Typography, Button } from '@mui/material'
import FlipKartLogo from './Images/flipkart.png'
import PlusLogo from './Images/plus.png'
import SearchBar from './SearchBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SubNavBar from './SubNavBar'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
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

            <ButtonContainer variant='contained' size='small'>LogIn</ButtonContainer>

            <Container>
              <Typography>Become a Seller</Typography>
              <Typography>More</Typography>
              <ArrowDropDownIcon sx={{ marginTop: '1px' }} />
            </Container>

            <Box sx={{ display: 'flex', margin: '5px 0 0 40px', cursor: 'pointer' }}>
              <ShoppingCartIcon variant='contained' size='small' />
              <Typography sx={{ fontFamily: "Trebuchet MS" }}>Cart</Typography>
            </Box>

          </Toolbar>

          <ImageContainer>
            <Toolbar>
              <SubNavBar />
            </Toolbar>
          </ImageContainer>

        </AppBarContainer>

      </MainContainer>

    </>
  )
}

const MainContainer = styled(Box)`
position : relative;
`

const AppBarContainer = styled(AppBar)`
position : fixed;
z-index : 1;
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
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
background : whitesmoke;
color : #2874f0;
margin : 6px 0 0 20px;
width : 9vw;
height : 5.5vh;
border-radius : none;
font-weight : bold;
cursor : pointer;
`

const Container = styled(Box)`
display : flex;
margin-top : 5px;
cursor : pointer;

& > p{
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  margin-left : 40px;
}
`

const ImageContainer = styled(Box)`
background : white;
box-shadow: 90px 20px 100px grey;
height : 30vh;
color : black;
margin-top : 7px;
width : 100%;
`
export default Header

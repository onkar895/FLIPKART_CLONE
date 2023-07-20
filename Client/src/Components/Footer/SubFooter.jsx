/* eslint-disable no-unused-vars */
import React from 'react'
import { styled, Box, Typography } from '@mui/material'
import paymentmethod from '../../Assets/payment-method.svg'
import download from '../../Assets/download.svg'
import download1 from '../../Assets/download (1).svg'
import download2 from '../../Assets/download (2).svg'
import download3 from '../../Assets/download (3).svg'

const SubFooter = () => {
  return (
    <>
      <Container>

        <SubFooterContainer>

          <Typography><img src={download} alt="SellerImage" /> &nbsp; Become a Seller</Typography>
          <Typography><img src={download1} alt="AdImage" /> &nbsp; Advertise</Typography>
          <Typography><img src={download2} alt="GiftsImage" /> &nbsp; Gift Cards</Typography>
          <Typography><img src={download3} alt="HelpImage" /> &nbsp; Help Center</Typography>
          <Typography>© 2007-2023 Flipkart.com</Typography>
          <Typography><img src={paymentmethod} alt="Payment" /></Typography>

        </SubFooterContainer>

      </Container>
    </>
  )
}

const Container = styled(Box)`
background : #172337;
color : white;
padding : 10px;
width :100% ;
height : 12vh;
border-top : 1px solid grey;
`
const SubFooterContainer = styled(Box)`
display : flex;
align-iems : center;
justify-content : center;
gap : 2.3rem;
margin-top : 1.2rem;

&  p {
font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
font-size : 15px;
}
`

export default SubFooter

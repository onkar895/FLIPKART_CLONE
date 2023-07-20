/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, styled, Box, Link } from '@mui/material';

const Footer = () => {

  return (

    <FooterContainer>

      <GridContainer container spacing={2}>

        <Grid item xs={12} sm={12} md={12} lg={7}>

          <LeftPanel>

            <Box>
              <Typography>ABOUT</Typography>
              <ul>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Flipkart Stories</Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">Flipkart Wholesale</Link></li>
                <li><Link href="#">Corporate Information</Link></li>
              </ul>
            </Box>

            <Box>
              <Typography>HELP</Typography>
              <ul>
                <li><Link href="#">Payments</Link></li>
                <li><Link href="#">Shipping</Link></li>
                <li><Link href="#">Cancellation & Returns</Link></li>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Report Infringement</Link></li>
              </ul>
            </Box>

            <Box>
              <Typography>CONSUMER POLICY</Typography>
              <ul>
                <li><Link href="#">Return Policy</Link></li>
                <li><Link href="#">Terms of Use</Link></li>
                <li><Link href="#">Security</Link></li>
                <li><Link href="#">Privacy</Link></li>
                <li><Link href="#">Grievance Redressal</Link></li>
                <li><Link href="#">EPR Compliance</Link></li>
              </ul>
            </Box>

            <Box>
              <Typography>SOCIAL</Typography>
              <ul>
                <li><Link href="#">Facebook</Link></li>
                <li><Link href="#">Twitter</Link></li>
                <li><Link href="#">Instagram</Link></li>
                <li><Link href="#">YouTube</Link></li>
              </ul>
            </Box>

          </LeftPanel>

        </Grid>


        <Grid item xs={12} sm={12} md={5} lg={5}>

          <RightPanel sx={{ borderLeft: '1px solid grey', paddingLeft: '25px' }}>

            <Box>
              <Typography>Mail Us:</Typography>
              <Box sx={{ fontSize: '14px' }}>
                Flipkart Internet Private Limited,
                Buildings Alyssa, Begonia &
                Clove Embassy Tech Village,
                Outer Ring Road, Devarabeesanahalli Village,
                Bengaluru, 560103,
                Karnataka, India
              </Box>
            </Box>

            <Box>
              <Typography>Registered Office Address</Typography>
              <Box sx={{ fontSize: '14px' }}>
                Flipkart Internet Private Limited,
                Buildings Alyssa, Begonia &
                Clove Embassy Tech Village,
                Outer Ring Road, Devarabeesanahalli Village,
                Bengaluru, 560103,
                Karnataka, India
                CIN : U51109KA2012PTC066107
                Telephone: 044-45614700
              </Box>
            </Box>

          </RightPanel>

        </Grid>

      </GridContainer>

    </FooterContainer>



  );
};

const FooterContainer = styled(Box)`
margin-top : 10rem;
background : #172337;
color : white;
padding : 10px;
width :100% ;
height : 45vh;
`

const GridContainer = styled(Grid)`
display : flex;
margin : 1rem 0 0 2rem;

& > p {
  font-weight : bold;
}

&  ul {
  list-style : none;
}
`

const LeftPanel = styled(Box)`
display : flex;
gap : 3rem;

& > div {

&  p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color : #838787;
  margin-bottom : 8px;
  font-size : 14px;
}

& a{
  color : white;
}

& li {
     margin-bottom : 8px;
     font-size : 14px;
  }
}


`

const RightPanel = styled(Box)`
display : flex;
gap : 3rem;
border : left;
margin-right : 5.2rem;

& > div {

&  p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  color : #838787;
  margin-bottom : 8px;
  font-size : 14px;
}
}
`

export default Footer;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, styled, Box, Link } from '@mui/material';

const Footer = () => {

  return (

    <FooterContainer >

      <GridContainer container spacing={2}>

        <LeftFooter>

          <Grid item xs={12} sm={4} md={2}>
            <Typography>About</Typography>
            <ul>
              <li><Link href="#">Company</Link></li>
              <li><Link href="#">Team</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography>Help</Typography>
            <ul>
              <li><Link href="#">Payments</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Cancellation & Returns</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography>Policy</Typography>
            <ul>
              <li><Link href="#">Return Policy</Link></li>
              <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Cookie Policy</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography>Social</Typography>
            <ul>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">YouTube</Link></li>
            </ul>
          </Grid>

        </LeftFooter>

        <RightFooter>

          <Grid item xs={12} sm={4} md={2}>
            <Typography>Social</Typography>
            <ul>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">YouTube</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Typography>Social</Typography>
            <ul>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">YouTube</Link></li>
            </ul>
          </Grid>

        </RightFooter>

      </GridContainer>

    </FooterContainer>
  );
};

const FooterContainer = styled("footer")`
margin-top : 22rem;
background : #172337;
color : white;
padding : 10px;
width :100% ;
height : 50vh;
`

const GridContainer = styled(Grid)`
display : flex;
align-items : center;
justify-content : center;
margin-left : 18px;
`

const LeftFooter = styled(Box)`
display : flex;

`

const RightFooter = styled(Box)`
display : flex;

`
export default Footer;

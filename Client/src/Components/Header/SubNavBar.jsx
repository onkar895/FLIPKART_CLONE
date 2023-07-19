/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, styled } from '@mui/material'

const SubNavBar = () => {

  const Items = [
    {
      id: 1,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
      text: 'Top Offers'
    },
    {
      id: 2,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
      text: 'Grocery'
    },
    {
      id: 3,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
      text: 'Mobile'
    },
    {
      id: 4,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100',
      text: 'Fashion'
    },
    {
      id: 5,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
      text: 'Electronics'
    },
    {
      id: 6,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100',
      text: 'Home'
    },
    {
      id: 7,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
      text: 'Appliances'
    },
    {
      id: 8,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
      text: 'Travel'
    },
    {
      id: 9,
      url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
      text: 'Beauty, Toys & More'
    },
    {
      id: 10,
      url: 'https://rukminim2.flixcart.com/flap/128/128/image/05d708653beff580.png?q=100',
      text: 'Two Wheelers'
    }
  ];

  return (
    <>
      <NavContainer>
        {
          Items.map((Images) => {
            const { id, url, text } = Images
            return (
              <Box key={id}>
                <img src={url} alt="NavbarImage" />
                <p>{text}</p>
              </Box>
            )
          })
        }
      </NavContainer>
    </>
  )
}

const NavContainer = styled(Box)`
display : flex;
align-items : center;
gap :52px;
margin: 0.8rem 0 0.8rem 0.8rem;

& > div {
 
  & img {
     width : 5vw;
     cursor : pointer;
  }

  & > p {
    font-size : 14px;
    align-text : center;
  }
}
`

export default SubNavBar

/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, styled, Toolbar } from '@mui/material'
import { Items } from '../../AllData/Data'

const SubNavBar = () => {

  return (
    <>

      <ImageContainer>
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
      </ImageContainer>



    </>
  )
}

const ImageContainer = styled(Box)`
display : flex;
align-items : center;
width : 100%;
background : white;
padding : 15px 0 15px 30px;
margin-top : 3.4rem;
box-shadow : 0 0 5px 0;
gap : 3.3rem;


& > div {

  & > img {
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

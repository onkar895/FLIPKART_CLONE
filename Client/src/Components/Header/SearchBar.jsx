/* eslint-disable no-unused-vars */
import React from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, Box } from '@mui/material'

const Search = () => {
  return (
    <>
      <SearchContainer>

        <StyledInputBase
          placeholder="Search for products, brands and more"
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

      </SearchContainer>
    </>

  )
}

const SearchContainer = styled(Box)`
background : white;
width : 30%;
height : 72%;
margin-left : 15px;
border-radius : 2px;
display : flex;
align-items : center;
margin-top : 5px;
`

const SearchIconWrapper = styled(Box)`
  color : #2874f0;
  position: 'absolute',
  display: 'flex',
  align-items: 'center',
  justify-content: 'center',
  width : 20px;
  height : 20px;
  margin-left : 9rem;

`

const StyledInputBase = styled(InputBase)`
color : black;
font-size : 14px;
margin-left : 16px;

`

export default Search

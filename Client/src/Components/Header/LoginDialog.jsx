/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Box, Typography, styled, Dialog, DialogContent } from '@mui/material'

const loginInitials = {
  emailid: '',
  password: ''
}

const signUpInitials = {
  phone: '',
  name: '',
  emailid: '',
  password: '',
}

const LoginDialog = ({ open, setOpen }) => {

  const [LoginModal, setLoginModal] = useState(loginInitials)

  const [SignUpModal, setSignUpModal] = useState(signUpInitials)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <BoxContainer>
        <Dialog open={open} onClose={handleClose}>
          <Box>

          </Box>
        </Dialog>
      </BoxContainer>
    </>
  )
}

const BoxContainer = styled(Box)`

`
export default LoginDialog

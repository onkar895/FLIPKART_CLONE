/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Modal, Grid, TextField, Box, Button, Typography, styled } from '@mui/material';


const LoginDialog = ({ open, setOpen }) => {

  const [toggle, setToggle] = useState(false);

  const [login, setLogin] = useState(
    {
      email: '',
      password: ''
    }
  );
  const [signup, setSignup] = useState(
    {
      fullName: '',
      username: '',
      email: '',
      password: '',
      phone: ''
    }
  );


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(login)
  }

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signup)
  }

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <Modal open={open} onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container>
        <Grid container height='100%' >
          {
            !toggle ? (
              <>
                <Left item xs={5}>
                  <Box>
                    <Typography variant='h5'>Login</Typography>
                    <span>Get access to your <br /> Orders,Wishlist and <br /> Recommendations</span>
                  </Box>
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="login image" />
                </Left>

                <Grid item xs={7} >
                  <Right>
                    <Box>
                      <TextField
                        label='Enter email'
                        fullWidth
                        variant="standard"
                        name='email'
                        type='email'
                        onChange={(e) => setLogin(
                          {
                            ...login, [e.target.name]: e.target.value
                          }
                        )}
                      />
                      <TextField
                        label='Enter password'
                        fullWidth
                        variant="standard"
                        name='password'
                        type='password'
                        onChange={(e) => setLogin(
                          {
                            ...login, [e.target.name]: e.target.value
                          }
                        )}
                      />
                      <Typography>By continuing, you agree to Flipkart <span>Terms of Use</span> and <span>Privacy Policy.</span></Typography>
                      <Button sx={{ background: "#fb641b", ":hover": { background: "#fb641b" } }} variant='contained' fullWidth onClick={handleLogin}>Login</Button>
                    </Box>
                    <Typography onClick={() => setToggle(true)} >New to Flipkart? Create an account</Typography>
                  </Right>
                </Grid>
              </>
            ) : (
              <>
                <Left item xs={5}>
                  <Box>
                    <Typography variant='h5' >Looks like you are new here!</Typography>
                    <span>Sign up with your mobile number and username to get started</span>
                  </Box>
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="login image" />
                </Left>

                <Grid item xs={7} >
                  <Right>
                    <Box>
                      <TextField
                        label='Enter Full Name'
                        fullWidth
                        variant="standard"
                        type='fullname'
                        name='fullname'
                        onChange={(e) => setSignup(
                          {
                            ...signup, [e.target.name]: e.target.value
                          }
                        )}
                      />
                      <TextField
                        label='Enter username'
                        fullWidth
                        variant="standard"
                        type='username'
                        name='username'
                        onChange={(e) => setSignup(
                          {
                            ...signup, [e.target.name]: e.target.value
                          }
                        )}
                      />
                      <TextField
                        label='Enter email'
                        fullWidth
                        variant="standard"
                        type='email'
                        name='email'
                        onChange={(e) => setSignup(
                          {
                            ...signup, [e.target.name]: e.target.value
                          }
                        )}
                      />
                      <TextField
                        label='Enter password'
                        fullWidth
                        variant="standard"
                        type='password'
                        name='password'
                        onChange={(e) => setSignup(
                          {
                            ...signup, [e.target.name]: e.target.value
                          }
                        )}
                      />
                      <TextField
                        label='Enter Phone Number'
                        fullWidth
                        variant="standard"
                        type='phone'
                        name='phone'
                        onChange={(e) => setSignup(
                          {
                            ...signup, [e.target.name]: e.target.value
                          }
                        )}
                      />

                      <Typography>By continuing, you agree to Flipkart <span>Terms of Use</span> and <span>Privacy Policy.</span></Typography>

                      <Button
                        sx={{ background: "#fb641b", ":hover": { background: "#fb641b" } }}
                        variant='contained'
                        fullWidth
                        onClick={handleSignup}>
                        Sign up
                      </Button>

                      <Button
                        sx={{ boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%' }}
                        fullWidth
                        onClick={() => setToggle(false)}>
                        Existing user? Login
                      </Button>
                    </Box>
                  </Right>
                </Grid>
              </>
            )
          }
        </Grid>
      </Container>
    </Modal>
  );
}

const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "650px",
  width: "90vw",
  height: "85vh",
  background: "#fff",
}))

const Left = styled(Grid)(({ theme }) => ({
  height: "100%",
  background: "#2874f0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "2rem 0",
  "& > img": {
    objectFit: "contain",
    width: "85%",
  },
  "& > div": {
    width: "85%",
    marginLeft: '20px',
    fontWeight: "bold",

    "& > h5": {
      color: "#fff",
      marginBottom: "1rem",
      marginTop: '1rem',
      fontWeight: "bold"
    },
    "& > span": {
      fontSize: "1rem",
      color: "lightgray",
    }
  }
}))

const Right = styled(Box)(({ theme }) => ({
  padding: "1.5rem",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "& > p": {
    textAlign: "center",
    cursor: "pointer",
    color: "#2874f0",
    fontSize: "14px"
  },
  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '10px',
    gap: "15px",

    "& > button": {
      boxShadow: "none"
    },
    "& > p": {
      fontSize: "12px",
      color: "#878787",
      "& > span": {
        color: "#2874f0"
      }
    }
  }
}))


export default LoginDialog

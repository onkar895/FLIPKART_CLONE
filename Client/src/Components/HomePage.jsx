/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Banner from './Banner'
import SubFooter from './Footer/SubFooter'
import SubNavBar from './Header/SubNavBar'

const HomePage = () => {
  return (
    <>
      <Header />
      <SubNavBar />
      <Banner />
      <Footer />
      <SubFooter />
    </>
  )
}

export default HomePage

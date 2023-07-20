/* eslint-disable no-unused-vars */
import React from 'react'
import { styled, Box } from '@mui/material'
import { BannerData } from '../AllData/Data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const Banner = () => {

  return (

    <Container>

      <Carousel
        swipeable={false}    // disables the ability to swipe through the carousel items.
        draggable={false}    // disables dragging the carousel items.
        responsive={responsive}   // defines how the carousel responds to different screen sizes.
        infinite={true}  // enables infinite looping of carousel items,
        autoPlay={true}  // enables automatic play of the carousel items.
        autoPlaySpeed={4000}
        keyBoardControl={true}  // enables control of the carousel using keyboard arrow keys.
        showDots={false}   // whether to display pagination dots at the bottom of the carousel 
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        {
          BannerData.map((Images) => {
            const { id, url } = Images
            return (
              <Box key={id}>
                <Image src={url} alt="BannerImage" />
              </Box>
            )
          })
        }

      </Carousel>

    </Container>
  )
}

const Container = styled(Box)`
margin-top : 1rem;
`

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '45vh',
  objectFit: 'cover'
}));

export default Banner

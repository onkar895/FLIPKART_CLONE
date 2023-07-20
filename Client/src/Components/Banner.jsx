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
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
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
  height: '100%',
  objectFit: 'cover'
}));

export default Banner

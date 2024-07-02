import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className='my-4 md:my-6 lg:my-8'>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {/* shoes */}
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/1102777/pexels-photo-1102777.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/2057484/pexels-photo-2057484.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        {/* bluetooth */}
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/7242800/pexels-photo-7242800.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/1646704/pexels-photo-1646704.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/7129063/pexels-photo-7129063.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        {/* bag */}
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/1324147/pexels-photo-1324147.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/842155/pexels-photo-842155.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        {/* cap */}
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/777156/pexels-photo-777156.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/1475384/pexels-photo-1475384.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
        <div>
          <img
            className='h-[500px] w-full object-cover'
            src='https://images.pexels.com/photos/633717/pexels-photo-633717.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='photos'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
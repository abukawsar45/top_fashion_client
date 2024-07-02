import React from 'react';
import TitleWithInfo from '../TitleWithInfo/TitleWithInfo';
import ProductInfo from '../TitleWithInfo/ProductInfo';
import Img from '../TitleWithInfo/Img';

const About = () => {
  return (
    <div>
      <TitleWithInfo
        title='   About Top Fashion'
        tColor='text-green-500'
        info=" Welcome to Top Fashions, your ultimate destination for the latest trends
        in clothing and footwear! At Top Fashions, we pride ourselves on
        offering a wide selection of stylish and high-quality apparel and shoes
        to elevate your wardrobe. Whether you're searching for the perfect
        outfit for a special occasion, comfortable and chic everyday wear, or
        the latest in fashionable footwear, we have something for everyone. Our
        curated collections feature the newest arrivals from top brands,
        ensuring you stay ahead of the fashion curve. Explore our website to
        discover an array of options that cater to your unique style and
        preferences. Let Top Fashions be your go-to source for all things
        fashion, where your style meets our passion for excellence."
      ></TitleWithInfo>

      {/* Our shoes */}
      <div className='my-2 md:my-6 lg:my-16 grid lg:grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
        <div className=' flex  justify-center lg:justify-end'>
          <div>
            <Img imgLink='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div>
            {' '}
            <Img imgLink='https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
        </div>
        <div>
          <ProductInfo
            titleClassName='text-semibold text-2xl '
            infoClassName='text-xs font-thin lg:w-2/3 md:mt-4 l lg:mt-8 leading-5 '
            title='Our Shoes'
            info=" Our shoes are perfectly crafted to provide both style and comfort. Using high-quality materials and meticulous craftsmanship, each pair is designed to offer the best fit and durability. Whether you're looking for casual sneakers, elegant heels, or sturdy boots, our collection ensures you step out in confidence and fashion. Discover the perfect pair with us and experience unparalleled excellence in footwear."
          ></ProductInfo>
        </div>
      </div>

      {/* Our bags */}
      <div className='my-2 md:my-6 lg:my-16 grid lg:grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
        <div className=' flex  justify-center lg:justify-end'>
          <ProductInfo
            titleClassName='text-semibold text-2xl text-end'
            infoClassName='text-xs font-thin flex lg:justify-end lg:ml-[30%] md:mt-4 l lg:mt-8 leading-5 text-end'
            title='Our Bags'
            info=' Our bags are designed with both functionality and style in mind, making them the perfect accessory for any occasion. Crafted from premium materials and featuring meticulous attention to detail, each bag offers durability and elegance. Whether you need a spacious tote for daily essentials, a chic clutch for special events, or a versatile backpack for on-the-go convenience, our collection has something for everyone. Experience the perfect blend of quality and fashion with our exceptional bags.'
          ></ProductInfo>
        </div>
        <div className=' flex  justify-center lg:justify-start'>
          <div>
            <Img imgLink='https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/3058761/pexels-photo-3058761.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div>
            {' '}
            <Img imgLink='https://images.pexels.com/photos/346767/pexels-photo-346767.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
        </div>
      </div>
      <div className='my-2 md:my-6 lg:my-16 grid lg:grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
        <div className=' flex  justify-center lg:justify-end'>
          <div>
            <Img imgLink='https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div>
            {' '}
            <Img imgLink='https://images.pexels.com/photos/2570145/pexels-photo-2570145.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://media.istockphoto.com/id/497040301/photo/white-baseball-hat.jpg?b=1&s=612x612&w=0&k=20&c=4RwjVgqPDfwo5R-rnCBhVnRVhNrr_8Wp3jp3ESg3sgc=' />
          </div>
        </div>
        <div>
          <ProductInfo
            titleClassName='text-semibold text-2xl '
            infoClassName='text-xs font-thin lg:w-2/3 md:mt-4 l lg:mt-8 leading-5 '
            title='Our Caps'
            info=" Our caps are the perfect blend of style and comfort, designed to complement any outfit while providing excellent sun protection. Made from high-quality materials and featuring adjustable fittings, our caps ensure a perfect fit for everyone. Whether you're looking for a sporty cap for outdoor activities, a trendy piece to enhance your streetwear, or a classic design for everyday wear, our collection offers a variety of options to suit your taste. Discover the perfect cap with us and add a stylish finishing touch to your look."
          ></ProductInfo>
        </div>
      </div>
      <div className=' my-2 md:my-6 lg:my-16 grid lg:grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
        <div className='columns-2 flex  justify-center lg:justify-end'>
          <ProductInfo
            titleClassName='text-semibold text-2xl text-end'
            infoClassName='text-xs font-thin flex lg:justify-end lg:ml-[30%] md:mt-4 l lg:mt-8 leading-5 text-end'
            title='Our Electronics '
            info=" Our electric products are engineered to deliver top-notch performance and reliability, making your life easier and more efficient. From innovative kitchen appliances to cutting-edge home entertainment systems, our range of electric products is designed with the latest technology and highest quality standards. Each item in our collection is built to provide excellent functionality, energy efficiency, and durability. Whether you're upgrading your home or looking for the perfect gift, our electric products offer unparalleled value and satisfaction. Discover the convenience and excellence of our electric products today."
          ></ProductInfo>
        </div>
        <div className='columns-1 flex  justify-center lg:justify-start'>
          <div>
            <Img imgLink='https://images.pexels.com/photos/8004012/pexels-photo-8004012.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/7242818/pexels-photo-7242818.jpeg?auto=compress&cs=tinysrgb&w=600' />
          </div>
          <div>
            <Img imgLink='https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <Img imgLink='https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=600' />{' '}
          </div>
        </div>
      </div>

      {/* img */}
      <img
        src='https://img.tobi.com/img/scheduled/content/20170203/Tobi_About_Us_15.jpg'
        alt='photos'
      />
      {/* our customer care */}
      <div className='my-4 md:my-6 lg:my-16 flex flex-col lg:flex-row items-center gap-8'>
        <div className='flex-1 '>
          <h2 className='font-semibold md:text-xl  text-center'>
            OUR CUSTOMER CARE
          </h2>
          <p className='my-4 text-center px-12 '>
            Welcome to our top fashion website, where customer care is at the
            heart of everything we do. We proudly serve over 1 million fashion
            enthusiasts across 100+ countries. Our dedicated team is here to
            connect with you personally, listen to your feedback, and
            incorporate your insights into our designs and vision. For us, it's
            not just about selling clothes; it's about building trust through
            exceptional service and creating a fashion experience you'll love.
          </p>
        </div>
        <div className='flex-1'>
          <img
            className='w-8/12'
            src='https://img.tobi.com/img/scheduled/content/20170203/Tobi_About_Us_14.jpg'
            alt='photos'
          />
        </div>
      </div>
    </div>
  );
};

export default About;

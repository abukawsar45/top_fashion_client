import React from 'react';

const Img = ({imgLink}) => {
  return <img className='w-32 h-32 object-cover' src={imgLink} alt='' />;
};

export default Img;
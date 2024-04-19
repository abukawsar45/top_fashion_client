import React from 'react';

const Div = ({ label, value, bg, textSize }) => {
  return (
    <div className='  flex items-center md:gap-1 lg:gap-2 '>
      <span
        className={`py-2 ${
          bg ? bg + 'px-4 ' : ''
        } ${textSize} font-sans rounded`}
      >
        {label} {value}{' '}
      </span>
    </div>
  );
};

export default Div;

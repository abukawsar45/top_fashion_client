import React from 'react';

const CloseButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      id=''
      className='absolute md:-pt-24 lg:-pt-6 -m-5 right-0 -top-0 text-white bg-red-400 hover:bg-red-500 px-2 py-2 rounded-full w-8 h-8 flex justify-center items-center'
    >
      {children}
    </button>
  );
};

export default CloseButton;
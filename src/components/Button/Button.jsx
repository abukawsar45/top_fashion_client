import React, { Children } from 'react';

const Button = ({
  children,
  dataBSPlacement,
  onClick,
  shape,
  text,
  title,
  bg,
  hoverBg,
  width,
}) => {
  return (
    <button
      onClick={onClick}
      data-bs-placement={dataBSPlacement}
      title={title}
      className={` ${
        shape === 'rounded'
          ? 'absolute bg-violet-300 hover:bg-violet-500 p-2 bottom-2 right-2 lg:bottom-4 lg:right-4 cursor-pointer rounded-full opacity-0 group-hover:opacity-100 checked:opacity-100 hidden md:block'
          : 'transform ease-in-out duration-100 hover:bg-violet-500 font-semibold px-3 py-2 rounded border border-green-400 text-sm text-violet-600 hover:text-white'
      } ${bg ? bg : ''} ${width ? width : ''}`}
    >
      {text} {children}
    </button>
  );
};
export default Button;
import React, { Children } from 'react';

const Button = ({
  disabled,
  children,
  dataBSPlacement,
  onClick,
  shape,
  text,
  textColor,
  title,
  bg,
  hoverBg,
  width,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      data-bs-placement={dataBSPlacement}
      title={title}
      className={` ${
        shape === 'rounded'
          ? 'absolute bg-emerald-300 p-2 bottom-2 right-2 lg:bottom-4 lg:right-4 cursor-pointer rounded-full opacity-0 group-hover:opacity-100 checked:opacity-100 hidden md:block'
          : 'transform ease-in-out duration-100  font-semibold px-3 py-2 rounded border border-green-400 text-sm '
      } ${disabled ? 'bg-gray-400 text-gray-300' : 'hover:text-white hover:bg-emerald-500'} ${
        textColor ? textColor : ''
      } ${bg ? bg : ''} ${width ? width : ''}`}
    >
      {text} {children}
    </button>
  );
};
export default Button;
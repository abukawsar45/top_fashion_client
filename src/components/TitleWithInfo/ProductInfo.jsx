import React from 'react';

const ProductInfo = ({ title, info, children,titleClassName,infoClassName, tColor, inColor }) => {
  return (
    <div>
      <h1 className={`${titleClassName} `}>{title}</h1>
      <p className={`${infoClassName} `}>{info}</p>
    </div>
  );
};

export default ProductInfo;
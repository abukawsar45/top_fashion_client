import React from 'react';

const TitleWithInfo = ({ title, info, children, tColor, inColor }) => {
  return (
    <div>
      <h1
        className={`text-center my-2 md:my-4 lg:my-6 md:text-xl lg:text-5xl font-bold ${tColor}`}
      >
        {title}
      </h1>
      <p
        className={`font-thin text-xs md:text-sm lg:text-base md:px-4 lg:px-32 text-center ${inColor} `}
      >
        {info}
      </p>
    </div>
  );
};

export default TitleWithInfo;

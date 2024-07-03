import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductsLoading = () => {
  const dataLength = 12;
  const skeletons = Array.from({ length: dataLength }, (_, index) => (
    <div key={index}>
      <div>
        <Skeleton height={160} />
      </div>

      <div className='my-2 p-4 flex flex-col justify-between gap-2 mb-3 '>
        <div>
          <Skeleton height={25} width={200} />
          <Skeleton height={20} width={50} />
        </div>
        <div className='flex justify-between items-center flex-1 gap-2  mb-3'>
          <div className='mt-3 flex flex-col'>
            <Skeleton height={20} width={45} />
            <Skeleton height={20} width={30} />
          </div>
          <Skeleton height={25} width={30} />
          <Skeleton height={25} width={50} />
        </div>
      </div>
    </div>
  ));
  // console.log({ skeletons });

  return (
    <SkeletonTheme baseColor='#2a303c' highlightColor='#5c5c5c'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8'>
        {skeletons}
      </div>
    </SkeletonTheme>
  );
}
export default ProductsLoading;
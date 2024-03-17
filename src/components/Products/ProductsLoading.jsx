import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductsLoading() {
  return (
    <SkeletonTheme baseColor='#2a406b' highlightColor='#5c5c5c'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8'>
        <div>
          <div>
            <Skeleton height={300} />
          </div>
          <div>
            <Skeleton height={25} width={300} />
          </div>
        </div>
        <div>
          <div>
            <Skeleton height={300} />
          </div>
          <div>
            <Skeleton height={25} width={300} />
          </div>
        </div>
        <div>
          <div>
            <Skeleton height={300} />
          </div>
          <div>
            <Skeleton height={25} width={300} />
          </div>
        </div>
        <div>
          <div>
            <Skeleton height={300} />
          </div>
          <div>
            <Skeleton height={25} width={300} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
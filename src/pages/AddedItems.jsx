import React, { useEffect } from 'react';
import AddedProducts from '../components/AddedProducts/AddedProducts';

const AddedItems = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div>
      <AddedProducts/>
    </div>
  );
};

export default AddedItems;
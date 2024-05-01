import { addToBookingDB, getBookingCart } from '../../utilities/fakeDB/fakeDb';

import React from 'react';

const HandleClickOperation = () => {
  const [storeCart, setStoreCart] = useState(getBookingCart() || {});

  // handle added product in localStorage
  const handleAddToCart = (id) => {
    addToBookingDB(id);

    const exists = Object.keys(storeCart).includes(id);
    console.log({ exists });
    if (exists) {
      return toast.error('Already added this item!');
    } else {
      toast.success('Product added to cart!');
    }
    const addedProduct = getBookingCart();
    setStoreCart(addedProduct);
  };

  const allOperation = {
    handleAddToCart,
    storeCart,
  };

  return allOperation;
};

export default HandleClickOperation;

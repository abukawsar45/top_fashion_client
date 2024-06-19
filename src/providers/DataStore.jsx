import React, { useState } from 'react';

const DataStore = () => {

  const [loading, setLoading] = useState(false);

  
  // ___________Local-Storage-Start___________
  //get booking db
  const getBookingCart = () => {
    setLoading(true)
    let bookingCart = {};
    
    const storeCart = localStorage.getItem('booking-cart');
    if (storeCart) {
      bookingCart = JSON.parse(storeCart);
    }
    setLoading(false)
    return bookingCart;
  };

  // add to db
  const addToBookingDB = (id, operation) => {
    console.log(id, operation)
    let bookingCart = getBookingCart();
    // add quantity
    const quantity = bookingCart[id];
    if (!quantity) {
      bookingCart[id] = 1;
    } else if (operation === 'increment') {
      const incrementQuantity = quantity + 1;
      bookingCart[id] = incrementQuantity;
    } else if (operation === 'decrement') {
      const decrementQuantity = quantity - 1;
      bookingCart[id] = decrementQuantity;
    }
    localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
  };

  // remove to db
  const removeFromBookingDB = (id) => {
    setLoading(true);
    const bookingCart = getBookingCart();
    if (id in bookingCart) {
      delete bookingCart[id];
      localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
      setLoading(false);
    }
  };

  // all booking data delete
  const deleteBookingCart = () => {
    localStorage.removeItem('booking-cart');
  };

  // ___________Local-Storage-End___________

  // handle added product in localStorage
 

  const userData = {
    loading,
    setLoading,
    addToBookingDB,
    removeFromBookingDB,
    getBookingCart,
    deleteBookingCart,
  };
  return userData;
};

export default DataStore;

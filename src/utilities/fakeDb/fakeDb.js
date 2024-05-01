// add to db
const addToBookingDB = (id, operation) => {
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
const removeToBookingDB = (id) => {
  const bookingCart = getBookingCart();
  if (id in bookingCart) {
    delete bookingCart[id];
    localStorage.setItem('booking-cart', JSON.stringify(bookingCart));
  }
};

//get booking db
const getBookingCart = () => {
  let bookingCart = {};

  const storeCart = localStorage.getItem('booking-cart');
  if (storeCart) {
    bookingCart = JSON.parse(storeCart);
  }
  return bookingCart;
};

// all booking data delete
const deleteBookingCart = () => {
  localStorage.removeItem('booking-cart');
};

export { addToBookingDB, removeToBookingDB, getBookingCart, deleteBookingCart };

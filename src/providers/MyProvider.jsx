import { createContext, useEffect, useState } from 'react';
import UserAuth from './UserAuth';

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const authInfo = UserAuth();
  console.log(authInfo);

  return <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>;
};

export default MyProvider;

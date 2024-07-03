import { createContext, useEffect, useState } from 'react';
import UserAuth from './UserAuth';
import DataStore from './DataStore';

export const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const authInfo = UserAuth();
  const userData = DataStore();

  const myAllOperation = {authInfo, userData}
  // console.log(myAllOperation);

  return <MyContext.Provider value={myAllOperation}>{children}</MyContext.Provider>;
};

export default MyProvider;

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddedItems from '../pages/AddedItems';
import AboutUs from '../pages/AboutUs';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Search from '../pages/Search';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>error</h3>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search/:productName',
        element: <Search/> ,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/aboutUs',
        element: <AboutUs/> ,
      },
      {
        path: '/blog',
        element: <p>blog </p>,
      },
      {
        path: '/addedItems',
        element: <AddedItems/>,
      },
      {
        path: 'ProductDetails/:id',
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://top-fashion-server.vercel.app/allProducts/${params.id}`
          ),
      },
    ],
  },
]);

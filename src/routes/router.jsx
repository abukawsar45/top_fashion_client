import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProductDetails from '../components/Products/ProductDetails';

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'ProductDetails/:id',
        element: <ProductDetails />,
        loader: ({ params }) => fetch('/productsData.json'),
      },
    ],
  },
]);

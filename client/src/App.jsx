import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Category from './pages/Category';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'menu',
      element: <Menu />
    },
    {
      path: 'menu/:category',
      element: <Category />
    },
    {
      path: 'product/:id',
      element: <Product />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'cart',
      element: <Cart />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

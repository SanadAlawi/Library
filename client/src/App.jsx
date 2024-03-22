import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Cart, Category, ErrorPage, Home, Layout, Login, Menu, Product } from './pages';
import { Suspense } from 'react';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Home />
            </Suspense>
        },
        {
          path: 'menu',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Menu />
            </Suspense>
        },
        {
          path: 'menu/:category',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Category />
            </Suspense>
        },
        {
          path: 'product/:id',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Product />
            </Suspense>
        },
        {
          path: 'login',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Login />
            </Suspense>
        },
        {
          path: 'cart',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Cart />
            </Suspense>
        },

        {
          path: '*',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <ErrorPage />
            </Suspense>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

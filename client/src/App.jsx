import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Book, Cart, Category, ErrorPage, Home, Layout, Login } from './pages';
import Genres from './pages/Genres';
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
          path: 'genres',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Genres />
            </Suspense>
        },
        {
          path: 'genres/:category',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Category />
            </Suspense>
        },
        {
          path: 'book/:id',
          element:
            <Suspense fallback={<h1>Loading ....</h1>}>
              <Book />
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

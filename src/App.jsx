import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

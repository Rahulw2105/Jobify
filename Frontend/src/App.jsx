import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

function App() {

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<h1>Home Page...</h1>
  },
   {
    path:"/about",
    element:<h1>About page...</h1>
  }
])
  return (
    <>
       <RouterProvider router={appRoutes}/>
    </>
  )
}

export default App

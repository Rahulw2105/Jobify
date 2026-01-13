import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'

import {HomeLayout,Landing,Register,Login,DashboardLayout,Error } from './pages'
function App() {

const appRoutes = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
 {
    index:true,
    element:<Landing />

  },
  {
    path:'register',
    element:<Register />
  }
  ,{
    path:"Landing",
    element:<Landing />
  },{
    path:"login",
    element:<Login/>
  }
    ]
  },
  

])
  return (
    <>
       <RouterProvider router={appRoutes}/>
    </>
  )
}

export default App

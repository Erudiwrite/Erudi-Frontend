import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AdminPanel from '../pages/AdminPanel'
import AllUsers from '../pages/AllUsers'
import Login from '../pages/Login'
import ForgotPassowrd from '../pages/ForgotPassowrd'
import SignUp from '../pages/SignUp'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
              path : "admin-panel",
              element : <AdminPanel/>,
              children : [
                  {
                      path : "all-users",
                      element : <AllUsers/>
                  },
                 
              ]
          },
            
            
           
        ]
    }
])


export default router
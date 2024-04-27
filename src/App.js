import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import MyComponent from "./pages/testI18next/MyComponent";
import { useTranslation } from "react-i18next";

const routers=createBrowserRouter([
  {
    path:"/",
    element:<Home/>

  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/test",
    element:<MyComponent/>
  },
  {
    path:"/users",
    element:<List/>,
    children :[
      {
        path:":userId",
        element:<Single/>
      },
      {
        path:"new",
        element:<New/>
      }
    ]
  },
  {
    path:"/prodacts",
    element:<List/>,
    children :[
      {
        path:":prodactId",
        element:<Single/>
      },
      {
        path:"new",
        element:<New/>
      }
    ]
  },

])


  
function App() {

  return (
    <div className="App">
   
      <RouterProvider router={routers}> </RouterProvider>
    </div>
  );
}

export default App;

// import { Component} from "react";
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import Master from "./Components/MasterLayout/Master";
import About from "./Components/About/About";
import Port from "./Components/Portfolio/Port";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";




const router = createBrowserRouter([{
  path: '', element:  <Master/>,children: [
    {path: 'about',element:<About/>},
    {path: 'portfolio',element:<Port/>},
    {path: 'contact',element:<Contact/>},
    {path: '', element: <About/>},
    {path: '*', element: <NotFound/>}
  ]
}]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

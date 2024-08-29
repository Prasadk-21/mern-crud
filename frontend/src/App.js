import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from './components/getuser/User.jsx';
import Add from './components/adduser/Add.jsx';
import Edit from './components/updateuser/Edit.jsx';

function App() {
  const route= createBrowserRouter([
    {
    path: "/",
    element: <User/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/edit/:id",
      element: <Edit/>,
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

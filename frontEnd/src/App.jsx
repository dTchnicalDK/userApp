import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import HomePage from "./components/homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage />,
      // element: "homePage",
    },
    {
      path: "/create",
      element: <CreateUser />,
    },
  ]);
  return (
    <>
      <div className="main">
        <h1>Your components are below:--</h1>
        <RouterProvider router={route}></RouterProvider>
      </div>
    </>
  );
}

export default App;

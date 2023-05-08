import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LoginPage from "./login";
import SuccessPage from "./success";
import HomePage from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
      path: "/login",
      element: <LoginPage />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
      <div className="app">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
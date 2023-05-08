import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LoginPage from "./login";

const router = createBrowserRouter([
  {
      path: "/login",
      element: <LoginPage />,
  }
]);

function App() {
  return (
      <div className="app">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
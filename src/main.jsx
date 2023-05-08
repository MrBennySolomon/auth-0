
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Auth0Provider
    domain="dev-lfta5odk5t76lsjd.us.auth0.com"
    clientId="72YRm8WSvkyybRawkCIlO3iJLHsPgoAl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
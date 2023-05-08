
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";

const domain = 'dev-lfta5odk5t76lsjd.us.auth0.com';
const clientId = '72YRm8WSvkyybRawkCIlO3iJLHsPgoAl';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
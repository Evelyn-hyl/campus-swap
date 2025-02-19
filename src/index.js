import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_ISSUER_BASE_URL;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{ redirect_uri: window.location.origin }}>
        <App />
    </Auth0Provider>
);
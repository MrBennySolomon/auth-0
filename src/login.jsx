import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <input type="email" placeholder="EMAIL"/>
      <input type="password" placeholder="PASSWORD"/>

      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
};

export default LoginButton;
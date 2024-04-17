import './login.css'
import acme from "../../assets/acme.png";

function Login() {
  return (
    <div className="rightDivBg">
      <div className="rightDiv">
        <img src={acme} alt="acme" />
        <h2>Do you already have an account?</h2>
        <h4>That's awesome! You can login by clicking on the button below. To skip this next time, you can ask us to remember your login credentials.</h4>
        <button className='logIn'>Log in</button>
      </div>
    </div>
  );
}

export default Login;

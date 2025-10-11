
import '../styles/pages/singup.css';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/icons/google-icon.png';
import Header1 from '../components/header1';

function Signup({ carts }) {
    return (
        <>
        {/* Display error message if any */}
    <Header1 carts={carts} />
    {false ? <p className="alert-error">Please correct the errors below:</p>: null}

  <div className="big-container-signup">
    <div className="signup-container">
      <h2>Create Account</h2>
      <form method="post">
        <input type="text" id="username" name="username" placeholder="Username" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
        <input type="password" id="password" name="password" placeholder="Password" required />
        <button type="submit" className="button-primary">Sign Up</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
      {/* login with google */}
      <div className="google-login">
        <hr />
        <button className="button-secondary"><img className='google-icon' src={googleIcon} alt="Google Icon" /> Log in with Google</button>
      </div>
    </div>
  </div>
</>
    );

}

export default Signup;
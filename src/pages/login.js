
import '../styles/pages/login.css';
import { Link } from 'react-router-dom';
import Header1 from '../components/header1';

function Login({ carts }) {
    return (
        <>
        <Header1 carts={carts} />
    <div className='big-container-login'>
      <div className="login-container">
        <h2>Login</h2>
        <form method="POST" action="{% url 'login' %}">
          <input type="text" id="username" name="username" placeholder="Username" required />
          <input type="password" id="password" name="password" placeholder="Password" required />
          {}
          <div className="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit" className="button-primary">Log In</button>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>    
    </div>
        </>
    );
}
export default Login;
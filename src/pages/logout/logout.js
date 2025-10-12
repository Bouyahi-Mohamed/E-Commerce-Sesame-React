
import { Link } from 'react-router-dom';

function Logout() {
    return (
        <>
        <div className="main">
      <div className="login-container">
        <h1>Logout</h1>
        <p>You have been logged out successfully.</p>
        <Link to="/login" className="button-primary">Login Again</Link>
      </div>
    </div>
        </>
    );
}
export default Logout;
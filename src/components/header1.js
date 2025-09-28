// import styles for this component
import '../styles/shared/sesame-header.css';
// import images and icons
import sesameLogo from '../assets/logo/sesame-logo.png';
import sesameMobileLogo from '../assets/logo/sesame-mobile-logo-white.png';
import searchIcon from '../assets/icons/search-icon.png';
import Logout from '../assets/icons/logout.png';
import Login from '../assets/icons/login-avatar.png';
import Orders from '../assets/icons/shopping-bag.png';
import Cart from '../assets/icons/cart-icon.png';
// import react components and hooks
import { useContext } from 'react';
import nbCartContext from '../context/contextProduit';

function Header1({ user, order }) {
  const { nbCart } = useContext(nbCartContext);

  return (
    <>
      <div className="sesame-header">
        <div className="sesame-header-left-section">
          <a href="/home" className="header-link">
            <img
              className="sesame-logo"
              src={sesameLogo}
              alt="Sesame Logo"
            />
            <img
              className="sesame-mobile-logo"
              src={sesameMobileLogo}
              alt="Sesame Mobile Logo"
            />
          </a>
        </div>

        <div className="sesame-header-middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
          />
          <button className="search-button button-primary">
            <img
              className="search-icon"
              src={searchIcon}
              alt="Search Icon"
            />
          </button>
        </div>

        <div className="sesame-header-right-section">
          {false ? (
            <a className="account-link header-link" href="/logout">
              <img
                className="cart-icon"
                src={Logout}
                alt="Logout"
              />
            </a>
          ) : (
            <a className="account-link header-link" href="/login">
              <img
                className="cart-icon"
                src={Login}
                alt="Login"
              />
            </a>
          )}

          <a className="orders-link header-link" href="/orders">
            <img
              className="cart-icon"
              src={Orders}
              alt="Orders"
            />
          </a>

          <a className="cart-link header-link" href="/cart">
            <img
              className="cart-icon"
              src={Cart}
              alt="Cart"
            />
            <div className="cart-text">Cart</div>
            <div className="cart-quantity">
              {nbCart}
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header1;

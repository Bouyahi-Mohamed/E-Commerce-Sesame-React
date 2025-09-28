

function Header2() {
  return (
    <>
      <div className="cart-header">
        <div className="header-content">
          <div className="cart-header-left-section">
            <a href="/home">
              <img className="sesame-logo" src="/images/sesame-logo.png" alt="Sesame Logo" />
              <img className="sesame-mobile-logo" src="/images/sesame-mobile-logo.png" alt="Sesame Mobile Logo" />
            </a>
          </div>

          <div className="cart-header-middle-section">
            cart (<a className="return-to-home-link" href="/home">{0} items</a>)
          </div>

          <div className="cart-header-right-section" onClick={() => { window.location.href = '/login'; }}>
            <img src="/images/icons/checkout-lock-icon.png" alt="Cart lock icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;

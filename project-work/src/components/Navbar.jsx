

function Navbar() {
  return (
    <div>
      <h1>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            SHEY ROOMS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our service
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link 2" href="#">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </h1>
    </div>
  );
}

export default Navbar
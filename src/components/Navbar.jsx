function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="brand-icon">R</div>
        <span>React Activity Portal</span>
      </div>
      <div className="nav-links">
        <button 
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        <button 
          className={`nav-link ${currentPage === 'activity1' ? 'active' : ''}`}
          onClick={() => setCurrentPage('activity1')}
        >
          Activity 1
        </button>
        <button 
          className={`nav-link ${currentPage === 'activity2' ? 'active' : ''}`}
          onClick={() => setCurrentPage('activity2')}
        >
          Activity 2
        </button>
        <button 
          className={`nav-link ${currentPage === 'activity3' ? 'active' : ''}`}
          onClick={() => setCurrentPage('activity3')}
        >
          Activity 3
        </button>
        <button 
          className={`nav-link ${currentPage === 'activity4' ? 'active' : ''}`}
          onClick={() => setCurrentPage('activity4')}
        >
          Activity 4
        </button>
        <button 
          className={`nav-link ${currentPage === 'activity5' ? 'active' : ''}`}
          onClick={() => setCurrentPage('activity5')}
        >
          Activity 5
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
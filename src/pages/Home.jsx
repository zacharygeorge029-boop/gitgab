function Home({ setCurrentPage }) {
  return (
    <main className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">React Activity Portal</h1>
        <p className="hero-subtitle">
          Five interactive React activities demonstrating state, events, conditional logic, validation, and calculations.
        </p>
      </div>

      <div className="grid-container">
        <div className="activity-card">
          <div className="card-number">1</div>
          <h2 className="card-title">Login Authentication</h2>
          <p className="card-description">
            Validate a username and password against sample credentials and manage login/logout state.
          </p>
          <button className="card-button" onClick={() => setCurrentPage('activity1')}>
            Open Activity
          </button>
        </div>

        <div className="activity-card">
          <div className="card-number">2</div>
          <h2 className="card-title">Student Grade Evaluation</h2>
          <p className="card-description">
            Enter a student's score and get an automatic remark based on grade ranges.
          </p>
          <button className="card-button" onClick={() => setCurrentPage('activity2')}>
            Open Activity
          </button>
        </div>

        <div className="activity-card">
          <div className="card-number">3</div>
          <h2 className="card-title">Password Strength Checker</h2>
          <p className="card-description">
            Check password length and receive live feedback on how strong it is.
          </p>
          <button className="card-button" onClick={() => setCurrentPage('activity3')}>
            Open Activity
          </button>
        </div>

        <div className="activity-card">
          <div className="card-number">4</div>
          <h2 className="card-title">Electricity Bill Calculator</h2>
          <p className="card-description">
            Calculate a customer's electricity bill based on kWh consumption and tiered rates.
          </p>
          <button className="card-button" onClick={() => setCurrentPage('activity4')}>
            Open Activity
          </button>
        </div>

        <div className="activity-card">
          <div className="card-number">5</div>
          <h2 className="card-title">Employee Attendance Checker</h2>
          <p className="card-description">
            Check an employee's time-in and determine whether they are on time, late, or very late.
          </p>
          <button className="card-button" onClick={() => setCurrentPage('activity5')}>
            Open Activity
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
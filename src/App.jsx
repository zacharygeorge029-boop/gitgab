import { useState } from 'react';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
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

      {currentPage === 'home' ? (
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
      ) : (
        <main className="home-container">
          <div className="hero-section">
            <h1 className="hero-title">
              {currentPage === 'activity1' && 'Activity 1: Login Authentication'}
              {currentPage === 'activity2' && 'Activity 2: Student Grade Evaluation'}
              {currentPage === 'activity3' && 'Activity 3: Password Strength Checker'}
              {currentPage === 'activity4' && 'Activity 4: Electricity Bill Calculator'}
              {currentPage === 'activity5' && 'Activity 5: Employee Attendance Checker'}
            </h1>
          </div>
        </main>
      )}
    </div>
  );
}
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import GradeEvaluation from './pages/GradeEvaluation';
import PasswordChecker from './pages/PasswordChecker';
import ElectricityBill from './pages/ElectricityBill';
import AttendanceChecker from './pages/AttendanceChecker';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'activity1':
        return <Login />;
      case 'activity2':
        return <GradeEvaluation />;
      case 'activity3':
        return <PasswordChecker />;
      case 'activity4':
        return <ElectricityBill />;
      case 'activity5':
        return <AttendanceChecker />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

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

      {renderPage()}
    </div>
  );
}
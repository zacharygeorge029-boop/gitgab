import { useState } from 'react';
import Navbar from './components/Navbar';
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
    if (currentPage === 'home') return <Home setCurrentPage={setCurrentPage} />;
    if (currentPage === 'activity1') return <Login />;
    if (currentPage === 'activity2') return <GradeEvaluation />;
    if (currentPage === 'activity3') return <PasswordChecker />;
    if (currentPage === 'activity4') return <ElectricityBill />;
    if (currentPage === 'activity5') return <AttendanceChecker />;
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
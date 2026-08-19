import React, { useState } from 'react';

export default function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');

  const handleCheckAttendance = () => {
    if (employeeName.trim() === '') {
      setError('Please enter the employee name.');
      setShowResult(false);
      return;
    }

    if (timeIn === '' || isNaN(timeIn)) {
      setError('Please enter a valid numeric time.');
      setShowResult(false);
      return;
    }

    const time = Number(timeIn);

    setError('');

    if (time <= 8) {
      setStatus('On Time');
      setMessage('Status: On Time – Good job!');
    } else if (time > 8 && time <= 9) {
      setStatus('Late');
      setMessage('Status: Late – Please be on time tomorrow.');
    } else {
      setStatus('Very Late');
      setMessage('Status: Very Late – Report to your supervisor.');
    }

    setShowResult(true);
  };

  const handleReset = () => {
    setEmployeeName('');
    setTimeIn('');
    setStatus('');
    setMessage('');
    setShowResult(false);
    setError('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f0f4f9', minHeight: '100vh' }}>
      {/* UI Component Card */}
      <div style={{ maxWidth: '400px', margin: '0 auto 2rem', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div style={{ backgroundColor: '#14a39a', color: '#fff', padding: '1.5rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Employee Attendance Checker</h2>
          <p style={{ margin: '0.25rem 0 0', opacity: 0.8, fontSize: '0.875rem' }}>Activity 5</p>
        </div>

        <div style={{ padding: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Employee Name</label>

          <input type="text" placeholder="Enter employee name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />

          <label style={{ display: 'block', fontWeight: '600', marginTop: '1rem', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Time In</label>

          <input type="number" step="0.1" placeholder="e.g. 8.5 = 8:30 AM" value={timeIn} onChange={(e) => setTimeIn(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />

          {error && (
            <p style={{ color: '#dc2626', fontSize: '0.8rem', margin: '0.75rem 0 0' }}>{error}</p>
          )}

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button onClick={handleCheckAttendance} style={{ flex: 1, backgroundColor: '#14a39a', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
              Check Attendance
            </button>

            <button onClick={handleReset} style={{ flex: 1, backgroundColor: '#f3f4f6', color: '#374151', border: 'none', padding: '0.75rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Result Panel */}
      {showResult && (
        <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#0f172a', color: '#fff', padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 0 }}>RESULT PANEL SHOWS</h3>

          <p style={{ margin: '0.5rem 0' }}><strong>Employee Name:</strong> {employeeName}</p>
          <p style={{ margin: '0.5rem 0' }}><strong>Time In:</strong> {timeIn}</p>
          <p style={{ margin: '0.5rem 0' }}><strong>Attendance Status:</strong> {status}</p>
          <p style={{ margin: '0.5rem 0' }}><strong>Follow-up Message:</strong> {message}</p>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);

  const handleCheckPassword = () => {
    const length = password.length;

    if (length === 0) {
      setResult({
        status: 'Empty',
        message: 'Please enter a password.',
        strengthText: '',
        color: '#6b7280' // Gray
      });
      return;
    }

    let status = '';
    let strengthText = '';
    let color = '';

    if (length < 6) {
      status = 'Weak Password';
    } else if (length >= 6 && length <= 9) {
      status = 'Medium Password';
    } else {
      status = 'Strong Password';
    }

    if (length >= 10) {
      strengthText = 'Status: Strong – You can use this password.';
      color = '#22c55e'; // Green
    } else {
      strengthText = 'Status: Weak – Create a stronger password.';
      color = length < 6 ? '#ef4444' : '#f59e0b'; // Red for <6, Orange for 6-9
    }

    setResult({
      status,
      message: strengthText,
      color
    });
  };

  const handleClear = () => {
    setPassword('');
    setResult(null);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f0f4f9', minHeight: '100vh' }}>
      {/* UI Component Card */}
      <div style={{ maxWidth: '400px', margin: '0 auto 2rem', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div style={{ backgroundColor: '#4f46e5', color: '#fff', padding: '1.5rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Password Strength Checker</h2>
          <p style={{ margin: '0.25rem 0 0', opacity: 0.8, fontSize: '0.875rem' }}>Activity 3</p>
        </div>

        <div style={{ padding: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
          />
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
            Character count: {password.length}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button
              onClick={handleCheckPassword}
              style={{ flex: 1, backgroundColor: '#4f46e5', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
            >
              Check Password
            </button>
            <button
              onClick={handleClear}
              style={{ flex: 1, backgroundColor: '#f3f4f6', color: '#374151', border: 'none', padding: '0.75rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Result Panel */}
      {result && (
        <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#0f172a', color: '#fff', padding: '1.5rem', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 0 }}>
            RESULT PANEL SHOWS
          </h3>
          <p style={{ margin: '0.5rem 0' }}><strong>Password Status:</strong> {result.status}</p>
          <p style={{ margin: '0.5rem 0' }}><strong>Strength message:</strong> {result.message}</p>
          
          <div style={{ marginTop: '1rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Visual strength indicator: </span>
            <div style={{ height: '8px', width: '100%', backgroundColor: '#334155', borderRadius: '4px', marginTop: '0.5rem', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: password.length === 0 ? '0%' : password.length >= 10 ? '100%' : password.length >= 6 ? '66%' : '33%', backgroundColor: result.color, transition: 'all 0.3s' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
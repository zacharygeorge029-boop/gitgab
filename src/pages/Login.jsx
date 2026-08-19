import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() && !password.trim()) {
      setMessage('Please enter username and password.');
      return;
    }

    if (username === 'admin' && password === '1234') {
      setMessage('Login successful!');
      setLoggedInUser(username);
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser('');
    setMessage('');
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Header Section */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ 
            width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem' 
          }}>
            1
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Activity 1</span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>Login Authentication</h1>
          </div>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.95rem', fontStyle: 'italic', margin: '0.25rem 0 0 0' }}>
          Username + password form with validation and a logged-in state.
        </p>
      </div>

      {/* Main Interactive Box */}
      <div style={{ 
        backgroundColor: '#ffffff', borderRadius: '16px', padding: '2rem', 
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', marginBottom: '1.5rem' 
      }}>
        {!isLoggedIn ? (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '400px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.375rem' }}>Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter username"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.375rem' }}>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </div>

            <button type="submit" style={{ 
              padding: '0.75rem', backgroundColor: '#2563eb', color: '#fff', border: 'none', 
              borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', transition: 'background 0.2s' 
            }}>
              Login
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'left', padding: '1rem 0', maxWidth: '400px' }}>
            <p style={{ fontSize: '1.35rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Welcome, {loggedInUser}!</p>
            <button onClick={handleLogout} style={{ 
              padding: '0.75rem 1.5rem', backgroundColor: '#ef4444', color: '#fff', border: 'none', 
              borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' 
            }}>
              Logout
            </button>
          </div>
        )}

        {message && (
          <div style={{ 
            marginTop: '1.5rem', maxWidth: '400px',
            padding: '0.875rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '500',
            backgroundColor: message === 'Login successful!' ? '#dcfce7' : '#fee2e2', 
            color: message === 'Login successful!' ? '#166534' : '#991b1b',
            border: `1px solid ${message === 'Login successful!' ? '#bbf7d0' : '#fecaca'}`
          }}>
            {message}
          </div>
        )}
      </div>

      {/* Demonstrates Footer Bar */}
      <div style={{ 
        backgroundColor: '#f1f5f9', borderRadius: '12px', padding: '1.25rem 1.5rem', 
        display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', border: '1px solid #e2e8f0' 
      }}>
        <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#334155', letterSpacing: '0.05em' }}>DEMONSTRATES</span>
        <div style={{ display: 'flex', gap: '0.50rem', flexWrap: 'wrap' }}>
          {['useState', 'Form events', 'Validation', 'if / else', 'Conditional rendering'].map((tag, idx) => (
            <span key={idx} style={{ 
              backgroundColor: '#ffffff', color: '#0f172a', padding: '0.35rem 0.85rem', 
              borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', border: '1px solid #cbd5e1',
              boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
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
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#0f172a' }}>Activity 1: Login Authentication</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#475569', marginBottom: '0.25rem' }}>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter username"
              style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#475569', marginBottom: '0.25rem' }}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password"
              style={{ width: '100%', padding: '0.625rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.875rem' }}
            />
          </div>

          <button type="submit" className="card-button" style={{ marginTop: '0.5rem' }}>
            Login
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0f172a' }}>Welcome, {loggedInUser}!</p>
          <button onClick={handleLogout} className="card-button" style={{ marginTop: '1rem', backgroundColor: '#ef4444' }}>
            Logout
          </button>
        </div>
      )}

      {message && (
        <div style={{ 
          marginTop: '1.25rem', 
          padding: '0.75rem', 
          borderRadius: '6px', 
          fontSize: '0.875rem',
          fontWeight: '500',
          backgroundColor: message === 'Login successful!' ? '#dcfce7' : '#fee2e2', 
          color: message === 'Login successful!' ? '#166534' : '#991b1b',
          textAlign: 'center'
        }}>
          {message}
        </div>
      )}
    </div>
  );
}
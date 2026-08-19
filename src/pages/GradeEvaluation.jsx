import React, { useState } from 'react';

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState(null);

  const evaluateGrade = () => {
    const num = parseFloat(score);
    if (!studentName.trim() || isNaN(num)) {
      alert('Please enter a valid student name and numeric score.');
      return;
    }

    let remarks = '';
    let isError = false;

    if (num < 0 || num > 100) { 
      remarks = 'Invalid score'; 
      isError = true; 
    }
    else if (num >= 90) remarks = 'Excellent';
    else if (num >= 85) remarks = 'Very Good';
    else if (num >= 80) remarks = 'Good';
    else if (num >= 75) remarks = 'Passed';
    else { 
      remarks = 'Failed'; 
      isError = true; 
    }

    setResult({ name: studentName, score: num, remarks, isError });
  };

  const clearForm = () => {
    setStudentName('');
    setScore('');
    setResult(null);
  };

  return (
    <>
      <style>{`
        .vercel-eval-container {
          --bg-main: #fafafa;
          --bg-card: #ffffff;
          --bg-invert: #000000;
          --text-main: #111111;
          --text-muted: #666666;
          --text-invert: #ffffff;
          --border: #eaeaea;
          --radius-lg: 12px;
          --radius-sm: 6px;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          
          background-color: var(--bg-main);
          color: var(--text-main);
          font-family: var(--font-sans);
          min-height: 100vh;
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          -webkit-font-smoothing: antialiased;
        }
        .v-content { max-width: 1100px; width: 100%; }
        
        .v-header { margin-bottom: 3rem; }
        .v-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; background-color: var(--text-main); color: var(--bg-card);
          border-radius: 50%; font-weight: 600; font-size: 0.875rem; margin-right: 0.75rem;
        }
        .v-title { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.04em; margin: 1rem 0 0.5rem 0; }
        .v-subtitle { color: var(--text-muted); font-size: 1rem; margin: 0; }

        .v-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
        
        .v-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; }
        .v-card-invert { background: var(--bg-invert); color: var(--text-invert); border: 1px solid var(--bg-invert); }
        
        .v-card-title { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin: 0 0 2rem 0; color: var(--text-muted); }
        .v-card-invert .v-card-title { color: #888; }

        .v-input-group { margin-bottom: 1.5rem; }
        .v-label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; color: var(--text-main); }
        .v-input {
          width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: var(--radius-sm);
          font-size: 0.875rem; transition: border-color 0.2s ease; box-sizing: border-box; background: var(--bg-card); color: var(--text-main);
        }
        .v-input:focus { outline: none; border-color: var(--text-main); }

        .v-btn-primary {
          width: 100%; background: var(--text-main); color: var(--bg-card); border: 1px solid var(--text-main);
          padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 500; cursor: pointer; margin-bottom: 0.75rem; transition: background 0.2s ease;
        }
        .v-btn-primary:hover { background: #333; }
        
        .v-btn-secondary {
          width: 100%; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border);
          padding: 0.75rem; border-radius: var(--radius-sm); font-weight: 500; cursor: pointer; transition: border-color 0.2s ease;
        }
        .v-btn-secondary:hover { border-color: var(--text-main); }

        .v-condition-row { display: flex; justify-content: space-between; font-size: 0.875rem; padding: 0.75rem 0; border-bottom: 1px solid var(--border); }
        .v-condition-row:last-child { border-bottom: none; }

        .v-result-item { margin-bottom: 1.5rem; }
        .v-result-label { font-size: 0.75rem; color: #888; margin-bottom: 0.25rem; display: block; }
        .v-result-value { font-size: 1.25rem; font-weight: 500; }
        .v-status-error { color: #ff4040; }
        .v-status-success { color: #0070f3; }

        .v-tags {
          margin-top: 2rem; padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border);
          border-radius: var(--radius-lg); display: flex; align-items: center; gap: 1rem; overflow-x: auto;
        }
        .v-tag-label { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); }
        .v-tag { font-size: 0.75rem; padding: 0.25rem 0.75rem; background: var(--bg-main); border: 1px solid var(--border); border-radius: 99px; white-space: nowrap; }
      `}</style>

      <div className="vercel-eval-container">
        <div className="v-content">
          
          <header className="v-header">
            <div><span className="v-badge">2</span></div>
            <h1 className="v-title">Student Grade Evaluation</h1>
            <p className="v-subtitle">Evaluate a score into Excellent → Failed, with range validation.</p>
          </header>

          <div className="v-grid">
            {/* Inputs Panel */}
            <div className="v-card">
              <h3 className="v-card-title">Inputs & Buttons</h3>
              <div className="v-input-group">
                <label className="v-label">Student Name</label>
                <input 
                  type="text" 
                  className="v-input" 
                  value={studentName} 
                  onChange={(e) => setStudentName(e.target.value)} 
                  placeholder="e.g. John Doe" 
                />
              </div>
              <div className="v-input-group">
                <label className="v-label">Score</label>
                <input 
                  type="number" 
                  className="v-input" 
                  value={score} 
                  onChange={(e) => setScore(e.target.value)} 
                  placeholder="0 - 100" 
                />
              </div>
              <button onClick={evaluateGrade} className="v-btn-primary">Evaluate</button>
              <button onClick={clearForm} className="v-btn-secondary">Clear</button>
            </div>

            {/* Conditions Panel */}
            <div className="v-card">
              <h3 className="v-card-title">Conditions</h3>
              <div className="v-condition-row"><span>90 — 100</span><span>Excellent</span></div>
              <div className="v-condition-row"><span>85 — 89</span><span>Very Good</span></div>
              <div className="v-condition-row"><span>80 — 84</span><span>Good</span></div>
              <div className="v-condition-row"><span>75 — 79</span><span>Passed</span></div>
              <div className="v-condition-row"><span>Below 75</span><span>Failed</span></div>
              <div className="v-condition-row" style={{ marginTop: '1rem' }}>
                <span>&lt; 0 or &gt; 100</span>
                <span style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Invalid score</span>
              </div>
            </div>

            {/* Results Panel */}
            <div className="v-card v-card-invert">
              <h3 className="v-card-title">Result Panel Shows</h3>
              <div className="v-result-item">
                <span className="v-result-label">Student Name</span>
                <span className="v-result-value">{result?.name || '—'}</span>
              </div>
              <div className="v-result-item">
                <span className="v-result-label">Score</span>
                <span className="v-result-value">{result?.score ?? '—'}</span>
              </div>
              <div className="v-result-item">
                <span className="v-result-label">Remarks</span>
                <span className={`v-result-value ${result?.isError ? 'v-status-error' : 'v-status-success'}`}>
                  {result?.remarks || '—'}
                </span>
              </div>
            </div>
          </div>

          {/* Footer Concepts */}
          <div className="v-tags">
            <span className="v-tag-label">Demonstrates</span>
            <span className="v-tag">useState</span>
            <span className="v-tag">onChange</span>
            <span className="v-tag">onClick</span>
            <span className="v-tag">Input validation</span>
            <span className="v-tag">if / else if</span>
            <span className="v-tag">Conditional rendering</span>
          </div>

        </div>
      </div>
    </>
  );
}
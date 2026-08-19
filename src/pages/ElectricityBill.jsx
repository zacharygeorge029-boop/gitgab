import { useState } from 'react';

export default function ElectricityBill() {
  const [customerName, setCustomerName] = useState('');
  const [consumption, setConsumption] = useState('');
  const [result, setResult] = useState(null);

  const calculateBill = () => {
    const kwh = parseFloat(consumption);
    if (!customerName.trim() || isNaN(kwh) || kwh < 0) {
      alert('Please enter a valid customer name and a positive consumption value.');
      return;
    }

    let rate = 0;

    if (kwh <= 100) {
      rate = 10;
    } else if (kwh <= 200) {
      rate = 12;
    } else if (kwh <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = kwh * rate;
    const isHigh = totalBill >= 5000;
    const usageStatus = isHigh ? 'High Electricity Usage' : 'Normal Electricity Usage';

    setResult({
      name: customerName,
      consumption: kwh,
      rateApplied: rate,
      total: totalBill,
      status: usageStatus,
      isHigh: isHigh
    });
  };

  const clearForm = () => {
    setCustomerName('');
    setConsumption('');
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
            <div><span className="v-badge">4</span></div>
            <h1 className="v-title">Electricity Bill Calculator</h1>
            <p className="v-subtitle">Compute a bill from kWh consumption across tiered rates.</p>
          </header>

          <div className="v-grid">
            {/* Inputs Panel */}
            <div className="v-card">
              <h3 className="v-card-title">Inputs & Buttons</h3>
              <div className="v-input-group">
                <label className="v-label">Customer Name</label>
                <input 
                  type="text" 
                  className="v-input" 
                  value={customerName} 
                  onChange={(e) => setCustomerName(e.target.value)} 
                  placeholder="e.g. Jane Doe" 
                />
              </div>
              <div className="v-input-group">
                <label className="v-label">Consumption (kWh)</label>
                <input 
                  type="number" 
                  className="v-input" 
                  value={consumption} 
                  onChange={(e) => setConsumption(e.target.value)} 
                  placeholder="0" 
                />
              </div>
              <button onClick={calculateBill} className="v-btn-primary">Calculate Bill</button>
              <button onClick={clearForm} className="v-btn-secondary">Clear</button>
            </div>

            {/* Conditions Panel */}
            <div className="v-card">
              <h3 className="v-card-title">Conditions</h3>
              <div className="v-condition-row"><span>0 — 100 kWh</span><span>₱10 per kWh</span></div>
              <div className="v-condition-row"><span>101 — 200 kWh</span><span>₱12 per kWh</span></div>
              <div className="v-condition-row"><span>201 — 300 kWh</span><span>₱15 per kWh</span></div>
              <div className="v-condition-row"><span>Above 300 kWh</span><span>₱18 per kWh</span></div>
              <div className="v-condition-row" style={{ marginTop: '1rem' }}><span>Bill ≥ ₱5,000</span><span style={{ color: 'var(--text-muted)' }}>High Usage</span></div>
              <div className="v-condition-row"><span>Bill &lt; ₱5,000</span><span style={{ color: 'var(--text-muted)' }}>Normal Usage</span></div>
            </div>

            {/* Results Panel */}
            <div className="v-card v-card-invert">
              <h3 className="v-card-title">Result Panel Shows</h3>
              <div className="v-result-item">
                <span className="v-result-label">Customer Name</span>
                <span className="v-result-value">{result?.name || '—'}</span>
              </div>
              <div className="v-result-item">
                <span className="v-result-label">Consumption</span>
                <span className="v-result-value">{result ? `${result.consumption} kWh` : '—'}</span>
              </div>
              <div className="v-result-item">
                <span className="v-result-label">Rate Applied</span>
                <span className="v-result-value">{result ? `₱${result.rateApplied}.00` : '—'}</span>
              </div>
              <div className="v-result-item">
                <span className="v-result-label">Total Bill</span>
                <span className="v-result-value">{result ? `₱${result.total.toLocaleString(undefined, {minimumFractionDigits: 2})}` : '—'}</span>
              </div>
              <div className="v-result-item">
                <span className="v-result-label">Usage Status</span>
                <span className={`v-result-value ${result?.isHigh ? 'v-status-error' : 'v-status-success'}`}>
                  {result?.status || '—'}
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
            <span className="v-tag">Numeric input</span>
            <span className="v-tag">Calculations</span>
            <span className="v-tag">Multiple conditions</span>
          </div>

        </div>
      </div>
    </>
  );
}
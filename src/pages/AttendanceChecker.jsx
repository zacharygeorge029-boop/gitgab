import React, { useState } from "react";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const checkAttendance = () => {
    if (employeeName.trim() === "") {
      setError("Please enter the employee name.");
      setShowResult(false);
      return;
    }

    if (timeIn === "" || isNaN(timeIn)) {
      setError("Please enter a valid numeric time.");
      setShowResult(false);
      return;
    }

    const time = Number(timeIn);

    if (time < 0 || time > 24) {
      setError("Please enter a time between 0 and 24.");
      setShowResult(false);
      return;
    }

    setError("");

    if (time <= 8) {
      setStatus("On Time");
      setMessage("Status: On Time – Good job!");
    } else if (time <= 9) {
      setStatus("Late");
      setMessage("Status: Late – Please be on time tomorrow.");
    } else {
      setStatus("Very Late");
      setMessage("Status: Very Late – Report to your supervisor.");
    }

    setShowResult(true);
  };

  const resetAttendance = () => {
    setEmployeeName("");
    setTimeIn("");
    setStatus("");
    setMessage("");
    setError("");
    setShowResult(false);
  };

  return (
    <div className="page-container">
      <h2>Activity 5: Employee Attendance Checker</h2>

      <div>
        <label>Employee Name</label>
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter employee name"
        />
      </div>

      <div>
        <label>Time In</label>
        <input
          type="number"
          step="0.1"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
          placeholder="Example: 8.5"
        />
      </div>

      <button onClick={checkAttendance}>
        Check Attendance
      </button>

      <button onClick={resetAttendance}>
        Reset
      </button>

      {error && <p>{error}</p>}

      {showResult && (
        <div>
          <h3>Attendance Result</h3>

          <p>
            <strong>Employee Name:</strong> {employeeName}
          </p>

          <p>
            <strong>Time In:</strong> {timeIn}
          </p>

          <p>
            <strong>Attendance Status:</strong> {status}
          </p>

          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default AttendanceChecker;
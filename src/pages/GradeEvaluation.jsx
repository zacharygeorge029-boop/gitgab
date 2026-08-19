import React, { useState } from 'react';

export default function GradeEvaluation() {
  // State for inputs
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  
  // State for results
  const [result, setResult] = useState(null);

  // Evaluation logic
  const evaluateGrade = () => {
    if (!studentName.trim() || score === '') {
      alert('Please enter a student name and score.');
      return;
    }

    const numericScore = parseFloat(score);
    let remarks = '';
    let isError = false;

    // Condition evaluations
    if (numericScore < 0 || numericScore > 100) {
      remarks = 'Invalid score';
      isError = true;
    } else if (numericScore >= 90) {
      remarks = 'Excellent';
    } else if (numericScore >= 85) {
      remarks = 'Very Good';
    } else if (numericScore >= 80) {
      remarks = 'Good';
    } else if (numericScore >= 75) {
      remarks = 'Passed';
    } else {
      remarks = 'Failed';
      isError = true;
    }

    setResult({
      name: studentName,
      score: numericScore,
      remarks: remarks,
      isError: isError
    });
  };

  // Clear logic
  const clearForm = () => {
    setStudentName('');
    setScore('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center font-sans">
      <div className="max-w-6xl w-full">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-sm">
              2
            </div>
            <h2 className="text-indigo-600 font-bold tracking-widest text-sm uppercase">Activity 2</h2>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Student Grade Evaluation</h1>
          <p className="text-slate-500 italic">Evaluate a score into Excellent → Failed, with range validation.</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Panel 1: Inputs & Buttons */}
          <div className="bg-[#eef2fa] p-6 rounded-xl shadow-sm border border-indigo-50">
            <h3 className="text-indigo-600 font-bold mb-6 tracking-wide text-sm">INPUTS & BUTTONS</h3>
            
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-slate-700 mb-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Student Name input
                </label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-slate-700 mb-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Score input
                </label>
                <input 
                  type="number" 
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter score (0-100)"
                />
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={evaluateGrade}
                  className="w-full bg-slate-800 text-white py-2 rounded font-medium hover:bg-slate-700 transition shadow-sm"
                >
                  Evaluate button
                </button>
                <button 
                  onClick={clearForm}
                  className="w-full bg-white text-slate-700 border border-slate-300 py-2 rounded font-medium hover:bg-slate-50 transition shadow-sm"
                >
                  Clear button
                </button>
              </div>
            </div>
          </div>

          {/* Panel 2: Conditions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-indigo-600 font-bold mb-6 tracking-wide text-sm">CONDITIONS</h3>
            
            <div className="space-y-4 text-slate-700">
              <div className="flex justify-between items-center">
                <span className="font-bold">90 — 100</span>
                <span className="text-slate-400">→</span>
                <span>Excellent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">85 — 89</span>
                <span className="text-slate-400">→</span>
                <span>Very Good</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">80 — 84</span>
                <span className="text-slate-400">→</span>
                <span>Good</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">75 — 79</span>
                <span className="text-slate-400">→</span>
                <span>Passed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold">Below 75</span>
                <span className="text-slate-400">→</span>
                <span>Failed</span>
              </div>
              
              <hr className="my-4 border-slate-200" />
              
              <div className="flex justify-between items-center">
                <span className="font-bold">&lt; 0 or &gt; 100</span>
                <span className="text-slate-400">→</span>
                <span className="italic text-slate-500">"Invalid score"</span>
              </div>
            </div>
          </div>

          {/* Panel 3: Result Panel */}
          <div className="bg-[#172033] p-6 rounded-xl shadow-sm text-white">
            <h3 className="text-indigo-300 font-bold mb-6 tracking-wide text-sm">RESULT PANEL SHOWS</h3>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm mb-1">› Student Name</span>
                <span className="font-medium text-lg">{result ? result.name : '---'}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm mb-1">› Score</span>
                <span className="font-medium text-lg">{result ? result.score : '---'}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm mb-1">› Remarks</span>
                <span className={`font-medium text-2xl ${
                  !result 
                    ? 'text-white' 
                    : result.isError 
                      ? 'text-red-400' 
                      : 'text-green-400'
                }`}>
                  {result ? result.remarks : '---'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer / Concepts Bar */}
        <div className="mt-8 bg-[#eef2fa] p-4 rounded-xl flex items-center gap-4 overflow-x-auto text-sm shadow-sm border border-indigo-50">
          <span className="text-indigo-600 font-bold tracking-wide mr-2">DEMONSTRATES</span>
          <span className="bg-white px-3 py-1 rounded-full font-medium text-slate-700 shadow-sm border border-slate-100 whitespace-nowrap">useState</span>
          <span className="bg-white px-3 py-1 rounded-full font-medium text-slate-700 shadow-sm border border-slate-100 whitespace-nowrap">onChange</span>
          <span className="bg-white px-3 py-1 rounded-full font-medium text-slate-700 shadow-sm border border-slate-100 whitespace-nowrap">onClick / onSubmit</span>
          <span className="bg-white px-3 py-1 rounded-full font-medium text-slate-700 shadow-sm border border-slate-100 whitespace-nowrap">Input validation</span>
          <span className="bg-white px-3 py-1 rounded-full font-medium text-slate-700 shadow-sm border border-slate-100 whitespace-nowrap">if / else if / else</span>
          <span className="bg-white px-3 py-1 rounded-full font-medium text-slate-700 shadow-sm border border-slate-100 whitespace-nowrap">Conditional rendering</span>
        </div>

      </div>
    </div>
  );
}
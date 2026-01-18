import React from "react";
import "./FacultyDashboard.css";

const FacultyDashboard = () => {
  const students = [
    { name: "Jayant", readiness: 80 },
    { name: "Ananya", readiness: 65 },
    { name: "Jaspreet", readiness: 45 },
  ];

  return (
    <div className="faculty-container">
      <h1>Faculty Dashboard</h1>

      {/* Faculty Info */}
      <div className="card">
        <h2>Prof. Manju Khosla</h2>
        <p>Department: Computer Science</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <h3>120</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>72</h3>
          <p>Internship Ready</p>
        </div>
      </div>

      {/* Student List */}
      <div className="card">
        <h3>Student Progress</h3>

        {students.map((student, index) => (
          <div key={index} className="student-row">
            <span>{student.name}</span>
            <span
              className={
                student.readiness >= 70
                  ? "ready"
                  : student.readiness >= 50
                  ? "average"
                  : "low"
              }
            >
              {student.readiness}%
            </span>
          </div>
        ))}
      </div>

      <button className="button">View Detailed Report</button>
    </div>
  );
};

export default FacultyDashboard;
import React from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const student = {
    name: "Ishani Gora",
    year: "3rd Year",
    branch: "Computer Science Engineering",
    skills: ["Flutter", "HTML", "CSS", "JavaScript"],
    readiness: 70,
    nextSkill: "Node.js",
  };

  return (
    <div className="container">
      <h1>Student Skill Dashboard</h1>

      <div className="card">
        <h2>{student.name}</h2>
        <p>{student.year} | {student.branch}</p>
      </div>

      <div className="card">
        <h3>Skills Learned</h3>
        {student.skills.map((skill, i) => (
          <span key={i} className="skill">{skill}</span>
        ))}
      </div>

      <div className="card">
        <h3>Internship Readiness</h3>
        <div className="progress">
          <div className="fill" style={{ width: `${student.readiness}%` }}>
            {student.readiness}%
          </div>
        </div>
      </div>

      <div className="card">
        <h3>AI Suggested Skill</h3>
        <strong>{student.nextSkill}</strong>
      </div>

      <button className="button">Update Skills</button>
    </div>
  );
};

export default StudentDashboard;
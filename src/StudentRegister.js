import { useState } from "react";
import "./StudentRegister.css";

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    year: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/students/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const data = await res.json();
  alert(data.message);
};


  return (
    <div className="container">
      <h1>Student Registration</h1>
      <p className="subtitle">Create a new student account</p>

      <div className="card form-card">
  <form onSubmit={handleSubmit} className="form-grid">

    <div className="form-group">
      <label>Full Name</label>
      <input
        name="name"
        placeholder="Enter full name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Email Address</label>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Department</label>
      <input
        name="department"
        placeholder="e.g. CSE, IT"
        value={formData.department}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group full-width">
      <label>Year</label>
      <select
        name="year"
        value={formData.year}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
        <option value="4">4th Year</option>
      </select>
    </div>

    <div className="full-width">
      <button type="submit" className="button">
        Register Student
      </button>
    </div>

  </form>
      </div>
    </div>
  );
}

export default StudentRegister;
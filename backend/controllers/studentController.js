const bcrypt = require("bcryptjs");

const registerStudent = async (req, res) => {
  const { name, email, password, department, year } = req.body;

  // basic validation
  if (!name || !email || !password || !department || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // hashed password
  const hashedPassword = await bcrypt.hash(password, 10);

  res.status(201).json({
    message: "Student registered successfully",
    student: {
      name,
      email,
      department,
      year
    }
  });
};

module.exports = { registerStudent };
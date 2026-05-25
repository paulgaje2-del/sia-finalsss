const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// SAMPLE DATABASE
let users = [];
let students = [];
let attendance = [];

/*
=================================
HOME
=================================
*/

app.get("/", (req, res) => {
  res.json({
    message: "SmartAttend Backend Running"
  });
});

/*
=================================
REGISTER
=================================
*/

app.post("/register", (req, res) => {

  const user = req.body;

  users.push(user);

  res.json({
    message: "User Registered",
    data: user
  });

});

/*
=================================
LOGIN
=================================
*/

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {

    return res.json({
      message: "Invalid Login"
    });

  }

  res.json({
    message: "Login Success",
    user
  });

});

/*
=================================
ADD STUDENT
=================================
*/

app.post("/students", (req, res) => {

  const student = req.body;

  students.push(student);

  res.json({
    message: "Student Added",
    data: student
  });

});

/*
=================================
GET STUDENTS
=================================
*/

app.get("/students", (req, res) => {

  res.json(students);

});

/*
=================================
MARK ATTENDANCE
=================================
*/

app.post("/attendance", (req, res) => {

  const record = req.body;

  attendance.push(record);

  res.json({
    message: "Attendance Recorded",
    data: record
  });

});

/*
=================================
GET ATTENDANCE
=================================
*/

app.get("/attendance", (req, res) => {

  res.json(attendance);

});

/*
=================================
SERVER
=================================
*/

app.listen(5000, () => {

  console.log("Server running on port 5000");

});
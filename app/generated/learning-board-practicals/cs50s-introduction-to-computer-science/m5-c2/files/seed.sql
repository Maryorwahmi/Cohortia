-- seed.sql: create and populate a small demo DB for SELECT practice
PRAGMA foreign_keys = OFF;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS courses;

CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT,
  major TEXT
);

CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  title TEXT,
  department TEXT,
  credits INTEGER
);

-- students: id, name, major
INSERT INTO students (id, name, major) VALUES (1, 'Alice Smith', 'Computer Science');
INSERT INTO students (id, name, major) VALUES (2, 'Bob Johnson', 'Mathematics');
INSERT INTO students (id, name, major) VALUES (3, 'Charlie Brown', NULL);
INSERT INTO students (id, name, major) VALUES (4, 'David Lee', 'Computer Science');

-- courses: id, title, department, credits
INSERT INTO courses (id, title, department, credits) VALUES (101, 'Introduction to Databases', 'Computer Science', 3);
INSERT INTO courses (id, title, department, credits) VALUES (102, 'Calculus I', 'Mathematics', 4);
INSERT INTO courses (id, title, department, credits) VALUES (103, 'Art History 101', 'Fine Arts', 3);
INSERT INTO courses (id, title, department, credits) VALUES (104, 'Advanced Algorithms', 'Computer Science', 5);

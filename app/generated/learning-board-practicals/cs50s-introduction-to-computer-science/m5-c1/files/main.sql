PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  credits INTEGER NOT NULL CHECK(credits BETWEEN 1 AND 6)
);
INSERT INTO courses (title, department, credits) VALUES ('Introduction to Databases', 'Computer Science', 3);
INSERT INTO courses (title, department, credits) VALUES ('Calculus I', 'Mathematics', 4);
INSERT INTO courses (title, department, credits) VALUES ('Art History 101', 'Fine Arts', 3);
SELECT id, title, department, credits FROM courses ORDER BY id;

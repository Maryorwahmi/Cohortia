-- starter.sql: creates a courses table and inserts example rows
PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS courses;

CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  credits INTEGER NOT NULL
);

INSERT INTO courses(id, title, department, credits) VALUES
  (101, 'Introduction to Databases', 'Computer Science', 3),
  (102, 'Calculus I', 'Mathematics', 4),
  (103, 'Art History I', 'Fine Arts', 3),
  (104, 'Advanced Algorithms', 'Computer Science', 5);

-- Save: run `sqlite3 courses.db < starter.sql` to initialize the database.

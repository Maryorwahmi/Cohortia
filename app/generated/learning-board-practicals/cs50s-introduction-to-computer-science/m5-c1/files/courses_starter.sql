-- Starter SQL: creates 'courses' table and inserts three sample rows
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    credits INTEGER NOT NULL CHECK(credits >= 1 AND credits <= 6)
);

INSERT INTO courses (title, department, credits) VALUES ('Introduction to Databases', 'Computer Science', 3);
INSERT INTO courses (title, department, credits) VALUES ('Calculus I', 'Mathematics', 4);
INSERT INTO courses (title, department, credits) VALUES ('Art History 101', 'Fine Arts', 3);

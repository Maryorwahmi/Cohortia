-- queries.sql: starter queries and commented tasks for you to edit & run
-- 1: Observe baseline data
SELECT * FROM students;

SELECT * FROM courses;

-- 1. Select the title and department of all courses that have 3 credits.
-- Replace the commented line below (remove the leading --) and run it.
-- SELECT title, department FROM courses WHERE credits = 3;

-- 2. Find the name of all students whose major is 'Computer Science' and whose id is less than or equal to 3.
-- SELECT name FROM students WHERE major = 'Computer Science' AND id <= 3;

-- 3. Retrieve all columns for courses whose title contains the word 'Introduction'.
-- SELECT * FROM courses WHERE title LIKE '%Introduction%';

-- 4. List the name and major of all students, ordered alphabetically by major and then by name in descending order.
-- SELECT name, major FROM students ORDER BY major ASC, name DESC;

-- 5. Find the top 2 courses with the highest credits value.
-- SELECT title, credits FROM courses ORDER BY credits DESC LIMIT 2;

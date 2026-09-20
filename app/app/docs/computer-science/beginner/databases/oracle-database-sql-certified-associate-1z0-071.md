---
title: Oracle Database SQL Certified Associate (1Z0-071)
course_id: oracle-database-sql-certified-associate-1z0-071
provider: Cohortia
original_reference: Oracle / Online
platform: Cohortia
level: Beginner
type: Certificate
duration: Exam
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Computer Science
subcategory: Databases
skills: SQL, DDL, DML, joins, subqueries
source_catalog: docs/computer-science/catalog-courses-by-subcategory.json
ownership_note: Cohortia curates and rebuilds content to provide an enhanced learning experience and does not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to the Cohortia course designed to prepare you for the Oracle Database SQL Certified Associate (1Z0-071) exam. This comprehensive program is meticulously crafted to equip you with the foundational knowledge and practical skills required to effectively query and manage data in an Oracle database environment. SQL, or Structured Query Language, is the universal language for interacting with relational databases, and mastering it is a critical skill for anyone aspiring to a career in data analysis, database administration, software development, or business intelligence. This course focuses specifically on the Oracle dialect of SQL, which is widely used in enterprise-level applications globally.

Throughout this course, we will embark on a journey from the very basics of relational database concepts to advanced SQL techniques. You will learn how to retrieve data using various `SELECT` statement clauses, filter and sort results, manipulate data with `INSERT`, `UPDATE`, and `DELETE` statements, and define database structures using Data Definition Language (DDL). A strong emphasis will be placed on understanding how to combine data from multiple tables using different types of joins, and how to write complex queries using subqueries and set operators. We will also delve into important topics like data integrity, transaction control, and basic object management within the Oracle database.

Our approach is hands-on, encouraging you to practice with real SQL commands and scenarios that mirror those you'll encounter in the 1Z0-071 exam and in professional settings. Each module builds progressively, ensuring a solid understanding of core concepts before moving on to more complex topics. By the end of this course, you will not only be well-prepared to sit for the Oracle 1Z0-071 certification exam but will also possess a robust skillset in SQL that is directly applicable to real-world database challenges, making you a more valuable asset in any technology-driven role.

This Cohortia course is ideal for beginners with little to no prior database experience, as well as developers, analysts, and administrators looking to validate or refresh their SQL skills specifically for the Oracle platform. We believe in learning by doing, and our curriculum is designed to foster a deep, practical understanding of SQL rather than just theoretical knowledge. Join us to unlock the power of data and take a significant step forward in your professional development.

Upon successful completion of this course, you will be able to:
*   Understand the fundamentals of relational databases and the role of SQL.
*   Construct basic and advanced `SELECT` statements to retrieve data from single and multiple tables.
*   Filter and sort query results using `WHERE` and `ORDER BY` clauses, and apply various single-row functions.
*   Utilize group functions to summarize data and combine data from multiple tables using different types of joins (INNER, OUTER, SELF).
*   Write complex queries using subqueries (single-row, multiple-row, correlated) and set operators (`UNION`, `INTERSECT`, `MINUS`).
*   Perform Data Manipulation Language (DML) operations: `INSERT`, `UPDATE`, `DELETE`, and manage transactions using `COMMIT` and `ROLLBACK`.
*   Define, modify, and drop database objects like tables, views, and sequences using Data Definition Language (DDL).
*   Implement data integrity constraints and understand basic object privileges and security concepts in Oracle SQL.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations of Relational Databases and SQL | 3 |
| 2 | Retrieving Data with the SELECT Statement | 3 |
| 3 | Filtering, Sorting, and Single-Row Functions | 4 |
| 4 | Aggregating Data and Joining Multiple Tables | 4 |
| 5 | Advanced Queries: Subqueries and Set Operators | 5 |
| 6 | Data Manipulation and Definition Language | 5 |

Total chapters: 24
---

## Module 1: Foundations of Relational Databases and SQL

This module introduces you to the fundamental concepts of relational databases and the Structured Query Language (SQL). You'll understand why databases are essential for modern applications, explore the core components of a relational database, and begin your journey with SQL, specifically in the context of Oracle Database. By the end of this module, you'll have a solid understanding of how data is organized and how to retrieve basic information using SQL `SELECT` statements, laying the groundwork for more complex queries.

### Chapter 1.1 — Introduction to Relational Databases and SQL

#### Learning objectives
*   Define what a database is and explain its importance in data management.
*   Describe the key characteristics of a relational database, including tables, rows, columns, and relationships.
*   Explain the role of SQL as the standard language for interacting with relational databases.
*   Identify the core components of an Oracle Database system and its client-server architecture.
*   Understand the fundamental differences between DDL, DML, DCL, and TCL SQL commands.

#### Detailed lesson content
Welcome to the foundational module of your journey to becoming an Oracle Database SQL Certified Associate! Before we dive into writing SQL queries, it's crucial to understand the landscape we'll be working in: databases, specifically relational databases, and the Oracle ecosystem. At its core, a database is an organized collection of structured information, or data, typically stored electronically in a computer system. It's designed to efficiently store, retrieve, manage, and update data. Think of it as a highly sophisticated digital filing cabinet that can handle vast amounts of information, ensuring its integrity, security, and availability. Without databases, modern applications like online banking, e-commerce sites, social media platforms, and even simple contact lists wouldn't be possible. They are the backbone of almost every digital service we use daily.

Among the various types of databases, the relational database model is by far the most prevalent and widely used, especially in enterprise environments. Developed by Edgar F. Codd at IBM in the 1970s, the relational model organizes data into one or more tables (also known as relations). Each table is composed of rows (records or tuples) and columns (attributes or fields). A row represents a single, complete set of related data, while a column represents a specific attribute of the data. For instance, in an `EMPLOYEES` table, each row might represent a single employee, and columns would store attributes like `employee_id`, `first_name`, `last_name`, `hire_date`, and `salary`. The power of the relational model lies in its ability to establish relationships between these tables using common columns, known as keys. A primary key uniquely identifies each row in a table, while a foreign key establishes a link between data in two tables, enforcing referential integrity. This structured approach ensures data consistency and reduces redundancy.

To interact with these powerful relational databases, we use a specialized language called SQL, or Structured Query Language. SQL is the standard language for managing and manipulating relational databases. It's not a general-purpose programming language like Python or Java, but rather a declarative language specifically designed for database operations. With SQL, you can create databases and tables, insert data, retrieve specific information, update existing records, and delete data. It provides a consistent and powerful way for applications and users to communicate with the database management system (DBMS). While SQL is an ANSI/ISO standard, different database vendors (like Oracle, MySQL, SQL Server, PostgreSQL) implement their own extensions and slight variations. Our focus will be on Oracle's specific implementation, which adheres closely to the SQL standard but also offers powerful proprietary features.

Oracle Database is one of the most robust, scalable, and widely used relational database management systems (RDBMS) in the world. It's renowned for its performance, reliability, and comprehensive feature set, making it a cornerstone for mission-critical enterprise applications. An Oracle Database system typically operates on a client-server architecture. The database server, often running on a powerful machine, manages the actual data files, processes SQL requests, and ensures data integrity and security. Client applications (like SQL Developer, SQL*Plus, or custom applications) connect to this server, send SQL statements, and receive results. This separation allows multiple clients to access the same data concurrently and centralizes data management, simplifying administration and improving security.

SQL commands can be broadly categorized into four main types, each serving a distinct purpose:
1.  **Data Definition Language (DDL):** These commands are used to define, modify, or delete database objects like tables, indexes, and users. Examples include `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`.
2.  **Data Manipulation Language (DML):** These commands are used to manage data within database objects. Examples include `INSERT`, `UPDATE`, `DELETE`, and the fundamental `SELECT` statement.
3.  **Data Control Language (DCL):** These commands deal with permissions and access control. Examples include `GRANT` and `REVOKE` privileges to users.
4.  **Transaction Control Language (TCL):** These commands manage transactions within the database, ensuring data consistency. Examples include `COMMIT`, `ROLLBACK`, and `SAVEPOINT`.

Throughout this course, our primary focus will be on DML, particularly the `SELECT` statement, as it's fundamental to retrieving information, and DDL for understanding table structures. Understanding these categories helps you grasp the different ways you can interact with and manage data within an Oracle Database. As you progress, you'll see how these commands combine to form powerful data management solutions.

#### Key concepts
*   **Database:** An organized collection of structured information, typically stored electronically, designed for efficient storage, retrieval, and management of data.
*   **Relational Database:** A database model that organizes data into tables (relations) with rows (records) and columns (attributes), establishing relationships between tables using keys.
*   **Table (Relation):** A collection of related data organized into rows and columns within a relational database.
*   **Row (Record/Tuple):** A single, complete set of related data within a table.
*   **Column (Attribute/Field):** A specific category of data within a table, defining the type of information stored.
*   **Primary Key:** A column or set of columns that uniquely identifies each row in a table.
*   **Foreign Key:** A column or set of columns in one table that refers to the primary key in another table, establishing a relationship.
*   **SQL (Structured Query Language):** The standard language used to interact with and manage relational databases.
*   **Oracle Database:** A powerful, scalable, and widely used relational database management system (RDBMS) from Oracle Corporation.
*   **Client-Server Architecture:** A computing model where client applications request services from a central server, commonly used by databases.
*   **DDL (Data Definition Language):** SQL commands for defining and managing database objects (e.g., `CREATE`, `ALTER`, `DROP`).
*   **DML (Data Manipulation Language):** SQL commands for managing data within database objects (e.g., `SELECT`, `INSERT`, `UPDATE`, `DELETE`).
*   **DCL (Data Control Language):** SQL commands for managing database permissions (e.g., `GRANT`, `REVOKE`).
*   **TCL (Transaction Control Language):** SQL commands for managing database transactions (e.g., `COMMIT`, `ROLLBACK`).

#### Hands-on activity
**Activity: Exploring a Sample Database Schema**

While we won't be writing SQL just yet, this activity will help you visualize the concepts of tables, rows, columns, primary keys, and foreign keys using a common sample schema.

1.  **Review the HR Schema:** Oracle often uses a sample "HR" schema (Human Resources) for teaching purposes. Imagine this schema contains the following tables:
    *   `EMPLOYEES`: Stores employee details.
    *   `DEPARTMENTS`: Stores department details.
    *   `JOBS`: Stores job title details.
    *   `LOCATIONS`: Stores location details.
    *   `COUNTRIES`: Stores country details.
    *   `REGIONS`: Stores region details.

2.  **Identify Columns and Keys:** For the `EMPLOYEES` table, consider these columns:
    *   `employee_id` (Number)
    *   `first_name` (Varchar2)
    *   `last_name` (Varchar2)
    *   `email` (Varchar2)
    *   `phone_number` (Varchar2)
    *   `hire_date` (Date)
    *   `job_id` (Varchar2)
    *   `salary` (Number)
    *   `commission_pct` (Number)
    *   `manager_id` (Number)
    *   `department_id` (Number)

    *Self-reflection:*
    *   Which column would most likely be the primary key for the `EMPLOYEES` table?
    *   Which columns in `EMPLOYEES` might be foreign keys, linking to other tables like `DEPARTMENTS` or `JOBS`?
    *   If the `DEPARTMENTS` table has `department_id` (PK) and `department_name`, how would it relate to `EMPLOYEES`?
    *   If the `JOBS` table has `job_id` (PK) and `job_title`, how would it relate to `EMPLOYEES`?

This exercise helps solidify your understanding of how data is structured and interconnected in a relational database before you even write your first query.

#### Assessment idea
1.  **Question:** Which of the following best describes the primary purpose of a foreign key in a relational database?
    a) To uniquely identify each row within a table.
    b) To establish a link between data in two different tables.
    c) To define the data type of a column.
    d) To speed up data retrieval operations.

    **Correct Answer:** b) To establish a link between data in two different tables.
    **Explanation:** A foreign key is a column or set of columns that refers to the primary key in another table, thereby establishing a relationship and enforcing referential integrity between the two tables. Option (a) describes a primary key, (c) describes data types, and (d) describes indexes.

2.  **Question:** You need to create a new table in your Oracle Database to store customer information. Which category of SQL commands would you use for this operation?
    a) DML (Data Manipulation Language)
    b) DCL (Data Control Language)
    c) DDL (Data Definition Language)
    d) TCL (Transaction Control Language)

    **Correct Answer:** c) DDL (Data Definition Language)
    **Explanation:** DDL commands are used to define or modify the structure of database objects. `CREATE TABLE` is a DDL command used to create new tables. DML is for data content, DCL for permissions, and TCL for transaction management.

#### AI generation note
Create a 12-minute animated video explaining relational database concepts. Start with an analogy of a physical filing system, then transition to digital tables, rows, and columns. Visually demonstrate primary and foreign keys using two simple tables (e.g., `Customers` and `Orders`) with connecting lines. Briefly introduce SQL as the "language" for these databases. Show a simplified diagram of Oracle's client-server architecture. Conclude with a clear, concise summary of DDL, DML, DCL, and TCL with one example command for each, using text overlays. Ensure high-contrast visuals and captions for accessibility.

---

### Chapter 1.2 — Connecting to an Oracle Database and Basic SELECT Statements

#### Learning objectives
*   Understand the common tools used to connect to an Oracle Database.
*   Execute basic `SELECT` statements to retrieve data from a single table.
*   Differentiate between selecting all columns using `*` and specifying individual columns.
*   Apply the `DISTINCT` keyword to retrieve unique values from a column.
*   Perform simple arithmetic operations on retrieved data and assign column aliases.

#### Detailed lesson content
Now that we have a foundational understanding of relational databases and SQL, it's time to get hands-on and start interacting with an Oracle Database. The first step in any database operation is establishing a connection. For the Oracle Database SQL Certified Associate exam, and indeed for most real-world scenarios, you'll primarily use tools like SQL Developer or SQL*Plus. SQL Developer is a free, graphical tool provided by Oracle that offers a rich interface for developing and managing databases. It simplifies connection management, query execution, and schema browsing. SQL*Plus, on the other hand, is a command-line interface (CLI) tool that comes with the Oracle client installation. While less visually intuitive, it's powerful, lightweight, and often preferred for scripting and automated tasks. For this course, we'll primarily demonstrate using SQL Developer due to its user-friendly nature, but the SQL commands you learn are universal. To connect, you typically need the database server's hostname or IP address, the port number (default is 1521), the service name or SID (System Identifier), and valid user credentials (username and password). Once connected, you'll have a session open to the database, ready to issue SQL commands.

The most fundamental and frequently used SQL command is the `SELECT` statement. Its purpose is to retrieve data from one or more tables in the database. It's the cornerstone of data querying. The simplest form of a `SELECT` statement involves specifying the columns you want to retrieve and the table from which to retrieve them. For instance, if you want to see all the data in the `EMPLOYEES` table, you can use the asterisk (`*`) wildcard:

```sql
SELECT *
FROM employees;
```

This command instructs the database to return all columns and all rows from the `employees` table. While convenient for quick inspection, using `SELECT *` is generally discouraged in production code or for large tables. It can retrieve unnecessary data, consuming more network bandwidth and database resources, and can lead to issues if the table schema changes (e.g., new columns are added).

A more precise and efficient approach is to explicitly list the columns you need. This practice improves readability, performance, and makes your queries more robust to schema changes. For example, to retrieve only the `first_name`, `last_name`, and `salary` of employees:

```sql
SELECT first_name, last_name, salary
FROM employees;
```

Notice that column names are separated by commas. The order in which you list the columns in the `SELECT` clause is the order in which they will appear in the result set. This allows you to tailor the output precisely to your reporting or application needs.

Sometimes, you might encounter duplicate values in a column, and you only want to see the unique occurrences. The `DISTINCT` keyword comes to the rescue here. When placed immediately after `SELECT` and before the column name(s), `DISTINCT` eliminates duplicate rows from the result set. For example, to find all unique job IDs present in the `employees` table:

```sql
SELECT DISTINCT job_id
FROM employees;
```

If you specify multiple columns with `DISTINCT`, the database considers the combination of values across all specified columns to determine uniqueness. For instance, `SELECT DISTINCT department_id, job_id FROM employees;` would return unique pairs of department and job IDs, not just unique department IDs or unique job IDs individually.

SQL also allows you to perform arithmetic operations directly within the `SELECT` statement. You can use standard arithmetic operators: `+` (addition), `-` (subtraction), `*` (multiplication), and `/` (division). This is incredibly useful for calculating derived values, such as an employee's annual salary (monthly salary * 12) or a bonus amount. For example, to calculate an employee's annual salary:

```sql
SELECT first_name, last_name, salary * 12
FROM employees;
```

The result of an arithmetic expression will typically appear with a default, often unhelpful, column header (e.g., `SALARY*12`). To make the output more readable, you can assign a temporary name, or an **alias**, to a column or an expression using the `AS` keyword. This alias is only valid for the duration of the query.

```sql
SELECT first_name, last_name, salary * 12 AS annual_salary
FROM employees;
```

You can also use aliases for original column names, though it's less common unless you need to rename a column for clarity in a specific report. If your alias contains spaces or special characters, you must enclose it in double quotes:

```sql
SELECT first_name AS "Employee First Name", last_name AS "Employee Last Name", salary * 12 AS "Annual Salary"
FROM employees;
```

**Common Mistakes & Safety Notes:**
*   **Forgetting `FROM` clause:** A `SELECT` statement almost always requires a `FROM` clause to specify the table.
*   **Misspelling column/table names:** SQL is case-insensitive for keywords (SELECT, FROM) but often case-sensitive for object names (table, column names) depending on the database configuration. In Oracle, object names are typically stored in uppercase unless created with double quotes, so `SELECT first_name FROM employees;` is generally safer than `SELECT First_Name FROM Employees;` if you're unsure of the exact casing.
*   **Using `DISTINCT` with too many columns:** While powerful, `DISTINCT` can be resource-intensive on very large datasets, especially if applied to many columns, as it needs to compare all combinations to find unique rows. Use it judiciously.
*   **Division by zero:** Be cautious with division (`/`) operations. If a column used as the divisor contains zero, it will result in an error. Oracle provides functions like `NULLIF` or `DECODE` to handle such scenarios gracefully, which you'll learn later.

Mastering these basic `SELECT` statements is your first crucial step in effectively querying an Oracle Database.

#### Key concepts
*   **SQL Developer:** A free, graphical integrated development environment (IDE) from Oracle for developing and managing databases.
*   **SQL*Plus:** A command-line interface (CLI) tool for interacting with Oracle Databases.
*   **`SELECT` statement:** The fundamental SQL command used to retrieve data from one or more tables.
*   **`*` (Asterisk):** A wildcard character used in the `SELECT` clause to retrieve all columns from a table.
*   **`DISTINCT` keyword:** Used in the `SELECT` clause to eliminate duplicate rows from the result set, returning only unique values.
*   **Arithmetic Operators:** Symbols (`+`, `-`, `*`, `/`) used to perform mathematical calculations on numeric data within a `SELECT` statement.
*   **Column Alias:** A temporary, alternative name given to a column or an expression in the result set of a query, typically using the `AS` keyword.

#### Hands-on activity
**Activity: Basic Employee Data Retrieval**

Using your SQL Developer or SQL*Plus environment (or a web-based SQL sandbox if provided), connect to a sample Oracle database (e.g., the HR schema).

1.  **Retrieve All Employee Data:**
    ```sql
    SELECT *
    FROM employees;
    ```
    *Observe the number of columns and rows returned.*

2.  **Retrieve Specific Employee Details:**
    ```sql
    SELECT employee_id, first_name, last_name, email, hire_date
    FROM employees;
    ```
    *Compare the output to the previous query. Note the reduced number of columns.*

3.  **Find Unique Job Titles:**
    ```sql
    SELECT DISTINCT job_id
    FROM employees;
    ```
    *How many unique job IDs are there?*

4.  **Calculate Monthly Salary and Annual Salary:**
    Assume `salary` column stores monthly salary.
    ```sql
    SELECT first_name, last_name, salary, salary * 12 AS "Annual Salary"
    FROM employees;
    ```
    *Review the `Annual Salary` column. What happens if you omit the `AS` keyword? Try it.*

This activity will give you direct experience with the most basic and essential SQL queries.

#### Assessment idea
1.  **Question:** You want to retrieve the `department_id` and `location_id` for all departments, but you only want to see unique combinations of these two values. Which of the following SQL statements would achieve this?
    a) `SELECT department_id, DISTINCT location_id FROM departments;`
    b) `SELECT DISTINCT department_id, location_id FROM departments;`
    c) `SELECT DISTINCT department_id FROM departments, location_id;`
    d) `SELECT department_id, location_id FROM departments UNIQUE;`

    **Correct Answer:** b) `SELECT DISTINCT department_id, location_id FROM departments;`
    **Explanation:** The `DISTINCT` keyword applies to all columns listed after it. When multiple columns are specified, `DISTINCT` considers the combination of values across all those columns to determine uniqueness. Option (a) is syntactically incorrect, (c) attempts to use `DISTINCT` on only one column while also having an incorrect `FROM` clause for this purpose, and (d) uses a non-standard `UNIQUE` keyword.

2.  **Question:** An employee's `salary` is stored as a monthly amount. You need to display the employee's `first_name`, `last_name`, and their calculated `quarterly_salary` (salary * 3). The `quarterly_salary` column should be labeled "Quarterly Earnings". Which SQL statement correctly accomplishes this?
    a) `SELECT first_name, last_name, salary * 3 AS "Quarterly Earnings" FROM employees;`
    b) `SELECT first_name, last_name, salary * 3 FROM employees AS "Quarterly Earnings";`
    c) `SELECT first_name, last_name, "Quarterly Earnings" = salary * 3 FROM employees;`
    d) `SELECT first_name, last_name, (salary * 3) AS Quarterly Earnings FROM employees;`

    **Correct Answer:** a) `SELECT first_name, last_name, salary * 3 AS "Quarterly Earnings" FROM employees;`
    **Explanation:** The `AS` keyword is used to assign an alias to a column or expression. If the alias contains spaces, it must be enclosed in double quotes. Option (b) incorrectly tries to alias the table, (c) uses an incorrect assignment syntax, and (d) would result in a syntax error because `Quarterly Earnings` is not enclosed in quotes, making `Earnings` an unrecognized keyword.

#### AI generation note
Create a 10-minute live coding video demonstrating SQL Developer. Show how to establish a new connection to a local Oracle XE instance (or a provided cloud instance). Then, walk through executing `SELECT * FROM employees;`, `SELECT first_name, salary FROM employees;`, `SELECT DISTINCT job_id FROM employees;`, and `SELECT first_name, salary * 12 AS "Annual Comp" FROM employees;`. Use a split-screen view with SQL Developer on the left and the query results on the right. Highlight common mistakes like forgetting `FROM` or misspellings and show the error messages. Include a mini-quiz with two multiple-choice questions about `DISTINCT` and column aliasing.

---

### Chapter 1.3 — Filtering Data with the WHERE Clause

#### Learning objectives
*   Construct `SELECT` statements using the `WHERE` clause to filter rows based on specified conditions.
*   Utilize comparison operators (`=`, `!=`, `<`, `>`, `<=`, `>=`) to define filtering criteria.
*   Combine multiple conditions using logical operators (`AND`, `OR`, `NOT`).
*   Apply special operators such as `BETWEEN`, `IN`, `LIKE`, and `IS NULL` for more advanced filtering.
*   Understand operator precedence in complex `WHERE` clauses and use parentheses to control evaluation order.

#### Detailed lesson content
While `SELECT` statements allow us to retrieve data, often we don't need *all* the data from a table. We need to find specific records that meet certain criteria. This is where the `WHERE` clause becomes indispensable. The `WHERE` clause is used to filter the rows returned by a `SELECT` statement, allowing you to specify conditions that each row must satisfy to be included in the result set. It comes immediately after the `FROM` clause. For example, to find all employees whose `department_id` is 90:

```sql
SELECT employee_id, first_name, last_name, department_id
FROM employees
WHERE department_id = 90;
```

The `WHERE` clause uses **comparison operators** to evaluate conditions. These operators allow you to compare a column's value against another value or expression.
*   `=` (Equal to)
*   `!=` or `<>` (Not equal to)
*   `<` (Less than)
*   `>` (Greater than)
*   `<=` (Less than or equal to)
*   `>=` (Greater than or equal to)

When comparing string values, remember that they are typically case-sensitive in Oracle unless your database or session is configured otherwise. It's good practice to be explicit. For example, to find employees whose job ID is 'IT_PROG':

```sql
SELECT first_name, last_name, job_id
FROM employees
WHERE job_id = 'IT_PROG';
```
Note the single quotes around string literals. Numeric values do not require quotes. Dates also require single quotes and often a specific format or conversion function.

Often, a single condition isn't enough. You might need to filter based on multiple criteria. This is achieved using **logical operators**: `AND`, `OR`, and `NOT`.
*   **`AND`:** Returns `TRUE` if *all* conditions separated by `AND` are `TRUE`.
    ```sql
    SELECT first_name, last_name, department_id, salary
    FROM employees
    WHERE department_id = 90 AND salary > 10000;
    ```
    This query retrieves employees in department 90 *and* earning more than 10,000.
*   **`OR`:** Returns `TRUE` if *any* of the conditions separated by `OR` is `TRUE`.
    ```sql
    SELECT first_name, last_name, department_id, salary
    FROM employees
    WHERE department_id = 90 OR department_id = 60;
    ```
    This query retrieves employees in department 90 *or* department 60.
*   **`NOT`:** Negates a condition.
    ```sql
    SELECT first_name, last_name, department_id
    FROM employees
    WHERE NOT department_id = 90;
    ```
    This is equivalent to `WHERE department_id != 90;` or `WHERE department_id <> 90;`. `NOT` can also be used with other operators, e.g., `NOT LIKE`.

Beyond basic comparisons, SQL provides several **special operators** for more flexible filtering:
*   **`BETWEEN ... AND ...`:** Used to test if a value falls within a specified range (inclusive).
    ```sql
    SELECT first_name, last_name, salary
    FROM employees
    WHERE salary BETWEEN 8000 AND 12000; -- Includes 8000 and 12000
    ```
*   **`IN (...)`:** Used to test if a value matches any value in a list of values. It's a concise way to write multiple `OR` conditions.
    ```sql
    SELECT first_name, last_name, job_id
    FROM employees
    WHERE job_id IN ('IT_PROG', 'SA_REP', 'AD_VP');
    ```
    This is equivalent to `WHERE job_id = 'IT_PROG' OR job_id = 'SA_REP' OR job_id = 'AD_VP';`.
*   **`LIKE`:** Used for pattern matching with wildcards.
    *   `%` (percent sign): Matches any sequence of zero or more characters.
    *   `_` (underscore): Matches any single character.
    ```sql
    SELECT first_name, last_name
    FROM employees
    WHERE first_name LIKE 'S%'; -- Finds names starting with 'S'
    ```
    ```sql
    SELECT first_name, last_name
    FROM employees
    WHERE last_name LIKE '_a%'; -- Finds names with 'a' as the second letter
    ```
    You can also use `NOT LIKE` to find values that *do not* match a pattern.
*   **`IS NULL` / `IS NOT NULL`:** Used to test for `NULL` values. `NULL` represents the absence of data, and it cannot be compared using `=` or `!=`.
    ```sql
    SELECT first_name, last_name, commission_pct
    FROM employees
    WHERE commission_pct IS NULL; -- Finds employees without a commission
    ```
    ```sql
    SELECT first_name, last_name, commission_pct
    FROM employees
    WHERE commission_pct IS NOT NULL; -- Finds employees with a commission
    ```

When combining multiple logical and special operators, it's important to understand **operator precedence**. SQL evaluates operators in a specific order:
1.  Arithmetic operators (`*`, `/`, `+`, `-`)
2.  Comparison operators (`=`, `!=`, `>`, etc.)
3.  `NOT`
4.  `AND`
5.  `OR`

If you have a complex `WHERE` clause, you can use **parentheses `()`** to override the default precedence and explicitly control the order of evaluation. This is a crucial safety measure to ensure your queries return the intended results. For instance:

```sql
-- Without parentheses (AND evaluated first):
-- (department_id = 90 AND salary > 10000) OR job_id = 'IT_PROG'
SELECT first_name, last_name, department_id, salary, job_id
FROM employees
WHERE department_id = 90 AND salary > 10000 OR job_id = 'IT_PROG';

-- With parentheses (OR evaluated first for departments, then AND with salary):
-- department_id = 90 OR (salary > 10000 AND job_id = 'IT_PROG')
SELECT first_name, last_name, department_id, salary, job_id
FROM employees
WHERE (department_id = 90 OR department_id = 60) AND salary > 8000;
```
In the second example, the parentheses ensure that we first identify employees in either department 90 or 60, and *then* from that filtered set, we select those with a salary greater than 8000. Without parentheses, the `AND` would bind more tightly, potentially leading to an unintended result. Always use parentheses for clarity in complex conditions.

**Common Mistakes & Safety Notes:**
*   **Using `=` with `NULL`:** A very common mistake is `WHERE column = NULL`. This will never return any rows because `NULL` cannot be equated to anything, not even another `NULL`. Always use `IS NULL` or `IS NOT NULL`.
*   **Incorrect string casing:** Remember string comparisons are often case-sensitive. If you expect 'IT_PROG' but the data is 'it_prog', your query might not find it. Use functions like `UPPER()` or `LOWER()` if you need case-insensitive matching (e.g., `WHERE UPPER(job_id) = 'IT_PROG'`).
*   **Misunderstanding `AND` vs. `OR`:** Carefully consider if you need *all* conditions to be true (`AND`) or *any* condition to be true (`OR`). Misuse is a frequent source of incorrect query results.
*   **Forgetting `WHERE`:** Without a `WHERE` clause, the `SELECT` statement will return *all* rows, which can be very slow and resource-intensive on large tables. Always start with a `WHERE` clause if you only need a subset of data.
*   **Wildcard misuse with `LIKE`:** Make sure your `LIKE` patterns are precise. `WHERE name LIKE '%smith%'` will find 'John Smith' and 'Smithers', but also 'Goldsmith'. Be specific with `%` and `_`.

Mastering the `WHERE` clause is critical for precise data retrieval and forms the backbone of almost all useful SQL queries.

#### Key concepts
*   **`WHERE` clause:** A clause in a `SELECT` statement used to filter rows based on specified conditions.
*   **Comparison Operators:** Symbols used to compare values (`=`, `!=`/`<>`, `<`, `>`, `<=`, `>=`).
*   **Logical Operators:** Keywords used to combine or negate conditions (`AND`, `OR`, `NOT`).
*   **`BETWEEN ... AND ...`:** Special operator to test if a value falls within an inclusive range.
*   **`IN (...)`:** Special operator to test if a value matches any value in a list.
*   **`LIKE`:** Special operator for pattern matching using wildcards (`%` for zero or more characters, `_` for a single character).
*   **`IS NULL` / `IS NOT NULL`:** Special operators to test for the presence or absence of `NULL` values.
*   **`NULL`:** Represents the absence of data in a database.
*   **Operator Precedence:** The order in which SQL evaluates operators in a complex expression.
*   **Parentheses `()`:** Used to override default operator precedence and explicitly control the order of evaluation.

#### Hands-on activity
**Activity: Filtering Employee Data**

Continue using your SQL Developer or SQL*Plus environment with the HR schema.

1.  **Employees in a Specific Department:**
    Find all employees in department 50.
    ```sql
    SELECT employee_id, first_name, last_name, department_id
    FROM employees
    WHERE department_id = 50;
    ```

2.  **High-Earning Sales Representatives:**
    Find employees whose `job_id` is 'SA_REP' (Sales Representative) AND whose `salary` is greater than 9000.
    ```sql
    SELECT first_name, last_name, job_id, salary
    FROM employees
    WHERE job_id = 'SA_REP' AND salary > 9000;
    ```

3.  **Employees Hired in a Specific Year:**
    Find employees hired between January 1, 2005, and December 31, 2007.
    ```sql
    SELECT first_name, last_name, hire_date
    FROM employees
    WHERE hire_date BETWEEN '01-JAN-2005' AND '31-DEC-2007';
    ```
    *(Note: Oracle date formats can vary. 'DD-MON-YYYY' is a common default. Be mindful of your session's `NLS_DATE_FORMAT`.)*

4.  **Employees with No Commission:**
    Find employees who do not receive a commission.
    ```sql
    SELECT first_name, last_name, commission_pct
    FROM employees
    WHERE commission_pct IS NULL;
    ```

5.  **Employees with 'e' as the Second Letter in their First Name:**
    ```sql
    SELECT first_name, last_name
    FROM employees
    WHERE first_name LIKE '_e%';
    ```

Experiment with different combinations of `AND`, `OR`, and parentheses to see how the results change.

#### Assessment idea
1.  **Question:** You need to retrieve the `first_name`, `last_name`, and `salary` of all employees who work in `department_id` 80 OR have a `job_id` of 'IT_PROG', AND whose `salary` is less than 7000. Which of the following queries correctly applies the conditions and operator precedence?
    a) `SELECT first_name, last_name, salary FROM employees WHERE department_id = 80 OR job_id = 'IT_PROG' AND salary < 7000;`
    b) `SELECT first_name, last_name, salary FROM employees WHERE (department_id = 80 OR job_id = 'IT_PROG') AND salary < 7000;`
    c) `SELECT first_name, last_name, salary FROM employees WHERE department_id = 80 AND salary < 7000 OR job_id = 'IT_PROG';`
    d) `SELECT first_name, last_name, salary FROM employees WHERE department_id = 80 OR (job_id = 'IT_PROG' AND salary < 7000);`

    **Correct Answer:** b) `SELECT first_name, last_name, salary FROM employees WHERE (department_id = 80 OR job_id = 'IT_PROG') AND salary < 7000;`
    **Explanation:** The requirement is for employees who are *either* in department 80 *or* are 'IT_PROG', and *then* from that group, their salary must be less than 7000. This means the `OR` condition must be evaluated first, and then its result combined with the `AND` condition. Parentheses `()` explicitly group the `OR` conditions, ensuring they are evaluated before the `AND` condition, which has higher default precedence. Option (a) and (c) would incorrectly apply `AND` before `OR` due to precedence. Option (d) groups `job_id = 'IT_PROG'` with `salary < 7000`, which is not what the question asks for (the salary condition applies to *all* employees in the initial `OR` group).

2.  **Question:** An HR manager wants a list of employees whose `last_name` starts with 'K' and has at least 5 letters in total, or employees whose `commission_pct` is not assigned (i.e., is `NULL`). Which SQL query would correctly retrieve this information?
    a) `SELECT first_name, last_name, commission_pct FROM employees WHERE last_name LIKE 'K____%' OR commission_pct = NULL;`
    b) `SELECT first_name, last_name, commission_pct FROM employees WHERE last_name LIKE 'K____%' AND commission_pct IS NULL;`
    c) `SELECT first_name, last_name, commission_pct FROM employees WHERE last_name LIKE 'K____%' OR commission_pct IS NULL;`
    d) `SELECT first_name, last_name, commission_pct FROM employees WHERE last_name LIKE 'K%' AND LENGTH(last_name) >= 5 OR commission_pct IS NULL;`

    **Correct Answer:** c) `SELECT first_name, last_name, commission_pct FROM employees WHERE last_name LIKE 'K____%' OR commission_pct IS NULL;`
    **Explanation:**
    *   The condition "starts with 'K' and has at least 5 letters" is correctly represented by `last_name LIKE 'K____%'` (`K` + four underscores for the next four characters + `%` for any remaining characters).
    *   The condition "commission_pct is not assigned" means `commission_pct IS NULL`.
    *   The two conditions are combined with `OR` as requested by "or employees whose...".
    *   Option (a) incorrectly uses `commission_pct = NULL`, which will never return true.
    *   Option (b) incorrectly uses `AND` instead of `OR`.
    *   Option (d) uses `LENGTH()` which is a function and not part of `LIKE` pattern matching for length, and while it might work, the `LIKE 'K____%'` is the more direct and standard way to express "starts with K and has at least 5 letters" using wildcards.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Start by introducing the `WHERE` clause and comparison operators. Demonstrate filtering for `department_id = 80`, `salary > 10000`, and `hire_date < '01-JAN-2007'`. Then, introduce `AND` and `OR` with examples like `department_id = 80 AND salary > 10000`. Show the impact of parentheses by demonstrating `(condition1 OR condition2) AND condition3` versus `condition1 OR condition2 AND condition3`. Conclude by showing examples of `BETWEEN`, `IN`, `LIKE` (with `%` and `_`), and `IS NULL`. Use a split-screen view with SQL Developer on the left and a text editor on the right showing the query and expected output. Include a coding exercise where learners modify a given query to filter for specific conditions using multiple operators.
---

## Module 2: Retrieving Data with the SELECT Statement

**Module 2: Retrieving Data with the SELECT Statement**
**Goal:** Master the fundamental `SELECT` statement to query and retrieve data from single tables in an Oracle database, including column selection, basic filtering, and sorting.

### Chapter 2.1 — The Basic SELECT Statement and Column Selection

#### Learning objectives
*   Construct basic `SELECT` statements to retrieve all columns or specific columns from a table.
*   Apply column aliases to improve the readability of query results.
*   Utilize the `DISTINCT` keyword to eliminate duplicate rows from query output.
*   Understand the role of the `DUAL` table for simple calculations and system queries.

#### Detailed lesson content
Welcome to the core of SQL! The `SELECT` statement is arguably the most frequently used command in database interaction, serving as your primary tool for retrieving data. Think of it as asking your database a question, and the `SELECT` statement is how you phrase that question to get the specific answers you need. At its simplest, you can ask to see all data from a table. For instance, if you have an `employees` table, you can retrieve every piece of information about every employee using `SELECT * FROM employees;`. The asterisk (`*`) is a wildcard character, signifying "all columns." While convenient for quick exploration or small tables, it's often not recommended for production queries or large tables due to potential performance overhead and retrieving unnecessary data.

A more precise and generally preferred approach is to explicitly list the columns you wish to retrieve. This not only makes your query more efficient by only fetching relevant data but also makes your query's intent clearer to anyone reading it. For example, to see just the first name, last name, and email of employees, you would write `SELECT first_name, last_name, email FROM employees;`. Notice that column names are separated by commas. The order in which you list the columns in your `SELECT` statement is the order in which they will appear in your result set, giving you control over the presentation of your data. This explicit selection is crucial for building robust applications and reports, ensuring that your data structure remains consistent even if new columns are added to the underlying table.

To enhance the readability of your query results, especially when column names are cryptic or need to be presented differently in a report, you can use column aliases. An alias gives a temporary, alternative name to a column in the result set without changing the actual column name in the database. You can define an alias using the `AS` keyword, like `SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees;`. If your alias contains spaces or special characters, or if you want it to be case-sensitive, you must enclose it in double quotation marks. Otherwise, the `AS` keyword is optional, and you can simply put the alias after the column name, e.g., `SELECT first_name "First Name" FROM employees;`. However, explicitly using `AS` is often considered good practice for clarity.

Another powerful feature for refining your query results is the `DISTINCT` keyword. Sometimes, your queries might return duplicate rows, particularly when you're selecting only a subset of columns from a table where the full rows are unique but the selected columns might not be. For example, if you want to see all the unique job IDs present in your `employees` table, simply selecting `job_id` might return multiple instances of the same job ID if several employees share that role. To get a list of only the unique job IDs, you would use `SELECT DISTINCT job_id FROM employees;`. The `DISTINCT` keyword applies to all selected columns, meaning it will return unique combinations of the specified columns. If you were to say `SELECT DISTINCT department_id, job_id FROM employees;`, it would return unique pairs of department and job IDs. A common mistake is to think `DISTINCT` applies only to the first column listed; remember, it considers the entire row of selected columns.

Finally, it's worth introducing the `DUAL` table in Oracle. This is a special one-row, one-column table that's incredibly useful for performing calculations, retrieving system values, or testing SQL functions without needing to access a "real" data table. For example, to see the current date and time, you could query `SELECT SYSDATE FROM DUAL;`. Or, to perform a simple arithmetic calculation, you might write `SELECT 10 * 5 AS Result FROM DUAL;`. While it might seem trivial, `DUAL` is a fundamental utility in Oracle SQL for many administrative and testing tasks, and you'll encounter it frequently in examples and real-world scenarios. Always remember to terminate your SQL statements with a semicolon (`;`) in Oracle SQL*Plus or SQL Developer, as it signals the end of a command. Forgetting this is a very common beginner mistake!

#### Key concepts
*   **`SELECT` Statement:** The fundamental SQL command used to retrieve data from one or more tables.
*   **Wildcard (`*`):** A special character used in the `SELECT` clause to specify all columns in a table.
*   **Column Alias:** A temporary, alternative name given to a column in the result set to improve readability, defined using `AS` or simply by placing the alias after the column name.
*   **`DISTINCT` Keyword:** Used in the `SELECT` clause to eliminate duplicate rows from the query result, returning only unique combinations of the selected columns.
*   **`FROM` Clause:** Specifies the table(s) from which the data is to be retrieved.
*   **`DUAL` Table:** A special, single-row, single-column table in Oracle used for performing calculations, retrieving system values, or testing SQL functions.

#### Hands-on activity
**Scenario:** You are working with a company's `employees` database. Your task is to extract specific employee information and present it clearly.

**Instructions:**
1.  Connect to your Oracle database.
2.  Retrieve all columns for all employees from the `employees` table.
3.  Retrieve only the `employee_id`, `first_name`, `last_name`, and `salary` columns.
4.  Retrieve the `first_name` and `last_name` columns, but alias them as "Employee First Name" and "Employee Last Name" respectively.
5.  Find all unique `department_id` values from the `employees` table.
6.  Find all unique combinations of `department_id` and `job_id` from the `employees` table.
7.  Use the `DUAL` table to calculate `(150 * 3) + 25` and display the result as "Calculation Result".

**Code Template:**
```sql
-- 1. Retrieve all columns for all employees
SELECT *
FROM employees;

-- 2. Retrieve specific columns
SELECT employee_id, first_name, last_name, salary
FROM employees;

-- 3. Retrieve columns with aliases
SELECT first_name AS "Employee First Name",
       last_name AS "Employee Last Name"
FROM employees;

-- 4. Find unique department IDs
SELECT DISTINCT department_id
FROM employees;

-- 5. Find unique combinations of department and job IDs
SELECT DISTINCT department_id, job_id
FROM employees
ORDER BY department_id, job_id; -- Added ORDER BY for consistent output

-- 6. Use DUAL for calculation
SELECT (150 * 3) + 25 AS "Calculation Result"
FROM DUAL;
```

#### Assessment idea
1.  **Question:** Consider an `orders` table with columns `order_id`, `customer_id`, `order_date`, and `product_id`. Which SQL statement would retrieve a list of all unique `customer_id` values who have placed an order?
    *   A) `SELECT * FROM orders WHERE DISTINCT customer_id;`
    *   B) `SELECT customer_id FROM orders DISTINCT;`
    *   C) `SELECT DISTINCT customer_id FROM orders;`
    *   D) `SELECT UNIQUE customer_id FROM orders;`

    **Correct Answer:** C) `SELECT DISTINCT customer_id FROM orders;`
    **Explanation:** The `DISTINCT` keyword must immediately follow the `SELECT` keyword and applies to the columns listed thereafter. Option A and B have incorrect syntax. Option D uses `UNIQUE`, which is a synonym for `DISTINCT` in some SQL dialects but `DISTINCT` is the standard and preferred keyword in Oracle for this purpose.

2.  **Question:** You execute the following SQL statement: `SELECT employee_id, first_name "Employee Name", salary FROM employees;`. What will be the name of the second column in the result set?
    *   A) `first_name`
    *   B) `Employee Name`
    *   C) `first_name "Employee Name"`
    *   D) `salary`

    **Correct Answer:** B) `Employee Name`
    **Explanation:** The text `"Employee Name"` after `first_name` acts as a column alias. This alias replaces the original column name in the query's output, making the results more user-friendly.

#### AI generation note
Create a 12-minute interactive video tutorial. Begin with a visual explanation of `SELECT *` vs. `SELECT column1, column2` using a sample `employees` table displayed in a grid. Then, perform live coding demonstrations in SQL Developer or SQL*Plus, showing how to select specific columns, apply aliases (with and without `AS`, and with double quotes for spaces), and use `DISTINCT` for single and multiple columns. Include a segment on the `DUAL` table with `SYSDATE` and a simple calculation. Highlight common syntax errors like missing semicolons or incorrect alias quotes. End with a drag-and-drop exercise where learners match SQL clauses to their descriptions.

### Chapter 2.2 — Filtering Data with the WHERE Clause

#### Learning objectives
*   Construct `SELECT` statements that filter rows using the `WHERE` clause.
*   Apply various comparison operators (`=`, `!=`, `<`, `>`, `<=`, `>=`) to specify filter conditions.
*   Combine multiple conditions using logical operators (`AND`, `OR`, `NOT`).
*   Utilize special operators like `BETWEEN`, `IN`, `LIKE`, and `IS NULL` for more complex filtering scenarios.

#### Detailed lesson content
After mastering how to select specific columns, the next crucial step in data retrieval is learning how to filter rows. Rarely do you need *all* the data in a table; more often, you're interested in a specific subset that meets certain criteria. This is where the `WHERE` clause comes into play. The `WHERE` clause immediately follows the `FROM` clause and allows you to specify conditions that each row must satisfy to be included in the query's result set. Think of it as a gatekeeper for your data, letting only the relevant rows pass through. For example, to find all employees whose salary is greater than 5000, you would write `SELECT first_name, last_name, salary FROM employees WHERE salary > 5000;`.

The `WHERE` clause uses various operators to define these conditions. The most common are **comparison operators**:
*   `=` (Equal to)
*   `!=` or `<>` (Not equal to)
*   `<` (Less than)
*   `>` (Greater than)
*   `<=` (Less than or equal to)
*   `>=` (Greater than or equal to)

When comparing strings, remember that string literals must be enclosed in single quotation marks (e.g., `'Sales'`). Comparisons are generally case-sensitive in Oracle for string data unless the database or session is configured otherwise. For example, `WHERE job_id = 'IT_PROG'` would only match 'IT_PROG', not 'it_prog'. A common mistake is to use double quotes for string literals; double quotes are reserved for object names (like aliases) in Oracle.

Beyond simple comparisons, you often need to combine multiple conditions. This is achieved using **logical operators**:
*   `AND`: Both conditions must be true. `WHERE salary > 5000 AND department_id = 60;` would find employees earning more than 5000 *and* belonging to department 60.
*   `OR`: At least one of the conditions must be true. `WHERE department_id = 60 OR department_id = 90;` would find employees in either department 60 *or* department 90.
*   `NOT`: Negates a condition. `WHERE NOT department_id = 60;` is equivalent to `WHERE department_id != 60;`. `NOT` can also be used with other operators, e.g., `WHERE NOT (salary BETWEEN 3000 AND 5000);`.

Understanding operator precedence is vital when combining multiple conditions. `AND` typically has higher precedence than `OR`. This means `WHERE A AND B OR C` is evaluated as `(WHERE A AND B) OR C`. If you intend `WHERE A AND (B OR C)`, you must use parentheses to explicitly define the order of evaluation. Parentheses are your friends for clarity and correctness in complex `WHERE` clauses.

Oracle SQL also provides several **special operators** for more flexible filtering:
*   `BETWEEN ... AND ...`: Checks if a value falls within a specified range (inclusive). `WHERE salary BETWEEN 3000 AND 5000;` is equivalent to `WHERE salary >= 3000 AND salary <= 5000;`. This is often more readable for range checks.
*   `IN (value1, value2, ...)`: Checks if a value matches any value in a list. `WHERE job_id IN ('IT_PROG', 'SA_REP');` is much cleaner than `WHERE job_id = 'IT_PROG' OR job_id = 'SA_REP';`.
*   `LIKE 'pattern'` and `NOT LIKE 'pattern'`: Used for pattern matching with wildcards.
    *   `%` (percent sign): Matches any sequence of zero or more characters. `WHERE first_name LIKE 'S%';` finds names starting with 'S'. `WHERE last_name LIKE '%en%';` finds names containing 'en'.
    *   `_` (underscore): Matches any single character. `WHERE phone_number LIKE '515.123.____';` finds numbers starting with '515.123.' followed by any four characters.
    *   A common pitfall with `LIKE` is forgetting that it's case-sensitive by default in Oracle. If you need case-insensitive matching, you might need to convert the column to a consistent case using functions like `UPPER()` or `LOWER()` (e.g., `WHERE UPPER(first_name) LIKE 'S%';`).
*   `IS NULL` and `IS NOT NULL`: Used to check for the presence or absence of a `NULL` value. `NULL` represents missing or unknown data and cannot be compared using standard comparison operators like `=` or `!=`. `WHERE commission_pct IS NULL;` finds employees without a commission. `WHERE manager_id IS NOT NULL;` finds employees who have a manager. A critical safety note: `NULL = NULL` evaluates to `UNKNOWN`, not `TRUE`, so always use `IS NULL` or `IS NOT NULL` when dealing with `NULL` values.

By combining these operators and clauses, you gain immense power to precisely target the data you need, making your queries highly effective and efficient. Practice is key to mastering the nuances of each operator and understanding how they interact within complex `WHERE` clauses.

#### Key concepts
*   **`WHERE` Clause:** A SQL clause used to filter rows based on specified conditions, returning only those rows that satisfy the conditions.
*   **Comparison Operators:** Symbols used to compare values in a `WHERE` clause (e.g., `=`, `!=`, `<`, `>`).
*   **Logical Operators:** Keywords used to combine or negate multiple conditions (`AND`, `OR`, `NOT`).
*   **`BETWEEN ... AND ...`:** A special operator that checks if a value falls within an inclusive range.
*   **`IN (list)`:** A special operator that checks if a value matches any value in a provided list.
*   **`LIKE 'pattern'`:** A special operator used for pattern matching with wildcards (`%` for zero or more characters, `_` for a single character).
*   **`IS NULL` / `IS NOT NULL`:** Special operators used to test for `NULL` (missing or unknown) values, as `NULL` cannot be compared with `=` or `!=`.
*   **Operator Precedence:** The order in which SQL evaluates operators in an expression (e.g., `AND` typically before `OR`).

#### Hands-on activity
**Scenario:** Your HR department needs various reports based on employee data. You will use the `employees` table to generate these filtered lists.

**Instructions:**
1.  Connect to your Oracle database.
2.  Find all employees whose `job_id` is 'IT_PROG'.
3.  Find all employees whose `salary` is between 6000 and 10000 (inclusive).
4.  Find all employees who work in `department_id` 50 or 80.
5.  Find all employees whose `first_name` starts with 'A' and whose `salary` is greater than 7000.
6.  Find all employees who do *not* have a `commission_pct`.
7.  Find all employees whose `last_name` contains the letter 's' (case-insensitive, assume you need to use `UPPER()` for safety).

**Code Template:**
```sql
-- 1. Employees with job_id 'IT_PROG'
SELECT employee_id, first_name, last_name, job_id
FROM employees
WHERE job_id = 'IT_PROG';

-- 2. Employees with salary between 6000 and 10000
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary BETWEEN 6000 AND 10000;

-- 3. Employees in department 50 or 80
SELECT employee_id, first_name, last_name, department_id
FROM employees
WHERE department_id IN (50, 80);

-- 4. Employees whose first_name starts with 'A' AND salary > 7000
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE first_name LIKE 'A%' AND salary > 7000;

-- 5. Employees without a commission_pct
SELECT employee_id, first_name, last_name, commission_pct
FROM employees
WHERE commission_pct IS NULL;

-- 6. Employees whose last_name contains 's' (case-insensitive)
SELECT employee_id, first_name, last_name
FROM employees
WHERE UPPER(last_name) LIKE '%S%';
```

#### Assessment idea
1.  **Question:** Which of the following `WHERE` clauses would correctly identify employees whose `department_id` is either 10, 20, or 30, AND whose `salary` is less than 5000?
    *   A) `WHERE department_id = 10 OR 20 OR 30 AND salary < 5000;`
    *   B) `WHERE department_id IN (10, 20, 30) AND salary < 5000;`
    *   C) `WHERE department_id = 10 OR department_id = 20 OR department_id = 30 AND salary < 5000;`
    *   D) `WHERE (department_id = 10 OR department_id = 20 OR department_id = 30) AND salary < 5000;`

    **Correct Answer:** B) `WHERE department_id IN (10, 20, 30) AND salary < 5000;` and D) `WHERE (department_id = 10 OR department_id = 20 OR department_id = 30) AND salary < 5000;`
    **Explanation:** Both B and D are correct and achieve the same result. Option B is more concise and generally preferred for readability when checking for multiple discrete values. Option D explicitly uses parentheses to manage operator precedence, ensuring the `OR` conditions are evaluated before the `AND` condition, which is crucial for correctness. Option A is syntactically incorrect. Option C, due to operator precedence, would be evaluated as `(department_id = 10) OR (department_id = 20) OR (department_id = 30 AND salary < 5000)`, which is not the intended logic.

2.  **Question:** An employee's `email` column might sometimes be `NULL`. If you want to find all employees who *do not* have an email address recorded, which `WHERE` clause should you use?
    *   A) `WHERE email = NULL;`
    *   B) `WHERE email != NULL;`
    *   C) `WHERE email IS NULL;`
    *   D) `WHERE email IS NOT NULL;`

    **Correct Answer:** C) `WHERE email IS NULL;`
    **Explanation:** In SQL, `NULL` represents an unknown or missing value and cannot be compared using standard equality operators (`=` or `!=`). Any comparison with `NULL` using `=` or `!=` will result in `UNKNOWN`, not `TRUE` or `FALSE`. Therefore, the special operator `IS NULL` must be used to correctly identify rows where a column contains a `NULL` value.

#### AI generation note
Design a 15-minute interactive lab walkthrough. Start by explaining the purpose of the `WHERE` clause with a simple analogy (e.g., a filter on a shopping website). Then, guide learners through a series of progressively complex SQL queries using a live coding environment (like Oracle SQL Developer). Demonstrate each comparison operator, then combine conditions with `AND`, `OR`, and `NOT`, emphasizing operator precedence with parentheses. Conclude by showcasing `BETWEEN`, `IN`, `LIKE` (with `%` and `_`), and `IS NULL`/`IS NOT NULL` using practical examples from the `employees` table. Include a short interactive quiz at the end to test understanding of `NULL` comparisons and operator precedence.

### Chapter 2.3 — Ordering and Limiting Results

#### Learning objectives
*   Sort query results in ascending or descending order using the `ORDER BY` clause.
*   Sort results based on multiple columns, specifying different sorting directions for each.
*   Understand and apply the `OFFSET FETCH` clause to limit the number of rows returned by a query.
*   Identify common mistakes related to sorting and limiting, such as incorrect column references or misinterpreting row numbering.

#### Detailed lesson content
Once you've selected your desired columns and filtered your rows, the next logical step is to arrange your results in a meaningful order. Raw, unsorted data can be difficult to interpret, especially in large datasets. The `ORDER BY` clause is your tool for sorting the output of your `SELECT` statement. It typically comes at the very end of your query, after the `WHERE` clause (if present). By default, `ORDER BY` sorts in ascending order (A-Z for strings, smallest to largest for numbers, oldest to newest for dates). To explicitly specify ascending order, you use the `ASC` keyword; for descending order, you use `DESC`. For instance, to list all employees sorted by their last name alphabetically, you would write `SELECT first_name, last_name FROM employees ORDER BY last_name ASC;`. If you want to see the highest-paid employees first, you'd use `SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC;`.

You're not limited to sorting by a single column. The `ORDER BY` clause allows you to specify multiple columns, creating a multi-level sort. The order in which you list the columns dictates the hierarchy of the sort. For example, `SELECT first_name, last_name, department_id, salary FROM employees ORDER BY department_id ASC, salary DESC;` would first sort all employees by their department ID in ascending order. Then, *within each department*, it would sort employees by their salary in descending order. This means that for employees in the same department, the highest-paid will appear first. You can apply `ASC` or `DESC` independently to each column in the `ORDER BY` list, giving you fine-grained control over your result presentation. A common mistake is to forget that `ASC` is the default, so if you want descending, you *must* specify `DESC`.

In many scenarios, you don't need to retrieve *all* the sorted results; you might only be interested in the top N rows, or a specific page of results. Oracle Database 12c and later versions introduced the standard SQL `OFFSET FETCH` clause, which provides a clean and efficient way to limit the number of rows returned. This is incredibly useful for pagination in applications (e.g., "show me results 11-20"). The `OFFSET` keyword specifies how many rows to skip from the beginning of the result set, and `FETCH NEXT N ROWS ONLY` (or `FETCH FIRST N ROWS ONLY`) specifies how many rows to retrieve after skipping. For example, to get the top 5 highest-paid employees, you'd combine `ORDER BY` with `FETCH`: `SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC FETCH FIRST 5 ROWS ONLY;`.

If you wanted to retrieve the next 5 highest-paid employees (i.e., employees 6 through 10), you would use `OFFSET`: `SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC OFFSET 5 ROWS FETCH NEXT 5 ROWS ONLY;`. This query would skip the first 5 rows (the top 5 highest-paid) and then retrieve the next 5 rows. It's crucial that `OFFSET FETCH` is always used in conjunction with `ORDER BY`. Without `ORDER BY`, the concept of "first" or "next" rows is arbitrary, as the database doesn't guarantee any particular order for unsorted results. Therefore, if you omit `ORDER BY`, the `OFFSET FETCH` results might be inconsistent or unpredictable.

Older versions of Oracle (pre-12c) often used `ROWNUM` pseudocolumn for limiting results, but `OFFSET FETCH` is the modern, standard-compliant, and more flexible approach. While `ROWNUM` can still be used, `OFFSET FETCH` is generally preferred for its clarity and adherence to SQL standards. Always remember the order of clauses: `SELECT` -> `FROM` -> `WHERE` -> `ORDER BY` -> `OFFSET FETCH`. Misplacing these clauses is a frequent syntax error for beginners. Mastering `ORDER BY` and `OFFSET FETCH` allows you to present your data in a structured, digestible, and paginated manner, which is essential for reporting and application development.

#### Key concepts
*   **`ORDER BY` Clause:** A SQL clause used to sort the rows in the result set based on one or more columns.
*   **`ASC` (Ascending):** Keyword used with `ORDER BY` to sort results from lowest to highest (default behavior).
*   **`DESC` (Descending):** Keyword used with `ORDER BY` to sort results from highest to lowest.
*   **Multi-column Sort:** Sorting results based on the values of multiple columns, where the order of columns in the `ORDER BY` clause determines the sorting hierarchy.
*   **`OFFSET` Clause:** Specifies the number of rows to skip from the beginning of the result set.
*   **`FETCH NEXT N ROWS ONLY` / `FETCH FIRST N ROWS ONLY`:** Specifies the maximum number of rows to retrieve after any `OFFSET` has been applied.
*   **Pagination:** The process of dividing a large set of data into smaller, discrete pages for easier viewing and management, often implemented using `OFFSET FETCH`.

#### Hands-on activity
**Scenario:** Your management team needs various reports that require data to be sorted and, in some cases, limited to specific top-performing or recent entries.

**Instructions:**
1.  Connect to your Oracle database.
2.  Retrieve all employees, sorted by `last_name` in ascending order.
3.  Retrieve all employees, sorted by `salary` in descending order.
4.  Retrieve employees, sorted first by `department_id` in ascending order, and then by `salary` in descending order within each department.
5.  Find the top 3 highest-paid employees.
6.  Find the employees who are the 4th, 5th, and 6th highest-paid.

**Code Template:**
```sql
-- 1. Employees sorted by last_name (ascending)
SELECT employee_id, first_name, last_name
FROM employees
ORDER BY last_name ASC;

-- 2. Employees sorted by salary (descending)
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC;

-- 3. Employees sorted by department_id (ASC) then salary (DESC)
SELECT employee_id, first_name, last_name, department_id, salary
FROM employees
ORDER BY department_id ASC, salary DESC;

-- 4. Top 3 highest-paid employees
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC
FETCH FIRST 3 ROWS ONLY;

-- 5. Employees who are the 4th, 5th, and 6th highest-paid
SELECT employee_id, first_name, last_name, salary
FROM employees
ORDER BY salary DESC
OFFSET 3 ROWS FETCH NEXT 3 ROWS ONLY;
```

#### Assessment idea
1.  **Question:** You want to retrieve a list of employees, sorted by their `hire_date` from the newest hires to the oldest, and then by `last_name` alphabetically for employees hired on the same date. Which `ORDER BY` clause would achieve this?
    *   A) `ORDER BY hire_date ASC, last_name DESC;`
    *   B) `ORDER BY hire_date DESC, last_name ASC;`
    *   C) `ORDER BY last_name ASC, hire_date DESC;`
    *   D) `ORDER BY hire_date, last_name;`

    **Correct Answer:** B) `ORDER BY hire_date DESC, last_name ASC;`
    **Explanation:** To sort from newest to oldest `hire_date`, `DESC` is required. For `last_name` alphabetically, `ASC` is required. The primary sort is `hire_date`, followed by `last_name` for ties.

2.  **Question:** An application needs to display results in pages of 10. If the user is viewing the 3rd page of results (meaning they've already seen the first 20 results), which `OFFSET FETCH` clause would correctly retrieve the rows for this page? Assume the data is ordered by `product_id`.
    *   A) `OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;`
    *   B) `OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;`
    *   C) `FETCH FIRST 10 ROWS ONLY OFFSET 20 ROWS;`
    *   D) `OFFSET 30 ROWS FETCH NEXT 10 ROWS ONLY;`

    **Correct Answer:** A) `OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;`
    **Explanation:** For the 3rd page, you need to skip the first two pages. If each page has 10 items, two pages mean 20 items skipped. So, `OFFSET 20 ROWS` is correct. Then, you need to `FETCH NEXT 10 ROWS ONLY` to get the items for the current page. The order of `OFFSET` and `FETCH` is important; `OFFSET` comes before `FETCH`.

#### AI generation note
Produce a 10-minute animated video with code overlays. Start by visually demonstrating how `ORDER BY` sorts data in a table grid, showing `ASC` and `DESC` for a single column. Then, animate a multi-column sort, highlighting how the secondary sort applies within groups of the primary sort. Transition to `OFFSET FETCH`, using a "pages of results" analogy with numbered boxes. Show live coding examples in SQL Developer for `ORDER BY` (single, multiple columns, mixed ASC/DESC) and then `OFFSET FETCH` (top N, and a specific page). Include a visual warning about using `OFFSET FETCH` without `ORDER BY`. Conclude with a quick drag-and-drop exercise to correctly order the clauses of a `SELECT` statement.
---

## Module 3: Filtering, Sorting, and Single-Row Functions

**Module Goal:** To equip learners with the essential SQL clauses and functions for precisely selecting, refining, and presenting data from an Oracle database, moving beyond simple data retrieval to targeted information extraction and manipulation.

---

#### Chapter 3.1 — Filtering Data with the WHERE Clause

#### Learning objectives
*   Construct SQL queries that use the `WHERE` clause to filter rows based on specified conditions.
*   Apply various comparison operators (`=`, `!=`, `<`, `>`, `<=`, `>=`) effectively within a `WHERE` clause.
*   Understand and correctly handle `NULL` values in filtering conditions using `IS NULL` and `IS NOT NULL`.
*   Identify common mistakes when filtering data and implement best practices for writing robust `WHERE` clauses.

#### Detailed lesson content
After mastering the `SELECT` statement to retrieve columns, the next crucial step in data retrieval is to narrow down the rows returned by your query. Imagine a database with millions of records; you rarely need to see *all* of them. This is where the `WHERE` clause comes into play, acting as a powerful filter to specify which rows should be included in your result set. The `WHERE` clause immediately follows the `FROM` clause in a `SELECT` statement and precedes any `ORDER BY` clause. Its fundamental purpose is to evaluate a condition for each row and only return those rows for which the condition evaluates to `TRUE`.

Let's begin with the most straightforward filtering scenarios using comparison operators. These operators allow you to compare a column's value against another value, another column, or an expression. The basic syntax looks like this: `SELECT column1, column2 FROM table_name WHERE column_name operator value;`. For instance, if you're working with an `employees` table and you only want to see employees who work in `department_id` 90, your query would be: `SELECT employee_id, first_name, last_name, department_id FROM employees WHERE department_id = 90;`. Here, the `=` operator checks for exact equality. It's vital to remember that character and date literals must be enclosed in single quotes, while numeric literals are not. For example, to find employees named 'Steven', you'd write `WHERE first_name = 'Steven';`. Case sensitivity is a crucial consideration in Oracle. By default, character comparisons are case-sensitive. So, `WHERE first_name = 'steven'` would likely return no rows if the actual name in the database is 'Steven'. If you need case-insensitive matching, you'll learn about character functions later that can help normalize the case before comparison.

Beyond equality, we have a suite of other comparison operators. The `!=` (or `<>`) operator signifies "not equal to." If you wanted all employees *except* those in department 90, you'd use `WHERE department_id != 90;`. For numerical comparisons, `<` (less than), `>` (greater than), `<=` (less than or equal to), and `>=` (greater than or equal to) are indispensable. Suppose you want to find employees who earn more than $10,000. Your query would be: `SELECT employee_id, first_name, salary FROM employees WHERE salary > 10000;`. Similarly, to find employees hired before a specific date, say January 1, 2005, you would use `WHERE hire_date < '01-JAN-2005';`. Oracle automatically converts the string literal '01-JAN-2005' into a date type for comparison, but it's often safer and more explicit to use the `TO_DATE` function for date literals, like `WHERE hire_date < TO_DATE('01-JAN-2005', 'DD-MON-YYYY');` to avoid potential ambiguity with NLS (National Language Support) settings.

One of the most common pitfalls when filtering data involves `NULL` values. `NULL` represents the absence of a value, meaning it's unknown, not applicable, or not yet assigned. It is *not* equivalent to zero or an empty string. Because `NULL` signifies an unknown state, it cannot be compared using standard comparison operators. For example, `WHERE commission_pct = NULL` will *never* return any rows, even if there are employees with `NULL` in their `commission_pct` column. This is a critical concept to grasp. To correctly identify rows where a column contains `NULL`, you must use the `IS NULL` operator. So, to find employees who do *not* receive a commission, you would write `SELECT employee_id, first_name, commission_pct FROM employees WHERE commission_pct IS NULL;`. Conversely, to find employees who *do* receive a commission (i.e., their `commission_pct` is not `NULL`), you use `IS NOT NULL`. For instance: `SELECT employee_id, first_name, commission_pct FROM employees WHERE commission_pct IS NOT NULL;`. Failing to use `IS NULL` or `IS NOT NULL` for `NULL` comparisons is a very common beginner mistake that leads to unexpected empty result sets.

When constructing your `WHERE` clauses, always consider the data types of the columns you are comparing. Comparing a number to a string, or a date to a number, without proper type conversion can lead to errors or incorrect results. Oracle often performs implicit type conversion, which can be convenient but also dangerous, as it might not always convert in the way you expect, especially across different database versions or NLS settings. Explicit conversions using functions like `TO_CHAR`, `TO_NUMBER`, and `TO_DATE` are generally recommended for clarity and robustness. For example, if `employee_id` was stored as a `VARCHAR2` (though it's typically `NUMBER`), comparing `WHERE employee_id = 100` might work due to implicit conversion, but `WHERE employee_id = '100'` would be more explicit and safer.

Safety notes and common mistakes:
1.  **Case Sensitivity:** Remember that string comparisons in Oracle are typically case-sensitive. If you search for `'john'` but the database stores `'John'`, you won't find it. Use functions like `UPPER()` or `LOWER()` if you need case-insensitive matching, e.g., `WHERE UPPER(first_name) = 'JOHN'`.
2.  **`NULL` Misunderstanding:** The most frequent error is using `=` or `!=` with `NULL`. Always use `IS NULL` or `IS NOT NULL`.
3.  **Date Formats:** When comparing dates, ensure your date literals match Oracle's expected date format or use `TO_DATE` with an explicit format mask to avoid errors or unexpected results. `WHERE hire_date > '01-JAN-05'` might work, but `WHERE hire_date > TO_DATE('01-JAN-2005', 'DD-MON-YYYY')` is much safer.
4.  **Performance:** While not strictly a beginner topic, understand that poorly written `WHERE` clauses (especially those preventing index usage) can severely impact query performance on large tables. Filtering on indexed columns is generally faster.

By mastering the `WHERE` clause and its basic comparison operators, you gain immense power to precisely target the data you need, laying a strong foundation for more complex data retrieval tasks. This ability to filter is fundamental to almost every practical SQL query you will write.

#### Key concepts
*   **`WHERE` Clause:** A clause in a `SELECT` statement used to filter rows based on a specified condition, returning only those rows for which the condition evaluates to `TRUE`.
*   **Comparison Operators:** Symbols used in the `WHERE` clause to compare values, including `=` (equal to), `!=` or `<>` (not equal to), `<` (less than), `>` (greater than), `<=` (less than or equal to), and `>=` (greater than or equal to).
*   **`NULL` Value:** Represents the absence of a value; it is unknown, not applicable, or not yet assigned. It is not equivalent to zero or an empty string.
*   **`IS NULL`:** An operator used in the `WHERE` clause to test if a column's value is `NULL`.
*   **`IS NOT NULL`:** An operator used in the `WHERE` clause to test if a column's value is not `NULL`.
*   **Case Sensitivity:** The distinction between uppercase and lowercase characters in string comparisons, which is enabled by default in Oracle SQL.
*   **Implicit Type Conversion:** Oracle's automatic conversion of one data type to another during an operation or comparison, which can sometimes lead to unexpected results.
*   **Explicit Type Conversion:** Using functions like `TO_CHAR`, `TO_NUMBER`, or `TO_DATE` to explicitly convert data from one type to another, improving clarity and robustness.

#### Hands-on activity
**Activity: Employee Salary and Department Filtering**

You've been asked to retrieve specific employee information from the `employees` table.

1.  **Find all employees whose salary is exactly $8,000.**
    ```sql
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE salary = 8000;
    ```
2.  **List all employees who earn less than $5,000.**
    ```sql
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE salary < 5000;
    ```
3.  **Retrieve the details of employees hired after January 1, 2007.**
    ```sql
    SELECT employee_id, first_name, last_name, hire_date
    FROM employees
    WHERE hire_date > TO_DATE('01-JAN-2007', 'DD-MON-YYYY');
    ```
4.  **Identify all employees who do NOT have a manager (i.e., their `manager_id` is `NULL`).**
    ```sql
    SELECT employee_id, first_name, last_name, manager_id
    FROM employees
    WHERE manager_id IS NULL;
    ```
5.  **Show all employees who have a `commission_pct` (i.e., their `commission_pct` is not `NULL`).**
    ```sql
    SELECT employee_id, first_name, last_name, commission_pct
    FROM employees
    WHERE commission_pct IS NOT NULL;
    ```

#### Assessment idea
1.  **Question:** Which of the following `WHERE` clauses correctly identifies employees whose `email` address is 'SKING'?
    A) `WHERE email = SKING`
    B) `WHERE email = "SKING"`
    C) `WHERE email = 'SKING'`
    D) `WHERE email IS 'SKING'`

    **Correct Answer:** C) `WHERE email = 'SKING'`
    **Explanation:** Character literals (strings) in SQL must be enclosed in single quotes. Option A is missing quotes, Option B uses double quotes which are typically for identifiers (like column names if they contain special characters), and Option D incorrectly uses `IS` which is reserved for `NULL` comparisons.

2.  **Question:** You want to find all employees who have *not* been assigned a `department_id`. Which `WHERE` clause should you use?
    A) `WHERE department_id = NULL`
    B) `WHERE department_id != NULL`
    C) `WHERE department_id IS NULL`
    D) `WHERE department_id IS NOT NULL`

    **Correct Answer:** C) `WHERE department_id IS NULL`
    **Explanation:** `NULL` represents an unknown or absent value and cannot be compared using standard equality operators (`=`, `!=`). The correct way to check for `NULL` values is to use the `IS NULL` operator. Option A and B are incorrect ways to handle `NULL`, and Option D would find employees *with* a department ID.

#### AI generation note
Create a 12-minute interactive video tutorial. Begin by demonstrating basic `WHERE` clause usage with `=`, `>`, and `<` on the `employees` table (salary, department_id). Show live coding in SQL Developer or SQL*Plus, displaying results after each query. Then, introduce `NULL` values using the `commission_pct` column, explicitly showing why `commission_pct = NULL` fails and how `IS NULL` and `IS NOT NULL` correctly identify rows. Include a split-screen view of the SQL editor and the query output. Conclude with a short coding challenge where learners modify a given `SELECT` statement to filter by `hire_date` using `<` and `TO_DATE`. Emphasize common mistakes like case sensitivity and incorrect `NULL` handling.

---

#### Chapter 3.2 — Advanced Filtering with Logical and Special Operators

#### Learning objectives
*   Combine multiple conditions in a `WHERE` clause using the logical operators `AND`, `OR`, and `NOT`.
*   Utilize the `BETWEEN` operator to filter data within a specified range (inclusive).
*   Employ the `IN` operator to match a column's value against a list of discrete values.
*   Apply the `LIKE` operator with wildcard characters (`%`, `_`) for pattern matching in string columns.
*   Differentiate between `IS NULL` and `IS NOT NULL` for robust handling of unknown values in complex conditions.

#### Detailed lesson content
Building upon the foundation of simple comparison operators, real-world data filtering often requires more sophisticated conditions. This is where logical operators (`AND`, `OR`, `NOT`) and special operators (`BETWEEN`, `IN`, `LIKE`) become indispensable. These tools allow you to construct highly precise and flexible `WHERE` clauses, enabling you to extract exactly the subset of data you need from your Oracle database.

Let's start with logical operators, which allow you to combine multiple conditions. The `AND` operator is used when *all* specified conditions must be true for a row to be included in the result set. For example, if you want to find employees who work in `department_id` 90 *and* earn more than $10,000, your query would be: `SELECT employee_id, first_name, salary, department_id FROM employees WHERE department_id = 90 AND salary > 10000;`. Both conditions (`department_id = 90` and `salary > 10000`) must be `TRUE` for an employee's row to be returned.

The `OR` operator, in contrast, is used when *at least one* of the specified conditions must be true. If you want to find employees who work in `department_id` 90 *or* `department_id` 60, you would write: `SELECT employee_id, first_name, department_id FROM employees WHERE department_id = 90 OR department_id = 60;`. A row will be returned if the `department_id` is 90, or if it's 60, or both (though a `department_id` cannot be both at the same time). When combining `AND` and `OR` operators, it's crucial to understand operator precedence. `AND` has a higher precedence than `OR`, meaning `AND` conditions are evaluated before `OR` conditions. To explicitly control the order of evaluation, always use parentheses. For instance, `WHERE condition1 AND condition2 OR condition3` is evaluated as `(condition1 AND condition2) OR condition3`. If you intended `condition1 AND (condition2 OR condition3)`, you *must* use parentheses. This is a common source of logical errors in complex queries.

The `NOT` operator negates a condition. It can be used in various ways, often making a condition more readable or concise. For example, instead of `WHERE department_id != 90`, you could write `WHERE NOT (department_id = 90);`. It's also frequently used with `LIKE`, `IN`, and `BETWEEN` operators, such as `WHERE salary NOT BETWEEN 5000 AND 10000;`.

Next, let's explore special operators. The `BETWEEN` operator allows you to specify a range of values. It is inclusive, meaning both the lower and upper bounds are part of the range. The syntax is `expression BETWEEN lower_value AND upper_value`. To find employees whose salary is between $5,000 and $10,000 (inclusive), you would use: `SELECT employee_id, first_name, salary FROM employees WHERE salary BETWEEN 5000 AND 10000;`. This is equivalent to `WHERE salary >= 5000 AND salary <= 10000;`, but `BETWEEN` is often more readable. It works with numbers, characters, and dates. For dates, remember to use `TO_DATE` for clarity and safety, e.g., `WHERE hire_date BETWEEN TO_DATE('01-JAN-2005', 'DD-MON-YYYY') AND TO_DATE('31-DEC-2007', 'DD-MON-YYYY');`.

The `IN` operator allows you to specify a list of discrete values that a column can match. It's a concise alternative to using multiple `OR` conditions. For example, to find employees in `department_id` 10, 20, or 30, you could write: `SELECT employee_id, first_name, department_id FROM employees WHERE department_id IN (10, 20, 30);`. This is much cleaner than `WHERE department_id = 10 OR department_id = 20 OR department_id = 30;`. The `IN` operator also works with character and date values, provided they are correctly quoted or converted.

The `LIKE` operator is used for pattern matching in string columns, employing wildcard characters. The two primary wildcards are:
*   `%` (percent sign): Matches any sequence of zero or more characters.
*   `_` (underscore): Matches any single character.

For example, to find all employees whose `first_name` starts with 'S', you would use: `SELECT first_name, last_name FROM employees WHERE first_name LIKE 'S%';`. To find employees whose `last_name` has 'e' as the second letter, you would use: `SELECT first_name, last_name FROM employees WHERE last_name LIKE '_e%';`. If you need to search for the actual wildcard characters (`%` or `_`) within a string, you must use an `ESCAPE` clause. For example, `WHERE description LIKE '%50\%%' ESCAPE '\'` would find descriptions containing "50%".

Finally, a quick recap and important note on `NULL`s with these operators. If any expression in an `AND` condition evaluates to `NULL`, the entire `AND` condition evaluates to `NULL` (which is treated as `FALSE` for filtering purposes). If any expression in an `OR` condition evaluates to `NULL`, the `OR` condition might still be `TRUE` if another part is `TRUE`, or `NULL` if all parts are `NULL` or `FALSE`. The `IN` operator, when comparing against a list containing `NULL`, behaves carefully: `value IN (1, 2, NULL)` will return `TRUE` if `value` is 1 or 2, and `NULL` if `value` is `NULL`. It will *not* return `TRUE` if `value` is `NULL` and `NULL` is in the list. This behavior is often misunderstood. When working with `NULL` values, it's generally safest to explicitly handle them with `IS NULL` or `IS NOT NULL` as separate conditions or within the `IN` clause (e.g., `WHERE column_name IN (value1, value2) OR column_name IS NULL`).

Common mistakes and safety notes:
1.  **Operator Precedence:** Always use parentheses to explicitly define the order of evaluation when combining `AND` and `OR` to avoid logical errors. `WHERE A AND B OR C` is not the same as `WHERE A AND (B OR C)`.
2.  **`BETWEEN` Inclusivity:** Remember `BETWEEN` includes both the start and end values.
3.  **`LIKE` Wildcards:** Ensure you understand the difference between `%` (zero or more characters) and `_` (exactly one character). Misusing them can lead to over- or under-filtering.
4.  **`NULL` in `IN` Lists:** Be cautious when `NULL` is present in an `IN` list. `value IN (..., NULL)` will not match if `value` itself is `NULL`. If you want to include `NULL` values, add an explicit `OR column_name IS NULL` condition.
5.  **Performance with `LIKE`:** Using a leading wildcard (e.g., `LIKE '%SMITH'`) can prevent the database from using an index on that column, leading to full table scans and potentially slow queries on large datasets. Try to avoid leading wildcards if performance is critical.

Mastering these advanced filtering techniques significantly enhances your ability to precisely query and analyze data in Oracle, allowing you to extract meaningful insights from complex datasets.

#### Key concepts
*   **Logical Operators:** Operators (`AND`, `OR`, `NOT`) used to combine or negate multiple conditions in a `WHERE` clause.
*   **`AND` Operator:** Requires all conditions to be `TRUE` for a row to be included.
*   **`OR` Operator:** Requires at least one condition to be `TRUE` for a row to be included.
*   **`NOT` Operator:** Negates a condition, returning `TRUE` if the condition is `FALSE`, and vice-versa.
*   **Operator Precedence:** The order in which SQL operators are evaluated (e.g., `AND` before `OR`). Parentheses can override default precedence.
*   **`BETWEEN` Operator:** Filters rows where a value falls within a specified inclusive range.
*   **`IN` Operator:** Filters rows where a column's value matches any value in a provided list.
*   **`LIKE` Operator:** Performs pattern matching on string values using wildcard characters.
*   **Wildcard Characters:** Special characters used with `LIKE`: `%` (matches any sequence of zero or more characters) and `_` (matches any single character).
*   **`ESCAPE` Clause:** Used with `LIKE` to specify an escape character, allowing you to search for the actual wildcard characters (`%` or `_`) within a string.

#### Hands-on activity
**Activity: Complex Employee Search**

Use the `employees` table to perform the following advanced filtering operations:

1.  **Find all employees who are either in `department_id` 50 OR have a `salary` greater than $12,000.**
    ```sql
    SELECT employee_id, first_name, last_name, department_id, salary
    FROM employees
    WHERE department_id = 50 OR salary > 12000;
    ```
2.  **List employees whose `salary` is between $7,000 and $9,000 (inclusive).**
    ```sql
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    WHERE salary BETWEEN 7000 AND 9000;
    ```
3.  **Retrieve employees whose `job_id` is 'IT_PROG' or 'SA_REP' and who were hired after January 1, 2006.**
    ```sql
    SELECT employee_id, first_name, last_name, job_id, hire_date
    FROM employees
    WHERE job_id IN ('IT_PROG', 'SA_REP') AND hire_date > TO_DATE('01-JAN-2006', 'DD-MON-YYYY');
    ```
4.  **Find all employees whose `first_name` starts with 'J' and has 'n' as the third letter (e.g., 'John', 'Janet').**
    ```sql
    SELECT employee_id, first_name, last_name
    FROM employees
    WHERE first_name LIKE 'J_n%';
    ```
5.  **List employees who do NOT have a `commission_pct` AND whose `salary` is less than $7,000.**
    ```sql
    SELECT employee_id, first_name, last_name, commission_pct, salary
    FROM employees
    WHERE commission_pct IS NULL AND salary < 7000;
    ```

#### Assessment idea
1.  **Question:** You need to find all employees who work in `department_id` 80, 90, or 100. Which of the following queries is the most concise and efficient way to achieve this?
    A) `SELECT * FROM employees WHERE department_id = 80 OR department_id = 90 OR department_id = 100;`
    B) `SELECT * FROM employees WHERE department_id IN (80, 90, 100);`
    C) `SELECT * FROM employees WHERE department_id BETWEEN 80 AND 100;`
    D) `SELECT * FROM employees WHERE department_id LIKE '8%' OR department_id LIKE '9%' OR department_id LIKE '10%';`

    **Correct Answer:** B) `SELECT * FROM employees WHERE department_id IN (80, 90, 100);`
    **Explanation:** The `IN` operator is specifically designed for matching a column against a list of discrete values, making it the most concise and readable option compared to multiple `OR` conditions. Option C is incorrect because `BETWEEN` includes all numbers in the range, which might include department IDs like 81, 82, etc., that are not explicitly 80, 90, or 100. Option D uses `LIKE` which is for string pattern matching and is not suitable for numeric comparisons in this manner, and would also incorrectly match department 800, 900, etc.

2.  **Question:** An HR manager wants a list of employees whose `last_name` contains the letter 'a' anywhere and whose `salary` is between $6,000 and $10,000. Which query correctly combines these conditions?
    A) `SELECT first_name, last_name, salary FROM employees WHERE last_name LIKE '%a%' OR salary BETWEEN 6000 AND 10000;`
    B) `SELECT first_name, last_name, salary FROM employees WHERE last_name LIKE '%a%' AND salary BETWEEN 6000 AND 10000;`
    C) `SELECT first_name, last_name, salary FROM employees WHERE last_name = '%a%' AND salary >= 6000 AND salary <= 10000;`
    D) `SELECT first_name, last_name, salary FROM employees WHERE last_name IN ('%a%') AND salary BETWEEN 6000 AND 10000;`

    **Correct Answer:** B) `SELECT first_name, last_name, salary FROM employees WHERE last_name LIKE '%a%' AND salary BETWEEN 6000 AND 10000;`
    **Explanation:** The manager wants *both* conditions to be true, so the `AND` operator is correct. The `LIKE` operator with `'%a%'` correctly finds names containing 'a'. `BETWEEN 6000 AND 10000` correctly specifies the salary range. Option A uses `OR`, which would return employees meeting *either* condition, not both. Option C incorrectly uses `=` with wildcards, and Option D incorrectly uses `IN` with a pattern.

#### AI generation note
Design a 15-minute interactive lab walkthrough. Start by demonstrating the `AND` and `OR` operators with examples from the `employees` table (e.g., department and salary, or job ID and hire date). Then, introduce `BETWEEN` and `IN` as more concise alternatives, showing their equivalent `AND`/`OR` forms. Finally, cover `LIKE` with both `%` and `_` wildcards, including an example of using the `ESCAPE` clause. For each operator, provide a small code snippet, execute it in a simulated SQL environment, and explain the output. Include a "common pitfalls" section highlighting operator precedence and `NULL` handling with `IN` and `AND`. The interactive element should be a guided exercise where learners construct a query using `AND`, `IN`, and `LIKE` to find specific employees.

---

#### Chapter 3.3 — Ordering Query Results with ORDER BY

#### Learning objectives
*   Apply the `ORDER BY` clause to sort query results in ascending or descending order.
*   Sort data based on multiple columns, specifying different sorting directions for each.
*   Understand and utilize column aliases and column positions in the `ORDER BY` clause.
*   Explain how `NULL` values are handled during sorting in Oracle SQL.

#### Detailed lesson content
Once you've filtered your data to retrieve the specific rows you need, the next logical step is often to present that data in a meaningful, organized way. Raw, unsorted data can be difficult to read and interpret, especially in large result sets. The `ORDER BY` clause is your tool for sorting the rows returned by a `SELECT` statement, ensuring your output is structured and easy to analyze. It always appears as the *last* clause in a `SELECT` statement, after `FROM` and `WHERE`.

The most basic use of `ORDER BY` involves specifying a single column by which to sort. By default, `ORDER BY` sorts in ascending order. For example, to list all employees sorted by their `last_name` alphabetically: `SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY last_name;`. If you want to explicitly state ascending order, you can add the `ASC` keyword: `SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY last_name ASC;`. The `ASC` keyword is optional for ascending order, but it's good practice to include it for clarity.

To sort in descending order, you use the `DESC` keyword. This is particularly useful for finding the highest or lowest values quickly. For instance, to find the employees with the highest salaries first, you would write: `SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary DESC;`. This will list employees from the highest salary to the lowest.

Often, you'll need to sort by more than one column. This is called multi-column sorting. Oracle sorts by the first specified column, and if there are ties (rows with the same value in the first column), it then uses the second column to break those ties, and so on. You can specify different sorting directions for each column. For example, to sort employees by `department_id` in ascending order, and then by `salary` in descending order *within each department*: `SELECT employee_id, first_name, last_name, department_id, salary FROM employees ORDER BY department_id ASC, salary DESC;`. In this query, all employees from department 10 will appear first, sorted by salary from highest to lowest. Then department 20, also sorted by salary highest to lowest, and so on.

A powerful feature of the `ORDER BY` clause is its flexibility in referencing columns. Besides using the actual column name, you can also use a column alias or a column's position in the `SELECT` list.
*   **Using Column Aliases:** If you've given a column an alias in your `SELECT` list, you can use that alias in the `ORDER BY` clause. This improves readability, especially for calculated columns. For example: `SELECT first_name || ' ' || last_name AS full_name, salary FROM employees ORDER BY full_name ASC;`. Note that you *cannot* use a column alias in the `WHERE` clause because the `WHERE` clause is processed *before* the `SELECT` list, and thus before aliases are established. The `ORDER BY` clause, however, is processed *after* the `SELECT` list, making aliases available.
*   **Using Column Positions:** You can refer to columns by their numeric position in the `SELECT` list, starting from 1. For example, `SELECT first_name, last_name, salary FROM employees ORDER BY 2 ASC, 3 DESC;` would sort by `last_name` (second column) ascending, and then by `salary` (third column) descending. While this can be concise, it's generally considered less readable and more prone to errors if the `SELECT` list changes. It's best practice to use column names or aliases for clarity and maintainability.

Handling `NULL` values during sorting is an important consideration. In Oracle, by default:
*   For `ASC` (ascending) order, `NULL` values are treated as the highest possible values and appear *last* in the result set.
*   For `DESC` (descending) order, `NULL` values are treated as the lowest possible values and appear *first* in the result set.

You can explicitly control the placement of `NULL` values using `NULLS FIRST` or `NULLS LAST`. For example, to sort employees by `commission_pct` in ascending order, but have those with `NULL` commission appear first: `SELECT employee_id, first_name, commission_pct FROM employees ORDER BY commission_pct ASC NULLS FIRST;`. Conversely, to sort by `salary` descending, but ensure employees with `NULL` salaries appear last: `SELECT employee_id, first_name, salary FROM employees ORDER BY salary DESC NULLS LAST;`. This gives you precise control over how unknown values are positioned in your sorted output.

Common mistakes and safety notes:
1.  **Placement of `ORDER BY`:** Always place the `ORDER BY` clause last in your `SELECT` statement. Placing it before `WHERE` or `FROM` will result in a syntax error.
2.  **Alias vs. Column Name:** Remember that aliases can only be used in `ORDER BY` (and `GROUP BY`, which we'll cover later), not in `WHERE`. If you use an alias in `WHERE`, Oracle will report an invalid identifier error.
3.  **Column Position Volatility:** While using column positions (e.g., `ORDER BY 1, 2`) works, it's brittle. If you add, remove, or reorder columns in your `SELECT` list, your `ORDER BY` clause will break or sort incorrectly. Stick to column names or aliases for robustness.
4.  **`NULL` Behavior:** Be mindful of Oracle's default `NULL` sorting behavior. If you need `NULL`s to appear at the beginning or end regardless of `ASC`/`DESC`, explicitly use `NULLS FIRST` or `NULLS LAST`.
5.  **Performance:** Sorting large datasets can be resource-intensive. If your `ORDER BY` columns are not indexed, the database might need to perform a full table scan and then sort the entire result set in memory or on disk, which can be slow. Consider indexing frequently sorted columns in production environments.

By mastering the `ORDER BY` clause, you transform raw data into organized, actionable information, making your SQL queries much more effective for reporting and analysis.

#### Key concepts
*   **`ORDER BY` Clause:** A clause in a `SELECT` statement used to sort the rows in the result set based on one or more columns. It is always the last clause.
*   **Ascending Order (`ASC`):** The default sorting order, from lowest to highest (A-Z, 0-9, oldest to newest date).
*   **Descending Order (`DESC`):** Sorts from highest to lowest (Z-A, 9-0, newest to oldest date).
*   **Multi-column Sort:** Sorting by more than one column, where subsequent columns break ties in the preceding columns.
*   **Column Alias:** An alternative, user-defined name given to a column or expression in the `SELECT` list, which can then be used in the `ORDER BY` clause.
*   **Column Position:** Referencing a column in the `ORDER BY` clause by its numerical position in the `SELECT` list (e.g., `ORDER BY 1` for the first column).
*   **`NULLS FIRST`:** An `ORDER BY` option that forces `NULL` values to appear at the beginning of the sorted result set.
*   **`NULLS LAST`:** An `ORDER BY` option that forces `NULL` values to appear at the end of the sorted result set.

#### Hands-on activity
**Activity: Employee Data Sorting**

Practice sorting employee data from the `employees` table using various `ORDER BY` configurations.

1.  **List all employees, sorted by `last_name` in ascending order.**
    ```sql
    SELECT employee_id, first_name, last_name, salary
    FROM employees
    ORDER BY last_name ASC;
    ```
2.  **Retrieve employee `first_name`, `last_name`, and `salary`, sorted by `salary` in descending order.**
    ```sql
    SELECT first_name, last_name, salary
    FROM employees
    ORDER BY salary DESC;
    ```
3.  **Show employees, sorted first by `department_id` in ascending order, and then by `hire_date` in descending order within each department.**
    ```sql
    SELECT employee_id, first_name, last_name, department_id, hire_date
    FROM employees
    ORDER BY department_id ASC, hire_date DESC;
    ```
4.  **Display employees' `first_name`, `last_name`, and `commission_pct`. Sort by `commission_pct` in ascending order, but ensure employees with `NULL` commission appear first.**
    ```sql
    SELECT first_name, last_name, commission_pct
    FROM employees
    ORDER BY commission_pct ASC NULLS FIRST;
    ```
5.  **Create a calculated column `annual_compensation` (salary * 12 + commission_pct * salary * 12). Display `first_name`, `last_name`, and `annual_compensation`, sorted by `annual_compensation` in descending order. Use an alias for `annual_compensation` and sort by the alias.**
    ```sql
    SELECT first_name, last_name, (salary * 12 + NVL(commission_pct, 0) * salary * 12) AS annual_compensation
    FROM employees
    ORDER BY annual_compensation DESC;
    ```

#### Assessment idea
1.  **Question:** You want to retrieve employees' `first_name`, `last_name`, and `salary`. The results should be sorted by `last_name` alphabetically, and for employees with the same `last_name`, they should be sorted by `salary` from highest to lowest. Which `ORDER BY` clause achieves this?
    A) `ORDER BY last_name DESC, salary ASC`
    B) `ORDER BY last_name ASC, salary DESC`
    C) `ORDER BY salary DESC, last_name ASC`
    D) `ORDER BY last_name, salary`

    **Correct Answer:** B) `ORDER BY last_name ASC, salary DESC`
    **Explanation:** The primary sort is `last_name` alphabetically (ascending), and the secondary sort for ties is `salary` from highest to lowest (descending). Option A has `last_name` descending. Option C reverses the primary and secondary sort order. Option D would sort both `last_name` and `salary` in ascending order (default).

2.  **Question:** Consider the following query: `SELECT department_id, first_name, manager_id FROM employees ORDER BY 3 DESC, 1 ASC;`. What does this query sort by?
    A) `department_id` descending, then `first_name` ascending.
    B) `manager_id` descending, then `department_id` ascending.
    C) `first_name` descending, then `department_id` ascending.
    D) `manager_id` ascending, then `department_id` descending.

    **Correct Answer:** B) `manager_id` descending, then `department_id` ascending.
    **Explanation:** The `ORDER BY` clause uses column positions. `3` refers to the third column in the `SELECT` list, which is `manager_id`. `1` refers to the first column, `department_id`. So, it sorts by `manager_id` in descending order, and then by `department_id` in ascending order for any ties in `manager_id`.

#### AI generation note
Create a 10-minute animated slide deck with voiceover and embedded interactive SQL code blocks. Start by explaining the basic `ORDER BY` with `ASC` and `DESC` using the `employees` table (salary, last_name). Progress to multi-column sorting (department_id ASC, salary DESC) with clear visual examples showing how ties are broken. Dedicate a slide to explaining `NULL` sorting behavior in Oracle, demonstrating `NULLS FIRST` and `NULLS LAST` with `commission_pct`. Include a slide on using column aliases in `ORDER BY` and a warning slide about column positions. The interactive element should be a drag-and-drop exercise where learners arrange `ORDER BY` keywords (`ASC`, `DESC`, `NULLS FIRST/LAST`) to achieve a specific sort order.

---

#### Chapter 3.4 — Introduction to Single-Row Functions

#### Learning objectives
*   Define what single-row functions are and differentiate them from multi-row (group) functions.
*   Apply various character functions (e.g., `UPPER`, `LOWER`, `INITCAP`, `CONCAT`, `SUBSTR`, `LENGTH`, `INSTR`, `LPAD`, `RPAD`, `TRIM`) to manipulate string data.
*   Utilize common number functions (e.g., `ROUND`, `TRUNC`, `MOD`, `ABS`, `SQRT`) to perform mathematical operations on numeric data.
*   Understand how to nest single-row functions for more complex data transformations.

#### Detailed lesson content
While `SELECT`, `FROM`, `WHERE`, and `ORDER BY` allow you to retrieve and organize data, single-row functions empower you to transform and manipulate that data at the individual row level. A single-row function operates on one row and returns one result for that row. This is a key distinction from multi-row or group functions (like `SUM` or `AVG`), which operate on a group of rows and return a single result for the entire group (these will be covered in a later module). Single-row functions can appear in the `SELECT` list, `WHERE` clause, `ORDER BY` clause, and even `GROUP BY` clause.

Let's dive into some of the most commonly used single-row functions, starting with **character functions**, which manipulate string data.
*   `UPPER(string)`: Converts a string to uppercase. Example: `SELECT UPPER('hello world') FROM dual;` returns 'HELLO WORLD'.
*   `LOWER(string)`: Converts a string to lowercase. Example: `SELECT LOWER(first_name) FROM employees;`
*   `INITCAP(string)`: Converts the first letter of each word to uppercase and the rest to lowercase. Example: `SELECT INITCAP('the quick brown fox') FROM dual;` returns 'The Quick Brown Fox'. This is great for proper casing names.
*   `CONCAT(string1, string2)`: Concatenates two strings. Oracle also supports the `||` concatenation operator, which is more flexible as it can concatenate more than two strings. Example: `SELECT CONCAT(first_name, last_name) FROM employees;` or `SELECT first_name || ' ' || last_name AS full_name FROM employees;`. The `||` is generally preferred.
*   `SUBSTR(string, start_position, length)`: Extracts a substring from a string. `start_position` can be positive (from the beginning) or negative (from the end). Example: `SELECT SUBSTR('Oracle SQL', 1, 6) FROM dual;` returns 'Oracle'. `SELECT SUBSTR('Oracle SQL', -3, 3) FROM dual;` returns 'SQL'.
*   `LENGTH(string)`: Returns the length of a string. Example: `SELECT first_name, LENGTH(first_name) FROM employees;`
*   `INSTR(string, substring, start_position, nth_appearance)`: Returns the starting position of the *n*th occurrence of a substring within a string. `start_position` and `nth_appearance` are optional, defaulting to 1. Example: `SELECT INSTR('Mississippi', 'is', 1, 2) FROM dual;` returns 5 (the 'i' of the second 'is').
*   `LPAD(string, total_length, pad_string)`: Left-pads a string with `pad_string` to a `total_length`. Example: `SELECT LPAD(salary, 10, '*') FROM employees;` might return '*****10000'.
*   `RPAD(string, total_length, pad_string)`: Right-pads a string.
*   `TRIM([leading|trailing|both] [trim_character] FROM string)`: Removes specified characters from the beginning, end, or both ends of a string. If `trim_character` is omitted, it defaults to a space. Example: `SELECT TRIM('   Hello World   ') FROM dual;` returns 'Hello World'. `SELECT TRIM(LEADING '0' FROM '000123') FROM dual;` returns '123'.

Next, let's look at **number functions**, which perform mathematical operations.
*   `ROUND(number, decimal_places)`: Rounds a number to a specified number of decimal places. If `decimal_places` is omitted, it rounds to the nearest integer. Example: `SELECT ROUND(45.923, 2) FROM dual;` returns 45.92. `SELECT ROUND(45.923, 0) FROM dual;` or `SELECT ROUND(45.923) FROM dual;` returns 46.
*   `TRUNC(number, decimal_places)`: Truncates a number to a specified number of decimal places, essentially removing the fractional part beyond that point without rounding. Example: `SELECT TRUNC(45.923, 2) FROM dual;` returns 45.92. `SELECT TRUNC(45.923) FROM dual;` returns 45.
*   `MOD(dividend, divisor)`: Returns the remainder of a division operation. Example: `SELECT MOD(10, 3) FROM dual;` returns 1.
*   `ABS(number)`: Returns the absolute value of a number. Example: `SELECT ABS(-100) FROM dual;` returns 100.
*   `SQRT(number)`: Returns the square root of a non-negative number. Example: `SELECT SQRT(81) FROM dual;` returns 9.

A powerful aspect of single-row functions is their ability to be **nested**. This means the output of one function can serve as the input for another function. When nesting, Oracle evaluates the innermost function first and works its way outward. For example, to display the first name of employees in uppercase, and then take the first three characters of that uppercase name: `SELECT SUBSTR(UPPER(first_name), 1, 3) FROM employees;`. Here, `UPPER(first_name)` is evaluated first, and its result is then passed to `SUBSTR`. This allows for highly complex and specific data transformations.

Single-row functions are incredibly versatile. They can be used in the `SELECT` list to format output, in the `WHERE` clause to filter based on transformed values (e.g., `WHERE UPPER(last_name) = 'SMITH'`), in the `ORDER BY` clause to sort by a calculated value, and even in `UPDATE` statements to modify data.

Common mistakes and safety notes:
1.  **Data Type Mismatch:** Ensure the function's arguments match the expected data type. For instance, passing a number to a character function like `UPPER` will likely result in an error or implicit conversion that might not be what you intended.
2.  **`NULL` Input:** If any argument to a single-row function is `NULL`, the function generally returns `NULL`. This is important to remember, especially when concatenating strings or performing calculations, as it can propagate `NULL`s throughout your results. Use functions like `NVL` or `COALESCE` (covered later) to handle `NULL`s gracefully.
3.  **`SUBSTR` Indices:** Remember that `SUBSTR` uses 1-based indexing in Oracle, not 0-based like many programming languages. A `start_position` of 1 means the first character.
4.  **Performance in `WHERE`:** Applying functions to indexed columns in the `WHERE` clause (e.g., `WHERE UPPER(last_name) = 'SMITH'`) can prevent the database from using an index on that column, leading to full table scans and potentially slow queries. If performance is critical, consider creating function-based indexes or storing data in a normalized format.
5.  **`DUAL` Table:** The `DUAL` table is a special one-row, one-column table in Oracle often used for testing functions or retrieving single values that don't come from a specific table (e.g., `SELECT SYSDATE FROM dual;`). It's a convenient way to experiment with functions without needing actual data.

By mastering single-row functions, you gain powerful capabilities to clean, format, and prepare your data for analysis and presentation, making your SQL queries far more dynamic and useful.

#### Key concepts
*   **Single-Row Functions:** Functions that operate on a single row and return a single result for that row. They can be used in `SELECT`, `WHERE`, `ORDER BY`, and `GROUP BY` clauses.
*   **Character Functions:** Functions that manipulate string (character) data, such as `UPPER`, `LOWER`, `INITCAP`, `CONCAT` (or `||`), `SUBSTR`, `LENGTH`, `INSTR`, `LPAD`, `RPAD`, `TRIM`.
*   **Number Functions:** Functions that perform mathematical operations on numeric data, such as `ROUND`, `TRUNC`, `MOD`, `ABS`, `SQRT`.
*   **`DUAL` Table:** A small, single-row, single-column dummy table in Oracle, often used for testing functions or retrieving system values.
*   **Nesting Functions:** Using the output of one function as the input for another function, allowing for complex data transformations.

#### Hands-on activity
**Activity: Employee Data Transformation**

Use single-row functions to transform and display employee data from the `employees` table.

1.  **Display the `first_name` and `last_name` of all employees, but convert `first_name` to uppercase and `last_name` to lowercase.**
    ```sql
    SELECT UPPER(first_name),
           LOWER(last_name)
    FROM employees;
    ```
2.  **Concatenate `first_name` and `last_name` into a single column called `Full Name`, with a space in between. Also, display the `length` of this full name.**
    ```sql
    SELECT first_name || ' ' || last_name AS "Full Name",
           LENGTH(first_name || ' ' || last_name) AS "Name Length"
    FROM employees;
    ```
3.  **Find the `salary` of each employee, rounded to 0 decimal places, and also truncated to 0 decimal places. Label these columns `Rounded Salary` and `Truncated Salary`.**
    ```sql
    SELECT salary,
           ROUND(salary, 0) AS "Rounded Salary",
           TRUNC(salary, 0) AS "Truncated Salary"
    FROM employees;
    ```
4.  **Display the `first_name` and `email` of employees. For the `email`, extract the first 3 characters, convert them to uppercase, and then pad them on the left with '*' characters to a total length of 5. Label this `Padded Email Prefix`.**
    ```sql
    SELECT first_name,
           LPAD(UPPER(SUBSTR(email, 1, 3)), 5, '*') AS "Padded Email Prefix"
    FROM employees;
    ```
5.  **List employees whose `job_id` contains the string 'IT' (case-insensitive).**
    ```sql
    SELECT employee_id, first_name, job_id
    FROM employees
    WHERE UPPER(job_id) LIKE '%IT%';
    ```

#### Assessment idea
1.  **Question:** You want to display the `first_name` of each employee with the first letter capitalized and the rest in lowercase, and then concatenate it with their `last_name` (all uppercase), separated by a space. Which query correctly achieves this?
    A) `SELECT INITCAP(first_name) || ' ' || UPPER(last_name) FROM employees;`
    B) `SELECT UPPER(first_name) || ' ' || INITCAP(last_name) FROM employees;`
    C) `SELECT CONCAT(INITCAP(first_name), UPPER(last_name)) FROM employees;`
    D) `SELECT INITCAP(first_name), UPPER(last_name) FROM employees;`

    **Correct Answer:** A) `SELECT INITCAP(first_name) || ' ' || UPPER(last_name) FROM employees;`
    **Explanation:** `INITCAP(first_name)` correctly capitalizes the first letter of the first name. `UPPER(last_name)` converts the last name to all uppercase. The `||` operator is used to concatenate these with a space in between. Option B reverses the case functions. Option C uses `CONCAT` which only takes two arguments, making it less flexible than `||` for three parts, and the syntax is wrong for `CONCAT` to include a space. Option D would display two separate columns, not a concatenated single string.

2.  **Question:** An analyst needs to display employee salaries, but they want to see the salary rounded to two decimal places and also truncated to two decimal places. For a salary of 12345.678, what would be the output for the rounded and truncated values respectively?
    A) Rounded: 12345.68, Truncated: 12345.67
    B) Rounded: 12345.67, Truncated: 12345.68
    C) Rounded: 12346, Truncated: 12345
    D) Rounded: 12345.68, Truncated: 12345.68

    **Correct Answer:** A) Rounded: 12345.68, Truncated: 12345.67
    **Explanation:** The `ROUND(number, decimal_places)` function rounds to the nearest specified decimal place. Since the third decimal place is 8 (>=5), 12345.678 rounds up to 12345.68. The `TRUNC(number, decimal_places)` function simply cuts off the number at the specified decimal place without rounding. So, 12345.678 truncated to two decimal places becomes 12345.67.

#### AI generation note
Create a 15-minute mixed-media lesson with a slide deck, embedded code demos, and short video explanations. Start with an overview of single-row functions vs. group functions. Dedicate sections to character functions (UPPER, LOWER, INITCAP, CONCAT/||, SUBSTR, LENGTH, TRIM) and number functions (ROUND, TRUNC, MOD, ABS), providing clear examples for each using `employees` table data or `DUAL`. Show how to nest functions with a practical example like `LPAD(UPPER(SUBSTR(email, 1, 3)), 5, '*')`. Use side-by-side code and output views. The interactive element should be a fill-in-the-blanks quiz where learners choose the correct function to achieve a specific string or number transformation.

---

## Module 4: Aggregating Data and Joining Multiple Tables

Welcome to Module 4! In this module, we'll dive into some of the most powerful features of SQL: aggregating data to gain insights and combining data from multiple tables using various join operations. These techniques are fundamental for extracting meaningful information from your database and are crucial for any SQL professional.

### Chapter 4.1 — Introduction to Group Functions

#### Learning objectives
*   Identify and differentiate between common SQL group functions: `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.
*   Understand how group functions operate on sets of rows to produce a single result.
*   Apply the `DISTINCT` keyword within group functions to count unique values.
*   Explain how `NULL` values are handled by different group functions.
*   Write SQL queries utilizing group functions to summarize data effectively.

#### Detailed lesson content
As you've learned to retrieve and filter individual rows, the next logical step in data analysis is to summarize information across multiple rows. This is where SQL's powerful group functions, also known as aggregate functions, come into play. Instead of returning a result for each row, group functions operate on a set of rows and return a single summary value for that set. Imagine you have a table of employees and you want to know the total salary paid, the average salary, or simply how many employees there are. Group functions provide these answers efficiently.

Let's start with `COUNT()`. This function is used to count the number of rows or non-null values in a column. When you use `COUNT(*)`, it counts all rows in the specified group, including those with `NULL` values in any column. For example, to find the total number of employees in the `employees` table, you would write `SELECT COUNT(*) FROM employees;`. If you want to count the number of employees who have a commission percentage, you would use `COUNT(commission_pct)`. It's crucial to remember that `COUNT(column_name)` will only count rows where `column_name` is *not* `NULL`. This distinction is vital for accurate reporting. A common mistake is to assume `COUNT(column_name)` counts all rows, leading to incorrect totals if the column contains `NULL`s.

Next, we have `SUM()` and `AVG()`. The `SUM()` function calculates the total value of a numeric column, while `AVG()` calculates the arithmetic mean of a numeric column. Both functions ignore `NULL` values in the column being aggregated. For instance, to find the total salary of all employees, you'd use `SELECT SUM(salary) FROM employees;`. To determine the average salary, it would be `SELECT AVG(salary) FROM employees;`. If an employee's salary is `NULL`, they are simply excluded from both the sum and the average calculation. If you wanted to include `NULL` salaries as zero in your average, you would need to use a function like `NVL` (Null Value Logic) in Oracle: `SELECT AVG(NVL(salary, 0)) FROM employees;`. This ensures that `NULL`s are treated as `0` before the average is computed, potentially altering the result significantly.

The `MIN()` and `MAX()` functions are used to find the smallest and largest values, respectively, in a column. These functions can be applied to numeric, character, or date data types. Like `SUM()` and `AVG()`, `MIN()` and `MAX()` also ignore `NULL` values. For example, `SELECT MIN(hire_date), MAX(salary) FROM employees;` would return the earliest hire date and the highest salary among all employees. These functions are incredibly useful for quickly identifying extremes within your dataset.

A powerful addition to any of these group functions (except `COUNT(*)`) is the `DISTINCT` keyword. When placed inside a group function, `DISTINCT` tells the function to only consider unique values in the specified column before performing the aggregation. For example, `SELECT COUNT(DISTINCT department_id) FROM employees;` will count how many *unique* departments have employees, rather than just counting all `department_id` values (which might include duplicates if multiple employees are in the same department). Similarly, `SELECT AVG(DISTINCT salary) FROM employees;` would calculate the average of only the unique salary values, which is rarely what you want for average salary but could be useful in other specific scenarios. Be cautious when using `DISTINCT` with `SUM()` or `AVG()` as it can lead to misleading results if not fully understood. For most business reporting, you typically want the sum or average of *all* relevant values, not just the unique ones.

Understanding `NULL` handling is a critical safety note when working with aggregate functions. As mentioned, `SUM`, `AVG`, `MIN`, and `MAX` all ignore `NULL` values. `COUNT(column_name)` also ignores `NULL`s in that specific column. Only `COUNT(*)` includes rows regardless of `NULL` values in any column. Always consider whether `NULL`s should be excluded or treated as a specific value (like 0) before performing aggregations, and use functions like `NVL` or `COALESCE` if you need to convert `NULL`s. Misinterpreting `NULL` handling is a very common source of errors in SQL queries and can lead to incorrect business decisions.

#### Key concepts
*   **Group Functions (Aggregate Functions):** SQL functions that operate on a set of rows and return a single summary value.
*   **`COUNT(*)`:** Counts all rows in a group, including those with `NULL` values.
*   **`COUNT(column_name)`:** Counts non-null values in a specified column within a group.
*   **`SUM(numeric_column)`:** Calculates the total sum of non-null values in a numeric column.
*   **`AVG(numeric_column)`:** Calculates the average of non-null values in a numeric column.
*   **`MIN(column_name)`:** Finds the minimum value in a column (numeric, character, or date), ignoring `NULL`s.
*   **`MAX(column_name)`:** Finds the maximum value in a column (numeric, character, or date), ignoring `NULL`s.
*   **`DISTINCT` keyword:** Used within group functions to consider only unique values before aggregation.
*   **`NULL` Handling:** Group functions generally ignore `NULL` values, except for `COUNT(*)`. Use `NVL` or `COALESCE` to explicitly handle `NULL`s if they should be treated as a specific value.

#### Hands-on activity
**Objective:** Practice using various group functions to summarize employee data.

**Scenario:** Your HR department needs a quick summary of employee statistics.

**Instructions:**
1.  Write a query to find the total number of employees in the `employees` table.
2.  Write a query to find the total salary paid to all employees.
3.  Write a query to find the average salary of all employees.
4.  Write a query to find the highest and lowest salaries, and the earliest and latest hire dates among all employees.
5.  Write a query to count how many *unique* job IDs exist in the `employees` table.
6.  Write a query to find the average commission percentage, ensuring that employees with `NULL` commission are treated as having 0% for the average calculation.

**Starter Code:**
```sql
-- 1. Total number of employees
SELECT -- Your COUNT(*) query here
FROM employees;

-- 2. Total salary
SELECT -- Your SUM() query here
FROM employees;

-- 3. Average salary
SELECT -- Your AVG() query here
FROM employees;

-- 4. Highest/Lowest salary, Earliest/Latest hire date
SELECT -- Your MIN(), MAX() queries here
FROM employees;

-- 5. Count unique job IDs
SELECT -- Your COUNT(DISTINCT) query here
FROM employees;

-- 6. Average commission percentage (treating NULL as 0)
SELECT -- Your AVG(NVL()) query here
FROM employees;
```

#### Assessment idea
1.  **Question:** Consider the `employees` table with the following data snippet:
    | employee_id | salary | commission_pct | department_id |
    | ----------- | ------ | -------------- | ------------- |
    | 100         | 10000  | 0.1            | 90            |
    | 101         | 12000  | NULL           | 90            |
    | 102         | 8000   | 0.2            | 60            |
    | 103         | 9000   | NULL           | 90            |
    | 104         | NULL   | 0.15           | 60            |

    What would be the result of the following SQL query?
    ```sql
    SELECT COUNT(*), COUNT(salary), COUNT(commission_pct), SUM(salary), AVG(commission_pct)
    FROM employees;
    ```
    **Answer:**
    *   `COUNT(*)`: 5 (counts all rows)
    *   `COUNT(salary)`: 4 (counts non-null salaries: 10000, 12000, 8000, 9000)
    *   `COUNT(commission_pct)`: 3 (counts non-null commission_pct: 0.1, 0.2, 0.15)
    *   `SUM(salary)`: 39000 (10000 + 12000 + 8000 + 9000)
    *   `AVG(commission_pct)`: 0.15 ((0.1 + 0.2 + 0.15) / 3)

    **Explanation:** `COUNT(*)` counts every row. `COUNT(column_name)` only counts rows where `column_name` is not `NULL`. `SUM()` and `AVG()` also ignore `NULL` values in their calculations.

2.  **Question:** You need to find out how many *different* job titles are currently held by employees. Which of the following queries would correctly achieve this?
    a) `SELECT COUNT(job_id) FROM employees;`
    b) `SELECT COUNT(*) FROM employees GROUP BY job_id;`
    c) `SELECT COUNT(DISTINCT job_id) FROM employees;`
    d) `SELECT DISTINCT job_id FROM employees;`

    **Answer:** c) `SELECT COUNT(DISTINCT job_id) FROM employees;`

    **Explanation:**
    *   a) `COUNT(job_id)` would count all non-null `job_id` values, which would be the total number of employees if all have a job ID, not the number of *unique* job IDs.
    *   b) `COUNT(*) FROM employees GROUP BY job_id` would return the count of employees *per* job ID, not a single count of unique job IDs.
    *   c) `COUNT(DISTINCT job_id)` correctly counts only the unique occurrences of `job_id` values.
    *   d) `SELECT DISTINCT job_id FROM employees` would list all unique job IDs, but it wouldn't *count* them as a single aggregate value.

#### AI generation note
Create a 12-minute animated video. Start with a visual representation of a simple `employees` table. Demonstrate `COUNT(*)` by highlighting all rows, then `COUNT(salary)` by highlighting only non-null salary rows. Progress to `SUM(salary)` and `AVG(salary)` with a calculator animation. Show `MIN(hire_date)` and `MAX(salary)`. Introduce `DISTINCT` with `COUNT(DISTINCT department_id)` by visually filtering unique department IDs before counting. Include a split-screen example showing `AVG(commission_pct)` vs. `AVG(NVL(commission_pct, 0))`. The tone should be beginner-friendly and visually engaging. End with a 3-question interactive mini-quiz on `NULL` handling in aggregate functions.

### Chapter 4.2 — Grouping Data with GROUP BY and HAVING

#### Learning objectives
*   Explain the purpose and functionality of the `GROUP BY` clause in SQL.
*   Formulate SQL queries that use `GROUP BY` to categorize and summarize data.
*   Identify the rule that all non-aggregated columns in the `SELECT` list must appear in the `GROUP BY` clause.
*   Understand the difference between the `WHERE` clause and the `HAVING` clause.
*   Write complex queries combining `WHERE`, `GROUP BY`, and `HAVING` to filter both individual rows and aggregated groups.

#### Detailed lesson content
While group functions are excellent for summarizing an entire table, often you'll need to summarize data for *subsets* of your data. For example, you might want to know the average salary *per department*, or the total sales *per region*. This is precisely the job of the `GROUP BY` clause. The `GROUP BY` clause divides the rows retrieved by your query into groups based on the values in one or more specified columns. Then, the aggregate functions you include in your `SELECT` statement operate independently on each of these groups.

Let's illustrate with an example. If you want to find the average salary for each department, you can't just use `SELECT AVG(salary) FROM employees;` because that would give you one overall average. Instead, you'd write:
```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```
Here, the `GROUP BY department_id` clause tells Oracle to collect all employees belonging to the same `department_id` into a single group. Then, for each of these groups, the `AVG(salary)` function calculates the average salary. The `department_id` in the `SELECT` list is included so you can see *which* department each average belongs to.

This brings us to a fundamental rule of `GROUP BY`: **Any column in the `SELECT` list that is *not* part of an aggregate function must be included in the `GROUP BY` clause.** If you try to select `employee_id` along with `AVG(salary)` and `department_id` without grouping by `employee_id`, Oracle will raise an error (e.g., "ORA-00979: not a GROUP BY expression"). Why? Because `employee_id` is a unique value for each row. If you group by `department_id`, there are many `employee_id`s within each department. Oracle wouldn't know which `employee_id` to display for the single `AVG(salary)` value of that department. The `GROUP BY` clause essentially dictates the granularity of your aggregation.

You can group by multiple columns. For instance, to find the total salary for each job within each department, you would use:
```sql
SELECT department_id, job_id, SUM(salary)
FROM employees
GROUP BY department_id, job_id
ORDER BY department_id, job_id;
```
In this case, a group is formed by a unique combination of `department_id` and `job_id`. The `ORDER BY` clause is often used with `GROUP BY` to make the aggregated results more readable, though it's not strictly required for the grouping operation itself.

Now, what if you want to filter these groups based on some condition *after* the aggregation has occurred? For example, you might want to see only those departments where the average salary is above a certain threshold. This is where the `HAVING` clause comes in. The `HAVING` clause is used to filter groups that are created by the `GROUP BY` clause. It's similar to `WHERE`, but `WHERE` filters individual rows *before* grouping, while `HAVING` filters groups *after* grouping and aggregation.

Consider this query:
```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 10000;
```
This query first groups employees by `department_id`, then calculates the `AVG(salary)` for each department. Finally, the `HAVING` clause filters out any department whose average salary is not greater than 10000. You cannot use an aggregate function directly in a `WHERE` clause because `WHERE` operates on individual rows, not on the results of aggregates. This is a very common mistake for beginners. Remember the order of operations: `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT` -> `ORDER BY`.

You can also combine `WHERE` and `HAVING` in a single query. For example, to find departments where the average salary of employees hired *after* January 1, 2005, is greater than 12000:
```sql
SELECT department_id, AVG(salary)
FROM employees
WHERE hire_date > TO_DATE('2005-01-01', 'YYYY-MM-DD')
GROUP BY department_id
HAVING AVG(salary) > 12000
ORDER BY department_id;
```
Here, the `WHERE` clause first filters the individual rows, only considering employees hired after 2005. Then, the remaining rows are grouped by `department_id`. After grouping, the `AVG(salary)` is calculated for these filtered groups, and finally, the `HAVING` clause filters these groups further, keeping only those with an average salary greater than 12000. This layered filtering is incredibly powerful for precise data analysis.

A common safety note: always double-check your `GROUP BY` columns. If you omit a non-aggregated column from `GROUP BY` that is in your `SELECT` list, you'll get an error. If you accidentally include a column in `GROUP BY` that you didn't intend to, you might get more groups than expected, leading to over-granulated or incorrect results. For instance, if you want average salary per department but accidentally group by `department_id, employee_id`, you'd effectively get the average salary for each employee (which is just their own salary), defeating the purpose of departmental aggregation.

#### Key concepts
*   **`GROUP BY` clause:** Divides the rows in a table into groups based on the values in one or more columns.
*   **Aggregation:** Group functions operate on each group created by `GROUP BY`.
*   **`GROUP BY` Rule:** All non-aggregated columns in the `SELECT` list must also be present in the `GROUP BY` clause.
*   **`HAVING` clause:** Filters groups based on conditions applied to aggregate functions, after the `GROUP BY` operation.
*   **`WHERE` vs. `HAVING`:** `WHERE` filters individual rows *before* grouping; `HAVING` filters groups *after* grouping and aggregation.
*   **Order of Operations:** `FROM` -> `WHERE` -> `GROUP BY` -> `HAVING` -> `SELECT` -> `ORDER BY`.

#### Hands-on activity
**Objective:** Apply `GROUP BY` and `HAVING` to answer specific business questions about employee data.

**Scenario:** The HR department wants to analyze departmental performance and identify departments with high or low average salaries.

**Instructions:**
1.  Write a query to display the department ID and the total number of employees in each department.
2.  Write a query to display the job ID and the maximum salary for each job.
3.  Write a query to display the department ID, the average salary, and the count of employees for each department, but only for departments where the average salary is greater than 8000.
4.  Write a query to find the total salary for each job ID, but only for those jobs that have more than 5 employees.
5.  Write a query to display the department ID, job ID, and the minimum salary for each unique combination of department and job, but only for employees whose `commission_pct` is not `NULL`.

**Starter Code:**
```sql
-- 1. Total employees per department
SELECT department_id, COUNT(*)
FROM employees
-- Your GROUP BY clause here
ORDER BY department_id;

-- 2. Max salary per job
SELECT job_id, MAX(salary)
FROM employees
-- Your GROUP BY clause here
ORDER BY job_id;

-- 3. Department average salary > 8000
SELECT department_id, AVG(salary), COUNT(*)
FROM employees
-- Your GROUP BY clause here
-- Your HAVING clause here
ORDER BY department_id;

-- 4. Total salary for jobs with > 5 employees
SELECT job_id, SUM(salary)
FROM employees
-- Your GROUP BY clause here
-- Your HAVING clause here
ORDER BY job_id;

-- 5. Min salary per department and job for commissioned employees
SELECT department_id, job_id, MIN(salary)
FROM employees
-- Your WHERE clause here
-- Your GROUP BY clause here
ORDER BY department_id, job_id;
```

#### Assessment idea
1.  **Question:** You need to find the number of employees in each department, but only for departments located in city 'Seattle'. Which of the following queries is correct?
    (Assume `locations` table has `city` and `location_id`, and `departments` table has `department_id`, `location_id`.)
    a) `SELECT d.department_name, COUNT(e.employee_id) FROM employees e, departments d WHERE e.department_id = d.department_id AND d.location_id IN (SELECT location_id FROM locations WHERE city = 'Seattle') GROUP BY d.department_name;`
    b) `SELECT d.department_name, COUNT(e.employee_id) FROM employees e JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name HAVING d.location_id IN (SELECT location_id FROM locations WHERE city = 'Seattle');`
    c) `SELECT d.department_name, COUNT(e.employee_id) FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id WHERE l.city = 'Seattle' GROUP BY d.department_name;`
    d) `SELECT d.department_name, COUNT(e.employee_id) FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id HAVING l.city = 'Seattle' GROUP BY d.department_name;`

    **Answer:** c) `SELECT d.department_name, COUNT(e.employee_id) FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id WHERE l.city = 'Seattle' GROUP BY d.department_name;`

    **Explanation:**
    *   The condition `l.city = 'Seattle'` filters individual rows *before* grouping, so it belongs in the `WHERE` clause.
    *   Option (a) uses an older, implicit join syntax and a subquery, which is functionally correct but less readable and not the preferred ANSI standard.
    *   Option (b) incorrectly places the row-level filter `l.city = 'Seattle'` in the `HAVING` clause, which is meant for group-level filtering.
    *   Option (d) also incorrectly uses `HAVING` for a row-level filter.
    *   Option (c) correctly joins all necessary tables and applies the row-level filter in `WHERE` before grouping by `department_name`.

2.  **Question:** Explain the error in the following query and provide the corrected version to find the average salary for each department.
    ```sql
    SELECT department_id, employee_id, AVG(salary)
    FROM employees
    GROUP BY department_id;
    ```
    **Answer:**
    **Error Explanation:** The query violates the `GROUP BY` rule. The `employee_id` column is in the `SELECT` list but is not an aggregate function and is not included in the `GROUP BY` clause. Since `employee_id` is unique for each employee, Oracle doesn't know which `employee_id` to display for a group of employees in a department.

    **Corrected Version:** To find the average salary for each department, `employee_id` should be removed from the `SELECT` list, as it's not relevant to the departmental average.
    ```sql
    SELECT department_id, AVG(salary)
    FROM employees
    GROUP BY department_id;
    ```
    Alternatively, if the intent was to group by both department and employee (which would effectively mean no grouping for `AVG(salary)` as it would be the employee's own salary), the `GROUP BY` clause would need to include `employee_id`:
    ```sql
    SELECT department_id, employee_id, AVG(salary)
    FROM employees
    GROUP BY department_id, employee_id;
    ```
    However, the most common and logical interpretation of "average salary for each department" implies the first corrected version.

#### AI generation note
Create a 15-minute interactive code demo. Start with a simple `SELECT department_id, AVG(salary) FROM employees;` and show the error. Explain the `GROUP BY` rule visually by highlighting columns. Then, live-code the correct `GROUP BY department_id` query. Introduce `HAVING` by first demonstrating `WHERE salary > 10000` (row filter), then `HAVING AVG(salary) > 10000` (group filter), clearly showing the difference in results. Use a split-screen view for the SQL editor and the query output. Include a step-by-step walkthrough of a query combining `WHERE`, `GROUP BY`, and `HAVING`. End with a coding exercise where learners modify a query to find departments with specific criteria.

### Chapter 4.3 — Understanding Different Types of Joins

#### Learning objectives
*   Explain the necessity of joining tables in a relational database.
*   Differentiate between a Cartesian product (Cross Join) and an Inner Join.
*   Write SQL queries using `INNER JOIN` with `ON` and `USING` clauses.
*   Understand the concept and application of `OUTER JOIN` (LEFT, RIGHT, FULL).
*   Formulate queries using `LEFT JOIN`, `RIGHT JOIN`, and `FULL JOIN` to include unmatched rows.

#### Detailed lesson content
In a well-designed relational database, data is typically spread across multiple tables to minimize redundancy and improve data integrity. For example, employee details might be in an `employees` table, while department details are in a `departments` table. To get a complete picture – like an employee's name along with their department's name – you need a way to combine rows from these separate tables. This is where SQL joins come in. Joins are used to retrieve data from two or more tables based on a logical relationship between them, typically a common column.

Before diving into useful joins, it's important to understand the **Cartesian Product**, also known as a **Cross Join**. This occurs when you join two tables without specifying any join condition. The result is every row from the first table combined with every row from the second table. If `TableA` has 10 rows and `TableB` has 5 rows, a Cartesian product will produce 50 rows (10 * 5). This is almost never what you want in a real-world scenario, as it generates a massive, often meaningless, result set. It can also happen accidentally if you forget your `WHERE` clause in older, implicit join syntax or your `ON` clause in explicit `JOIN` syntax.
```sql
-- Implicit Cartesian Product (older syntax, avoid)
SELECT e.employee_id, d.department_name
FROM employees e, departments d;

-- Explicit Cross Join (ANSI standard, for specific use cases)
SELECT e.employee_id, d.department_name
FROM employees e CROSS JOIN departments d;
```
Both of these would produce a Cartesian product.

The most common type of join is the **INNER JOIN**. An `INNER JOIN` returns only the rows where there is a match in *both* tables based on the join condition. If a row in one table does not have a matching row in the other table, it is excluded from the result. This is the default join behavior if you use the older implicit join syntax with a `WHERE` clause.
```sql
-- Implicit Inner Join (older syntax, still often seen, but less readable)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e, departments d
WHERE e.department_id = d.department_id;

-- Explicit Inner Join (ANSI standard, preferred)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e INNER JOIN departments d
ON e.department_id = d.department_id;
```
The `ON` clause specifies the join condition. In this case, it matches `department_id` from the `employees` table with `department_id` from the `departments` table. If an employee has a `department_id` that doesn't exist in the `departments` table (e.g., `NULL` or an invalid ID), or if a department has no employees, those rows would be excluded from the result.

Sometimes, the columns you're joining on have the same name in both tables. In such cases, you can use the `USING` clause as a shorthand for the `ON` clause, making the query more concise:
```sql
SELECT e.first_name, e.last_name, d.department_name
FROM employees e INNER JOIN departments d
USING (department_id); -- Only works if column name is identical in both tables
```
The `USING` clause is convenient but less flexible than `ON`, which can handle different column names or more complex join conditions (e.g., `ON a.col1 = b.col2 AND a.col3 > b.col4`).

What if you want to see all employees, even those who don't have an assigned department? Or all departments, even if they currently have no employees? This is where **OUTER JOINs** become essential. Outer joins return matching rows *plus* unmatched rows from one or both tables.

1.  **LEFT OUTER JOIN (or LEFT JOIN):** Returns all rows from the "left" table (the first table mentioned in the `FROM` clause) and the matching rows from the "right" table. If there's no match in the right table, the columns from the right table will contain `NULL` values.
    ```sql
    SELECT e.first_name, e.last_name, d.department_name
    FROM employees e LEFT JOIN departments d
    ON e.department_id = d.department_id;
    ```
    This query will list every employee. For employees with a matching department, the `department_name` will be displayed. For employees without a department (e.g., `department_id` is `NULL`), `department_name` will show as `NULL`.

2.  **RIGHT OUTER JOIN (or RIGHT JOIN):** Returns all rows from the "right" table and the matching rows from the "left" table. If there's no match in the left table, the columns from the left table will contain `NULL` values.
    ```sql
    SELECT e.first_name, e.last_name, d.department_name
    FROM employees e RIGHT JOIN departments d
    ON e.department_id = d.department_id;
    ```
    This query will list every department. For departments with matching employees, their names will be displayed. For departments with no employees, `first_name` and `last_name` will show as `NULL`.

3.  **FULL OUTER JOIN (or FULL JOIN):** Returns all rows when there is a match in either the left or right table. It's essentially a combination of `LEFT JOIN` and `RIGHT JOIN`. If a row in the left table has no match in the right, `NULL`s appear for the right table's columns. If a row in the right table has no match in the left, `NULL`s appear for the left table's columns.
    ```sql
    SELECT e.first_name, e.last_name, d.department_name
    FROM employees e FULL JOIN departments d
    ON e.department_id = d.department_id;
    ```
    This query will show all employees (with `NULL` department info if no match), and all departments (with `NULL` employee info if no match), and all matching employee-department pairs.

A common mistake with joins is forgetting the join condition, which can lead to an unintended Cartesian product. Another is confusing `LEFT` and `RIGHT` joins. Always think about which table's rows you want to guarantee in the result set. If you want all rows from the first table in your `FROM` clause, use `LEFT JOIN`. If you want all rows from the second table, use `RIGHT JOIN`. For Oracle-specific syntax, you might still encounter the `(+)` operator for outer joins (e.g., `WHERE e.department_id = d.department_id(+)` for a `LEFT JOIN` from `e` to `d`). While this works, the ANSI SQL `LEFT JOIN`/`RIGHT JOIN` syntax is the industry standard and highly recommended for clarity and portability.

#### Key concepts
*   **Join:** A SQL operation to combine rows from two or more tables based on a related column between them.
*   **Cartesian Product (Cross Join):** Every row from the first table is combined with every row from the second table. Occurs when no join condition is specified.
*   **`INNER JOIN`:** Returns only rows where there is a match in *both* tables based on the join condition.
*   **`ON` clause:** Specifies the join condition for `INNER` and `OUTER` joins.
*   **`USING` clause:** A shorthand for `ON` when the join columns have the same name in both tables.
*   **`OUTER JOIN`:** Returns matching rows plus unmatched rows from one or both tables.
*   **`LEFT OUTER JOIN` (or `LEFT JOIN`):** Returns all rows from the left table and matching rows from the right table. `NULL`s for unmatched right-table columns.
*   **`RIGHT OUTER JOIN` (or `RIGHT JOIN`):** Returns all rows from the right table and matching rows from the left table. `NULL`s for unmatched left-table columns.
*   **`FULL OUTER JOIN` (or `FULL JOIN`):** Returns all rows from both tables, with `NULL`s for unmatched columns on either side.
*   **ANSI SQL Join Syntax:** The preferred, explicit `JOIN` keyword syntax (e.g., `INNER JOIN ... ON`, `LEFT JOIN ... ON`).

#### Hands-on activity
**Objective:** Practice using different types of joins to combine data from `employees`, `departments`, and `locations` tables.

**Scenario:** Your company needs to generate various reports that combine information about employees, their departments, and the locations of those departments.

**Instructions:**
1.  Write an `INNER JOIN` query to display the `employee_id`, `first_name`, `last_name`, and `department_name` for all employees who are assigned to a department.
2.  Modify the previous query to use the `USING` clause instead of `ON`.
3.  Write a `LEFT JOIN` query to display `employee_id`, `first_name`, `last_name`, and `department_name` for *all* employees, including those not assigned to a department.
4.  Write a `RIGHT JOIN` query to display `department_name` and `city` for *all* departments, including those that currently have no employees.
5.  Write a `FULL JOIN` query to display `first_name`, `last_name`, `department_name`, and `city` to see all employees, all departments, and all locations, with `NULL`s where there are no matches.

**Starter Code:**
```sql
-- 1. Inner Join (employee with department)
SELECT e.employee_id, e.first_name, e.last_name, d.department_name
FROM employees e -- Your INNER JOIN clause here
ON e.department_id = d.department_id;

-- 2. Inner Join (using USING clause)
SELECT e.employee_name, d.department_name
FROM employees e -- Your INNER JOIN ... USING clause here;

-- 3. Left Join (all employees, with or without department)
SELECT e.first_name, e.last_name, d.department_name
FROM employees e -- Your LEFT JOIN clause here
ON e.department_id = d.department_id;

-- 4. Right Join (all departments, with or without employees)
SELECT d.department_name, l.city
FROM departments d -- Your RIGHT JOIN to locations here
ON d.location_id = l.location_id;

-- 5. Full Join (all employees, all departments, all locations)
SELECT e.first_name, e.last_name, d.department_name, l.city
FROM employees e -- Your FULL JOIN to departments here
ON e.department_id = d.department_id
-- Your FULL JOIN to locations here
ON d.location_id = l.location_id;
```

#### Assessment idea
1.  **Question:** You need to retrieve a list of all departments and, for each department, the names of any employees working in it. If a department has no employees, it should still appear in the list with `NULL` values for the employee's name. Which type of join should you use, and why? Provide an example query using `departments` and `employees` tables.

    **Answer:**
    You should use a **`RIGHT OUTER JOIN`** (or `RIGHT JOIN`).

    **Explanation:** A `RIGHT JOIN` guarantees that all rows from the "right" table (in this case, `departments`) will be included in the result set. If there are no matching employees in the "left" table (`employees`) for a particular department, the employee-related columns will show `NULL`.

    **Example Query:**
    ```sql
    SELECT d.department_name, e.first_name, e.last_name
    FROM employees e RIGHT JOIN departments d
    ON e.department_id = d.department_id
    ORDER BY d.department_name, e.first_name;
    ```

2.  **Question:** What is the primary difference between an `INNER JOIN` and a `LEFT JOIN`? When would you choose one over the other?

    **Answer:**
    The primary difference lies in how they handle unmatched rows.
    *   An **`INNER JOIN`** returns only the rows where there is a match in *both* tables based on the join condition. If a row in one table doesn't have a corresponding match in the other, it is completely excluded from the result.
    *   A **`LEFT JOIN`** (or `LEFT OUTER JOIN`) returns all rows from the "left" table (the first table specified in the `FROM` clause) and only the matching rows from the "right" table. If a row in the left table has no match in the right table, the columns from the right table will contain `NULL` values.

    **When to choose:**
    *   Choose **`INNER JOIN`** when you only want to see data where there's a complete relationship between the two tables. For example, if you only want to see employees who *are* assigned to a department, and departments that *have* employees.
    *   Choose **`LEFT JOIN`** when you want to ensure all records from the first table are present in your result, regardless of whether they have a match in the second table. For example, if you want a list of *all* employees and their departments (if any), or all products and their associated orders (if any).

#### AI generation note
Create a 10-minute animated video. Start by visually representing two simple tables (`employees` and `departments`) with some matching and some non-matching IDs. First, demonstrate a Cartesian product by showing every employee row combining with every department row. Then, animate the `INNER JOIN` by highlighting only the matching `department_id` pairs. Progress to `LEFT JOIN`, showing all rows from the `employees` table and `NULL`s for unmatched departments. Similarly, show `RIGHT JOIN` with all `departments` rows. Briefly illustrate `FULL JOIN`. Use color-coding to distinguish between matched and unmatched rows. The tone should be clear and conceptually focused. Include a drag-and-drop exercise where learners match join types to descriptions.

### Chapter 4.4 — Advanced Joins and Self-Joins

#### Learning objectives
*   Understand the concept and practical applications of a `SELF-JOIN`.
*   Write SQL queries to perform `SELF-JOINs` for hierarchical data or comparisons within the same table.
*   Explain the use cases for `CROSS JOIN` beyond accidental Cartesian products.
*   Identify and apply `NON-EQUIJOINS` for joining tables based on range conditions.
*   Recognize and avoid common pitfalls when working with advanced join types, especially self-joins.

#### Detailed lesson content
Building upon the foundational join types, we now explore more specialized and powerful join techniques that allow for complex data relationships and analysis. These include `SELF-JOINs`, specific applications of `CROSS JOINs`, and `NON-EQUIJOINS`.

A **`SELF-JOIN`** is a join where a table is joined to itself. This might sound unusual, but it's incredibly useful for comparing rows within the same table or for querying hierarchical data, such as an employee-manager relationship where both employees and managers are stored in the same `employees` table. To perform a `SELF-JOIN`, you must use table aliases to treat the single table as if it were two separate tables. This allows you to refer to different instances of the same table in your query.

Consider the `employees` table, which typically has an `employee_id` and a `manager_id`. The `manager_id` column actually refers to the `employee_id` of another employee in the *same* table. To find out who manages whom, you can self-join the `employees` table:
```sql
SELECT
    e.first_name || ' ' || e.last_name AS Employee,
    m.first_name || ' ' || m.last_name AS Manager
FROM
    employees e JOIN employees m
ON
    e.manager_id = m.employee_id
ORDER BY Employee;
```
In this query, `e` represents the employees, and `m` represents their managers. We join the `employees` table to itself by matching an employee's `manager_id` with another employee's `employee_id`. This effectively links each employee to their direct manager. A common mistake here is forgetting to use aliases or using the same alias for both instances, which will lead to ambiguity and errors. Always use distinct aliases for each instance of the table in a self-join.

Another practical application for self-joins is to compare values within the same table. For example, finding employees who earn more than their manager:
```sql
SELECT
    e.first_name || ' ' || e.last_name AS Employee,
    e.salary AS Employee_Salary,
    m.first_name || ' ' || m.last_name AS Manager,
    m.salary AS Manager_Salary
FROM
    employees e JOIN employees m
ON
    e.manager_id = m.employee_id
WHERE
    e.salary > m.salary
ORDER BY Employee_Salary DESC;
```
This query demonstrates how a self-join combined with a `WHERE` clause can extract specific comparative information from a single table.

While we previously discussed `CROSS JOIN` as something to avoid due to accidental Cartesian products, there are legitimate use cases for it. A `CROSS JOIN` is useful when you intentionally want to generate all possible combinations of rows between two tables. For example, if you have a table of products and a table of colors, and you want to generate a list of every product available in every color, a `CROSS JOIN` would be appropriate. Or, for generating test data where you need to combine every possible input from one set with every possible input from another.
```sql
-- Example: Generate all possible combinations of product categories and regions
SELECT pc.category_name, r.region_name
FROM product_categories pc CROSS JOIN regions r;
```
In such scenarios, the `CROSS JOIN` is explicit and serves a clear purpose, unlike an accidental Cartesian product.

Finally, let's look at **`NON-EQUIJOINS`**. Most joins we've seen so far are `EQUIJOINS`, meaning they use an equality operator (`=`) in their join condition. A `NON-EQUIJOIN` uses an operator other than equals, such as `<`, `>`, `<=`, `>=`, `BETWEEN`, or `!=`. These are particularly useful for joining tables based on range conditions.

A classic example is determining an employee's salary grade from a `job_grades` table, which might define salary ranges (e.g., `min_salary`, `max_salary`) for each grade.
```sql
SELECT
    e.first_name,
    e.last_name,
    e.salary,
    jg.grade_level
FROM
    employees e JOIN job_grades jg
ON
    e.salary BETWEEN jg.min_salary AND jg.max_salary
ORDER BY e.salary DESC;
```
Here, the `employees` table is joined with the `job_grades` table not by an exact match, but by checking if an employee's salary falls within the `min_salary` and `max_salary` range of a specific job grade. This is a powerful way to categorize or enrich data based on ranges. A common mistake is trying to force an `EQUIJOIN` where a `NON-EQUIJOIN` is naturally required, often leading to complex `CASE` statements that are less efficient and harder to read than a simple `BETWEEN` join.

Safety notes for advanced joins:
*   **Self-Joins:** Always use clear, descriptive aliases. Be careful with `OUTER SELF-JOINs` if you need to include rows that don't have a match (e.g., employees who don't have a manager).
*   **Non-Equijoins:** Ensure your range conditions are correct. Overlapping ranges in the lookup table can lead to duplicate rows in your result if not handled carefully. Always test with edge cases.
*   **Performance:** Complex joins, especially those involving many tables or large datasets, can be resource-intensive. Always consider indexing on join columns and analyze query performance.

These advanced join techniques provide immense flexibility in how you combine and analyze your data, moving beyond simple one-to-one or many-to-one relationships to uncover deeper insights.

#### Key concepts
*   **`SELF-JOIN`:** A join where a table is joined to itself, using aliases to treat it as two separate instances. Useful for hierarchical data or comparing rows within the same table.
*   **Table Aliases:** Essential for `SELF-JOINs` to distinguish between the two instances of the same table.
*   **`CROSS JOIN` (Explicit Use):** Intentionally generates all possible combinations of rows between two tables, useful for specific data generation or combinatorial analysis.
*   **`NON-EQUIJOIN`:** A join that uses a comparison operator other than equality (e.g., `<`, `>`, `BETWEEN`) in its join condition.
*   **Range Conditions:** Commonly used in `NON-EQUIJOINS` to match rows based on whether a value falls within a specified range.
*   **Hierarchical Queries:** A common use case for `SELF-JOINs` to represent parent-child relationships within a single table (e.g., employee-manager).

#### Hands-on activity
**Objective:** Practice implementing `SELF-JOINs` and `NON-EQUIJOINS` to solve complex data retrieval problems.

**Scenario:** The HR department wants to analyze employee-manager relationships and understand salary grades.

**Instructions:**
1.  Write a `SELF-JOIN` query to display the `first_name` and `last_name` of each employee along with the `first_name` and `last_name` of their manager. Include employees who do not have a manager (e.g., the CEO).
2.  Write a `SELF-JOIN` query to find employees who were hired *before* their manager. Display the employee's name, hire date, manager's name, and manager's hire date.
3.  Assume a `salary_grades` table exists with `grade_level`, `min_salary`, and `max_salary` columns. Write a `NON-EQUIJOIN` query to display each employee's `first_name`, `last_name`, `salary`, and their corresponding `grade_level`.

**Starter Code:**
```sql
-- Assume job_grades table exists:
-- CREATE TABLE job_grades (
--     grade_level VARCHAR2(3) PRIMARY KEY,
--     min_salary NUMBER,
--     max_salary NUMBER
-- );
-- INSERT INTO job_grades VALUES ('A', 1000, 2999);
-- INSERT INTO job_grades VALUES ('B', 3000, 5999);
-- INSERT INTO job_grades VALUES ('C', 6000, 9999);
-- INSERT INTO job_grades VALUES ('D', 10000, 14999);
-- INSERT INTO job_grades VALUES ('E', 15000, 24999);
-- INSERT INTO job_grades VALUES ('F', 25000, 40000);

-- 1. Employee and their manager (including employees without managers)
SELECT
    e.first_name || ' ' || e.last_name AS Employee,
    m.first_name || ' ' || m.last_name AS Manager
FROM
    employees e -- Your LEFT JOIN to employees (as manager) here
ON
    e.manager_id = m.employee_id
ORDER BY Employee;

-- 2. Employees hired before their manager
SELECT
    e.first_name || ' ' || e.last_name AS Employee_Name,
    e.hire_date AS Employee_Hire_Date,
    m.first_name || ' ' || m.last_name AS Manager_Name,
    m.hire_date AS Manager_Hire_Date
FROM
    employees e JOIN employees m
ON
    e.manager_id = m.employee_id
WHERE
    -- Your condition for hire_date here
ORDER BY Employee_Hire_Date;

-- 3. Employee salary grade
SELECT
    e.first_name,
    e.last_name,
    e.salary,
    jg.grade_level
FROM
    employees e JOIN job_grades jg
ON
    -- Your NON-EQUIJOIN condition here
ORDER BY e.salary DESC;
```

#### Assessment idea
1.  **Question:** You need to list all employees who work in the same department as 'Steven King' (employee_id 100), but exclude Steven King himself. Write a SQL query to achieve this using a `SELF-JOIN`.

    **Answer:**
    ```sql
    SELECT
        e2.first_name,
        e2.last_name,
        e2.department_id
    FROM
        employees e1 JOIN employees e2
    ON
        e1.department_id = e2.department_id
    WHERE
        e1.employee_id = 100 -- Steven King's employee_id
        AND e2.employee_id <> 100; -- Exclude Steven King himself
    ```
    **Explanation:** The query self-joins the `employees` table, aliasing one instance as `e1` (representing Steven King) and the other as `e2` (representing other employees). The join condition `e1.department_id = e2.department_id` finds all employees in the same department. The `WHERE` clause then filters for Steven King's department and excludes Steven King's own `employee_id` from the result.

2.  **Question:** Explain a scenario where a `CROSS JOIN` would be a suitable and intentional choice, rather than an accidental error. Provide a conceptual example.

    **Answer:**
    A `CROSS JOIN` is suitable when you intentionally want to generate every possible combination of rows between two (or more) independent sets of data. It's used when there isn't a direct logical relationship (like a common key) between the tables, but you need to create a combinatorial output.

    **Conceptual Example:**
    Imagine you have a table `Product_Colors` with columns like `color_id`, `color_name` (e.g., Red, Blue, Green) and a table `Product_Sizes` with columns like `size_id`, `size_name` (e.g., Small, Medium, Large). If you want to generate a list of all possible combinations of colors and sizes for a new product line, a `CROSS JOIN` would be ideal.

    ```sql
    SELECT pc.color_name, ps.size_name
    FROM Product_Colors pc CROSS JOIN Product_Sizes ps;
    ```
    This query would produce results like:
    Red, Small
    Red, Medium
    Red, Large
    Blue, Small
    ...and so on, covering every combination. This is useful for generating SKU lists, test data, or comprehensive option matrices.

#### AI generation note
Create a 15-minute live coding demo. Start with the `employees` table structure. First, demonstrate a `SELF-JOIN` to find managers for employees, using clear aliases and explaining the `ON` condition. Then, extend this to find employees who earn more than their managers. Next, introduce the `job_grades` table (show its structure) and live-code a `NON-EQUIJOIN` using the `BETWEEN` operator to assign salary grades. Briefly touch upon a `CROSS JOIN` for a synthetic scenario (e.g., combining `regions` and `product_types` tables). Use a split-screen view of the SQL editor and query results, with diagram overlays to explain the logical flow of the joins. End with an interactive coding challenge to find employees with the same hire date as their manager.

---

## Module 5: Advanced Queries: Subqueries and Set Operators

This module delves into the powerful world of advanced SQL querying techniques, focusing on subqueries and set operators. You'll learn how to embed queries within other queries to solve complex data retrieval problems and how to combine the results of multiple `SELECT` statements efficiently. Mastering these concepts is crucial for anyone aiming to become proficient in SQL and pass the Oracle Database SQL Certified Associate (1Z0-071) exam, as they allow for highly flexible and precise data manipulation.

### Chapter 5.1 — Introduction to Subqueries

#### Learning objectives
*   Explain the fundamental concept and purpose of SQL subqueries.
*   Identify the different types of subqueries: single-row, multiple-row, and multiple-column.
*   Describe the general syntax and placement of subqueries within a `SELECT` statement.
*   Understand the execution order of a query containing a subquery.
*   Recognize common scenarios where subqueries provide an elegant solution.

#### Detailed lesson content
Welcome to the fascinating world of subqueries, a cornerstone of advanced SQL querying that allows you to build highly dynamic and powerful data retrieval statements. At its core, a subquery, also known as an inner query or nested query, is simply a `SELECT` statement embedded within another SQL statement. This outer statement can be another `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement, or even another subquery. The primary purpose of a subquery is to return data that will be used by the outer query to complete its operation. Think of it like asking a question, and then using the answer to that question to ask another, more specific question.

Subqueries are incredibly versatile and can be placed in various clauses of a SQL statement, including the `WHERE` clause, `FROM` clause (as an inline view), `HAVING` clause, and even in the `SELECT` list itself (as scalar subqueries). The key characteristic is that the inner query executes first, and its result is then passed to the outer query. This execution order is fundamental to understanding how subqueries work. The inner query acts as a data source or a condition provider for the outer query, allowing you to filter, compare, or even generate data dynamically based on other data within your database.

Let's consider a practical scenario. Imagine you want to find all employees who earn more than the average salary of all employees in the company. Without subqueries, this would typically require two separate steps: first, calculate the average salary, and then, in a second query, select employees whose salary exceeds that calculated average. A subquery allows you to achieve this in a single, elegant SQL statement. The inner query calculates the average salary, and the outer query uses this single value for comparison. This demonstrates the power of subqueries in simplifying complex, multi-step data retrieval logic into a single, cohesive query.

Subqueries are broadly categorized based on the number of rows and columns they return. A **single-row subquery** returns exactly one row and one column. These are typically used with single-row comparison operators like `=`, `>`, `<`, `>=`, `<=`, and `<>`. If a single-row subquery returns more than one row, Oracle will raise an error (ORA-01427: single-row subquery returns more than one row), because a single-row operator cannot compare against multiple values. Conversely, a **multiple-row subquery** returns one or more rows, but still only one column. These require special multiple-row operators like `IN`, `NOT IN`, `ANY`, and `ALL` to handle the set of values returned. Finally, a **multiple-column subquery** returns one or more rows and two or more columns, often used in conjunction with the `IN` operator for composite key comparisons. We will explore each of these types in detail in subsequent chapters.

Understanding the execution flow is critical. When Oracle encounters a query with a subquery, it first processes the innermost subquery. Once that subquery returns its result set, that result set is then used by the next outer query (or the main query) for its processing. This continues until the outermost query is executed and the final result is presented. This sequential execution model ensures that the necessary data or conditions are available at each stage of the query's evaluation.

A common mistake beginners make is trying to use a single-row comparison operator with a subquery that might return multiple rows. Always consider the potential output of your subquery. If there's any chance it could return more than one row, you must use a multiple-row operator. Another pitfall is assuming that a subquery will always perform better than a join. While subqueries are powerful, they can sometimes be less efficient than equivalent join operations, especially correlated subqueries which execute for each row of the outer query. Always consider the alternatives and test performance when dealing with very large datasets. For now, focus on grasping the fundamental concept: a subquery is a query within a query, executed first to provide data or conditions for the outer query.

```sql
-- Basic example of a single-row subquery in the WHERE clause
-- Find employees who earn more than the average salary of all employees.
SELECT
    employee_id,
    first_name,
    last_name,
    salary
FROM
    employees
WHERE
    salary > (
        SELECT
            AVG(salary)
        FROM
            employees
    );

-- Example of a subquery in the FROM clause (inline view)
-- Find the average salary per department and then filter departments with average salary > 7000.
SELECT
    department_id,
    avg_dept_salary
FROM
    (
        SELECT
            department_id,
            AVG(salary) AS avg_dept_salary
        FROM
            employees
        GROUP BY
            department_id
    )
WHERE
    avg_dept_salary > 7000;
```
In these examples, notice how the inner `SELECT` statement is enclosed in parentheses and acts as a source of information for the outer `SELECT`. This modular approach allows for complex logic to be broken down into manageable parts, making your SQL queries more readable and maintainable.

#### Key concepts
*   **Subquery (Inner Query/Nested Query):** A `SELECT` statement embedded within another SQL statement.
*   **Outer Query:** The main SQL statement that contains the subquery.
*   **Single-Row Subquery:** A subquery that returns exactly one row and one column, used with single-row comparison operators.
*   **Multiple-Row Subquery:** A subquery that returns one or more rows and one column, used with multiple-row comparison operators (`IN`, `ANY`, `ALL`).
*   **Multiple-Column Subquery:** A subquery that returns one or more rows and two or more columns, often used for composite comparisons.
*   **Scalar Subquery:** A subquery that returns a single value (one row, one column) and can be used in the `SELECT` list.
*   **Inline View:** A subquery used in the `FROM` clause, treated as a temporary table.

#### Hands-on activity
**Objective:** Identify employees who work in departments located in 'Seattle'. This requires finding the `location_id` for 'Seattle', then finding `department_id`s associated with that `location_id`, and finally finding employees in those `department_id`s.

**Instructions:**
1.  Write a subquery to find the `location_id` for the city 'Seattle' from the `locations` table.
2.  Use the result of the first subquery in another subquery to find all `department_id`s from the `departments` table that correspond to the 'Seattle' `location_id`.
3.  Finally, use the result of the second subquery to select the `employee_id`, `first_name`, `last_name`, and `department_id` from the `employees` table for all employees working in those departments.

**Starter Code:**
```sql
-- Step 1: Find the location_id for 'Seattle'
SELECT location_id FROM locations WHERE city = 'Seattle';

-- Step 2: Use the location_id to find department_ids
-- (Hint: Nest the first subquery here)
SELECT department_id FROM departments WHERE location_id = ( /* Your first subquery here */ );

-- Step 3: Use the department_ids to find employees
-- (Hint: Nest the second subquery here, consider if it returns one or multiple rows)
SELECT employee_id, first_name, last_name, department_id
FROM employees
WHERE department_id IN ( /* Your second subquery here */ );
```

#### Assessment idea
1.  **Question:** Which of the following statements about subqueries is true?
    a) A subquery always executes after the outer query.
    b) A subquery can only be used in the `WHERE` clause.
    c) A subquery must always return a single row.
    d) A subquery is a `SELECT` statement embedded within another SQL statement.
    e) All subqueries require multiple-row comparison operators.

    **Correct Answer:** d) A subquery is a `SELECT` statement embedded within another SQL statement.
    **Explanation:** Subqueries (inner queries) execute *before* the outer query to provide data. They can be used in various clauses, not just `WHERE`. They can return single rows, multiple rows, or multiple columns, depending on the type and usage. Only multiple-row subqueries require multiple-row comparison operators.

2.  **Question:** You are trying to find the `employee_id` and `salary` of employees who earn exactly the minimum salary of their respective `job_id`. Which type of subquery would be most appropriate to determine the minimum salary for each `job_id`?
    a) A single-row subquery.
    b) A multiple-row subquery.
    c) A multiple-column subquery.
    d) A correlated subquery.

    **Correct Answer:** d) A correlated subquery.
    **Explanation:** To find the minimum salary *for each respective job_id*, the inner query needs to reference the `job_id` from the outer query's current row. This dependency means the inner query executes once for each row of the outer query, which is the definition of a correlated subquery. A single-row subquery would only find *one* minimum salary (e.g., overall minimum), and a multiple-row subquery would return multiple minimums without linking them to specific jobs in the outer query.

#### AI generation note
Create a 12-minute animated video explaining the concept of subqueries. Use a visual analogy of a "data assistant" for the subquery, fetching information first before the main query proceeds. Show simple `SELECT` statements, then introduce a subquery in the `WHERE` clause. Visually demonstrate the execution flow: inner query runs, returns a result, then the outer query uses that result. Include animated diagrams of the `employees` and `departments` tables. Show a common mistake where a single-row operator is used with a subquery that *would* return multiple rows, illustrating the ORA-01427 error. End with a reflection prompt asking learners to think of a real-world scenario where a subquery would be useful.

### Chapter 5.2 — Single-Row Subqueries

#### Learning objectives
*   Construct and execute `SELECT` statements using single-row subqueries.
*   Utilize single-row comparison operators (`=`, `>`, `<`, `>=`, `<=`, `<>`) with subqueries.
*   Identify and troubleshoot the `ORA-01427` error when a single-row subquery returns multiple rows.
*   Apply single-row subqueries in `WHERE`, `HAVING`, and `SELECT` clauses effectively.
*   Understand the importance of data type compatibility between the subquery result and the outer query's comparison column.

#### Detailed lesson content
Building on our introduction to subqueries, let's dive into the most straightforward type: the single-row subquery. As the name suggests, a single-row subquery is expected to return exactly one row and one column. Because it returns a single, scalar value, it can be directly compared using standard single-row comparison operators within the outer query. These operators include equals (`=`), greater than (`>`), less than (`<`), greater than or equal to (`>=`), less than or equal to (`<=`), and not equals (`<>` or `!=`).

The power of single-row subqueries lies in their ability to dynamically provide a comparison value that isn't known until runtime. For example, if you want to find all employees whose salary is greater than the average salary of all employees, you don't know the average salary beforehand. A subquery calculates this average for you, and the outer query then uses that single value for comparison.

```sql
-- Find all employees whose salary is greater than the company's average salary.
SELECT
    employee_id,
    first_name,
    last_name,
    salary
FROM
    employees
WHERE
    salary > (
        SELECT
            AVG(salary)
        FROM
            employees
    );
```
In this example, the inner query `SELECT AVG(salary) FROM employees` will execute first, calculate the average salary (e.g., 6461.68), and then the outer query will become `SELECT ... FROM employees WHERE salary > 6461.68`. This dynamic calculation is incredibly useful.

Single-row subqueries are not limited to the `WHERE` clause. They can also appear in the `HAVING` clause to filter grouped results based on an aggregate comparison. For instance, you might want to find departments where the average salary is higher than the average salary of a specific job title.

```sql
-- Find departments where the average salary is greater than the average salary of 'IT_PROG' job role.
SELECT
    department_id,
    AVG(salary) AS dept_avg_salary
FROM
    employees
GROUP BY
    department_id
HAVING
    AVG(salary) > (
        SELECT
            AVG(salary)
        FROM
            employees
        WHERE
            job_id = 'IT_PROG'
    );
```
Here, the subquery calculates the average salary for IT Programmers, and the `HAVING` clause uses this value to filter the departmental averages.

A crucial point to remember is the **single-row constraint**. If a subquery used with a single-row comparison operator returns more than one row, Oracle will raise an `ORA-01427: single-row subquery returns more than one row` error. This is a very common mistake for beginners. For instance, if you try to find employees whose `department_id` equals the `department_id` of 'Steven King', and there happen to be two employees named 'Steven King' in different departments, the subquery would return two `department_id`s, leading to an error.

```sql
-- This query will cause ORA-01427 if there are multiple employees named 'King'
-- with different department_ids.
SELECT
    employee_id,
    first_name,
    last_name
FROM
    employees
WHERE
    department_id = (
        SELECT
            department_id
        FROM
            employees
        WHERE
            last_name = 'King'
    );
```
To avoid this, you must be absolutely certain that your subquery will return only one row. If there's any doubt, or if you explicitly intend to compare against multiple values, you need to use multiple-row subquery operators like `IN`, `ANY`, or `ALL`, which we'll cover in the next chapter. A good practice is to always test your subquery independently first to verify its output.

Another important consideration is **data type compatibility**. The column returned by the subquery must be implicitly convertible to the data type of the column it's being compared against in the outer query. For example, comparing a `NUMBER` with a `VARCHAR2` might lead to an error or unexpected results if Oracle cannot perform an implicit conversion. Always ensure your comparisons make sense from a data type perspective.

Finally, single-row subqueries can also appear in the `SELECT` list, in which case they are known as **scalar subqueries**. A scalar subquery must return at most one row and one column. If it returns more than one row, it will result in an error. If it returns no rows, the result in the `SELECT` list will be `NULL`.

```sql
-- Display employee details along with the average salary of their department.
-- This is a correlated scalar subquery, as the inner query depends on the outer query's department_id.
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary,
    (
        SELECT
            AVG(salary)
        FROM
            employees
        WHERE
            department_id = e.department_id
    ) AS department_avg_salary
FROM
    employees e;
```
This example shows how a scalar subquery can enrich your `SELECT` list, providing contextual information for each row retrieved by the outer query. While powerful, be mindful of performance with correlated scalar subqueries, as the inner query may execute for every row of the outer query.

#### Key concepts
*   **Single-Row Subquery:** A subquery designed to return exactly one row and one column.
*   **Single-Row Comparison Operators:** `=`, `>`, `<`, `>=`, `<=`, `<>`. Used for comparing a single value.
*   **`ORA-01427` Error:** Occurs when a single-row subquery returns more than one row, and a single-row comparison operator is used.
*   **Scalar Subquery:** A single-row subquery used in the `SELECT` list, returning a single value per outer row.
*   **Data Type Compatibility:** The requirement that the subquery's result data type must be compatible with the outer query's comparison column.

#### Hands-on activity
**Objective:** Retrieve the details of the employee(s) who earn the highest salary in the entire company.

**Instructions:**
1.  Write a subquery to find the maximum salary from the `employees` table.
2.  Use this subquery in the `WHERE` clause of an outer query to select the `employee_id`, `first_name`, `last_name`, `email`, `phone_number`, and `salary` of the employee(s) who match this maximum salary.

**Starter Code:**
```sql
-- Step 1: Find the maximum salary
SELECT MAX(salary) FROM employees;

-- Step 2: Use the max salary to find the employee(s)
SELECT
    employee_id,
    first_name,
    last_name,
    email,
    phone_number,
    salary
FROM
    employees
WHERE
    salary = ( /* Your subquery to find max salary here */ );
```

#### Assessment idea
1.  **Question:** Consider the following query:
    ```sql
    SELECT employee_id, first_name
    FROM employees
    WHERE department_id = (SELECT department_id FROM departments WHERE location_id = 1700);
    ```
    If the subquery `(SELECT department_id FROM departments WHERE location_id = 1700)` returns department IDs 10, 20, and 30, what will be the outcome when this full query is executed in Oracle?
    a) It will return employees from departments 10, 20, and 30.
    b) It will return employees from department 10 only.
    c) It will return an `ORA-01427: single-row subquery returns more than one row` error.
    d) It will return no rows.

    **Correct Answer:** c) It will return an `ORA-01427: single-row subquery returns more than one row` error.
    **Explanation:** The `=` operator is a single-row comparison operator. If the subquery returns multiple values (10, 20, 30), the outer query's `WHERE` clause attempts to compare `department_id` with a set of values using a single-value operator, which is invalid and causes the `ORA-01427` error. To handle multiple values, a multiple-row operator like `IN` would be required.

2.  **Question:** You want to display the `employee_id`, `first_name`, `salary`, and the `job_title` of the manager for each employee. Assume the `employees` table has a `manager_id` column that references another `employee_id`. Which of the following best describes the subquery needed to get the manager's `job_title` for each employee in the `SELECT` list?
    a) A multiple-row subquery in the `WHERE` clause.
    b) A single-row subquery in the `HAVING` clause.
    c) A correlated scalar subquery in the `SELECT` list.
    d) A multiple-column subquery in the `FROM` clause.

    **Correct Answer:** c) A correlated scalar subquery in the `SELECT` list.
    **Explanation:** To get the manager's `job_title` *for each specific employee*, the subquery needs to look up the `job_title` based on the current employee's `manager_id`. This means the subquery depends on the outer query's row (`e.manager_id`), making it correlated. Since it's returning a single value (`job_title`) for each outer row and is placed in the `SELECT` list, it's a scalar subquery.

#### AI generation note
Produce a 10-minute interactive code demo. Start by demonstrating a simple single-row subquery (e.g., finding employees above average salary). Then, introduce the `ORA-01427` error by showing a subquery that *should* return multiple rows but is used with a single-row operator. Guide learners through fixing this by first running the subquery independently to see its output. Show how to use a scalar subquery in the `SELECT` list to add contextual data (e.g., department average salary next to each employee's salary). Use a split-screen view with SQL Developer or SQL*Plus on one side and the query results on the other. Include a mini-quiz with two questions about identifying single-row subquery errors.

### Chapter 5.3 — Multiple-Row Subqueries

#### Learning objectives
*   Utilize multiple-row comparison operators (`IN`, `NOT IN`, `ANY`, `ALL`) with subqueries.
*   Construct queries that correctly handle subqueries returning multiple rows.
*   Differentiate between the behavior and use cases of `IN`, `ANY`, and `ALL` operators.
*   Identify common pitfalls when using `NULL` values with `IN` and `NOT IN` operators.
*   Apply multiple-row subqueries to solve complex data filtering problems.

#### Detailed lesson content
Having mastered single-row subqueries, we now advance to multiple-row subqueries, which are essential when your inner query is expected to return more than one value. Unlike single-row subqueries that use operators like `=`, `>`, or `<`, multiple-row subqueries require a different set of comparison operators designed to handle a list of values. These operators are `IN`, `NOT IN`, `ANY`, and `ALL`. Understanding when and how to use each of these is crucial for writing effective and error-free SQL.

The `IN` operator is perhaps the most commonly used multiple-row operator. It evaluates to `TRUE` if the outer query's expression matches *any* value in the list returned by the subquery. This is incredibly useful for finding rows that belong to a specific set of categories or conditions.

```sql
-- Find employees who work in departments located in London or Oxford.
-- First, find department_ids for London and Oxford.
SELECT
    employee_id,
    first_name,
    last_name,
    department_id
FROM
    employees
WHERE
    department_id IN (
        SELECT
            department_id
        FROM
            departments
        WHERE
            location_id IN (
                SELECT
                    location_id
                FROM
                    locations
                WHERE
                    city IN ('London', 'Oxford')
            )
    );
```
In this nested example, the innermost subquery finds `location_id`s for 'London' and 'Oxford'. The next subquery uses these `location_id`s with `IN` to find corresponding `department_id`s. Finally, the outer query uses these `department_id`s with `IN` to retrieve employee details. This demonstrates how subqueries can be chained to solve multi-layered problems.

The `NOT IN` operator works in the opposite way: it evaluates to `TRUE` if the outer query's expression does *not* match any value in the list returned by the subquery. It's used to exclude rows based on a set of criteria.

```sql
-- Find employees who do NOT work in departments located in the USA.
SELECT
    employee_id,
    first_name,
    last_name,
    department_id
FROM
    employees
WHERE
    department_id NOT IN (
        SELECT
            department_id
        FROM
            departments
        WHERE
            location_id IN (
                SELECT
                    location_id
                FROM
                    locations
                WHERE
                    country_id = 'US'
            )
    );
```
A significant common mistake with `NOT IN` involves `NULL` values. If the subquery returns even a single `NULL` value, the entire `NOT IN` condition will evaluate to `UNKNOWN` (which behaves like `FALSE` in a `WHERE` clause), resulting in no rows being returned by the outer query. This is because `NOT IN` essentially translates to a series of `AND` conditions (`expr != val1 AND expr != val2 AND expr != NULL`). Since `anything != NULL` is always `UNKNOWN`, the entire condition becomes `UNKNOWN`. Always ensure your subqueries for `NOT IN` do not return `NULL`s, or handle them explicitly (e.g., `WHERE column_name IS NOT NULL`).

The `ANY` operator is used with single-row comparison operators (`=ANY`, `>ANY`, `<ANY`, etc.) and means "match at least one." For example, `>ANY` means "greater than at least one value" (which is equivalent to `>MIN`), and `<ANY` means "less than at least one value" (which is equivalent to `<MAX`).

```sql
-- Find employees whose salary is greater than ANY salary of an 'IT_PROG' (IT Programmer).
-- This means finding employees whose salary is greater than the lowest IT_PROG salary.
SELECT
    employee_id,
    first_name,
    last_name,
    salary
FROM
    employees
WHERE
    salary > ANY (
        SELECT
            salary
        FROM
            employees
        WHERE
            job_id = 'IT_PROG'
    );
```
In this example, if IT_PROG salaries are 6000, 7000, 8000, then `salary > ANY (6000, 7000, 8000)` is true for any employee earning more than 6000 (the minimum of the subquery results).

The `ALL` operator, also used with single-row comparison operators (`=ALL`, `>ALL`, `<ALL`, etc.), means "match all." For example, `>ALL` means "greater than all values" (which is equivalent to `>MAX`), and `<ALL` means "less than all values" (which is equivalent to `<MIN`).

```sql
-- Find employees whose salary is greater than ALL salaries of an 'IT_PROG'.
-- This means finding employees whose salary is greater than the highest IT_PROG salary.
SELECT
    employee_id,
    first_name,
    last_name,
    salary
FROM
    employees
WHERE
    salary > ALL (
        SELECT
            salary
        FROM
            employees
        WHERE
            job_id = 'IT_PROG'
    );
```
If IT_PROG salaries are 6000, 7000, 8000, then `salary > ALL (6000, 7000, 8000)` is true for any employee earning more than 8000 (the maximum of the subquery results).

A common misunderstanding is confusing `IN` with `=ANY`. While `IN` is logically equivalent to `=ANY`, it's generally preferred for readability and often optimized better by Oracle. The `ANY` and `ALL` operators are more commonly used with `>` or `<` to establish thresholds based on a set of values.

When using multiple-row subqueries, ensure that the number of columns returned by the subquery matches the number of columns being compared in the outer query, especially when dealing with composite conditions (though this is less common with `IN`, `ANY`, `ALL` which typically compare a single column). Also, remember the data type compatibility rule from single-row subqueries: the data type of the subquery's result column must be compatible with the outer query's comparison column. By carefully selecting the appropriate multiple-row operator and being mindful of `NULL` handling, you can write powerful and precise queries.

#### Key concepts
*   **Multiple-Row Subquery:** A subquery that returns one or more rows (and typically one column).
*   **`IN` Operator:** Evaluates to `TRUE` if the outer query's expression matches *any* value in the subquery's result set.
*   **`NOT IN` Operator:** Evaluates to `TRUE` if the outer query's expression does *not* match *any* value in the subquery's result set.
*   **`ANY` Operator:** Used with single-row comparison operators (`=ANY`, `>ANY`, `<ANY`) to mean "compare with *at least one* value in the subquery's result set."
*   **`ALL` Operator:** Used with single-row comparison operators (`=ALL`, `>ALL`, `<ALL`) to mean "compare with *all* values in the subquery's result set."
*   **`NULL` Handling with `NOT IN`:** If a subquery for `NOT IN` returns `NULL`, the entire condition becomes `UNKNOWN`, often leading to zero results.

#### Hands-on activity
**Objective:** Identify employees who are *not* managers. You can determine who is a manager by checking if their `employee_id` appears in the `manager_id` column of any other employee.

**Instructions:**
1.  Write a subquery to select all distinct `manager_id`s from the `employees` table. This list represents all employees who are managers.
2.  Use the `NOT IN` operator with this subquery in the `WHERE` clause of an outer query to select the `employee_id`, `first_name`, `last_name`, and `job_id` for all employees who are not managers.
3.  **Safety Note:** Be mindful of `NULL` values. The `manager_id` column can contain `NULL`s for employees who do not have a manager (e.g., the CEO). Ensure your subquery explicitly handles `NULL`s if they are present in the `manager_id` column, as `NOT IN` with `NULL` can lead to unexpected results.

**Starter Code:**
```sql
-- Step 1: Find all distinct manager_ids
SELECT DISTINCT manager_id FROM employees;

-- Step 2: Use NOT IN to find non-managers
SELECT
    employee_id,
    first_name,
    last_name,
    job_id
FROM
    employees
WHERE
    employee_id NOT IN (
        SELECT DISTINCT manager_id
        FROM employees
        WHERE manager_id IS NOT NULL -- Crucial for NOT IN!
    );
```

#### Assessment idea
1.  **Question:** You want to find all employees whose `salary` is less than the maximum salary of *any* employee in department 90. Which of the following clauses correctly achieves this using a multiple-row subquery?
    a) `WHERE salary < ALL (SELECT salary FROM employees WHERE department_id = 90)`
    b) `WHERE salary < ANY (SELECT salary FROM employees WHERE department_id = 90)`
    c) `WHERE salary IN (SELECT salary FROM employees WHERE department_id = 90)`
    d) `WHERE salary = (SELECT MAX(salary) FROM employees WHERE department_id = 90)`

    **Correct Answer:** b) `WHERE salary < ANY (SELECT salary FROM employees WHERE department_id = 90)`
    **Explanation:** The question asks for salaries less than the maximum salary of *any* employee in department 90. The `< ANY` operator means "less than at least one value," which is equivalent to "less than the maximum value" in the subquery's result set. `ALL` would mean less than *all* salaries (i.e., less than the minimum), `IN` checks for exact matches, and `=` is a single-row operator which would fail if the subquery returned multiple salaries.

2.  **Question:** An instructor writes the following query to find employees who do not work in departments managed by employee 100:
    ```sql
    SELECT employee_id, first_name
    FROM employees
    WHERE department_id NOT IN (
        SELECT department_id
        FROM departments
        WHERE manager_id = 100 OR manager_id IS NULL
    );
    ```
    If the subquery returns `(10, 20, NULL)`, what will be the result of the outer query?
    a) It will return employees from departments not equal to 10 or 20.
    b) It will return employees from departments not equal to 10.
    c) It will return no rows.
    d) It will return an `ORA-01427` error.

    **Correct Answer:** c) It will return no rows.
    **Explanation:** When `NOT IN` is used with a subquery that returns a `NULL` value, the entire `NOT IN` condition evaluates to `UNKNOWN` (which acts as `FALSE` in a `WHERE` clause). This is because `expr NOT IN (val1, val2, NULL)` is equivalent to `(expr != val1 AND expr != val2 AND expr != NULL)`. Since `expr != NULL` always evaluates to `UNKNOWN`, the entire `AND` condition becomes `UNKNOWN`, and no rows are returned. This is a critical point to remember when using `NOT IN`.

#### AI generation note
Design a 15-minute interactive lab walkthrough. Begin by demonstrating `IN` with a clear example (e.g., finding employees in specific job IDs). Then, introduce `NOT IN` and immediately highlight the `NULL` problem by showing a subquery that *intentionally* returns `NULL` and the resulting empty set. Guide learners to fix it using `WHERE manager_id IS NOT NULL`. Follow with clear examples of `ANY` and `ALL` using salary comparisons, explaining the difference between "greater than *any*" (greater than min) and "greater than *all*" (greater than max). Use a step-by-step terminal demo with SQL*Plus or SQL Developer. Include a short coding challenge where learners modify a query to use `ANY` instead of `IN` for a specific scenario.

### Chapter 5.4 — Multiple-Column Subqueries and Correlated Subqueries

#### Learning objectives
*   Construct and utilize multiple-column subqueries for complex comparisons.
*   Understand the concept and execution flow of correlated subqueries.
*   Differentiate between non-correlated and correlated subqueries.
*   Identify scenarios where correlated subqueries are necessary or beneficial.
*   Recognize potential performance implications of correlated subqueries and alternatives like joins.

#### Detailed lesson content
As we continue our journey into advanced querying, we encounter two more sophisticated forms of subqueries: multiple-column subqueries and correlated subqueries. These types unlock even greater flexibility and precision in data retrieval, allowing you to solve problems that are difficult or impossible with simpler subquery forms or even standard joins alone.

A **multiple-column subquery** is one that returns more than one column in its result set. This is particularly useful when you need to compare multiple columns simultaneously from the outer query against a composite set of values returned by the subquery. The most common operator used with multiple-column subqueries is `IN`, where the outer query compares a list of columns enclosed in parentheses against the corresponding list of columns returned by the subquery.

Imagine you want to find employees who have the same `job_id` AND `salary` as any employee in department 80. This is a perfect use case for a multiple-column subquery.

```sql
-- Find employees who have the same job_id and salary as any employee in department 80.
SELECT
    employee_id,
    first_name,
    last_name,
    job_id,
    salary
FROM
    employees
WHERE
    (job_id, salary) IN (
        SELECT
            job_id,
            salary
        FROM
            employees
        WHERE
            department_id = 80
    );
```
In this example, the outer query compares pairs of `(job_id, salary)` values against the pairs returned by the inner query. Both the outer query's comparison list and the subquery's `SELECT` list must have the same number of columns, and their data types must be compatible in corresponding positions. This allows for very precise filtering based on composite conditions.

Next, we tackle **correlated subqueries**, which represent a significant conceptual leap. Unlike all the subqueries we've discussed so far (which are non-correlated, meaning they execute once and pass their result to the outer query), a correlated subquery is one that references a column from the outer query. This means the inner query cannot be executed independently; it depends on the values of the outer query. Consequently, a correlated subquery executes *once for each row* processed by the outer query.

Consider the problem: "Find all employees who earn more than the average salary *in their own department*." This is a classic scenario for a correlated subquery. To calculate the average salary for an employee's specific department, the inner query needs to know which department the current outer query row belongs to.

```sql
-- Find employees who earn more than the average salary in their own department.
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary,
    e.department_id
FROM
    employees e
WHERE
    e.salary > (
        SELECT
            AVG(salary)
        FROM
            employees
        WHERE
            department_id = e.department_id -- This is the correlation!
    );
```
Notice the `e.department_id` in the subquery's `WHERE` clause. The `e` is an alias for the `employees` table in the outer query. For each row `e` selected by the outer query, the subquery calculates the average salary *only for that specific `e.department_id`*. This makes the subquery "correlated" to the outer query.

Correlated subqueries are often used with `EXISTS` and `NOT EXISTS` operators. The `EXISTS` operator checks for the existence of rows returned by the subquery. If the subquery returns any rows, `EXISTS` evaluates to `TRUE`; otherwise, `FALSE`. It's very efficient because the subquery can stop processing as soon as it finds the first matching row.

```sql
-- Find departments that have at least one employee.
SELECT
    d.department_id,
    d.department_name
FROM
    departments d
WHERE
    EXISTS (
        SELECT
            1 -- We just need to check for existence, so '1' is a common placeholder
        FROM
            employees e
        WHERE
            e.department_id = d.department_id
    );
```
Conversely, `NOT EXISTS` evaluates to `TRUE` if the subquery returns no rows. This is excellent for finding records that *do not* have a corresponding entry in another table.

```sql
-- Find departments that have NO employees.
SELECT
    d.department_id,
    d.department_name
FROM
    departments d
WHERE
    NOT EXISTS (
        SELECT
            1
        FROM
            employees e
        WHERE
            e.department_id = d.department_id
    );
```
**Common Mistakes and Performance Considerations:**
While powerful, correlated subqueries can be performance intensive, especially on large datasets, because the inner query executes repeatedly. Often, an equivalent join operation can be more efficient. For instance, the "employees earning more than their departmental average" problem can sometimes be solved with an inline view (a subquery in the `FROM` clause) and a join, which might perform better.

```sql
-- Alternative to correlated subquery using an inline view and join:
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.salary,
    e.department_id
FROM
    employees e
JOIN
    (SELECT department_id, AVG(salary) AS avg_dept_salary FROM employees GROUP BY department_id) d_avg
ON
    e.department_id = d_avg.department_id
WHERE
    e.salary > d_avg.avg_dept_salary;
```
This alternative calculates all departmental averages *once* in the inline view `d_avg`, and then joins this result with the `employees` table. This avoids the repetitive execution of the subquery for each employee row. Always consider if a join or an inline view can achieve the same result as a correlated subquery with better performance. However, some problems are inherently best solved with correlated subqueries, particularly those involving `EXISTS`/`NOT EXISTS` for checking existence.

#### Key concepts
*   **Multiple-Column Subquery:** A subquery that returns two or more columns, used for composite comparisons, typically with the `IN` operator.
*   **Correlated Subquery:** A subquery that references a column from the outer query, causing it to execute once for each row processed by the outer query.
*   **`EXISTS` Operator:** Used with correlated subqueries to check for the existence of rows returned by the subquery. Returns `TRUE` if any rows are found, `FALSE` otherwise.
*   **`NOT EXISTS` Operator:** Used with correlated subqueries to check for the non-existence of rows returned by the subquery. Returns `TRUE` if no rows are found, `FALSE` otherwise.
*   **Performance Implications:** Correlated subqueries can be less efficient than joins or inline views due to their row-by-row execution.

#### Hands-on activity
**Objective:** Find all employees who are the highest-paid employee within their own `job_id`. This means their salary must be equal to the maximum salary for that specific `job_id`.

**Instructions:**
1.  Write a correlated subquery in the `WHERE` clause.
2.  The outer query should select `employee_id`, `first_name`, `last_name`, `job_id`, and `salary` from the `employees` table (aliased as `e`).
3.  The inner subquery should find the `MAX(salary)` from the `employees` table (aliased as `s`).
4.  The correlation condition in the inner subquery's `WHERE` clause should ensure that the maximum salary is calculated only for the `job_id` corresponding to the current row `e` from the outer query (`s.job_id = e.job_id`).
5.  The outer query's `WHERE` clause should compare `e.salary` with the result of this correlated subquery.

**Starter Code:**
```sql
SELECT
    e.employee_id,
    e.first_name,
    e.last_name,
    e.job_id,
    e.salary
FROM
    employees e
WHERE
    e.salary = (
        SELECT
            MAX(s.salary)
        FROM
            employees s
        WHERE
            s.job_id = e.job_id -- This is the correlation!
    );
```

#### Assessment idea
1.  **Question:** You need to retrieve the `department_name` for all departments that do *not* have any employees assigned to them. Which of the following approaches is most appropriate?
    a) Use a `LEFT JOIN` between `departments` and `employees` and filter for `NULL` employee IDs.
    b) Use a `NOT IN` subquery comparing `department_id`s.
    c) Use a `NOT EXISTS` correlated subquery.
    d) Use a multiple-column subquery.

    **Correct Answer:** c) Use a `NOT EXISTS` correlated subquery.
    **Explanation:** `NOT EXISTS` is specifically designed for checking the non-existence of related rows. It's often more efficient than `NOT IN` when dealing with potential `NULL`s in the subquery result or when the subquery is correlated. While a `LEFT JOIN` and filtering for `NULL`s in the right table's primary key is also a valid and often more performant approach, `NOT EXISTS` directly expresses the "does not have any" condition. `NOT IN` is problematic if the subquery returns `NULL`.

2.  **Question:** Consider the following query:
    ```sql
    SELECT d.department_id, d.department_name
    FROM departments d
    WHERE (d.manager_id, d.location_id) IN (
        SELECT e.employee_id, e.department_id
        FROM employees e
        WHERE e.salary > 10000
    );
    ```
    What is a critical requirement for this query to execute successfully without a column mismatch error?
    a) The subquery must return only one row.
    b) The `manager_id` and `location_id` in the outer query must be of the same data type.
    c) The number of columns in `(d.manager_id, d.location_id)` must match the number of columns in `(e.employee_id, e.department_id)`, and their corresponding data types must be compatible.
    d) The subquery must not contain any `NULL` values.

    **Correct Answer:** c) The number of columns in `(d.manager_id, d.location_id)` must match the number of columns in `(e.employee_id, e.department_id)`, and their corresponding data types must be compatible.
    **Explanation:** This is a multiple-column subquery. For such queries, Oracle requires that the number of columns in the outer query's comparison list (e.g., `(col1, col2)`) exactly matches the number of columns selected by the inner subquery. Furthermore, the data types of corresponding columns must be compatible for comparison. The subquery can return multiple rows, and `NULL` values are handled correctly by `IN` (unlike `NOT IN`).

#### AI generation note
Create a 15-minute live coding video demonstrating multiple-column and correlated subqueries. Start with a clear example of a multiple-column subquery using `(col1, col2) IN (...)`. Then, transition to correlated subqueries by showing the "employees earning more than their departmental average" problem. Visually highlight the correlation (`e.department_id = s.department_id`). Next, demonstrate `EXISTS` and `NOT EXISTS` with practical examples (e.g., departments with/without employees). Discuss performance implications, perhaps by showing a slower correlated query vs. a faster join/inline view alternative (no need for actual benchmark, just conceptual explanation). Use SQL Developer with clear query execution and result views. Include a hands-on coding exercise where learners convert a simple join into a correlated subquery using `EXISTS`.

### Chapter 5.5 — Set Operators (UNION, UNION ALL, INTERSECT, MINUS)

#### Learning objectives
*   Understand the purpose and functionality of SQL set operators.
*   Apply `UNION` and `UNION ALL` to combine result sets from multiple `SELECT` statements.
*   Differentiate between `UNION` (removes duplicates) and `UNION ALL` (retains duplicates).
*   Utilize `INTERSECT` to find common rows between two result sets.
*   Employ `MINUS` to identify rows present in one result set but not in another.
*   Adhere to the rules for using set operators, including column count and data type matching.

#### Detailed lesson content
Beyond subqueries, SQL offers another powerful mechanism for combining the results of multiple `SELECT` statements: **set operators**. These operators allow you to treat the output of `SELECT` statements as mathematical sets and perform operations like union, intersection, and difference. This is incredibly useful when you need to merge data from different tables or different parts of the same table, where the data structures are compatible but the filtering criteria are distinct.

There are four primary set operators in Oracle SQL: `UNION`, `UNION ALL`, `INTERSECT`, and `MINUS`. Each serves a specific purpose in combining or comparing result sets.

The `UNION` operator combines the result sets of two or more `SELECT` statements into a single result set. The key characteristic of `UNION` is that it automatically removes duplicate rows from the final result. If a row appears in both `SELECT` statements, it will only appear once in the `UNION` result. The order of rows in the final output is not guaranteed unless an `ORDER BY` clause is used, which must be placed at the very end of the entire combined query.

```sql
-- Combine the first names of all employees and all customers, removing duplicates.
-- (Assuming a 'customers' table with a 'first_name' column for demonstration)
SELECT first_name FROM employees
UNION
SELECT first_name FROM customers;
```
**Rules for Set Operators:**
For any set operator to work correctly, the `SELECT` statements being combined must adhere to two strict rules:
1.  **Number of Columns:** Each `SELECT` statement must have the same number of columns in its `SELECT` list.
2.  **Data Types:** The data type of each corresponding column (by position) in the `SELECT` statements must be compatible. For example, the first column of the first `SELECT` must be compatible with the first column of the second `SELECT`, and so on. Column names in the final result set are typically taken from the first `SELECT` statement.

The `UNION ALL` operator is similar to `UNION` in that it combines result sets, but with one crucial difference: it retains all duplicate rows. If a row appears in both `SELECT` statements, or multiple times within a single `SELECT` statement, it will appear that many times in the `UNION ALL` result. This makes `UNION ALL` generally faster than `UNION` because it avoids the overhead of sorting and duplicate removal.

```sql
-- Combine all employee and customer first names, including duplicates.
SELECT first_name FROM employees
UNION ALL
SELECT first_name FROM customers;
```
Choose `UNION ALL` when you need to see every single row and performance is a concern, and `UNION` when you need a distinct list of combined items.

The `INTERSECT` operator returns only the rows that are common to all `SELECT` statements involved. It finds the intersection of the result sets. Like `UNION`, `INTERSECT` implicitly removes duplicate rows from its final output.

```sql
-- Find first names that exist in BOTH the employees table AND the customers table.
SELECT first_name FROM employees
INTERSECT
SELECT first_name FROM customers;
```
This is useful for identifying entities that exist in multiple categories or lists.

The `MINUS` operator (known as `EXCEPT` in some other SQL dialects like SQL Server and PostgreSQL) returns rows that are present in the first `SELECT` statement but *not* in the second `SELECT` statement. It effectively performs a set difference. Like `UNION` and `INTERSECT`, `MINUS` also removes duplicates from its final result.

```sql
-- Find first names that exist in the employees table but NOT in the customers table.
SELECT first_name FROM employees
MINUS
SELECT first_name FROM customers;
```
**Common Mistakes and Best Practices:**
*   **Column Mismatch:** The most frequent error is having a different number of columns or incompatible data types between the `SELECT` statements. Always double-check your `SELECT` lists.
*   **`ORDER BY` Placement:** The `ORDER BY` clause can only be used once at the very end of the entire combined query. It orders the final result set. You cannot order individual `SELECT` statements within a set operation.
    ```sql
    -- Correct ORDER BY placement
    SELECT first_name, last_name FROM employees
    UNION
    SELECT first_name, last_name FROM customers
    ORDER BY first_name, last_name;

    -- Incorrect (will cause error):
    -- SELECT first_name FROM employees ORDER BY first_name
    -- UNION
    -- SELECT first_name FROM customers;
    ```
*   **Performance:** `UNION ALL` is generally faster than `UNION`, `INTERSECT`, and `MINUS` because it doesn't perform duplicate removal and sorting. Use `UNION ALL` if you don't need distinct results.
*   **Parentheses:** You can combine multiple set operations and control their order of execution using parentheses. For example, `(SELECT ... UNION SELECT ...) INTERSECT (SELECT ...)`.

Set operators are a powerful tool for combining and comparing data in a structured way. They allow you to answer complex business questions by merging information from disparate sources or identifying unique and common elements across different data sets. Mastering them will significantly enhance your SQL querying capabilities.

#### Key concepts
*   **Set Operators:** SQL operators (`UNION`, `UNION ALL`, `INTERSECT`, `MINUS`) used to combine or compare the results of multiple `SELECT` statements.
*   **`UNION`:** Combines result sets and removes duplicate rows.
*   **`UNION ALL`:** Combines result sets and retains all duplicate rows. Generally faster than `UNION`.
*   **`INTERSECT`:** Returns only the rows that are common to all combined result sets. Removes duplicates.
*   **`MINUS`:** Returns rows present in the first `SELECT` statement but not in the second. Removes duplicates.
*   **Rules for Set Operators:**
    *   All `SELECT` statements must have the same number of columns.
    *   Corresponding columns must have compatible data types.
*   **`ORDER BY` Clause:** Can only be used once at the very end of the entire set operation.

#### Hands-on activity
**Objective:** Identify `job_id`s that are currently held by employees but are *not* listed as valid `job_id`s in the `jobs` table (perhaps due to data entry errors or outdated `jobs` table entries).

**Instructions:**
1.  Write a `SELECT` statement to retrieve all distinct `job_id`s from the `employees` table.
2.  Write another `SELECT` statement to retrieve all distinct `job_id`s from the `jobs` table.
3.  Use the `MINUS` operator to find `job_id`s that exist in the `employees` table but not in the `jobs` table.
4.  **Extension:** Use `INTERSECT` to find `job_id`s that are common to both tables (valid job IDs).

**Starter Code:**
```sql
-- Step 1: Distinct job_ids from employees
SELECT DISTINCT job_id FROM employees;

-- Step 2: Distinct job_ids from jobs
SELECT job_id FROM jobs;

-- Step 3: Find job_ids in employees but not in jobs (using MINUS)
SELECT DISTINCT job_id FROM employees
MINUS
SELECT job_id FROM jobs;

-- Step 4 (Extension): Find common job_ids (using INTERSECT)
SELECT DISTINCT job_id FROM employees
INTERSECT
SELECT job_id FROM jobs;
```

#### Assessment idea
1.  **Question:** You have two `SELECT` statements, `SELECT column1 FROM tableA` and `SELECT column2 FROM tableB`. Both `column1` and `column2` are of `VARCHAR2` type. If `tableA` contains ('Apple', 'Banana', 'Cherry') and `tableB` contains ('Banana', 'Date', 'Apple'), what will be the result of `SELECT column1 FROM tableA UNION SELECT column2 FROM tableB;`?
    a) ('Apple', 'Banana', 'Cherry', 'Date')
    b) ('Apple', 'Banana', 'Cherry', 'Banana', 'Date', 'Apple')
    c) ('Apple', 'Banana')
    d) ('Cherry')

    **Correct Answer:** a) ('Apple', 'Banana', 'Cherry', 'Date')
    **Explanation:** The `UNION` operator combines the results of both `SELECT` statements and automatically removes duplicate rows. The distinct values from both sets are 'Apple', 'Banana', 'Cherry', and 'Date'.

2.  **Question:** Which of the following statements about set operators in Oracle SQL is FALSE?
    a) `UNION ALL` is generally faster than `UNION` because it does not remove duplicate rows.
    b) The `ORDER BY` clause can be applied to individual `SELECT` statements within a set operation to sort their respective results before combining.
    c) All `SELECT` statements combined by a set operator must have the same number of columns.
    d) `MINUS` returns rows present in the first query but not in the second.

    **Correct Answer:** b) The `ORDER BY` clause can be applied to individual `SELECT` statements within a set operation to sort their respective results before combining.
    **Explanation:** This statement is false. The `ORDER BY` clause can only be specified once, at the very end of the entire combined query, to sort the final result set. It cannot be applied to individual `SELECT` statements within a set operation.

---
#### AI generation note
Develop an 18-minute interactive slide deck with integrated code examples. Dedicate separate sections to `UNION`, `UNION ALL`, `INTERSECT`, and `MINUS`. For each operator, use animated diagrams to visually represent how the sets are combined or compared, highlighting duplicate removal for `UNION`, `INTERSECT`, and `MINUS`, and retention for `UNION ALL`. Use two simple tables (e.g., `Employees` and `Customers` with `first_name` and `last_name`) for consistent examples across all operators. Emphasize the rules for column count and data type compatibility with visual cues (e.g., red X for mismatch). Include a specific slide on `ORDER BY` placement. Conclude with a hands-on coding challenge where learners must combine data from two different tables using `UNION ALL` and then filter common entries using `INTERSECT`.

---


## Module 6: Data Manipulation and Definition Language

This module delves into the powerful SQL commands that allow you to interact with and define the structure of your database. We'll explore Data Manipulation Language (DML) statements for inserting, updating, and deleting data, ensuring your database reflects the most current information. Following that, we'll transition to Data Definition Language (DDL) commands, which empower you to create, modify, and remove database objects like tables, shaping the very schema of your database. Finally, we'll solidify your understanding of data integrity by examining various constraints that protect the quality and consistency of your stored information.

---

### Chapter 6.1 — Introduction to DML: INSERT Statements

#### Learning objectives
*   Understand the purpose and fundamental syntax of the `INSERT` statement in SQL.
*   Learn how to insert a single row into a table by specifying all column values.
*   Master inserting data into specific columns, omitting others that allow `NULL` or have default values.
*   Explore advanced `INSERT` techniques using subqueries to populate new rows from existing data.
*   Identify and troubleshoot common errors encountered when using `INSERT` statements.

#### Detailed lesson content
Welcome to the world of Data Manipulation Language, or DML! This is where you begin to actively change the data stored within your database tables. The first and arguably most fundamental DML operation we'll explore is the `INSERT` statement, which allows you to add new rows of data into a table. Think of it as adding a new record to a spreadsheet or a new entry to a ledger. Every piece of information in your database had to be inserted at some point, making this a crucial skill for any database professional.

The most straightforward way to insert a row is to provide values for all columns in the order they were defined in the table. The basic syntax for this approach is `INSERT INTO table_name VALUES (value1, value2, value3, ...);`. For example, if you have an `employees` table with columns `employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `hire_date`, `job_id`, `salary`, and `department_id`, you would provide a value for each of these columns. It's absolutely critical that the number of values in your `VALUES` clause matches the number of columns in the table, and that the data types of the values correspond to the data types of the respective columns. For instance, if `employee_id` is a `NUMBER` and `first_name` is a `VARCHAR2`, you must provide a number for the ID and a string for the name. Oracle will raise an error if there's a mismatch, such as trying to insert text into a number column.

Consider an `employees` table. To add a new employee, John Doe, with an ID of 207, you might write:
```sql
INSERT INTO employees
VALUES (207, 'John', 'Doe', 'JDOE@example.com', '515.123.4567', SYSDATE, 'IT_PROG', 6000, 60);
```
Here, `SYSDATE` is an Oracle function that returns the current date, which is perfect for a `hire_date` column. Notice how string values are enclosed in single quotes, while numbers and dates (when using functions like `SYSDATE`) are not.

Often, you might not have data for every single column, or some columns might have default values defined, or they might allow `NULL` values. In such cases, it's better practice to explicitly list the columns you are providing values for. This makes your `INSERT` statement more readable and less prone to errors if the table structure changes (e.g., a new column is added). The syntax for this is `INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);`. The order of values in the `VALUES` clause must match the order of columns listed in the parentheses. Any columns not explicitly listed will either be assigned their default value (if one is defined) or `NULL` (if the column allows `NULL`s). If a column is defined as `NOT NULL` and you don't provide a value, Oracle will throw an error.

Let's say you only want to insert the employee's ID, first name, last name, and email, allowing other columns to be `NULL` or use defaults:
```sql
INSERT INTO employees (employee_id, first_name, last_name, email)
VALUES (208, 'Jane', 'Smith', 'JSMITH@example.com');
```
This is a safer and more robust way to insert data, as it clearly communicates which data points you are providing.

A powerful feature of the `INSERT` statement is the ability to populate new rows by selecting data from existing tables using a subquery. This is incredibly useful for tasks like archiving old data into a history table, populating a temporary table for reporting, or creating new records based on existing patterns. The syntax for this is `INSERT INTO table_name (column1, column2, ...) SELECT columnA, columnB, ... FROM another_table WHERE condition;`. The number and data types of the columns in the `SELECT` list must match those in the `INSERT` column list.

Imagine you want to create a `junior_employees` table and populate it with employees whose salary is below a certain threshold. First, you'd create the `junior_employees` table (we'll cover `CREATE TABLE` in a later chapter, but for now, assume it exists with matching columns). Then you could use:
```sql
INSERT INTO junior_employees (employee_id, first_name, last_name, salary, department_id)
SELECT employee_id, first_name, last_name, salary, department_id
FROM employees
WHERE salary < 5000;
```
This single statement can insert multiple rows efficiently, based on the results of the `SELECT` query.

Oracle also provides an `INSERT ALL` statement, which is a multi-table insert capability. This allows you to insert rows into multiple tables with a single `INSERT` statement, often based on a single `SELECT` query. There are two main forms: unconditional `INSERT ALL` and conditional `INSERT ALL` (using `WHEN` clauses).
An unconditional `INSERT ALL` would look like this:
```sql
INSERT ALL
  INTO table1 (col1, col2) VALUES (val1, val2)
  INTO table2 (colA, colB) VALUES (valA, valB)
SELECT * FROM dual; -- Or from another table if values are dynamic
```
A more common and powerful use is the conditional `INSERT ALL`:
```sql
INSERT ALL
  WHEN salary < 5000 THEN
    INTO junior_employees (employee_id, first_name, last_name, salary) VALUES (employee_id, first_name, last_name, salary)
  WHEN salary >= 5000 AND salary < 10000 THEN
    INTO mid_level_employees (employee_id, first_name, last_name, salary) VALUES (employee_id, first_name, last_name, salary)
SELECT employee_id, first_name, last_name, salary
FROM employees;
```
This example demonstrates how to distribute data from a single source (`employees` table) into different target tables (`junior_employees`, `mid_level_employees`) based on specific conditions. It's a highly efficient way to process and categorize data during insertion.

Common mistakes when using `INSERT` statements include:
1.  **Data type mismatch:** Trying to insert a string into a number column, or a date in an invalid format. Always ensure your values match the column's data type.
2.  **Missing `NOT NULL` columns:** If a column is defined as `NOT NULL` (meaning it cannot contain `NULL` values), you *must* provide a value for it, either directly or through a default.
3.  **Incorrect number of values:** When using the `INSERT INTO table_name VALUES (...)` syntax, the number of values must exactly match the total number of columns in the table. If you're specifying columns, the number of values must match the number of specified columns.
4.  **Violating constraints:** Attempting to insert a duplicate value into a `UNIQUE` column, or a value that doesn't exist in a parent table for a `FOREIGN KEY` column. We'll cover constraints in detail later, but be aware they can prevent insertions.
5.  **Forgetting `COMMIT`:** DML statements like `INSERT` are part of a transaction. The changes are not permanently saved to the database until you issue a `COMMIT` command. If your session ends or crashes before `COMMIT`, the changes will be rolled back. Conversely, you can explicitly `ROLLBACK` changes if you make a mistake before committing.

Always test your `INSERT` statements carefully, especially when dealing with large datasets or critical production environments. It's good practice to wrap DML operations in a transaction block and verify the results before committing. For instance, after an `INSERT`, you might run a `SELECT` query to confirm the new row exists and then `COMMIT` or `ROLLBACK` as needed.

#### Key concepts
*   **DML (Data Manipulation Language):** SQL commands used for managing data within database objects (e.g., `INSERT`, `UPDATE`, `DELETE`).
*   **`INSERT` statement:** A DML command used to add one or more new rows of data into a table.
*   **`VALUES` clause:** Specifies the actual data values to be inserted into the columns of a new row.
*   **Subquery in `INSERT`:** Using the result set of a `SELECT` statement to provide the values for an `INSERT` operation, allowing for multi-row insertions.
*   **`INSERT ALL`:** An Oracle-specific DML statement that allows inserting data into multiple tables (conditionally or unconditionally) from a single `SELECT` statement.
*   **`COMMIT`:** A transaction control command that permanently saves all changes made during the current transaction to the database.
*   **`ROLLBACK`:** A transaction control command that undoes all changes made during the current transaction, reverting the database to its state before the transaction began.

#### Hands-on activity
**Activity: Inserting New Department Records**

You are tasked with adding new departments to the `departments` table. The `departments` table has columns: `department_id` (NUMBER, PRIMARY KEY), `department_name` (VARCHAR2(30) NOT NULL), `manager_id` (NUMBER), and `location_id` (NUMBER).

1.  **Insert a new department, 'Operations', with ID 280, a manager ID of 100, and location ID 1700.**
2.  **Insert another new department, 'Customer Support', with ID 290. This department currently has no manager, but it is located in 1700.** Ensure you explicitly list the columns for which you are providing values.
3.  **Verify your insertions** by querying the `departments` table for the newly added records.
4.  **Rollback the changes** to ensure the database is clean for the next activity.

**Starter Code:**
```sql
-- Assume the departments table exists with structure:
-- CREATE TABLE departments (
--     department_id   NUMBER(4) PRIMARY KEY,
--     department_name VARCHAR2(30) NOT NULL,
--     manager_id      NUMBER(6),
--     location_id     NUMBER(4)
-- );

-- Task 1: Insert 'Operations'
-- INSERT INTO ...

-- Task 2: Insert 'Customer Support' with specific columns
-- INSERT INTO ...

-- Task 3: Verify insertions
-- SELECT * FROM departments WHERE department_id IN (280, 290);

-- Task 4: Rollback changes
-- ROLLBACK;
```

#### Assessment idea
1.  **Question:** You need to add a new product to a `products` table. The table has columns `product_id` (NUMBER, NOT NULL), `product_name` (VARCHAR2(100), NOT NULL), `description` (VARCHAR2(500)), `price` (NUMBER(10,2), NOT NULL), and `category_id` (NUMBER). You want to insert a product with ID 101, name 'Laptop Pro', price 1200.00, and category ID 10. The description is currently unknown. Which of the following `INSERT` statements is the most appropriate and robust way to achieve this?
    a) `INSERT INTO products VALUES (101, 'Laptop Pro', NULL, 1200.00, 10);`
    b) `INSERT INTO products (product_id, product_name, price, category_id) VALUES (101, 'Laptop Pro', 1200.00, 10);`
    c) `INSERT INTO products (product_id, product_name, description, price, category_id) VALUES (101, 'Laptop Pro', '', 1200.00, 10);`
    d) `INSERT INTO products VALUES (101, 'Laptop Pro', 1200.00, 10);`

    **Correct Answer:** b) `INSERT INTO products (product_id, product_name, price, category_id) VALUES (101, 'Laptop Pro', 1200.00, 10);`
    **Explanation:** Option (b) explicitly lists the columns for which values are provided. Since `description` allows `NULL` (as it's not `NOT NULL` and no default is specified), omitting it from the column list will automatically assign `NULL` to it, which is the desired outcome for an unknown description.
    *   Option (a) works but is less robust because if a new column were added to the `products` table, this statement would break unless updated. It also explicitly uses `NULL`, which is fine but (b) is cleaner.
    *   Option (c) inserts an empty string `''` into `description`. While Oracle treats an empty string as `NULL` for `VARCHAR2` columns, it's semantically clearer to omit the column if the intention is `NULL`.
    *   Option (d) would result in an error because the number of values (4) does not match the number of columns in the table (5).

2.  **Question:** You have an `archive_employees` table with the same structure as your `employees` table. You need to move all employees who were hired before January 1, 2010, from the `employees` table to the `archive_employees` table. Which SQL statement would you use to insert these employees into the `archive_employees` table?
    a) `INSERT INTO archive_employees VALUES (SELECT * FROM employees WHERE hire_date < '01-JAN-2010');`
    b) `INSERT INTO archive_employees SELECT * FROM employees WHERE hire_date < TO_DATE('01-JAN-2010', 'DD-MON-YYYY');`
    c) `INSERT INTO archive_employees (employee_id, first_name, last_name) SELECT employee_id, first_name, last_name FROM employees WHERE hire_date < '01-JAN-2010';`
    d) `INSERT INTO archive_employees FROM employees WHERE hire_date < TO_DATE('01-JAN-2010', 'DD-MON-YYYY');`

    **Correct Answer:** b) `INSERT INTO archive_employees SELECT * FROM employees WHERE hire_date < TO_DATE('01-JAN-2010', 'DD-MON-YYYY');`
    **Explanation:** Option (b) correctly uses the `INSERT INTO ... SELECT ...` syntax to insert multiple rows based on a subquery. It also correctly uses `TO_DATE` to convert the string literal into a date, which is crucial for accurate date comparisons in Oracle.
    *   Option (a) has incorrect syntax; `VALUES` is used for single-row inserts with explicit values, not for subqueries.
    *   Option (c) would only insert a subset of columns, not all of them, which is not what the question asks for (it asks to move *all* employees, implying all their data). Also, it uses a string literal for date comparison, which can lead to implicit conversion issues.
    *   Option (d) has incorrect syntax for the `INSERT` statement.

#### AI generation note
Create a 12-minute interactive lab walkthrough video. Begin by demonstrating the basic `INSERT INTO ... VALUES (...)` syntax, showing a new row appearing in a `SELECT *` query. Then, illustrate `INSERT INTO ... (cols) VALUES (...)` for a row with missing data. Conclude by showing an `INSERT INTO ... SELECT ...` operation, populating a new table from existing data. Use a split-screen view with SQL Developer or SQL*Plus on the left and a table query result on the right. Include a brief segment on common `ORA-` errors for data type mismatches and `NOT NULL` violations. The interactive element will be a guided coding exercise where learners complete an `INSERT ALL` statement to distribute data into two new tables. Ensure all code examples are clearly visible and copyable.

---

### Chapter 6.2 — Modifying Data: UPDATE Statements

#### Learning objectives
*   Grasp the fundamental syntax and purpose of the `UPDATE` statement for modifying existing data.
*   Learn how to update specific columns for a single row using a `WHERE` clause.
*   Understand how to update multiple rows simultaneously based on a defined condition.
*   Explore advanced `UPDATE` techniques, including using subqueries to derive new column values.
*   Recognize the critical importance of the `WHERE` clause in `UPDATE` statements and the potential consequences of omitting it.

#### Detailed lesson content
After learning how to add new data with `INSERT`, the next essential DML operation is the `UPDATE` statement. This command allows you to change existing data in one or more rows of a table. Data is rarely static; employee salaries change, product prices fluctuate, and customer addresses need to be updated. The `UPDATE` statement is your tool for keeping your database current and accurate. Without it, your data would quickly become obsolete.

The basic syntax for an `UPDATE` statement is `UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;`. The `SET` clause specifies which columns you want to change and their new values. The `WHERE` clause is absolutely critical: it determines which rows will be affected by the update. If you omit the `WHERE` clause, *every single row in the table will be updated*, which is almost never the desired behavior and can lead to catastrophic data loss or corruption. Always double-check your `WHERE` clause before executing an `UPDATE` statement, especially in a production environment.

Let's consider our `employees` table. Suppose employee with `employee_id` 100, Steven King, has received a raise and his salary needs to be updated from 24000 to 25000. You would use the following statement:
```sql
UPDATE employees
SET salary = 25000
WHERE employee_id = 100;
```
After executing this, you can verify the change with `SELECT employee_id, first_name, salary FROM employees WHERE employee_id = 100;`. This demonstrates updating a single column for a single row.

You can update multiple columns in a single `UPDATE` statement by separating the `column = value` pairs with commas in the `SET` clause. For example, if employee 101, Neena Kochhar, also received a raise and changed her email address:
```sql
UPDATE employees
SET salary = 18000,
    email = 'NKOCHHAR@example.com'
WHERE employee_id = 101;
```
This efficiently updates two distinct pieces of information for the specified employee.

The `WHERE` clause can be as complex as any `WHERE` clause used in a `SELECT` statement, allowing you to target a very specific subset of rows. You can use logical operators (`AND`, `OR`, `NOT`), comparison operators (`=`, `>`, `<`, `LIKE`, `IN`, `BETWEEN`), and even subqueries. For instance, to give a 10% bonus to all employees in department 90:
```sql
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 90;
```
Notice how we can use the existing `salary` value in the `SET` clause to calculate the new salary. This is a common pattern for incremental adjustments.

A powerful application of the `UPDATE` statement involves using subqueries to determine the new values for columns. This allows you to update data in one table based on data from another table, or even based on aggregated data. The general form is `UPDATE table_name SET column = (SELECT value_expression FROM another_table WHERE condition) WHERE condition;`. The subquery must return a single value for each row being updated, or it must return a single row if the subquery is correlated with the outer query.

Let's say you have a `departments` table with a `manager_id` column, and you want to update the `manager_id` for employees whose current manager is no longer active. Or, a simpler example: update an employee's `job_id` based on their `salary` falling into a new range, where the new `job_id` is determined by a lookup table.
A more direct example: Imagine you have an `employees` table and a `job_grades` table. You want to update the `job_id` for employees based on their current salary falling within a specific grade range. This often involves a more complex correlated subquery or a `MERGE` statement (which is beyond the scope of this particular chapter but good to know).

A simpler subquery example for `UPDATE`: Suppose you want to update the `location_id` for all departments that have a `manager_id` of 100 to the `location_id` of department 50.
```sql
UPDATE departments
SET location_id = (SELECT location_id FROM departments WHERE department_id = 50)
WHERE manager_id = 100;
```
Here, the subquery `(SELECT location_id FROM departments WHERE department_id = 50)` returns a single value (the `location_id` of department 50), which is then used to update the `location_id` for all departments managed by employee 100.

Common mistakes and safety notes when using `UPDATE` statements:
1.  **Forgetting the `WHERE` clause:** This is the most dangerous mistake. An `UPDATE` without a `WHERE` clause will modify *all* rows in the table. Always execute a `SELECT` statement with the exact `WHERE` clause you plan to use *before* running the `UPDATE` to confirm it targets the correct rows.
2.  **Incorrect `WHERE` clause:** A poorly constructed `WHERE` clause might update more rows than intended or miss some rows that should be updated. Test your `WHERE` condition thoroughly.
3.  **Data type mismatch:** Similar to `INSERT`, ensure the new values assigned in the `SET` clause match the data types of the columns.
4.  **Violating constraints:** An `UPDATE` operation can also violate constraints (e.g., trying to update a `PRIMARY KEY` to a duplicate value, or a `FOREIGN KEY` to a non-existent parent value). Oracle will raise an error if a constraint is violated.
5.  **Transaction Control (`COMMIT`/`ROLLBACK`):** Like `INSERT`, `UPDATE` statements are part of a transaction. Changes are not permanent until `COMMIT`. If you make a mistake, you can `ROLLBACK` to undo the changes, provided you haven't committed yet. It's a good habit to `ROLLBACK` after testing an `UPDATE` on a development database before applying it to production, or to wrap critical updates in a `BEGIN ... END;` block for explicit transaction management if your client allows it.

Always perform updates in a controlled environment, especially for critical data. If you're unsure, run the `SELECT` statement with your `WHERE` clause first to see which rows would be affected. Then, wrap your `UPDATE` in a `BEGIN` and `ROLLBACK` block, verify the changes, and only then `COMMIT`. This cautious approach will save you from potential headaches and data recovery efforts.

#### Key concepts
*   **`UPDATE` statement:** A DML command used to modify existing data in one or more rows of a table.
*   **`SET` clause:** Specifies the columns to be updated and their new values.
*   **`WHERE` clause:** Crucial for `UPDATE` statements, it filters which rows will be affected by the modification. Omitting it updates all rows.
*   **Subquery in `UPDATE`:** Using the result of a `SELECT` statement to provide the new value for a column during an update operation.
*   **Transaction:** A sequence of operations performed as a single logical unit of work. DML statements are part of transactions.
*   **Data integrity:** The overall completeness, accuracy, and consistency of data. `UPDATE` statements must be used carefully to maintain it.

#### Hands-on activity
**Activity: Employee Salary Adjustments and Job Changes**

You need to perform several updates on the `employees` table.

1.  **Give all employees in department 60 a 5% raise.**
2.  **Update the email address for employee ID 103 (Alexander Hunold) to 'AHUNOLD_NEW@example.com' and change their `job_id` to 'IT_PROG'.**
3.  **For all employees whose `salary` is less than 6000 and who are currently in `job_id` 'SA_REP', update their `job_id` to 'SA_MAN' and increase their `salary` by 10%.**
4.  **Verify your updates** by querying the affected employees.
5.  **Commit the changes** as these are final adjustments.

**Starter Code:**
```sql
-- Assume the employees table exists.
-- You can check current state with:
-- SELECT employee_id, first_name, last_name, salary, department_id, job_id, email FROM employees WHERE department_id = 60;
-- SELECT employee_id, first_name, last_name, salary, department_id, job_id, email FROM employees WHERE employee_id = 103;
-- SELECT employee_id, first_name, last_name, salary, department_id, job_id, email FROM employees WHERE job_id = 'SA_REP' AND salary < 6000;

-- Task 1: 5% raise for department 60
-- UPDATE employees SET ... WHERE ...;

-- Task 2: Update employee 103's email and job_id
-- UPDATE employees SET ... WHERE ...;

-- Task 3: Conditional job_id and salary update
-- UPDATE employees SET ... WHERE ...;

-- Task 4: Verify updates
-- SELECT employee_id, first_name, last_name, salary, department_id, job_id, email FROM employees WHERE department_id = 60 OR employee_id = 103 OR (job_id = 'SA_MAN' AND salary > 6000);

-- Task 5: Commit changes
-- COMMIT;
```

#### Assessment idea
1.  **Question:** An `UPDATE` statement was executed as follows: `UPDATE products SET price = price * 1.10;`. What is the most likely outcome of this statement?
    a) Only products with a price greater than 100 will have their price increased by 10%.
    b) The statement will fail because it lacks a `WHERE` clause.
    c) All products in the `products` table will have their price increased by 10%.
    d) The price of a single, randomly selected product will be increased by 10%.

    **Correct Answer:** c) All products in the `products` table will have their price increased by 10%.
    **Explanation:** When the `WHERE` clause is omitted from an `UPDATE` statement, the operation applies to *all* rows in the specified table. In this case, every product's price will be increased by 10%. This highlights the critical importance of the `WHERE` clause in `UPDATE` statements to prevent unintended mass modifications.

2.  **Question:** You need to update the `manager_id` for all employees in department 80 to the `employee_id` of the employee named 'Kevin' 'Mourgos'. Assuming 'Kevin Mourgos' has `employee_id` 108. Which SQL statement correctly achieves this?
    a) `UPDATE employees SET manager_id = 108 WHERE department_id = 80;`
    b) `UPDATE employees SET manager_id = (SELECT employee_id FROM employees WHERE first_name = 'Kevin' AND last_name = 'Mourgos') WHERE department_id = 80;`
    c) `UPDATE employees WHERE department_id = 80 SET manager_id = 108;`
    d) `UPDATE employees SET manager_id = (SELECT employee_id FROM employees WHERE first_name = 'Kevin' AND last_name = 'Mourgos');`

    **Correct Answer:** b) `UPDATE employees SET manager_id = (SELECT employee_id FROM employees WHERE first_name = 'Kevin' AND last_name = 'Mourgos') WHERE department_id = 80;`
    **Explanation:** Option (b) correctly uses a subquery in the `SET` clause to dynamically retrieve the `employee_id` of 'Kevin Mourgos' and then applies this value to the `manager_id` for all employees in department 80. This is a robust way to link updates based on data from the same or another table.
    *   Option (a) assumes you already know Kevin's ID is 108. While it would work if 108 is correct, (b) is more dynamic and less prone to error if the ID changes.
    *   Option (c) has incorrect syntax; the `SET` clause must come before the `WHERE` clause.
    *   Option (d) would update the `manager_id` for *all* employees in the table (because the outer `WHERE` clause is missing), not just those in department 80.

#### AI generation note
Design a 10-minute interactive coding session. Start by demonstrating a simple `UPDATE` for a single row, showing the `SELECT` before and after. Then, show an `UPDATE` affecting multiple rows based on a `WHERE` clause with a `LIKE` operator. Introduce the concept of updating with a subquery by changing department `location_id` based on another department's `location_id`. Emphasize the danger of omitting the `WHERE` clause with a clear warning. The interactive element will be a task for learners to write an `UPDATE` statement to give a bonus to employees in a specific job category, using a percentage calculation. Use a split-screen view showing the SQL client and table results. Include a reflection prompt on the importance of `COMMIT` and `ROLLBACK` with `UPDATE` statements.

---

### Chapter 6.3 — Removing Data: DELETE and TRUNCATE Statements

#### Learning objectives
*   Differentiate between the `DELETE` and `TRUNCATE` statements for removing data from tables.
*   Master the use of the `DELETE` statement to remove specific rows based on a `WHERE` clause.
*   Understand how to remove all rows from a table using `DELETE` and `TRUNCATE`.
*   Identify the implications of `DELETE` being a DML command and `TRUNCATE` being a DDL command, particularly regarding transaction control and performance.
*   Learn best practices and safety considerations when performing data removal operations.

#### Detailed lesson content
Just as you can add and modify data, you also need the ability to remove it. Whether it's old, irrelevant, or incorrect information, cleaning up your database is a crucial administrative task. In Oracle SQL, you primarily use two statements for removing data: `DELETE` and `TRUNCATE`. While both achieve the goal of removing rows, they operate very differently and have distinct implications for performance, transaction control, and database resources. Understanding these differences is key to choosing the right tool for the job.

The `DELETE` statement is a Data Manipulation Language (DML) command. It removes rows from a table one by one. Like `UPDATE`, the `DELETE` statement uses a `WHERE` clause to specify which rows should be removed. If you omit the `WHERE` clause, *all* rows in the table will be deleted. The basic syntax is `DELETE FROM table_name WHERE condition;`.

For example, to remove employee 207, John Doe, from our `employees` table:
```sql
DELETE FROM employees
WHERE employee_id = 207;
```
To remove all employees from department 60:
```sql
DELETE FROM employees
WHERE department_id = 60;
```
After executing a `DELETE` statement, you can verify the removal by attempting to `SELECT` the deleted rows. If they are gone, the `DELETE` was successful.

A critical characteristic of `DELETE` is that it is a transactional operation. This means the changes are not permanent until you issue a `COMMIT` command. If you realize you've made a mistake, you can use `ROLLBACK` to undo the deletion, provided you haven't committed yet. This transactional safety net makes `DELETE` the preferred choice when you need to remove specific rows or when there's any chance you might need to revert the operation. Furthermore, `DELETE` statements fire any `DELETE` triggers defined on the table, and they generate undo and redo information, which contributes to their slower performance compared to `TRUNCATE` for large tables. `DELETE` also maintains the table's high-water mark, meaning the space occupied by the deleted rows is not immediately reclaimed and may still be considered used by the database until new data fills it.

Now, let's look at `TRUNCATE TABLE`. This is a Data Definition Language (DDL) command, not DML. The syntax is simply `TRUNCATE TABLE table_name;`. `TRUNCATE` removes *all* rows from a table much faster than `DELETE` because it deallocates the data space occupied by the table. It's essentially a quick way to empty a table completely.

For example, to remove all data from a `temp_logs` table:
```sql
TRUNCATE TABLE temp_logs;
```

The key differences between `DELETE` and `TRUNCATE` are profound:
1.  **Transaction Control:** `DELETE` is transactional; it can be `ROLLBACK`ed. `TRUNCATE` is *not* transactional; once executed, the data is gone permanently, and you cannot `ROLLBACK` it. This is a crucial distinction for data recovery.
2.  **Speed:** `TRUNCATE` is significantly faster than `DELETE` for removing all rows because it deallocates the entire data segment rather than deleting rows one by one. It generates minimal undo/redo information.
3.  **`WHERE` Clause:** `DELETE` supports a `WHERE` clause to filter rows. `TRUNCATE` does not; it always removes all rows.
4.  **Triggers:** `DELETE` statements fire `DELETE` triggers defined on the table. `TRUNCATE` statements do *not* fire `DELETE` triggers.
5.  **High-Water Mark:** `TRUNCATE` resets the high-water mark of the table, reclaiming the space immediately. `DELETE` does not reset the high-water mark, meaning the space remains allocated to the table even if it's empty, until new data is inserted or the table is explicitly shrunk.
6.  **Implicit `COMMIT`:** Because `TRUNCATE` is a DDL command, it issues an implicit `COMMIT` before and after its execution. This means any uncommitted DML changes made *before* the `TRUNCATE` will be automatically committed, and the `TRUNCATE` itself cannot be rolled back. This is a significant safety concern.

**Common mistakes and safety notes:**
*   **Forgetting `WHERE` with `DELETE`:** Just like `UPDATE`, forgetting the `WHERE` clause in a `DELETE` statement will delete *all* rows. Always test your `WHERE` clause with a `SELECT` statement first.
*   **Using `TRUNCATE` when `ROLLBACK` is needed:** Never use `TRUNCATE` if there's any possibility you might need to undo the operation. For scenarios requiring a rollback, `DELETE FROM table_name;` (without a `WHERE` clause) is the correct choice, even if slower.
*   **`TRUNCATE` with dependent objects:** If a table has `FOREIGN KEY` constraints referencing it, you cannot `TRUNCATE` it unless the foreign key constraint is disabled or dropped, or the referencing table is also truncated/deleted. `DELETE` handles foreign key constraints gracefully (it will fail if there are child records and the FK is not defined with `ON DELETE CASCADE`).
*   **Implicit `COMMIT` of `TRUNCATE`:** Be extremely cautious when mixing `TRUNCATE` with other uncommitted DML operations in the same transaction. The `TRUNCATE` will commit everything before it, potentially saving unintended changes.

**When to use which:**
*   **Use `DELETE` when:**
    *   You need to remove specific rows.
    *   You might need to `ROLLBACK` the operation.
    *   You need `DELETE` triggers to fire.
    *   You have `FOREIGN KEY` constraints referencing the table, and you don't want to affect the parent table.
*   **Use `TRUNCATE` when:**
    *   You need to remove *all* rows from a table.
    *   Performance is critical for emptying a large table.
    *   You do *not* need to `ROLLBACK` the operation.
    *   You do *not* need `DELETE` triggers to fire.
    *   You want to immediately reclaim disk space.

Always exercise extreme caution when removing data. In production environments, it's common practice to take backups before major data removal operations, especially before using `TRUNCATE`. For `DELETE` statements, always run a `SELECT` with the same `WHERE` clause first to confirm the exact rows that will be affected.

#### Key concepts
*   **`DELETE` statement:** A DML command used to remove specific rows from a table based on a `WHERE` clause. It is transactional and can be rolled back.
*   **`TRUNCATE TABLE` statement:** A DDL command used to remove all rows from a table quickly by deallocating its data segments. It is not transactional and cannot be rolled back.
*   **DML (Data Manipulation Language):** Commands like `INSERT`, `UPDATE`, `DELETE` that operate on the data within tables.
*   **DDL (Data Definition Language):** Commands like `CREATE`, `ALTER`, `DROP`, `TRUNCATE` that define and manage database objects.
*   **Transaction Control:** The ability to `COMMIT` or `ROLLBACK` changes made by DML statements. DDL statements (like `TRUNCATE`) perform an implicit `COMMIT`.
*   **High-Water Mark:** A pointer in a table that indicates the boundary between used and unused blocks. `TRUNCATE` resets it, `DELETE` does not.
*   **Triggers:** Stored PL/SQL blocks that automatically execute (fire) in response to DML events (like `INSERT`, `UPDATE`, `DELETE`) on a table.

#### Hands-on activity
**Activity: Cleaning Up Temporary Data and Archiving**

You have a `temp_employees` table (a copy of `employees`) and need to perform some data cleanup.

1.  **Delete all employees from `temp_employees` who have a `salary` less than 3000.**
2.  **Delete all employees from `temp_employees` who were hired before January 1, 2005.**
3.  **Verify the remaining employees** in `temp_employees`.
4.  **Realize you made a mistake and `ROLLBACK` the last two `DELETE` operations.**
5.  **Now, empty the entire `temp_employees` table using `TRUNCATE`.**
6.  **Attempt to `ROLLBACK` after the `TRUNCATE` and observe the result.** (It won't work, reinforcing the concept).

**Starter Code:**
```sql
-- First, create a temporary table for this activity:
CREATE TABLE temp_employees AS SELECT * FROM employees;

-- Task 1: Delete employees with salary < 3000
-- DELETE FROM temp_employees WHERE ...;
-- SELECT * FROM temp_employees; -- Check results

-- Task 2: Delete employees hired before 2005
-- DELETE FROM temp_employees WHERE ...;
-- SELECT * FROM temp_employees; -- Check results

-- Task 3: Verify remaining employees
-- SELECT COUNT(*) FROM temp_employees;

-- Task 4: Rollback the deletions
-- ROLLBACK;
-- SELECT COUNT(*) FROM temp_employees; -- Should show original count after rollback

-- Task 5: Truncate the table
-- TRUNCATE TABLE temp_employees;
-- SELECT COUNT(*) FROM temp_employees; -- Should show 0

-- Task 6: Attempt rollback after truncate
-- ROLLBACK;
-- SELECT COUNT(*) FROM temp_employees; -- Will still show 0, demonstrating TRUNCATE's non-transactional nature

-- Clean up:
DROP TABLE temp_employees;
```

#### Assessment idea
1.  **Question:** You need to remove all data from a large `audit_logs` table. This table is used for temporary storage, and its contents are regenerated daily. You want the fastest possible method and do not need to recover any data once it's removed. Which SQL statement is the most appropriate?
    a) `DELETE FROM audit_logs WHERE 1=1;`
    b) `DELETE FROM audit_logs;`
    c) `TRUNCATE TABLE audit_logs;`
    d) `DROP TABLE audit_logs;`

    **Correct Answer:** c) `TRUNCATE TABLE audit_logs;`
    **Explanation:** `TRUNCATE TABLE` is the fastest method for removing all rows from a table because it deallocates the table's data segments. Since there's no need for recovery or `ROLLBACK`, and performance is a priority, `TRUNCATE` is the ideal choice.
    *   Options (a) and (b) use `DELETE`, which is slower for large tables as it performs row-by-row deletion and generates more undo/redo information. While `DELETE FROM audit_logs;` removes all rows, it's not the fastest.
    *   Option (d) `DROP TABLE` removes the entire table structure and its data, which is not what's asked (the table itself needs to remain for daily regeneration).

2.  **Question:** A junior DBA accidentally deleted several critical records from the `customers` table using a `DELETE` statement without a `WHERE` clause. Fortunately, they hadn't issued a `COMMIT` yet. What is the immediate action they should take to recover the lost data?
    a) Re-insert the data using `INSERT` statements from a backup.
    b) Execute a `ROLLBACK` command.
    c) Execute a `TRUNCATE TABLE customers;` command.
    d) Execute a `COMMIT` command, then restore from a backup.

    **Correct Answer:** b) Execute a `ROLLBACK` command.
    **Explanation:** Since `DELETE` is a DML command and the `COMMIT` command has not yet been issued, the changes are still part of an active transaction. A `ROLLBACK` command will undo all uncommitted changes in the current session, effectively restoring the deleted records.
    *   Option (a) is a recovery method, but `ROLLBACK` is the immediate, simpler, and faster solution if a `COMMIT` hasn't occurred.
    *   Option (c) `TRUNCATE TABLE` would permanently delete all data and cannot be rolled back, making the situation worse.
    *   Option (d) `COMMIT` would permanently save the accidental deletion, making data recovery much more complex (requiring backups or Flashback Database features).

#### AI generation note
Create an 8-minute animated explainer video. Start by visually demonstrating `DELETE` with a `WHERE` clause, showing specific rows disappearing from a table grid, emphasizing the transactional nature and `ROLLBACK` possibility. Then, transition to `TRUNCATE TABLE`, showing the entire table quickly emptying and the data space being reclaimed, highlighting its speed and non-rollbackable nature. Use clear text overlays to show `DELETE` as DML and `TRUNCATE` as DDL. Include a side-by-side comparison chart summarizing their key differences (speed, transaction, triggers, WHERE clause). The interactive element will be a drag-and-drop exercise where learners match scenarios (e.g., "remove specific old orders," "empty a temp table quickly") to the correct command (`DELETE` or `TRUNCATE`).

---

### Chapter 6.4 — Introduction to DDL: CREATE, ALTER, DROP Tables

#### Learning objectives
*   Understand the role of Data Definition Language (DDL) in managing database schema.
*   Master the `CREATE TABLE` statement, including defining columns, data types, and basic constraints.
*   Learn how to modify existing table structures using the `ALTER TABLE` statement for adding, modifying, and dropping columns.
*   Grasp the `DROP TABLE` statement for removing tables and its implications.
*   Identify common DDL syntax errors and best practices for schema management.

#### Detailed lesson content
Up to this point, we've focused on Data Manipulation Language (DML) commands, which allow you to work with the *data* inside your tables. Now, we shift our attention to Data Definition Language (DDL), which is concerned with defining, modifying, and dropping the *structure* of your database objects themselves. DDL commands are the foundation of your database schema, allowing you to create tables, define their columns, set up relationships, and manage the overall architecture. Unlike DML, DDL operations are implicitly committed and cannot be rolled back. This makes DDL operations very powerful but also requires extreme caution.

The most fundamental DDL command is `CREATE TABLE`. This statement is used to define a new table in your database. When creating a table, you specify its name, the names of its columns, and the data type for each column. Oracle provides a rich set of data types to store various kinds of information, such as `VARCHAR2` for variable-length strings, `NUMBER` for numeric values, `DATE` for date and time information, `CLOB` for large text objects, and `BLOB` for large binary objects. You also define whether a column can contain `NULL` values using the `NOT NULL` constraint.

Here's a basic example of creating a table called `products`:
```sql
CREATE TABLE products (
    product_id      NUMBER(6),
    product_name    VARCHAR2(100) NOT NULL,
    description     VARCHAR2(500),
    price           NUMBER(10, 2) NOT NULL,
    category_id     NUMBER(4)
);
```
In this example:
*   `product_id` is a number with a maximum of 6 digits.
*   `product_name` is a variable-length string up to 100 characters and cannot be `NULL`.
*   `description` is a variable-length string up to 500 characters and can be `NULL` (since `NOT NULL` is not specified).
*   `price` is a number that can have up to 10 digits in total, with 2 digits after the decimal point, and cannot be `NULL`.
*   `category_id` is a number with a maximum of 4 digits.

Once a table is created, its structure is not necessarily set in stone. The `ALTER TABLE` statement allows you to modify the structure of an existing table. This is incredibly useful for adapting your database schema as business requirements evolve. Common `ALTER TABLE` operations include adding new columns, modifying existing column definitions, dropping columns, and renaming columns or the table itself.

**Adding a new column:**
To add a new column, you use `ALTER TABLE table_name ADD (column_name data_type [DEFAULT value] [NULL/NOT NULL]);`. For instance, to add a `last_update_date` column to the `products` table:
```sql
ALTER TABLE products
ADD (last_update_date DATE DEFAULT SYSDATE);
```
Here, `DEFAULT SYSDATE` ensures that any new rows inserted will automatically get the current date, and existing rows will get `NULL` (or the default if specified for existing rows, depending on Oracle version and column definition). If you add a `NOT NULL` column to a table that already contains data, you *must* specify a `DEFAULT` value for that column, otherwise Oracle will raise an error because existing rows would violate the `NOT NULL` constraint.

**Modifying an existing column:**
To change the data type, size, or `NULL` constraint of an existing column, you use `ALTER TABLE table_name MODIFY (column_name new_data_type [new_size] [NULL/NOT NULL]);`. There are restrictions: you usually cannot decrease the size of a `VARCHAR2` column if it contains data longer than the new size, nor can you change a column's data type if it contains data that cannot be implicitly converted. You can change a `NULL` column to `NOT NULL` only if all existing rows have non-`NULL` values for that column.
```sql
ALTER TABLE products
MODIFY (description VARCHAR2(1000)); -- Increase size
ALTER TABLE products
MODIFY (category_id NUMBER(6));    -- Increase precision
```

**Dropping a column:**
To remove a column from a table, use `ALTER TABLE table_name DROP COLUMN column_name;`. This operation is irreversible and will permanently delete all data in that column.
```sql
ALTER TABLE products
DROP COLUMN description;
```
Be extremely careful when dropping columns, as it leads to permanent data loss.

**Renaming a column:**
You can rename a column using `ALTER TABLE table_name RENAME COLUMN old_name TO new_name;`.
```sql
ALTER TABLE products
RENAME COLUMN product_name TO item_name;
```

**Renaming a table:**
To rename the entire table, use `ALTER TABLE old_table_name RENAME TO new_table_name;` or simply `RENAME old_table_name TO new_table_name;`.
```sql
RENAME products TO inventory_items;
```

Finally, the `DROP TABLE` statement is used to completely remove a table and all its data from the database. This is a highly destructive operation and should be used with extreme caution. Once a table is dropped, its data is gone, and the table structure is removed.
```sql
DROP TABLE products;
```
If other tables have `FOREIGN KEY` constraints referencing the table you are trying to drop, Oracle will prevent the `DROP` operation unless you include the `CASCADE CONSTRAINTS` clause. This clause will drop all referential integrity constraints that refer to primary and unique keys in the table being dropped.
```sql
DROP TABLE departments CASCADE CONSTRAINTS;
```
Using `CASCADE CONSTRAINTS` is powerful but also dangerous, as it can inadvertently remove constraints that are vital for data integrity across your database. Always understand the dependencies before dropping tables.

**Common mistakes and safety notes with DDL:**
1.  **Irreversibility:** DDL statements (CREATE, ALTER, DROP, TRUNCATE) issue an implicit `COMMIT` and cannot be rolled back. Once executed, the changes are permanent. Always back up your schema and data before performing major DDL operations.
2.  **Syntax errors:** DDL syntax can be precise. A missing parenthesis, comma, or incorrect keyword can lead to errors.
3.  **Data type considerations:** Choosing appropriate data types is crucial for performance and data integrity. Incorrect choices can lead to storage inefficiencies or data truncation.
4.  **`NOT NULL` constraints on existing data:** When adding a `NOT NULL` column to an existing table, you *must* provide a `DEFAULT` value, otherwise, the operation will fail because existing rows would violate the constraint.
5.  **Dependencies:** Dropping a table with `FOREIGN KEY` dependencies without `CASCADE CONSTRAINTS` will fail. Using `CASCADE CONSTRAINTS` can have wide-reaching, unintended consequences. Always check dependencies (e.g., using `USER_CONSTRAINTS` or `ALL_CONSTRAINTS` views) before dropping tables.
6.  **Performance impact:** Large `ALTER TABLE` operations (e.g., adding a `NOT NULL` column without a default to a very large table, or changing a data type) can lock the table and take a long time, impacting application availability. Plan these during maintenance windows.

DDL is the architect's toolset for your database. Use it thoughtfully, with a clear understanding of its implications, and always prioritize data integrity and safety.

#### Key concepts
*   **DDL (Data Definition Language):** SQL commands used to define, modify, and drop database objects like tables, indexes, and views (`CREATE`, `ALTER`, `DROP`).
*   **`CREATE TABLE`:** A DDL statement used to define a new table, specifying its name, columns, and their data types.
*   **Data Types:** Define the type of data a column can store (e.g., `VARCHAR2`, `NUMBER`, `DATE`).
*   **`NOT NULL` constraint:** A column-level constraint that ensures a column cannot contain `NULL` values.
*   **`ALTER TABLE`:** A DDL statement used to modify the structure of an existing table (e.g., add, modify, drop, or rename columns).
*   **`DROP COLUMN`:** An `ALTER TABLE` clause used to remove a column from a table. This results in permanent data loss for that column.
*   **`RENAME`:** A DDL command (or `ALTER TABLE` clause) used to change the name of a table or column.
*   **`DROP TABLE`:** A DDL statement used to completely remove a table and all its data from the database.
*   **`CASCADE CONSTRAINTS`:** An optional clause with `DROP TABLE` that automatically drops all referential integrity constraints that refer to the table being dropped.
*   **Implicit `COMMIT`:** DDL statements automatically commit any pending DML transactions before and after their execution.

#### Hands-on activity
**Activity: Designing and Evolving a Project Tracking Table**

You need to create and then modify a table to track projects.

1.  **Create a new table named `projects`** with the following columns:
    *   `project_id` (NUMBER(6), NOT NULL)
    *   `project_name` (VARCHAR2(100), NOT NULL)
    *   `start_date` (DATE, default to `SYSDATE`)
    *   `end_date` (DATE)
    *   `status` (VARCHAR2(20), default 'In Progress')
    *   `budget` (NUMBER(12, 2))
2.  **Add a new column `manager_id`** (NUMBER(6)) to the `projects` table.
3.  **Modify the `project_name` column** to allow up to 150 characters.
4.  **Rename the `status` column** to `project_status`.
5.  **Insert a sample project** into the `projects` table to test the new structure.
6.  **Verify the table structure** using `DESCRIBE projects;` and the inserted data.
7.  **Drop the `projects` table** to clean up.

**Starter Code:**
```sql
-- Task 1: Create the projects table
-- CREATE TABLE projects (
--     project_id      NUMBER(6) NOT NULL,
--     project_name    VARCHAR2(100) NOT NULL,
--     start_date      DATE DEFAULT SYSDATE,
--     end_date        DATE,
--     status          VARCHAR2(20) DEFAULT 'In Progress',
--     budget          NUMBER(12, 2)
-- );

-- Task 2: Add manager_id column
-- ALTER TABLE projects ADD (...);

-- Task 3: Modify project_name size
-- ALTER TABLE projects MODIFY (...);

-- Task 4: Rename status column
-- ALTER TABLE projects RENAME COLUMN ...;

-- Task 5: Insert a sample project
-- INSERT INTO projects (project_id, project_name, end_date, budget, manager_id)
-- VALUES (1, 'Website Redesign', TO_DATE('2024-12-31', 'YYYY-MM-DD'), 50000.00, 101);

-- Task 6: Verify structure and data
-- DESCRIBE projects;
-- SELECT * FROM projects;

-- Task 7: Drop the table
-- DROP TABLE projects;
```

#### Assessment idea
1.  **Question:** You need to add a new column named `is_active` (which should be a `VARCHAR2(1)` and cannot be `NULL`) to an existing `customers` table. All existing customers should have 'Y' for this column by default. Which `ALTER TABLE` statement correctly achieves this?
    a) `ALTER TABLE customers ADD (is_active VARCHAR2(1) NOT NULL);`
    b) `ALTER TABLE customers ADD (is_active VARCHAR2(1) DEFAULT 'Y');`
    c) `ALTER TABLE customers ADD (is_active VARCHAR2(1) DEFAULT 'Y' NOT NULL);`
    d) `ALTER TABLE customers MODIFY (is_active VARCHAR2(1) NOT NULL DEFAULT 'Y');`

    **Correct Answer:** c) `ALTER TABLE customers ADD (is_active VARCHAR2(1) DEFAULT 'Y' NOT NULL);`
    **Explanation:** When adding a `NOT NULL` column to a table that already contains data, you *must* specify a `DEFAULT` value. This ensures that all existing rows are populated with a non-`NULL` value, satisfying the `NOT NULL` constraint. Option (c) correctly combines `DEFAULT 'Y'` and `NOT NULL`.
    *   Option (a) would fail because existing rows would violate the `NOT NULL` constraint without a default.
    *   Option (b) would add the column, but it would allow `NULL` values and not enforce the `NOT NULL` constraint.
    *   Option (d) uses `MODIFY`, which is for changing existing columns, not adding new ones. The syntax for `DEFAULT` and `NOT NULL` is also incorrect for `MODIFY` in this context.

2.  **Question:** You have a table named `old_data` that is no longer needed. This table has no foreign key constraints referencing it from other tables. You want to remove it completely from the database. Which SQL statement should you use?
    a) `DELETE FROM old_data;`
    b) `TRUNCATE TABLE old_data;`
    c) `DROP TABLE old_data;`
    d) `ALTER TABLE old_data REMOVE;`

    **Correct Answer:** c) `DROP TABLE old_data;`
    **Explanation:** `DROP TABLE` is the DDL command used to permanently remove a table and all its data from the database.
    *   Option (a) `DELETE FROM old_data;` would only remove the data, leaving the table structure intact.
    *   Option (b) `TRUNCATE TABLE old_data;` would also only remove the data, leaving the table structure intact.
    *   Option (d) `ALTER TABLE ... REMOVE;` is not a valid SQL command for dropping a table.

#### AI generation note
Produce a 15-minute live coding video. Begin by creating a `customers` table with `customer_id` (PK), `name` (NOT NULL), `email` (UNIQUE), and `registration_date` (DEFAULT SYSDATE). Demonstrate inserting a few rows. Then, use `ALTER TABLE` to add a `phone_number` column, then modify the `name` column's size, and finally drop the `email` column (with a warning about data loss). Show `DESCRIBE` before and after each `ALTER` operation. Conclude by demonstrating `DROP TABLE` with and without `CASCADE CONSTRAINTS` (by first creating a dummy child table). Use SQL Developer or a similar GUI tool to visually show table structure changes. The interactive element will be a challenge to rename a column and then rename the entire table.

---

### Chapter 6.5 — Managing Data Integrity: Constraints

#### Learning objectives
*   Define data integrity and explain its importance in relational databases.
*   Understand and implement various types of integrity constraints: `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, and `CHECK`.
*   Learn how to define constraints at both column level and table level during table creation.
*   Master adding, enabling, disabling, and dropping constraints using the `ALTER TABLE` statement.
*   Identify common constraint violation errors and strategies for resolving them.

#### Detailed lesson content
Data integrity is the bedrock of any reliable database system. It refers to the overall completeness, accuracy, and consistency of data. Without proper data integrity, your database can become a source of misinformation, leading to incorrect reports, failed transactions, and ultimately, poor business decisions. In Oracle SQL, we enforce data integrity through the use of **constraints**. Constraints are rules defined at the column or table level that restrict the data that can be entered into a table, thereby ensuring the quality and consistency of the stored information.

There are five main types of integrity constraints in Oracle:

1.  **`NOT NULL` Constraint:** This constraint ensures that a column cannot contain `NULL` values. Every row must have a definite value for this column. We've seen this in previous chapters.
    ```sql
    CREATE TABLE employees (
        employee_id NUMBER(6),
        first_name VARCHAR2(20) NOT NULL, -- Column-level NOT NULL
        last_name VARCHAR2(25) NOT NULL
    );
    ```

2.  **`UNIQUE` Constraint:** This constraint ensures that all values in a column (or a set of columns) are unique. While multiple `NULL` values are allowed in a `UNIQUE` column (unless `NOT NULL` is also specified), no two non-`NULL` values can be the same.
    ```sql
    CREATE TABLE employees (
        employee_id NUMBER(6),
        email VARCHAR2(25) UNIQUE, -- Column-level UNIQUE
        phone_number VARCHAR2(20)
    );
    ```
    For multiple columns:
    ```sql
    CREATE TABLE products (
        product_id NUMBER(6),
        product_name VARCHAR2(100),
        category_id NUMBER(4),
        CONSTRAINT pk_products PRIMARY KEY (product_id), -- Primary Key (covered next)
        CONSTRAINT un_product_category UNIQUE (product_name, category_id) -- Table-level UNIQUE
    );
    ```
    This `UNIQUE` constraint ensures that no two products can have the same name *within the same category*.

3.  **`PRIMARY KEY` Constraint:** This is a special type of `UNIQUE` and `NOT NULL` constraint. A table can have only one `PRIMARY KEY`. Its purpose is to uniquely identify each row in the table. It's the most important constraint for establishing relationships between tables.
    ```sql
    CREATE TABLE employees (
        employee_id NUMBER(6) PRIMARY KEY, -- Column-level PRIMARY KEY
        first_name VARCHAR2(20) NOT NULL
    );
    ```
    Alternatively, at the table level (useful for composite primary keys):
    ```sql
    CREATE TABLE order_items (
        order_id NUMBER(6),
        item_id NUMBER(6),
        quantity NUMBER(3),
        CONSTRAINT pk_order_items PRIMARY KEY (order_id, item_id) -- Table-level composite PK
    );
    ```

4.  **`FOREIGN KEY` Constraint (Referential Integrity):** This constraint establishes a link between the data in two tables. A `FOREIGN KEY` in one table points to a `PRIMARY KEY` (or `UNIQUE` key) in another table, ensuring that relationships between tables remain consistent. This is crucial for maintaining referential integrity.
    ```sql
    CREATE TABLE departments (
        department_id NUMBER(4) PRIMARY KEY,
        department_name VARCHAR2(30) NOT NULL
    );

    CREATE TABLE employees (
        employee_id NUMBER(6) PRIMARY KEY,
        first_name VARCHAR2(20) NOT NULL,
        last_name VARCHAR2(25) NOT NULL,
        department_id NUMBER(4),
        CONSTRAINT fk_departments
            FOREIGN KEY (department_id)
            REFERENCES departments (department_id) -- Table-level FOREIGN KEY
    );
    ```
    The `FOREIGN KEY (department_id) REFERENCES departments (department_id)` clause ensures that any `department_id` inserted into the `employees` table *must* already exist in the `department_id` column of the `departments` table.
    `FOREIGN KEY` constraints can also specify actions to take when the referenced parent key is deleted:
    *   `ON DELETE CASCADE`: If a row in the parent table is deleted, all corresponding child rows in the referencing table are also deleted. (Use with extreme caution!)
    *   `ON DELETE SET NULL`: If a row in the parent table is deleted, the `FOREIGN KEY` values in the child table are set to `NULL`. (Requires the foreign key column(s) to be nullable).
    By default, if neither is specified, Oracle prevents deletion of a parent row if child rows exist.

5.  **`CHECK` Constraint:** This constraint allows you to define a specific condition that must be true for all values in a column. It enforces domain integrity.
    ```sql
    CREATE TABLE products (
        product_id NUMBER(6) PRIMARY KEY,
        price NUMBER(10, 2) NOT NULL,
        CONSTRAINT ck_price_positive CHECK (price > 0) -- Table-level CHECK
    );
    ```
    This ensures that no product can have a price less than or equal to zero.

**Defining Constraints:**
Constraints can be defined at two levels:
*   **Column-level:** Defined as part of the column definition (e.g., `employee_id NUMBER(6) PRIMARY KEY`). Only `NOT NULL`, `UNIQUE`, and `PRIMARY KEY` can be defined at the column level. `FOREIGN KEY` and `CHECK` can also be defined at column level if they apply to only that single column.
*   **Table-level:** Defined separately from column definitions, often at the end of the `CREATE TABLE` statement (e.g., `CONSTRAINT pk_employees PRIMARY KEY (employee_id)`). This is required for composite constraints (involving multiple columns) and is generally preferred for clarity and consistency, especially for `PRIMARY KEY` and `FOREIGN KEY`.

**Managing Constraints with `ALTER TABLE`:**
You can add, enable, disable, or drop constraints on existing tables using `ALTER TABLE`.

*   **Adding a constraint:**
    ```sql
    ALTER TABLE employees
    ADD CONSTRAINT pk_employees PRIMARY KEY (employee_id);

    ALTER TABLE employees
    ADD CONSTRAINT fk_dept_id FOREIGN KEY (department_id) REFERENCES departments (department_id);

    ALTER TABLE products
    ADD CONSTRAINT ck_stock_level CHECK (stock_level >= 0);
    ```
    When adding a `PRIMARY KEY` or `UNIQUE` constraint to an existing table, Oracle checks if existing data violates the constraint. If violations are found, the `ALTER TABLE` statement will fail.

*   **Enabling/Disabling a constraint:** Constraints can be temporarily disabled, which can be useful for bulk data loading operations (to speed up inserts) or during maintenance.
    ```sql
    ALTER TABLE employees DISABLE CONSTRAINT fk_dept_id;
    ALTER TABLE employees ENABLE CONSTRAINT fk_dept_id;
    ```
    When enabling a constraint, Oracle checks all existing data for violations. If violations are found, the constraint cannot be enabled.

*   **Dropping a constraint:**
    ```sql
    ALTER TABLE employees DROP CONSTRAINT fk_dept_id;
    ALTER TABLE employees DROP CONSTRAINT pk_employees;
    ```
    Dropping a `PRIMARY KEY` constraint will implicitly drop any `FOREIGN KEY` constraints in other tables that reference it.

**Common Mistakes and Troubleshooting:**
*   **Constraint Violation Errors:** When you try to `INSERT` or `UPDATE` data that violates a constraint, Oracle will raise an error (e.g., `ORA-00001: unique constraint (...) violated`, `ORA-02291: integrity constraint (...) violated - parent key not found`, `ORA-02290: check constraint (...) violated`). The error message usually indicates which constraint was violated.
*   **Incorrect `FOREIGN KEY` references:** Ensure the `FOREIGN KEY` references a `PRIMARY KEY` or `UNIQUE` key in the parent table, and that the data types of the columns match.
*   **Disabling/Enabling Issues:** If you disable a `PRIMARY KEY` or `UNIQUE` constraint, any `FOREIGN KEY` constraints that depend on it will become unusable until the parent constraint is re-enabled. When re-enabling, ensure the data is clean.
*   **Performance Impact:** Constraints, especially `FOREIGN KEY`s, can have a slight performance overhead on DML operations because Oracle must check the constraint rules. However, the benefits of data integrity far outweigh this minor overhead.

Understanding and effectively using constraints is fundamental to building robust, reliable, and maintainable database systems. They are your first line of defense against bad data.

#### Key concepts
*   **Data Integrity:** The overall completeness, accuracy, and consistency of data in a database.
*   **Constraint:** A rule defined on a column or table to enforce data integrity.
*   **`NOT NULL` Constraint:** Ensures a column cannot contain `NULL` values.
*   **`UNIQUE` Constraint:** Ensures all values in a column (or set of columns) are unique.
*   **`PRIMARY KEY` Constraint:** Uniquely identifies each row in a table; it is both `UNIQUE` and `NOT NULL`. A table can have only one.
*   **`FOREIGN KEY` Constraint (Referential Integrity):** Establishes a link between two tables, ensuring that values in the foreign key column(s) match values in the primary/unique key of the referenced (parent) table.
*   **`CHECK` Constraint:** Enforces a specific condition that must be true for values in a column.
*   **Column-level Constraint:** Defined as part of the column definition.
*   **Table-level Constraint:** Defined separately from column definitions, usually at the end of the `CREATE TABLE` statement.
*   **`ON DELETE CASCADE` / `ON DELETE SET NULL`:** Options for `FOREIGN KEY` constraints that specify actions upon deletion of a parent row.
*   **`ALTER TABLE ... ADD CONSTRAINT`:** Used to add a new constraint to an existing table.
*   **`ALTER TABLE ... ENABLE/DISABLE CONSTRAINT`:** Used to activate or deactivate a constraint.
*   **`ALTER TABLE ... DROP CONSTRAINT`:** Used to remove a constraint from a table.

#### Hands-on activity
**Activity: Building a Course Enrollment System with Constraints**

You will create two tables, `courses` and `enrollments`, and define various constraints to ensure data integrity.

1.  **Create a `courses` table** with the following columns and constraints:
    *   `course_id` (NUMBER(4), PRIMARY KEY)
    *   `course_title` (VARCHAR2(100), NOT NULL, UNIQUE)
    *   `credits` (NUMBER(2,1), NOT NULL, CHECK that credits are between 0.5 and 6.0)
    *   `department` (VARCHAR2(50), DEFAULT 'Undeclared')
2.  **Create an `enrollments` table** with the following columns and constraints:
    *   `enrollment_id` (NUMBER(6), PRIMARY KEY)
    *   `student_id` (NUMBER(6), NOT NULL)
    *   `course_id` (NUMBER(4), NOT NULL, FOREIGN KEY referencing `courses.course_id` with `ON DELETE CASCADE`)
    *   `enrollment_date` (DATE, DEFAULT SYSDATE)
    *   `grade` (VARCHAR2(2), CHECK that grade is one of 'A', 'B', 'C', 'D', 'F', 'P', 'NP', NULL)
3.  **Insert sample data** into `courses` and `enrollments` to test the constraints. Try to insert data that violates each constraint type and observe the errors.
4.  **Disable the `fk_course_enrollment` constraint** on the `enrollments` table.
5.  **Attempt to delete a course** from the `courses` table that has existing enrollments (it should work now that the FK is disabled).
6.  **Enable the `fk_course_enrollment` constraint** again. (It might fail if you deleted a parent course, demonstrating the need for clean data before re-enabling).
7.  **Clean up** by dropping both tables.

**Starter Code:**
```sql
-- Task 1: Create courses table
-- CREATE TABLE courses (
--     course_id      NUMBER(4) PRIMARY KEY,
--     course_title   VARCHAR2(100) NOT NULL UNIQUE,
--     credits        NUMBER(2,1) NOT NULL CONSTRAINT ck_credits CHECK (credits BETWEEN 0.5 AND 6.0),
--     department     VARCHAR2(50) DEFAULT 'Undeclared'
-- );

-- Task 2: Create enrollments table
-- CREATE TABLE enrollments (
--     enrollment_id   NUMBER(6) PRIMARY KEY,
--     student_id      NUMBER(6) NOT NULL,
--     course_id       NUMBER(4) NOT NULL,
--     enrollment_date DATE DEFAULT SYSDATE,
--     grade           VARCHAR2(2) CONSTRAINT ck_grade CHECK (grade IN ('A', 'B', 'C', 'D', 'F', 'P', 'NP', NULL)),
--     CONSTRAINT fk_course_enrollment FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE CASCADE
-- );

-- Task 3: Insert sample data and test violations
-- INSERT INTO courses VALUES (101, 'Database Fundamentals', 3.0, 'Computer Science');
-- INSERT INTO enrollments VALUES (1, 1001, 101, SYSDATE, 'A');
-- -- Try inserting a course with duplicate title (should fail)
-- -- INSERT INTO courses VALUES (102, 'Database Fundamentals', 3.0, 'Computer Science');
-- -- Try inserting an enrollment for a non-existent course (should fail)
-- -- INSERT INTO enrollments VALUES (2, 1002, 999, SYSDATE, 'B');
-- -- Try inserting an enrollment with invalid grade (should fail)
-- -- INSERT INTO enrollments VALUES (3, 1003, 101, SYSDATE, 'X');

-- Task 4: Disable FK
-- ALTER TABLE enrollments DISABLE CONSTRAINT fk_course_enrollment;

-- Task 5: Delete a course with enrollments (should succeed now)
-- DELETE FROM courses WHERE course_id = 101;

-- Task 6: Enable FK (will fail if course 101 was deleted and enrollments still exist for it)
-- ALTER TABLE enrollments ENABLE CONSTRAINT fk_course_enrollment;

-- Task 7: Clean up
-- DROP TABLE enrollments;
-- DROP TABLE courses;
```

#### Assessment idea
1.  **Question:** You are designing a `books` table. Each book must have a unique `ISBN` (International Standard Book Number) and a `title`. The `author_id` column should link to an `authors` table's `author_id` (which is its primary key). Which set of constraints correctly defines these requirements for the `books` table?
    a) `ISBN VARCHAR2(13) UNIQUE, title VARCHAR2(255) NOT NULL, author_id NUMBER(6) REFERENCES authors(author_id)`
    b) `ISBN VARCHAR2(13) PRIMARY KEY, title VARCHAR2(255) NOT NULL, CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(author_id)`
    c) `ISBN VARCHAR2(13) NOT NULL, title VARCHAR2(255) UNIQUE, author_id NUMBER(6) FOREIGN KEY REFERENCES authors(author_id)`
    d) `ISBN VARCHAR2(13) UNIQUE NOT NULL, title VARCHAR2(255), author_id NUMBER(6) REFERENCES authors(author_id)`

    **Correct Answer:** b) `ISBN VARCHAR2(13) PRIMARY KEY, title VARCHAR2(255) NOT NULL, CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(author_id)`
    **Explanation:**
    *   An `ISBN` is a unique identifier and should be the `PRIMARY KEY` to uniquely identify each book, which also implies `NOT NULL`.
    *   The `title` should be `NOT NULL` as every book must have a title.
    *   The `author_id` needs to be a `FOREIGN KEY` referencing the `authors` table. The `CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors(author_id)` syntax correctly defines this as a table-level constraint.
    *   Option (a) uses `UNIQUE` for `ISBN` but not `NOT NULL` (though `PRIMARY KEY` would be better). The `FOREIGN KEY` syntax is incomplete for table-level.
    *   Option (c) incorrectly makes `title` `UNIQUE` (multiple books can have the same title, just different ISBNs) and has incorrect `FOREIGN KEY` syntax.
    *   Option (d) makes `ISBN` `UNIQUE NOT NULL` (which is equivalent to `PRIMARY KEY` but `PRIMARY KEY` is more explicit for the main identifier) and `title` can be `NULL` which is usually undesirable.

2.  **Question:** You have a `product_inventory` table with a `quantity_on_hand` column. You want to ensure that the value in `quantity_on_hand` is never negative. Which constraint would you add to enforce this rule?
    a) `ALTER TABLE product_inventory ADD CONSTRAINT pk_quantity PRIMARY KEY (quantity_on_hand);`
    b) `ALTER TABLE product_inventory ADD CONSTRAINT un_quantity UNIQUE (quantity_on_hand);`
    c) `ALTER TABLE product_inventory ADD CONSTRAINT nn_quantity NOT NULL (quantity_on_hand);`
    d) `ALTER TABLE product_inventory ADD CONSTRAINT ck_quantity_positive CHECK (quantity_on_hand >= 0);`

    **Correct Answer:** d) `ALTER TABLE product_inventory ADD CONSTRAINT ck_quantity_positive CHECK (quantity_on_hand >= 0);`
    **Explanation:** A `CHECK` constraint is specifically designed to enforce a condition on the data in a column. In this case, `CHECK (quantity_on_hand >= 0)` directly prevents negative values.
    *   Option (a) `PRIMARY KEY` is for unique identification, not value range.
    *   Option (b) `UNIQUE` ensures uniqueness, not positivity.
    *   Option (c) `NOT NULL` prevents `NULL` values, but not negative ones.

#### AI generation note
Create a 15-minute interactive video lesson. Start by explaining data integrity and the need for constraints with a real-world analogy (e.g., rules for a library catalog). Then, live code the creation of two tables (`departments` and `employees`), progressively adding `PRIMARY KEY`, `NOT NULL`, `UNIQUE` (for email), `CHECK` (for salary range), and `FOREIGN KEY` (linking employees to departments) constraints. For each constraint, attempt an `INSERT` that violates it, showing the Oracle error message. Demonstrate `ON DELETE CASCADE` by deleting a department and showing associated employees being removed. The interactive element will be a coding challenge to add a `CHECK` constraint to an existing table to ensure a `hire_date` is not in the future. Use animated diagrams to illustrate how `FOREIGN KEY` links tables.

---

## Final Capstone Project

This course has equipped you with a robust foundation in Oracle SQL. Now, it's time to apply your comprehensive knowledge to a real-world scenario. The capstone project is your opportunity to demonstrate mastery of DDL, DML, complex queries, joins, subqueries, and more, by designing and interacting with a relational database from the ground up. You will choose one of the following three projects, each designed to integrate skills from across all modules and challenge you to think critically about data modeling and manipulation.

### Project Option 1: Employee Management System

**Project Description:** Design and implement a database for a small company's Human Resources department to manage employee information, departments, and project assignments. This system will track employee details, their departmental affiliations, and which projects they are currently working on.

**Requirements:**
1.  **Database Schema Design:** Create at least three tables: `EMPLOYEES`, `DEPARTMENTS`, and `PROJECTS`.
    *   `EMPLOYEES` table must include `employee_id` (primary key), `first_name`, `last_name`, `email` (unique), `phone_number`, `hire_date`, `job_id`, `salary`, `department_id` (foreign key).
    *   `DEPARTMENTS` table must include `department_id` (primary key), `department_name` (unique), `location_id`.
    *   `PROJECTS` table must include `project_id` (primary key), `project_name` (unique), `start_date`, `end_date`, `budget`.
    *   Establish appropriate primary and foreign key constraints, `NOT NULL` constraints, and a `CHECK` constraint for `salary` (e.g., `salary > 0`).
2.  **Data Population:** Insert at least 10 records into the `EMPLOYEES` table, 3 records into `DEPARTMENTS`, and 5 records into `PROJECTS`. Ensure data integrity is maintained.
3.  **Data Manipulation (DML):**
    *   Update an employee's salary and job ID.
    *   Add a new department.
    *   Delete a project that has been completed.
4.  **Complex Queries:**
    *   Retrieve a list of all employees, their department names, and the projects they are assigned to (if any). Use appropriate `JOIN` clauses.
    *   Find the average salary for each department.
    *   List all employees who earn more than the average salary of all employees. Use a subquery.
    *   Identify departments that have no employees currently assigned.
    *   Find the employee with the highest salary in each department.

**Stretch Goals:**
*   Create a `VIEW` that displays employee full name, department name, and project name.
*   Implement a `SEQUENCE` for automatically generating `employee_id` values.
*   Use `GROUP BY` and `HAVING` to find departments where the total salary expenditure exceeds a certain amount.
*   Explore the `MERGE` statement for updating or inserting employee data based on a source.

**Evaluation Criteria:**
*   Correctness and efficiency of DDL statements (table creation, constraints).
*   Accuracy and integrity of DML operations (inserts, updates, deletes).
*   Correctness and logical structure of all SQL queries, including appropriate use of joins, subqueries, and aggregate functions.
*   Adherence to relational database principles (normalization, key relationships).
*   Clear and well-commented SQL script.

**Estimated Time:** 8–12 hours

### Project Option 2: Online Bookstore Database

**Project Description:** Develop a database schema for an online bookstore, managing books, authors, customers, and their orders. This system will track inventory, customer purchases, and author details.

**Requirements:**
1.  **Database Schema Design:** Create at least five tables: `BOOKS`, `AUTHORS`, `CUSTOMERS`, `ORDERS`, and `ORDER_ITEMS`.
    *   `BOOKS` table must include `book_id` (primary key), `title`, `isbn` (unique), `publication_year`, `price`, `stock_quantity`, `author_id` (foreign key).
    *   `AUTHORS` table must include `author_id` (primary key), `first_name`, `last_name`, `birth_date`.
    *   `CUSTOMERS` table must include `customer_id` (primary key), `first_name`, `last_name`, `email` (unique), `registration_date`.
    *   `ORDERS` table must include `order_id` (primary key), `customer_id` (foreign key), `order_date`, `total_amount`.
    *   `ORDER_ITEMS` table must include `order_item_id` (primary key), `order_id` (foreign key), `book_id` (foreign key), `quantity`, `item_price`.
    *   Implement all necessary primary key, foreign key, `NOT NULL`, and `CHECK` constraints (e.g., `price > 0`, `stock_quantity >= 0`).
2.  **Data Population:** Insert at least 15 records into `BOOKS`, 5 into `AUTHORS`, 8 into `CUSTOMERS`, 5 into `ORDERS`, and 10 into `ORDER_ITEMS`. Ensure realistic data that demonstrates relationships.
3.  **Data Manipulation (DML):**
    *   Update the stock quantity for a specific book after an order.
    *   Register a new customer.
    *   Cancel an order (delete the order and its items, or mark as cancelled).
4.  **Complex Queries:**
    *   List all books, including their author's full name.
    *   Find all customers who have placed an order in the last 6 months.
    *   Identify the top 3 best-selling books by total quantity sold.
    *   Retrieve the order history for a specific customer, showing book titles, quantities, and prices for each item.
    *   Find authors who have not published any books yet. Use `LEFT JOIN` and `WHERE IS NULL` or `NOT EXISTS`.
    *   Calculate the total revenue generated by each author.

**Stretch Goals:**
*   Implement a `TRANSACTION` block for processing a new order, ensuring that book stock is decremented and order items are added atomically.
*   Create an `INDEX` on frequently searched columns like `book_title` or `customer_email`.
*   Use `ROWNUM` or `FETCH FIRST` to limit the number of results for "top N" queries.
*   Explore `UNION` to combine results from different book categories if you were to add a `CATEGORIES` table.

**Evaluation Criteria:**
*   Soundness of the database schema and correct application of all constraint types.
*   Accuracy and consistency of data after DML operations.
*   Proficiency in writing complex `SELECT` statements involving multiple joins, subqueries, aggregate functions, and date functions.
*   Demonstrated understanding of transactional integrity (if stretch goal attempted).
*   Well-organized and executable SQL script.

**Estimated Time:** 10–15 hours

### Project Option 3: University Course Registration System

**Project Description:** Design a database for a university to manage students, courses, instructors, and course enrollments. This system will facilitate tracking student academic records, course offerings, and instructor assignments.

**Requirements:**
1.  **Database Schema Design:** Create at least four tables: `STUDENTS`, `COURSES`, `INSTRUCTORS`, and `ENROLLMENTS`.
    *   `STUDENTS` table must include `student_id` (primary key), `first_name`, `last_name`, `email` (unique), `enrollment_date`, `major`.
    *   `COURSES` table must include `course_id` (primary key), `course_code` (unique), `title`, `credits`, `department`.
    *   `INSTRUCTORS` table must include `instructor_id` (primary key), `first_name`, `last_name`, `email` (unique), `hire_date`.
    *   `ENROLLMENTS` table must include `enrollment_id` (primary key), `student_id` (foreign key), `course_id` (foreign key), `enrollment_date`, `grade` (nullable).
    *   Ensure all necessary primary key, foreign key, `NOT NULL`, and `CHECK` constraints are applied (e.g., `credits > 0`, `grade` in 'A', 'B', 'C', 'D', 'F').
2.  **Data Population:** Insert at least 12 records into `STUDENTS`, 8 into `COURSES`, 5 into `INSTRUCTORS`, and 15 into `ENROLLMENTS`. Populate `grade` for some enrollments.
3.  **Data Manipulation (DML):**
    *   Enroll a new student in a course.
    *   Update a student's grade for a specific course.
    *   Remove a student's enrollment from a course.
    *   Add a new course offering.
4.  **Complex Queries:**
    *   List all students and the courses they are enrolled in, including the instructor's name for each course.
    *   Find the average grade for each course.
    *   Identify students who are enrolled in more than 3 courses.
    *   List courses that currently have no students enrolled.
    *   Find the top 5 students with the highest average grade across all their enrolled courses.
    *   Use `CASE` expressions to categorize courses by credit hours (e.g., 'Full Course' for 3+ credits, 'Half Course' for less).

**Stretch Goals:**
*   Create a `VIEW` that shows each student's transcript (course title, credits, grade).
*   Use `ANALYTIC FUNCTIONS` like `RANK()` or `DENSE_RANK()` to rank students by their average GPA.
*   Implement a `SEQUENCE` for `enrollment_id`.
*   Explore the `WITH` clause (Common Table Expressions) for breaking down complex queries into readable steps.

**Evaluation Criteria:**
*   Correct and logical database schema design with appropriate constraints.
*   Accuracy and integrity of data after DML operations.
*   Sophistication and correctness of SQL queries, demonstrating advanced join techniques, subqueries, aggregate functions, and conditional logic.
*   Ability to solve real-world data retrieval and manipulation problems.
*   Clean, well-structured, and executable SQL script.

**Estimated Time:** 10–15 hours

---

## Final Examination

This final examination assesses your comprehensive understanding of Oracle SQL, covering all modules from basic data retrieval to advanced data manipulation and database object management. It includes a mix of conceptual questions, code tracing, code writing, and problem-solving scenarios.

**Instructions:**
*   Answer all questions thoroughly.
*   For code writing questions, provide complete and executable SQL statements.
*   For code tracing questions, clearly state the output and explain your reasoning.
*   For design/debugging questions, provide specific solutions and justifications.

---

### Section 1: Concept Definitions (4 Questions)

1.  **Question:** Explain the fundamental difference between `DDL` (Data Definition Language) and `DML` (Data Manipulation Language) commands in SQL. Provide two examples for each.
    **Answer:** `DDL` commands are used to define, modify, or delete the structure of database objects. They deal with the schema of the database. Examples include `CREATE TABLE`, `ALTER TABLE`, `DROP TABLE`. `DML` commands, on the other hand, are used to manage data within the database objects. They deal with the data stored in the tables. Examples include `INSERT`, `UPDATE`, `DELETE`, `SELECT`. The key distinction is that DDL affects the *structure*, while DML affects the *content*.

2.  **Question:** Describe the purpose of `PRIMARY KEY` and `FOREIGN KEY` constraints. How do they relate to ensuring data integrity in a relational database?
    **Answer:** A `PRIMARY KEY` uniquely identifies each record in a table and cannot contain NULL values. Its purpose is to ensure entity integrity, meaning each row in the table is distinct and identifiable. A `FOREIGN KEY` is a column or set of columns in one table that refers to the primary key in another table. Its purpose is to establish and enforce a link between the data in two tables, ensuring referential integrity. This means that if a foreign key value exists, it must correspond to a valid primary key value in the referenced table, preventing orphaned records and maintaining consistent relationships between data.

3.  **Question:** What is the difference between `TRUNCATE TABLE table_name;` and `DELETE FROM table_name;` when no `WHERE` clause is specified? Consider transactional behavior and performance.
    **Answer:**
    *   `TRUNCATE TABLE`: This is a DDL command. It quickly removes all rows from a table by deallocating the data pages used by the table. It cannot be rolled back, as it implicitly commits the transaction. It does not fire DML triggers and resets high-water mark. It is generally much faster for large tables because it doesn't log individual row deletions.
    *   `DELETE FROM`: This is a DML command. It removes rows one by one from a table. When no `WHERE` clause is specified, it removes all rows. It is a fully logged operation, meaning each deleted row is recorded in the redo logs, making it slower than `TRUNCATE`. It can be rolled back, and it fires DML triggers.
    In summary, `TRUNCATE` is faster and non-rollbackable (DDL), while `DELETE` is slower but rollbackable (DML) and respects triggers.

4.  **Question:** Explain what a subquery is and provide a scenario where using a subquery would be more appropriate or clearer than using a `JOIN`.
    **Answer:** A subquery (or inner query) is a `SELECT` statement nested within another SQL statement (e.g., `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `FROM`, `WHERE`, `HAVING`). It executes first, and its result is used by the outer query.
    A scenario where a subquery is often more appropriate than a join is when you need to filter the main query based on an aggregate result from another table, or when you need to check for the existence/non-existence of related records. For example, to find all employees who earn more than the average salary of *all* employees, a subquery is ideal: `SELECT employee_id, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);`. While this could sometimes be achieved with a join (e.g., a self-join with a derived table for the average), the subquery approach is often more intuitive and directly expresses the "compare to an aggregate" logic. Another example is using `EXISTS` or `NOT EXISTS` to check for related records without actually retrieving data from the joined table, which can be more efficient.

---

### Section 2: Code Tracing (3 Questions)

Consider the following two tables:

**`EMPLOYEES` Table:**
| EMPLOYEE_ID | FIRST_NAME | LAST_NAME | DEPARTMENT_ID | SALARY |
| :---------- | :--------- | :-------- | :------------ | :----- |
| 101         | John       | Doe       | 10            | 60000  |
| 102         | Jane       | Smith     | 20            | 75000  |
| 103         | Peter      | Jones     | 10            | 62000  |
| 104         | Alice      | Brown     | 30            | 80000  |
| 105         | Bob        | White     | 20            | 70000  |
| 106         | Charlie    | Green     | NULL          | 55000  |

**`DEPARTMENTS` Table:**
| DEPARTMENT_ID | DEPARTMENT_NAME | LOCATION |
| :------------ | :-------------- | :------- |
| 10            | HR              | New York |
| 20            | Sales           | London   |
| 30            | IT              | Paris    |
| 40            | Marketing       | Tokyo    |

1.  **Question:** What will be the output of the following SQL query?
    ```sql
    SELECT e.first_name, d.department_name
    FROM employees e JOIN departments d
    ON e.department_id = d.department_id
    WHERE e.salary > 70000
    ORDER BY e.first_name;
    ```
    **Answer:**
    ```
    FIRST_NAME  DEPARTMENT_NAME
    ----------- -----------------
    Alice       IT
    Jane        Sales
    ```
    **Explanation:**
    1.  The `JOIN` clause combines rows from `EMPLOYEES` and `DEPARTMENTS` where `e.department_id` matches `d.department_id`.
    2.  The `WHERE e.salary > 70000` clause filters these joined rows, keeping only employees with a salary greater than 70000.
        *   John Doe (60000) - filtered out
        *   Jane Smith (75000) - kept
        *   Peter Jones (62000) - filtered out
        *   Alice Brown (80000) - kept
        *   Bob White (70000) - filtered out (not strictly greater than)
        *   Charlie Green (NULL department_id) - not included in `INNER JOIN`
    3.  The `SELECT` clause then picks `first_name` from `employees` and `department_name` from `departments`.
    4.  The `ORDER BY e.first_name` sorts the results alphabetically by first name.

2.  **Question:** What will be the output of the following SQL query?
    ```sql
    SELECT department_id, COUNT(employee_id) AS total_employees, AVG(salary) AS avg_dept_salary
    FROM employees
    GROUP BY department_id
    HAVING COUNT(employee_id) > 1
    ORDER BY department_id;
    ```
    **Answer:**
    ```
    DEPARTMENT_ID TOTAL_EMPLOYEES AVG_DEPT_SALARY
    ------------- --------------- ---------------
    10            2               61000
    20            2               72500
    ```
    **Explanation:**
    1.  The `GROUP BY department_id` clause groups the employees by their respective departments.
        *   `DEPARTMENT_ID = 10`: Employees 101 (John), 103 (Peter)
        *   `DEPARTMENT_ID = 20`: Employees 102 (Jane), 105 (Bob)
        *   `DEPARTMENT_ID = 30`: Employee 104 (Alice)
        *   `DEPARTMENT_ID = NULL`: Employee 106 (Charlie)
    2.  `COUNT(employee_id)` and `AVG(salary)` are calculated for each group.
        *   Dept 10: COUNT = 2, AVG = (60000 + 62000) / 2 = 61000
        *   Dept 20: COUNT = 2, AVG = (75000 + 70000) / 2 = 72500
        *   Dept 30: COUNT = 1, AVG = 80000
        *   Dept NULL: COUNT = 1, AVG = 55000
    3.  The `HAVING COUNT(employee_id) > 1` clause filters these groups, keeping only those with more than one employee. This eliminates Department 30 and the NULL department group.
    4.  The `ORDER BY department_id` sorts the remaining groups by department ID.

3.  **Question:** What will be the output of the following SQL query?
    ```sql
    SELECT first_name, salary
    FROM employees
    WHERE salary = (SELECT MAX(salary) FROM employees WHERE department_id = 20);
    ```
    **Answer:**
    ```
    FIRST_NAME  SALARY
    ----------- ------
    Jane        75000
    ```
    **Explanation:**
    1.  The subquery `(SELECT MAX(salary) FROM employees WHERE department_id = 20)` executes first.
        *   It finds the maximum salary among employees in `department_id = 20`.
        *   Employees in department 20 are Jane (75000) and Bob (70000).
        *   `MAX(salary)` for department 20 is `75000`.
    2.  The outer query then becomes `SELECT first_name, salary FROM employees WHERE salary = 75000;`.
    3.  It selects employees whose salary is exactly 75000. From the `EMPLOYEES` table, only Jane Smith has a salary of 75000.

---

### Section 3: Code Writing (4 Questions)

1.  **Question:** Write a `CREATE TABLE` statement for a `PRODUCTS` table. It should have `product_id` (primary key, numeric, auto-incrementing using a sequence), `product_name` (varchar2, not null, unique), `price` (numeric, default 0.00, check constraint ensuring price is positive), `category` (varchar2), and `last_updated` (date, automatically set to current date on insert/update).
    **Answer:**
    ```sql
    -- Create a sequence for product_id
    CREATE SEQUENCE products_seq
    START WITH 1
    INCREMENT BY 1
    NOCACHE
    NOCYCLE;

    -- Create the PRODUCTS table
    CREATE TABLE products (
        product_id      NUMBER DEFAULT products_seq.NEXTVAL PRIMARY KEY,
        product_name    VARCHAR2(100) NOT NULL UNIQUE,
        price           NUMBER(10, 2) DEFAULT 0.00,
        category        VARCHAR2(50),
        last_updated    DATE DEFAULT SYSDATE
    );

    -- Add a trigger to update last_updated on row modification (optional but good practice for "last_updated")
    -- Oracle 12c+ allows DEFAULT ON UPDATE SYSDATE, but for earlier versions or explicit control, a trigger is used.
    -- For this beginner course, the DEFAULT SYSDATE on insert is sufficient, but for true "last_updated" on update, a trigger is needed.
    -- If the question implies update as well, this trigger would be ideal.
    /*
    CREATE OR REPLACE TRIGGER trg_products_last_updated
    BEFORE UPDATE ON products
    FOR EACH ROW
    BEGIN
        :NEW.last_updated := SYSDATE;
    END;
    /
    */
    ```
    **Partial Credit Guidance:**
    *   Correct table and column names: 1 point
    *   Correct data types: 1 point
    *   `PRIMARY KEY` constraint: 1 point
    *   `NOT NULL` and `UNIQUE` for `product_name`: 1 point
    *   `DEFAULT` for `price` and `last_updated`: 1 point
    *   `CHECK` constraint for `price`: 1 point
    *   Correct `SEQUENCE` creation and usage for `product_id`: 2 points

2.  **Question:** Write a SQL query to list the `first_name`, `last_name`, and `department_name` of all employees who work in departments located in 'New York' or 'London'. Order the results by `department_name` and then by `last_name`.
    **Answer:**
    ```sql
    SELECT e.first_name, e.last_name, d.department_name
    FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    WHERE d.location IN ('New York', 'London')
    ORDER BY d.department_name, e.last_name;
    ```
    **Partial Credit Guidance:**
    *   Correct `SELECT` clause with aliases: 1 point
    *   Correct `JOIN` clause: 2 points
    *   Correct `WHERE` clause using `IN`: 2 points
    *   Correct `ORDER BY` clause with multiple columns: 1 point

3.  **Question:** Write an `UPDATE` statement that increases the salary of all employees in the 'Sales' department by 10%.
    **Answer:**
    ```sql
    UPDATE employees
    SET salary = salary * 1.10
    WHERE department_id = (SELECT department_id FROM departments WHERE department_name = 'Sales');
    ```
    **Partial Credit Guidance:**
    *   Correct `UPDATE` and `SET` clauses: 2 points
    *   Correct calculation for salary increase: 1 point
    *   Correct `WHERE` clause using a subquery to identify 'Sales' department: 3 points

4.  **Question:** Write a SQL query to display the `department_name` and the `total_salary` paid to employees in that department, but only for departments where the `total_salary` exceeds `150000`. Exclude any employees whose `salary` is `NULL`.
    **Answer:**
    ```sql
    SELECT d.department_name, SUM(e.salary) AS total_salary_paid
    FROM employees e
    JOIN departments d ON e.department_id = d.department_id
    WHERE e.salary IS NOT NULL -- Exclude employees with NULL salary before aggregation
    GROUP BY d.department_name
    HAVING SUM(e.salary) > 150000
    ORDER BY total_salary_paid DESC;
    ```
    **Partial Credit Guidance:**
    *   Correct `SELECT` clause with `SUM` and alias: 1 point
    *   Correct `JOIN` clause: 1 point
    *   Correct `WHERE` clause for `salary IS NOT NULL`: 1 point
    *   Correct `GROUP BY` clause: 1 point
    *   Correct `HAVING` clause with aggregate condition: 2 points
    *   Optional `ORDER BY` for clarity: 1 point

---

### Section 4: Design and Debugging Problems (4 Questions)

1.  **Question:** A junior developer wrote the following query to find employees and their department names, but it's returning an error "ORA-00904: "D"."DEPARTMENT_ID": invalid identifier". Identify the error and provide the corrected query.
    ```sql
    SELECT e.first_name, d.department_name
    FROM employees e LEFT JOIN departments d
    WHERE e.department_id = d.department_id;
    ```
    **Answer:**
    **Error Identification:** The error "ORA-00904: "D"."DEPARTMENT_ID": invalid identifier" occurs because the `ON` clause for a `JOIN` operation is missing. When using `JOIN` (especially `LEFT JOIN`, `RIGHT JOIN`, `INNER JOIN`), the join condition must be specified using the `ON` keyword, not `WHERE`. The `WHERE` clause is for filtering rows *after* the join has been performed. Without an `ON` clause, Oracle doesn't know how to link `e.department_id` to `d.department_id` within the `JOIN` context.
    **Corrected Query:**
    ```sql
    SELECT e.first_name, d.department_name
    FROM employees e LEFT JOIN departments d
    ON e.department_id = d.department_id;
    ```
    **Partial Credit Guidance:**
    *   Correctly identifying the missing `ON` clause: 3 points
    *   Providing the correct `ON` clause in the corrected query: 3 points

2.  **Question:** You are tasked with designing a simple database schema for a `Library` system. You need to store information about `Books` and `Borrowers`.
    *   `Books` should have a unique ID, title, author, and publication year.
    *   `Borrowers` should have a unique ID, name, and contact email.
    *   A `Book` can be borrowed by multiple `Borrowers` over time, and a `Borrower` can borrow multiple `Books`.
    Design the `CREATE TABLE` statements for these two main tables and an additional table to manage the borrowing relationship, including appropriate primary and foreign key constraints.
    **Answer:**
    ```sql
    CREATE TABLE Books (
        book_id         NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY PRIMARY KEY, -- Oracle 12c+ identity column
        title           VARCHAR2(255) NOT NULL,
        author          VARCHAR2(100) NOT NULL,
        publication_year NUMBER(4)
    );

    CREATE TABLE Borrowers (
        borrower_id     NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY PRIMARY KEY,
        name            VARCHAR2(100) NOT NULL,
        email           VARCHAR2(100) UNIQUE NOT NULL
    );

    CREATE TABLE Borrowing_Records (
        record_id       NUMBER GENERATED BY DEFAULT ON NULL AS IDENTITY PRIMARY KEY,
        book_id         NUMBER NOT NULL,
        borrower_id     NUMBER NOT NULL,
        borrow_date     DATE DEFAULT SYSDATE,
        return_date     DATE,
        CONSTRAINT fk_book_id FOREIGN KEY (book_id) REFERENCES Books(book_id),
        CONSTRAINT fk_borrower_id FOREIGN KEY (borrower_id) REFERENCES Borrowers(borrower_id)
    );
    ```
    **Explanation:**
    *   `Books` and `Borrowers` tables are straightforward, each with a primary key and essential attributes. The `GENERATED BY DEFAULT ON NULL AS IDENTITY` syntax is for Oracle 12c+ to create auto-incrementing primary keys easily. For older versions, a sequence and trigger would be used.
    *   The `Borrowing_Records` table is a junction/associative table that resolves the many-to-many relationship between `Books` and `Borrowers`. It holds foreign keys referencing both `Books` and `Borrowers`, along with attributes specific to the borrowing event (`borrow_date`, `return_date`).
    **Partial Credit Guidance:**
    *   Correct `Books` table with PK: 2 points
    *   Correct `Borrowers` table with PK and UNIQUE for email: 2 points
    *   Correct `Borrowing_Records` table: 1 point
    *   Correct foreign key constraints linking `Borrowing_Records` to `Books` and `Borrowers`: 2 points
    *   Appropriate data types and `NOT NULL` constraints: 1 point

3.  **Question:** A user reports that a query designed to find employees who have not been assigned to any department is not working as expected. They are using the following query:
    ```sql
    SELECT e.first_name, e.last_name
    FROM employees e JOIN departments d
    ON e.department_id = d.department_id
    WHERE e.department_id IS NULL;
    ```
    Explain why this query is incorrect for the stated purpose and provide the correct SQL query.
    **Answer:**
    **Explanation of Incorrectness:** The query uses an `INNER JOIN` (implied by `JOIN` without specifying `LEFT` or `RIGHT`). An `INNER JOIN` only returns rows where there is a match in *both* tables based on the join condition (`e.department_id = d.department_id`). If an employee has a `NULL` `department_id`, there will be no matching `department_id` in the `DEPARTMENTS` table, and thus, that employee's record will be excluded from the result set *before* the `WHERE` clause is even applied. Therefore, the `WHERE e.department_id IS NULL` condition will never find any rows because any employee with a `NULL` `department_id` would have already been filtered out by the `INNER JOIN`.
    **Corrected Query:** To find employees not assigned to any department, we need to use a `LEFT JOIN` (or `LEFT OUTER JOIN`) to ensure all employees are included, regardless of whether they have a matching department. Then, we filter for employees where the `department_id` from the *right* table (departments) is `NULL`, or simply check if the employee's own `department_id` is `NULL` if we don't need department details.
    ```sql
    -- Option 1: Using LEFT JOIN to ensure all employees are considered
    SELECT e.first_name, e.last_name
    FROM employees e LEFT JOIN departments d
    ON e.department_id = d.department_id
    WHERE d.department_id IS NULL; -- This checks if there was no matching department, implying e.department_id was NULL or didn't match

    -- Option 2: Simpler, directly checking the employee's department_id if no department details are needed
    SELECT e.first_name, e.last_name
    FROM employees e
    WHERE e.department_id IS NULL;
    ```
    **Partial Credit Guidance:**
    *   Correctly explaining why `INNER JOIN` fails for this scenario: 3 points
    *   Providing a correct query using `LEFT JOIN` and `WHERE d.department_id IS NULL`: 3 points
    *   Providing the simpler correct query using `WHERE e.department_id IS NULL`: 2 points (if only this one, 3 points if both are provided)

4.  **Question:** You have a query that calculates the total sales for each product category, but it's running very slowly on a large `SALES` table. The query looks like this:
    ```sql
    SELECT p.category, SUM(s.amount) AS total_category_sales
    FROM sales s JOIN products p ON s.product_id = p.product_id
    WHERE s.sale_date BETWEEN TO_DATE('2023-01-01', 'YYYY-MM-DD') AND TO_DATE('2023-12-31', 'YYYY-MM-DD')
    GROUP BY p.category
    ORDER BY total_category_sales DESC;
    ```
    Suggest two concrete ways to optimize this query's performance, explaining why each suggestion would help.
    **Answer:**
    **Optimization Suggestions:**
    1.  **Create Indexes on Foreign Keys and Filter Columns:**
        *   **Suggestion:** Create an index on `sales.product_id` (if it's not already a primary key, which would implicitly be indexed) and on `products.product_id` (if not PK). Crucially, create an index on `sales.sale_date`.
        *   **Why it helps:**
            *   Indexing `sales.product_id` and `products.product_id` will significantly speed up the `JOIN` operation between the `SALES` and `PRODUCTS` tables. The database can quickly locate matching rows without scanning the entire table.
            *   Indexing `sales.sale_date` will dramatically improve the performance of the `WHERE` clause (`s.sale_date BETWEEN ... AND ...`). Instead of performing a full table scan on the `SALES` table to find relevant dates, the database can use the index to quickly pinpoint the rows within the specified date range, reducing the amount of data it needs to process.
    2.  **Materialized Views for Aggregated Data (if data freshness allows):**
        *   **Suggestion:** If the `total_category_sales` report is run frequently and doesn't require real-time data, create a Materialized View (MV) that pre-calculates this aggregation.
        *   **Why it helps:** A Materialized View stores the result of a query physically on disk. When the query is executed, the database can simply retrieve the pre-calculated results from the MV instead of re-executing the complex join, filter, and aggregation every time. This can provide near-instantaneous query responses. The MV can be refreshed periodically (e.g., daily, hourly) to keep the data reasonably fresh, depending on the business requirements. This offloads the heavy processing to the refresh cycle rather than every query execution.
    **Other potential optimizations (not required for 2, but good to know):**
    *   **Partitioning:** If `SALES` is extremely large, partitioning it by `sale_date` could help, allowing the database to only scan partitions relevant to the date range.
    *   **Query Rewrite/Hints:** In some cases, rewriting the query or using Oracle hints might guide the optimizer to a better execution plan, though indexing is usually the first and most impactful step.
    **Partial Credit Guidance:**
    *   Identifying and explaining the benefit of indexing foreign keys/join columns: 3 points
    *   Identifying and explaining the benefit of indexing filter columns (`sale_date`): 3 points
    *   Identifying and explaining the benefit of Materialized Views: 3 points
    *   Any two correct and well-explained suggestions receive full credit.

---

## Course Conclusion

Congratulations on completing the Oracle Database SQL Certified Associate (1Z0-071) course! You have embarked on a significant journey, transitioning from foundational concepts to practical, advanced SQL skills. You are no longer just a beginner; you are now equipped with the expertise to confidently interact with Oracle databases, manipulate data, design schemas, and extract meaningful insights through complex queries.

Specifically, you can now:
*   **Design and Implement Database Schemas:** Create tables, define primary and foreign keys, and enforce data integrity using various constraints.
*   **Master Data Manipulation Language (DML):** Insert, update, delete, and retrieve data efficiently using `INSERT`, `UPDATE`, `DELETE`, and `SELECT` statements.
*   **Construct Complex Queries:** Utilize `JOIN` operations (INNER, LEFT, RIGHT, FULL), subqueries (scalar, multi-row, correlated), and set operators (`UNION`, `INTERSECT`, `MINUS`) to answer intricate business questions.
*   **Aggregate and Analyze Data:** Apply aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) with `GROUP BY` and `HAVING` clauses to summarize and filter grouped data.
*   **Manage Database Objects:** Work with views, sequences, and understand basic transaction control (`COMMIT`, `ROLLBACK`).
*   **Prepare for Certification:** You have covered all the core topics necessary to sit for and succeed in the Oracle Database SQL Certified Associate (1Z0-071) exam.

This course has not only taught you the syntax but also the logical thinking required to be an effective database professional. The skills you've gained are highly transferable and form the bedrock for many roles in technology, from database administration and development to data analysis and business intelligence.

### Where to Go Next: Continued Learning and Career Paths

Your journey with SQL and databases is just beginning. To solidify your knowledge and expand your horizons, consider these next steps and learning paths:

1.  **Practice, Practice, Practice:** The best way to retain and deepen your SQL skills is through continuous hands-on practice.
    *   **Online Platforms:** Websites like HackerRank, LeetCode, and SQLZoo offer numerous SQL challenges and problems to hone your coding skills.
    *   **Personal Projects:** Build small databases for your hobbies or interests. The capstone projects provided a great starting point; try to expand on them or create new ones.
    *   **Explore Oracle Live SQL:** Oracle provides a free online platform to run SQL queries against a live Oracle database, perfect for experimentation.

2.  **Deep Dive into Oracle-Specific Features:**
    *   **PL/SQL Programming:** Learn Oracle's procedural extension to SQL. This will allow you to write stored procedures, functions, packages, and triggers, enabling more complex application logic directly within the database. This is crucial for Oracle database developers.
    *   **Advanced SQL Tuning:** Explore query optimization techniques, execution plans, and indexing strategies in more detail to write highly performant SQL for large datasets.

3.  **Explore Database Administration (DBA):** If you're fascinated by how databases are managed, secured, and kept running efficiently, consider learning about Oracle Database Administration. This includes topics like:
    *   Database Architecture (memory, processes, storage)
    *   Backup and Recovery (RMAN)
    *   Security Management
    *   Performance Monitoring and Tuning
    *   Cloud Database Services (Oracle Autonomous Database, AWS RDS for Oracle)

4.  **Integrate SQL with Programming Languages:** Learn how to connect to and interact with Oracle databases using popular programming languages like Python, Java, or Node.js. This bridges the gap between your database skills and application development.

5.  **Data Analysis and Business Intelligence:** Leverage your strong SQL foundation to move into data analysis roles. This often involves:
    *   Learning data visualization tools (e.g., Tableau, Power BI).
    *   Understanding statistical concepts.
    *   Exploring data warehousing principles.
    *   Using advanced analytical SQL functions.

This certification is a powerful credential that validates your proficiency in SQL, a language that remains at the heart of data management. We encourage you to continue building on this foundation, connecting with the vibrant Oracle community, and exploring the endless possibilities that a strong understanding of databases unlocks. The world of data is constantly evolving, and your ability to interact with it effectively will be an invaluable asset throughout your career.

---


> End of Syllabus: Oracle Database SQL Certified Associate (1Z0-071)
> Course ID: oracle-database-sql-certified-associate-1z0-071
> Total modules: 6
> Total chapters: 24
> Level: Beginner
> Subcategory: Databases
> Generated by: Cohortia Syllabus Generator
> Format: Markdown

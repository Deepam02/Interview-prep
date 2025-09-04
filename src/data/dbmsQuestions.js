// DBMS interview questions data
export const dbmsQuestions = {
  'basics': [
    {
      id: 1,
      question: "What is DBMS?",
      answer: "DBMS (Database Management System) is software that manages databases. It provides an interface between users/applications and the database, handling data storage, retrieval, security, backup, and concurrency control. Examples include MySQL, PostgreSQL, Oracle, SQL Server."
    },
    {
      id: 2,
      question: "Difference between DBMS and RDBMS.",
      answer: "DBMS stores data in files without relationships, supports single users, no ACID properties, and uses hierarchical/network models. RDBMS stores data in tables with relationships, supports multiple users, follows ACID properties, uses relational model, and supports SQL."
    },
    {
      id: 3,
      question: "What is a database schema?",
      answer: "Database schema is the logical structure/blueprint of a database that defines how data is organized. It includes table definitions, relationships, constraints, indexes, and views. It's like a blueprint that describes the database design without actual data."
    },
    {
      id: 4,
      question: "What is a database instance?",
      answer: "Database instance is the actual data stored in the database at a particular moment. It's the collection of information stored in the database at any given time. While schema is the structure, instance is the actual content."
    },
    {
      id: 5,
      question: "What is a database transaction?",
      answer: "A transaction is a logical unit of work that contains one or more SQL statements. It follows ACID properties - either all operations succeed (commit) or all fail (rollback). Example: transferring money between accounts requires multiple operations to be treated as one unit."
    },
    {
      id: 6,
      question: "Difference between primary key and unique key.",
      answer: "Primary Key: Only one per table, cannot be NULL, creates clustered index by default, uniquely identifies rows. Unique Key: Multiple allowed per table, can contain one NULL value, creates non-clustered index, ensures uniqueness but doesn't identify rows."
    },
    {
      id: 7,
      question: "What is a foreign key?",
      answer: "Foreign key is a field that refers to the primary key of another table. It establishes a link between two tables and maintains referential integrity. It can contain NULL values and duplicate values, unlike primary keys."
    },
    {
      id: 8,
      question: "Difference between candidate key and primary key.",
      answer: "Candidate Key: Any column(s) that can uniquely identify rows, multiple candidate keys possible per table. Primary Key: One specific candidate key chosen to uniquely identify rows, only one per table, becomes the main identifier."
    },
    {
      id: 9,
      question: "What is a composite key?",
      answer: "Composite key is a primary key consisting of two or more columns together to uniquely identify rows. Used when no single column can uniquely identify records. Example: OrderID + ProductID in an order details table."
    },
    {
      id: 10,
      question: "What is an alternate key?",
      answer: "Alternate key is a candidate key that is not selected as the primary key. These keys can also uniquely identify rows but are not chosen as the main identifier. Example: if EmployeeID is primary key, then Email can be alternate key."
    },
    {
      id: 11,
      question: "Can a primary key contain NULL values?",
      answer: "No, primary key cannot contain NULL values. It must be unique and not null for every row. This ensures that each row can be uniquely identified. NULL means 'unknown' which violates the uniqueness requirement."
    }
  ],
  'sql-basics': [
    {
      id: 1,
      question: "What is DDL, DML, and DCL?",
      answer: "DDL (Data Definition Language): CREATE, ALTER, DROP, TRUNCATE - defines database structure. DML (Data Manipulation Language): SELECT, INSERT, UPDATE, DELETE - manipulates data. DCL (Data Control Language): GRANT, REVOKE - controls access permissions."
    },
    {
      id: 2,
      question: "Difference between DELETE, TRUNCATE, and DROP.",
      answer: "DELETE: Removes specific rows, can use WHERE clause, can be rolled back, slower, fires triggers. TRUNCATE: Removes all rows, cannot use WHERE, faster, cannot be rolled back in some DBs. DROP: Removes entire table structure and data, cannot be rolled back."
    },
    {
      id: 3,
      question: "Difference between WHERE and HAVING.",
      answer: "WHERE: Filters rows before grouping, used with individual rows, cannot use aggregate functions, faster. HAVING: Filters groups after GROUP BY, used with grouped data, can use aggregate functions like COUNT, SUM, slower."
    },
    {
      id: 4,
      question: "Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.",
      answer: "INNER JOIN: Returns only matching records from both tables. LEFT JOIN: Returns all records from left table + matching from right. RIGHT JOIN: Returns all records from right table + matching from left. FULL JOIN: Returns all records from both tables."
    },
    {
      id: 5,
      question: "What is a subquery?",
      answer: "Subquery is a query nested inside another query. It executes first and its result is used by the outer query. Types: Single-row (returns one value), Multi-row (returns multiple values), Correlated (depends on outer query), Non-correlated (independent)."
    },
    {
      id: 6,
      question: "What is a view in SQL?",
      answer: "View is a virtual table based on SQL query results. It doesn't store data physically but shows data from underlying tables. Used for security (hide sensitive columns), simplification (complex queries), and data abstraction."
    },
    {
      id: 7,
      question: "Difference between materialized view and simple view.",
      answer: "Simple View: Virtual table, no physical storage, always shows current data, slower for complex queries. Materialized View: Physical storage of query results, faster access, needs refresh to show current data, uses more storage space."
    },
    {
      id: 8,
      question: "What is a trigger in DBMS?",
      answer: "Trigger is a stored procedure that automatically executes in response to database events (INSERT, UPDATE, DELETE). Types: BEFORE (executes before event), AFTER (executes after event), INSTEAD OF (for views). Used for auditing, validation, logging."
    },
    {
      id: 9,
      question: "What are stored procedures?",
      answer: "Stored procedures are precompiled SQL statements stored in database. They accept parameters, contain business logic, can return values, and improve performance through compilation. Used for complex operations, security, and code reusability."
    },
    {
      id: 10,
      question: "Difference between function and stored procedure.",
      answer: "Function: Must return a value, can be used in SELECT statements, cannot modify database state, can be called from SQL. Stored Procedure: May/may not return value, cannot be used in SELECT, can modify database, called using EXEC/CALL."
    }
  ],
  'normalization': [
    {
      id: 1,
      question: "What is normalization?",
      answer: "Normalization is the process of organizing database tables to reduce redundancy and dependency. It divides large tables into smaller, related tables and defines relationships between them. Goals: eliminate redundancy, ensure data consistency, improve data integrity."
    },
    {
      id: 2,
      question: "Explain 1NF, 2NF, and 3NF.",
      answer: "1NF: Each column contains atomic values, no repeating groups. 2NF: 1NF + all non-key attributes fully dependent on primary key (no partial dependency). 3NF: 2NF + no transitive dependency (non-key attributes don't depend on other non-key attributes)."
    },
    {
      id: 3,
      question: "What is BCNF?",
      answer: "BCNF (Boyce-Codd Normal Form) is a stricter version of 3NF. A table is in BCNF if for every functional dependency X→Y, X must be a super key. It eliminates all anomalies that 3NF might miss, especially when there are multiple candidate keys."
    },
    {
      id: 4,
      question: "What is denormalization?",
      answer: "Denormalization is the process of adding redundancy to normalized database to improve read performance. It combines tables to reduce joins, duplicates data intentionally, and trades storage space for query speed. Used in data warehouses and reporting systems."
    },
    {
      id: 5,
      question: "What is functional dependency?",
      answer: "Functional dependency means one attribute determines another. If A→B, then for each value of A, there's exactly one value of B. Example: EmployeeID→EmployeeName. Used in normalization to identify dependencies and eliminate redundancy."
    },
    {
      id: 6,
      question: "What is ER model in DBMS?",
      answer: "ER (Entity-Relationship) model is a conceptual data model that describes database structure. Entities (objects), Attributes (properties), Relationships (associations). Uses ER diagrams with rectangles (entities), ovals (attributes), diamonds (relationships) to visualize database design."
    }
  ],
  'transactions': [
    {
      id: 1,
      question: "What are ACID properties?",
      answer: "ACID ensures reliable database transactions. Atomicity: All operations succeed or all fail. Consistency: Database remains in valid state. Isolation: Concurrent transactions don't interfere. Durability: Committed changes persist even after system failure."
    },
    {
      id: 2,
      question: "Difference between COMMIT and ROLLBACK.",
      answer: "COMMIT: Permanently saves all changes made in current transaction to database, cannot be undone. ROLLBACK: Cancels all changes made in current transaction, returns database to state before transaction began, used when errors occur."
    },
    {
      id: 3,
      question: "What is a savepoint?",
      answer: "Savepoint is a marker within a transaction that allows partial rollback. You can rollback to a specific savepoint instead of rolling back entire transaction. Useful for long transactions where you want to undo only recent changes."
    },
    {
      id: 4,
      question: "What is a dirty read?",
      answer: "Dirty read occurs when transaction reads uncommitted data from another transaction. If the other transaction rolls back, the read data becomes invalid. This violates isolation and can lead to inconsistent results."
    },
    {
      id: 5,
      question: "What is phantom read?",
      answer: "Phantom read occurs when a transaction reads a set of rows, then another transaction inserts/deletes rows, and the first transaction reads again seeing different number of rows. The 'phantom' rows appear or disappear between reads."
    },
    {
      id: 6,
      question: "What is serializability in transactions?",
      answer: "Serializability ensures concurrent transactions produce same result as if executed serially. It's the highest level of isolation. Two types: Conflict serializability (based on read/write conflicts) and View serializability (based on final state)."
    },
    {
      id: 7,
      question: "What is concurrency control?",
      answer: "Concurrency control manages simultaneous database access to maintain consistency. Techniques include locking (pessimistic), timestamp ordering, validation (optimistic), and multiversion concurrency control. Prevents lost updates, dirty reads, and other anomalies."
    },
    {
      id: 8,
      question: "What is a deadlock in DBMS?",
      answer: "Deadlock occurs when two or more transactions wait indefinitely for each other to release locks. Example: Transaction A locks Table1, Transaction B locks Table2, then A waits for Table2 and B waits for Table1. Resolved by deadlock detection and victim selection."
    },
    {
      id: 9,
      question: "Difference between pessimistic and optimistic locking.",
      answer: "Pessimistic Locking: Locks data immediately when accessed, prevents conflicts but reduces concurrency, used in high-conflict scenarios. Optimistic Locking: Doesn't lock initially, checks for conflicts at commit time, better concurrency but may fail transactions."
    },
    {
      id: 10,
      question: "What is two-phase locking?",
      answer: "Two-phase locking protocol ensures serializability. Phase 1 (Growing): Transaction can only acquire locks, not release. Phase 2 (Shrinking): Transaction can only release locks, not acquire. Once a lock is released, no new locks can be acquired."
    },
    {
      id: 11,
      question: "Difference between read committed and repeatable read.",
      answer: "Read Committed: Prevents dirty reads, but allows non-repeatable reads and phantom reads. Repeatable Read: Prevents dirty reads and non-repeatable reads, but allows phantom reads. Higher isolation level provides more consistency but less concurrency."
    },
    {
      id: 12,
      question: "Explain isolation levels in SQL.",
      answer: "Read Uncommitted: Lowest isolation, allows dirty reads. Read Committed: Prevents dirty reads only. Repeatable Read: Prevents dirty and non-repeatable reads. Serializable: Highest isolation, prevents all anomalies but lowest concurrency."
    },
    {
      id: 13,
      question: "What is log-based recovery?",
      answer: "Log-based recovery uses transaction logs to recover database after failure. Write-Ahead Logging (WAL) writes changes to log before database. During recovery, REDO operations from committed transactions and UNDO operations from uncommitted transactions."
    }
  ],
  'indexing': [
    {
      id: 1,
      question: "What is an index in DBMS?",
      answer: "Index is a database object that improves query performance by creating shortcuts to data. It's like a book's index - points to actual data location. Contains key values and pointers to corresponding rows. Speeds up SELECT but slows down INSERT/UPDATE/DELETE."
    },
    {
      id: 2,
      question: "Difference between clustered and non-clustered index.",
      answer: "Clustered Index: Data is physically stored in index order, only one per table, leaf nodes contain actual data. Non-Clustered Index: Logical ordering separate from physical, multiple allowed per table, leaf nodes contain pointers to data rows."
    },
    {
      id: 3,
      question: "What is a unique index?",
      answer: "Unique index ensures no duplicate values in indexed columns. Automatically created for PRIMARY KEY and UNIQUE constraints. Improves performance for equality searches and enforces uniqueness constraint at database level."
    },
    {
      id: 4,
      question: "What is a bitmap index?",
      answer: "Bitmap index uses bit vectors to represent data. Each bit represents presence/absence of value. Efficient for columns with low cardinality (few distinct values) like gender, status. Great for data warehouses but poor for OLTP due to update overhead."
    },
    {
      id: 5,
      question: "What is query optimization?",
      answer: "Query optimization is the process of finding the most efficient execution plan for a query. Query optimizer analyzes different execution strategies, considers available indexes, statistics, and chooses the plan with lowest estimated cost."
    },
    {
      id: 6,
      question: "How does indexing improve performance?",
      answer: "Indexing improves performance by reducing disk I/O operations. Instead of scanning entire table (full table scan), database can use index to directly locate relevant rows. Like using a book's index instead of reading every page to find information."
    },
    {
      id: 7,
      question: "When does indexing reduce performance?",
      answer: "Indexing reduces performance during: Frequent INSERT/UPDATE/DELETE operations (index maintenance overhead), Small tables (index overhead > benefit), Queries returning large percentage of rows (full scan faster), Columns with high cardinality in bitmap indexes."
    },
    {
      id: 8,
      question: "Difference between dense index and sparse index.",
      answer: "Dense Index: Contains entry for every record in data file, larger storage but faster searches. Sparse Index: Contains entries for only some records (usually one per block), smaller storage but may require additional disk access."
    },
    {
      id: 9,
      question: "What is covering index?",
      answer: "Covering index contains all columns needed by a query, so database doesn't need to access actual table data. Query can be satisfied entirely from index. Improves performance significantly but requires more storage space."
    },
    {
      id: 10,
      question: "What is query execution plan?",
      answer: "Query execution plan shows how database will execute a query - which indexes to use, join order, access methods. Helps identify performance bottlenecks. Can be viewed using EXPLAIN in MySQL/PostgreSQL or Query Analyzer in SQL Server."
    }
  ],
  'advanced': [
    {
      id: 1,
      question: "What is sharding in databases?",
      answer: "Sharding horizontally partitions data across multiple database servers. Each shard contains subset of data based on sharding key. Improves scalability and performance by distributing load, but increases complexity and may limit cross-shard queries."
    },
    {
      id: 2,
      question: "What is replication?",
      answer: "Replication creates copies of database on multiple servers. Master-Slave: One master for writes, multiple slaves for reads. Master-Master: Multiple masters allowing writes. Improves availability, read performance, and provides disaster recovery."
    },
    {
      id: 3,
      question: "Difference between OLTP and OLAP.",
      answer: "OLTP (Online Transaction Processing): Handles day-to-day transactions, normalized data, fast simple queries, current data, INSERT/UPDATE heavy. OLAP (Online Analytical Processing): Data analysis, denormalized data, complex queries, historical data, SELECT heavy."
    },
    {
      id: 4,
      question: "What is a data warehouse?",
      answer: "Data warehouse is a centralized repository for historical data from multiple sources, optimized for analysis and reporting. Features: subject-oriented, integrated, time-variant, non-volatile. Uses star/snowflake schema for dimensional modeling."
    },
    {
      id: 5,
      question: "What is cascading in foreign keys?",
      answer: "Cascading defines actions when referenced primary key is updated/deleted. CASCADE: Automatically update/delete dependent rows. RESTRICT: Prevent operation if dependent rows exist. SET NULL: Set foreign key to NULL. SET DEFAULT: Set to default value."
    },
    {
      id: 6,
      question: "Can a foreign key reference a non-primary key?",
      answer: "Yes, foreign key can reference any column with UNIQUE constraint, not just primary key. The referenced column must be unique to maintain referential integrity. However, referencing primary key is most common practice."
    },
    {
      id: 7,
      question: "Can a table have multiple primary keys?",
      answer: "No, a table can have only one primary key. However, primary key can be composite (multiple columns). A table can have multiple candidate keys, but only one is designated as primary key."
    },
    {
      id: 8,
      question: "What is a check constraint?",
      answer: "Check constraint enforces domain integrity by limiting values that can be stored in columns. It evaluates boolean expression for each row. Example: CHECK (salary > 0) ensures salary is positive. Rejected if condition evaluates to false."
    },
    {
      id: 9,
      question: "Difference between SQL and NoSQL databases.",
      answer: "SQL: Structured data, ACID properties, vertical scaling, complex queries, strict schema. NoSQL: Flexible schema, eventual consistency, horizontal scaling, simple queries, types include document, key-value, column-family, graph databases."
    },
    {
      id: 10,
      question: "Difference between horizontal and vertical scaling.",
      answer: "Vertical Scaling (Scale Up): Add more power (CPU, RAM) to existing server, limited by hardware capacity, easier to implement. Horizontal Scaling (Scale Out): Add more servers, virtually unlimited, requires application changes, better fault tolerance."
    }
  ]
};

// Helper function to get all questions from all DBMS topics
export const getAllDbmsQuestions = () => {
  const allQuestions = [];
  Object.keys(dbmsQuestions).forEach(topic => {
    dbmsQuestions[topic].forEach(q => {
      allQuestions.push({...q, topic});
    });
  });
  return allQuestions;
};

// Helper function to shuffle array (reused from javaQuestions)
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

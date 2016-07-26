--this creates our database
CREATE DATABASE bamazon_db;

USE bamazon_db;

--this creates our tables
CREATE TABLE products(
  ItemID INTEGER(16) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  ProductName VARCHAR(100),
  DepartmentName VARCHAR(100),
  Price FLOAT(16),
  StockQuantity Integer(16)
);

--adding database info
INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES
  ('SSD', 'computers', 99.99, 1000),
  ('Sneakers', 'apparel', 49.99, 25000),
  ('Aspirin', 'pharmacological', 2.99, 1000000),
  ('Drone Copter', 'electronics', 499.99, 250),
  ('Macbook Air', 'computers', 999.99, 5000),
  ('Polo shirts', 'apparel', 24.99, 100000),
  ('Theraflu', 'pharmocological', 4.99, 500000),
  ('HD TV', 'electronics', 249.99, 10000);

--this shows the data in the terminal
SHOW TABLES;

DESCRIBE products;

SELECT * FROM products;

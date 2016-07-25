CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  ItemID INTEGER(16) AUTO_INCREMENT NOT NULL,
  ProductName VARCHAR(100),
  DepartmentName VARCHAR(100),
  Price INTEGER(16),
  StockQuantity Integer(16),
  PRIMARY KEY(id)
);

INSERT INTO products (ProductName, DepartmentName, Price, StockQuantity) VALUES
  ("SSD", "computers", 100, 1000),
  ("Sneakers", "apparel", 50, 25000),
  ("Aspirin", "pharmacological", 2.50, 1000000),
  ("Drone Copter", "electronics", 500, 250),
  ("Macbook Air", "computers", 1000, 5000),
  ("Polo shirts", "apparel", 25, 100000),
  ("Theraflu", "pharmocological", 5, 500000),
  ("HD TV", "electronics", 250, 10000);

SHOW TABLES;

SELECT * FROM products;

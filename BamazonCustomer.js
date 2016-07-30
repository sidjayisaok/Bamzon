//variables used
var mysql = require('mysql');
var sqlInfo = require('./sqlInfo.js').sqlInform;
var inquirer = require('inquirer');
var cliTable = require('cli-table');

//helps to create a table in the terminal
var newTable = new cliTable({
  head: ["ID no.", "Items Available", "Department", "Current Price", "Quantity"]
}
);

//mySQL info added here
var mysqlDB = mysql.createConnection(sqlInfo);

//connect to the database
mysqlDB.connect(function(error){
  if(error){
    throw error;
  }
});
//function to display data from SQL table
function mysqlInquire(){
  mysqlDB.query('SELECT * FROM products', function(error, results){
  if(error) throw error;
  else{
      results.forEach(function(myResults){
        newTable.push(
          [myResults.ItemID, myResults.ProductName, myResults.DepartmentName, myResults.Price, myResults.StockQuantity]
        );
        console.log(newTable.toString());
      });
  }
});
}

function mysqlOrder(a ,b){
  mysqlDB.query('UPDATE products SET Quantity =' + a + ' WHERE products.ProductName = ' + b, function(){

        // var identity = answers.ItemID;
        // var stock = answers.StockQuantity;
        // console.log("ItemID selected: " + identity);
        // console.log("Amount chosen: " + stock);
  });
}

//inquirer prompts
function myInquirer(){
  inquirer.prompt([
    {
      name: 'ItemID',
      type: 'inquiry',
      message: 'Type "check stock" or "place an order" to continue',
      choices: ["check stock", "place an order"],
    }
  ]).then(function(answers){
    switch(answers.ItemID){

      case "check stock":
        mysqlInquire();
      break;

      case "place an order":
        mysqlOrder();
      break;
    }
  });
}

myInquirer();

console.log('connection successful');

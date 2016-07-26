var mysql = require('mysql');
var sqlInfo = require('./sqlInfo.js').sqlInform;

var mysqlDB = mysql.createConnection(sqlInfo);

// console.log(mysqlDB.query('use ' + myData));

//function to display data from SQL table
function mysqlInquire(){
  mysqlDB.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM products', function(error, results){
  if(error) throw error;
  else{
    for (var i in results){
      var myResults = results[i];
      console.log(myResults.ItemID + " " +myResults.ProductName + " " + myResults.DepartmentName + " " + myResults.Price + " " + myResults.StockQuantity);
    }
  }
});
}

mysqlInquire();

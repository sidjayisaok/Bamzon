var mysql = require('mysql');
var sqlInfo = require('./sqlInfo.js').sqlInform;

var mysqlDB = mysql.createConnection({
  host: myHost,
  port: myPort,
  user: myUser,
  password: myPass,
  databse: myData
});

// console.log(mysqlDB.query('use ' + myData));

function mysqlInquire(){
  mysqlDB.query('select ItemID, ProductName, DepartmentName, Price', function(error, results){
  if(error) throw error;
  else{
    for (var i in results){
      var myResults = results[i];
      console.log(myResults.ItemID + " " + myResults.ProductName + " " + myResults.DepartmentName + " " + myResults.Price);
    }
  }
});
}

mysqlInquire();

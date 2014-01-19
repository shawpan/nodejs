var Calculator = require('./calculator/calculator'); //custom module

var request = require('request'); //thirt party module

var aCalculator = new Calculator();

console.log("inside main.js");


request('http://www.google.com',function(error, response, body){
	console.log('-----------------------Results of Custom Module Methods--------------------------------------');
	console.log('Summation ' + aCalculator.Add(1,2));

	console.log('Subtraction ' + aCalculator.Subtract(2,1));

	console.log('Multiplication ' + aCalculator.Multiply(2,2));

	console.log('Division ' + aCalculator.Divide(4,2));

	console.log('------------------------------------------------------------------------------------------------');

	if(!error && response.statusCode == 200){
		console.log(body);
	}
});
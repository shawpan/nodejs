function Calculator()
{
	//return sum of two numbers
	this.Add = function(a,b)
	{
		return a+b;
	}
	//return subtraction of two numbers
	this.Subtract = function(a,b)
	{
		return a-b;
	}
	//return multiplication of two numbers
	this.Multiply = function(a,b)
	{
		return a*b;
	}
	//return division of two numbers
	this.Divide = function(a,b)
	{
		if(b!=0)
		 	return a/b;
		else
			return 'infinity';
	}
}
module.exports = Calculator;
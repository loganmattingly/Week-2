//Prompt to ask for Number of Miles Per Year
var miles=Number(prompt("Enter number of miles per year:"));

//Prompt for Cost of Gallon of Gas- 87 octane baby
var cost=Number(prompt("Enter the cost of gallon:"));

//Da Function
function yearlyCost(miles,cost,rating){
  return(miles*cost)/rating;
}

//Calling Da Funk
document.write("To drive a car with an MPG rating of 12 for "+miles+" miles at $"+cost+" per gallon would cost $"+yearlyCost(miles, cost, 12));

document.write("<br>To drive a car with an MPG rating of 17 for "+miles+" miles at $"+cost+" per gallon would cost $"+yearlyCost(miles, cost, 17));

document.write("<br>To drive a car with an MPG rating of 26 for "+miles+" miles at $"+cost+" per gallon would cost $"+yearlyCost(miles, cost, 26));

document.write("<br>To drive a car with an MPG rating of 29 for "+miles+" miles at $"+cost+" per gallon would cost $"+yearlyCost(miles, cost, 29));
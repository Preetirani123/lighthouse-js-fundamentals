function ageCalculator(name,yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth
  console.log(name + " is " + age + " years old.")
}

ageCalculator("Suzie", 1983, 2015);
ageCalculator("Jack", 2003, 2015);
ageCalculator("Ali", 2015, 2015);
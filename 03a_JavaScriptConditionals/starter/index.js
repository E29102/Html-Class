age = 10;

/*if (age <= 17) { 
    console.log("Underage"); 
} 
else if (age >= 18 && age <= 65) { 
    console.log("Insurable");
}
else { 
    console.log("18 or over"); 
}*/
//ternary statement
const response = 
    age <= 18? "Underage": (age >=18 && age <=65? "Insurable":"18 or over") 

console.log(response)
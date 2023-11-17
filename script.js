let x=5;
// increment operation
x++;
console.log(x);
// decrement operation
x--;
console.log(x);
// Assignment operations
a=5;
console.log(a);
a+=1;
console.log(a);
let b=a**2
console.log(b);


// comparision operators: ==,===, !=, <=, >=, etc...
n1=prompt("Enter first number: ");
n2=prompt("Enter second number: ");
console.log(n1==n2);

// logical operator(&&, ||, !)
n3=parseInt(prompt());
console.log(n3);
n4=parseInt(prompt());
console.log(n4);
let res= n3>0 && n4>0;
console.log(res);     // similarly perform remaining two operations also

// Functions     

function personalData(name, rollNumber, college)
{
    console.log(name);
    console.log(rollNumber);
    console.log(college);
}
personalData("Ajay", 17, "Anurag University");
let marks=Number(prompt("enter the marks of student"));
console.log("total marks is 100");
console.log("marks obtained:"+marks);
if(marks>=90&&marks<=100)
{
console.log("A+ grade");
}
else if(marks>=80&&marks<90)
{
  console.log("A grade");
}
else if(marks>=60&&marks<80)
{
  console.log("B grade");
}
else if(marks>=50&&marks<60)
{
  console.log("c grade");
}
else if(marks<50)
{
  console.log("D grade");
}
else
{
  console.log("invalid");
}
//using switch case
/*switch(true){
case(marks>=90&&marks<=100):
console.log("A+ grade");
break;
case(marks>=80&&marks<90):
console.log("A grade");
break;
case(marks>=60&&marks<80):
console.log("B grade");
break;
case(marks>=50&&marks<60):
console.log("c grade");
break;
case(marks<50):
console.log("D grade");
break;
default: 
console.log("invalid");
break;
}
//using ternary operator:
let result=(marks>=90&&marks<=100) ? 'grade is A+':
           (marks>=80&&marks<90) ? 'grade is A':
           (marks>=60&&marks<80) ? 'grade is B':
           (marks>=50&&marks<60) ? 'grade is c':
           (marks<50) ? 'grade is D': 
           'invalid';
           console.log(result);*/


//1. write a prgram to print first 10 numbers using for loop;,
console.log("write a prgram to print first 10 numbers using for loop");
var a = 1;

for (i = 1; i <= 10; i++) {
  console.log(i);
}
//2. write a program to print first 100 even number using for loop
console.log("write a program to print first 100 even number using for loop");
for (i = 1; i < 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//3. write program to print each character for this text 'babu.n' using for loop;
console.log("write program to print each character for this text 'babu.n' using for loop")

var str="babu"
var i;
   for(i=0; i<str.length;i++)
   {
       console.log(str[i]);
   }
//4. write a program to get sum of first 10number using for loop.
console.log("sum of 10 numbers");
var sum=0;
 for(n=0;n<=10;n++){
  sum=sum+n;
 }
console.log(sum)
//5. program squares for first 10 number using for loop
console.log("squre of first ten numbers");
var square=1;
for(let i=1;i<=10;i++){
  square=i*i;
  sum=sum+square
}
console.log(square)
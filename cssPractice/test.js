function add(var1,var2)
{
    return var1+var2;
}
function multiply(var1,var2)
{
    return var1*var2;
}
function capitalize(string1)
{
    if(string1.length === 0)
        {
            return "null string"
        }
    let rest = string1.slice(1).toLowerCase();
    let firstChar = string1.charAt(0).toUpperCase();
    
    return firstChar+rest;
}
function lastLetter(string1)
{
    if(string1.length === 0)
        {
            return "null string"
        }
    return string1.charAt(string1.length-1);
}
function fizzbuzz()
{
    let num1 = parseInt(prompt("Please enter num: "));
    for(let i=1; i<=num1; i++)
        {
            
            if(i%3 === 0)
                {
                    console.log("Fizz");
                }
            else if(i%5 === 0)
                {
                    console.log("Buzz");
                }
            else if(i%3 === 0 && i%5 === 0)
                {
                    console.log("FizzBuzz");
                }
            else
                {
                    console.log(i);
                }

        }
}

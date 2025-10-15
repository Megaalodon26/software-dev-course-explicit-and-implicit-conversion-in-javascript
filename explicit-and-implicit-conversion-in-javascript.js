/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/* Part 1: I added in the String() explicit type conversion method so that the output equals 3. 
This fix works because I'm converting the 2 to a string to match the "5". */

let result = String("5" - 2); 
console.log("The result is: " + result);

/* I left this one as is since it is already correct with the Boolean() explicit type converstion method */

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

/* I added in the Number() explicit type converstion method so that the output equals 30 instead of 255.
This fix works because it converts "25" as a string into an integer to be added to the integer 5. Since we're adding
integers together and not concatenating strings. */

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

/* Part 2: */
/* Implicit type converstion example: */
let score = "10" + 8;
console.log("The final score is: " + score);

/* Explicit type converstion example: */
let smallScore = null;
let highScore = smallScore + 10;
console.log("Here is your High Score: " + highScore);
// convert null explicitly to a number (Number(null) === 0)
let explicitHighScore = Number(smallScore) - 10;
console.log("Here is your High Score: " + explicitHighScore);

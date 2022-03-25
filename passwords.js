// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// reader.question("Welcome to the password validator. Please enter a password for validation.", function(input){
//     input = ""
// if (input < 10){
//     console.log("Failure, password is too short.")
// } else if (input >= 10){
//     console.log("Success, your password meets the requirements.")
// } else {
//     console.log("We are unsure why your password is not validating. :)")
// }

// 	reader.close()

// });



const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Welcome to the password validator. Please enter a password for validation.", function(input){
    input = ""
if (input >= 10){
    console.log("Success, your password meets the requirements.")
 } else if (input < 10){
    console.log("Failure, password is too short.")
} else {
    console.log("We are unsure why your password is not validating. :)")
}

	reader.close()

});


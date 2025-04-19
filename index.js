//question 1
const studentScore = (score) => {
  if (score >= 180) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
};
studentScore(182);
//question 3
const votingRequirement = (age) => {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("NOt eligible");
  }
};
votingRequirement(13);
//question 3
const grading = (name, score) => {
  const message = `${name} you score is  ${score}`;
  console.log(message);
  if (score >= 90) {
    console.log("Excellent");
  } else if (score >= 75) {
    console.log("Good");
  } else if (score >= 50) {
    console.log("Average");
  } else {
    console.log("failed");
  }
};
grading("rice", 97);
//question 4
const grantingAccess = (hasID, isAbove18) => {
  if (hasID && isAbove18 >= 18) {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
};
grantingAccess("yes", 19);
// question 5
const arrayScore = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101];
for (const element of arrayScore) {
  if (element > 50) {
    console.log("pass");
  } else {
    console.log("failed");
  }
}
//question 6
const score1 = (math, eng) => {
  if (math && eng >= 50) {
    console.log("Pass");
  } else {
    console.log("NO");
  }
};

score1(50, 20);

//question7
const loginDetails = (email, phoneNumber) => {
  if (email || phoneNumber) {
    console.log("LoginSuccessful");
  } else {
    console.log("please input either your name or phone number");
  }
};
loginDetails(90777);

//question 8
const loginUser = (username, password) => {
  if (username || password) {
    console.log("Invalid input");
  } else {
    console.log("Valid input");
  }
};
loginUser("dennis");
//question 9
let hoursWorked = 20;
let acceptsHours =
  hoursWorked >= 40 ? console.log("Full-time") : console.log("Part-time");

//question 10
const largerNO = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};
largerNO(5, 2);

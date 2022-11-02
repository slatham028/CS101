/*
* Say hi to Alice or Bob. Say nice to meet you to everyone else.
*
* @param {string} name: The name of the person to greet
*
* if name is Bob or name is Alice, log "Hi" to the console
* otherwise, log ("Nice to meet you")
*/
function greetAliceOrBob(name) {
  if (name == "Alice" || name == "Bob")
    console.log("Hi");
  else {
    console.log("Nice to meet you");
  }
};

/*
greetAliceOrBob("Alice"); // Hi
greetAliceOrBob("Nancy"); // Nice to meet you
*/

/*
* FizzBuzz
*
* For some reason this is a famous example
* loop throught the numbers 1 to 100
* If the number is divisible by 3, log "Fizz"
* If the number is divisible by 5, log "Buzz"
* If the number is divisible by both 3 and 5, log "Fizz Buzz"
* Otherwise log the number
*
* A number n is divisible by three if n % 3 == 0
*
* You can chain multiple if / else statements together by the following
*
* if (test 1) {
*
* } else if (test 2) {
*
* } else {
*
* };
*/
function fizzBuzz() {
  for (let k = 1; k <= 100; k++) {
    if (k % 3 == 0 && k % 5 == 0)
      console.log("Fizz Buzz");
    if (k % 3 == 0)
      console.log("Fizz");
    if (k % 5 == 0)
      console.log("Buzz");
    else {
      console.log(k);
    }
  }
};

//fizzBuzz();
/*
1
2
Fizz
...
*/

/*
* Sum the first n numbers
*
* @param {int} n: sum of the first n numbers from 1 to n inclusive
*
* returns the sum of the first n numbers from 1 to n inclusive
*
* There is a "fun" story about this that I'll tell in class
*/
function sumToN(n) {
  let sum = 0;
  for (let k = 1; k <= n; k++) {
    sum = sum + k;
  }
  return sum;
};

console.log(sumToN(10)); //55
console.log(sumToN(100)); //5050


/*
* Sum numbers from 1 on until you meet or exceed some value and return the sum
*
* Examples:
*   sumPastK(5):
*     1 + 2 + 3 = 6. Return 6
*   sumPastK(10):
*     1 + 2 + 3 + 4 = 10. Return 10

* @param {int} k: The number you will sum until you meet or exceed it
*
* returns the value that you reach when the sum meets or exceeds some number
*/
function sumPastK(k) {
    //initialize a value and a counter
    let sum = 0;
    let counter = 1;
    //while the value is less then k
    while (sum < k) {
      sum = sum + counter;
      counter++;
    }
        //repeat what you did with the gauss sum
    //having exited the loop, the value is now greater than or equal to k
    return sum;
};

console.log(sumPastK(5)); // 6
console.log(sumPastK(10)); // 10

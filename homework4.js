/*
* Say hi to Alice or Bob. Say nice to meet you to everyone else.
*
* @param {string} name: The name of the person to greet
*
* if name is Bob or name is Alice, log "Hi" to the console
* otherwise, log ("Nice to meet you")
*/
function greetAliceOrBob(name) {

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
    //while the value is less then k
        //repeat what you did with the gauss sum
    //having exited the loop, the value is now greater than or equal to k
};

console.log(sumPastK(5)); // 6
console.log(sumPastK(10)); // 10
# Running Practice Problems

To run the problems, make sure you have [node installed](../README.md). Once this is ready, follow these steps:

+ Navigate from this directory to the `problems/` folder using `cd ./problems`
+ To run a file, use the `node` command and specify a problem js file. \
(Ex: `node 01_num_of_steps.js`)
+ This will test your code with a couple sample inputs, and return `true` or `false` if the test is passing or not
+ Only write code in the function block that is provided in each file, unless you plan on writing a helper function
+ To debug your code, feel free to use `console.log`. The output will appear when you run the file with the `node` command
+ Ask questions! Not all of these problems require recursion

## (Optional) Running tests with Mocha

![mocha](https://images.opencollective.com/mochajs/097e938/logo/256.png)

Mocha is a JS testing framework that provides helpful test output for your functions. We have written some if you would like to use it. Mocha will run all of your tests at the same time, and show you the differences between what your code outputs and the expected result. If you choose to set this up, then you do not need to follow the above instructions! Here is how you set this up:

+ Run `which npm`. If there is no output, then let an instructor know!
+ In the `04_practice_problems/` folder, run the command `npm install`
+ When finished, run `npm test`. This will run the mocha tests. 
+ Edit your code in the same way explained above.

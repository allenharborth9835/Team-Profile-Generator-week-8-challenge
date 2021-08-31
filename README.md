# Team-profile-generator-week-8-challenge
<img src="https://img.shields.io/badge/license-Unlicensed-blue" alt="Unlicensed">

## Description
For this project I had to create a project team generator that creates a web page that shows team members. I created the file structure to have a test folder to contain the individual test for the classes. The dist folder where the web page will be placed once it is created. The library folder that will contain the classes for employees, interns, engineers, and managers. The last folder contains the generate html file and the css style used to create the webpage. The last files are the package files and the index file to hold the initial functions. The first class file I created was the employee class. In this file I created an employee class and made the constructor take in name, id, and email and creates its role as Employee. It then has the methods of get name, get id, get email and get role that returns the class variables. The intern, engineer, and manager classes are built on top of the employee class with the extra methods and variables required for those employees. The page-template is used to generate the html of the page. It takes in an employee array then gives it to a generate cards function that creates the individual cards and uses another function to get the individual variables and create a symbol. It uses its role to color its card header differently using the css file. In the index file I first call the classes for the different employees. I then call the generatePage function from the page template and finally the inquirer and fs functions. I then create a prompt user function that takes in an array, if no array is given then it makes one. Next it asks for information for the employee and then prompts the user if there is another employee to be added, if there is it prompts for data for that employee. Once the user has input all of the employees it then creates the employee and pushes it into the array and then uses that array to generate the html page and then writes the file into dist and then copies the css into that dist.   
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Test](#test)

* [Contact-Info](#contact-info)
## Installation  
Node must be installed please go to https://nodejs.org/en/ to install node.  
then simply type "npm install" to install the neccessary modules.  
## Usage  
To use this app simply input employee information after typing npm start and a perfectly created html page will be created with employee information.  
## Credits  
For the structure of the html and the icons I used bootstrap from https://getbootstrap.com/ and added css to give it different color card headers for different employees.  

## License
  <div style="height:300px; width:90%; overflow:auto;">

      This is free and unencumbered software released into the public domain.
    
      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
  </div>
        
For more information, please refer to [https://unlicense.org](https://unlicense.org)

## Test
To run internal tests on classes type "npm test"  
## Contact-Info
this project was created by Allen D Harborth  
Github(s)[allenharborth9835](https://github.com/allenharborth9835)

get in contact by sending an email at allenharborth9835@gmail.com

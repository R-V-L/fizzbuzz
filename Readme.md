# Fizzbuzz API
[Fizzbuzz](https://en.wikipedia.org/wiki/Fizz_buzz) API made with NodeJS, this is an exercise made for #InnovaccionVirtual #LaunchX

## Getting started
In order to have this up and running you need to do the following:

1. Clone repo  
Make sure you have [Git](https://git-scm.com/downloads) installed. Open the terminal and clone this repo with:
	```
	git repo clone https://github.com/R-V-L/fizzbuzz
	```
2. Install dependencies  
CD to the fizzbuzz folder and install the required dependencies (you must have [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed):
	```
	npm install express --save-dev
	npm install jest --save-dev
	npm install eslint --save-dev
    npm install node-telegram-bot-api --save-dev
	```
3. Run tests  
Run the required tests to make sure everything works as expected:
	```
	# If you use Windows
	npm run test_windows
	
	# If you use Linux/MacOS
	npm run test
	```
4. Run server
Run the following command to run the express server:
	```
	npm run server
	```
## Access endpoints
With either [postman](https://www.postman.com), [hoppscotch](https://hoppscotch.io/es/) or your web browser access the following endpoints:
1. Explorers (change :mission with either "node" or "java")
    - http://localhost:3000/v1/explorers/:mission
    - http://localhost:3000/v1/explorers/amount/:mission
    - http://localhost:3000/v1/explorers/usernames/:mission
2. FizzBuzz (change :score with any number)
    - http://localhost:3000/v1/fizzbuzz/:score

## Access telegram bot

1. Go to https://telegram.me/FizzBuzzLchXBot
2. Send /start
3. Send a number or a mission (either "node" or "java")
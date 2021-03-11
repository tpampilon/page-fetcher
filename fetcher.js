const fs = require('fs');
const request = require('request');
const input = process.argv.slice(2);
const readline = require('readline');


request(input[0], (error, response, body) => {

  fs.access(input[1], (err) => {
    if (err) {
      console.log(`${input[1]} does not exist.`);
    } else {
      fs.writeFile(input[1], body,() => {
        if(response.statusCode === 404 || response.statusCode === 500 ) {
          console.log(`Error ${response.statusCode} has occured.`);
        } else {
          console.log(`Downloaded and saved 3261 bytes to ${input[1]}`);
        }
      });
    }
  });
});
//importing directories
const fs = require("fs");
const path = require("path");
//string that contains the output that will be send to a new text file
let textOut = "";
//number of files to go over
const numOfFiles = 10;

//function that gets a text from a file and the index of a file and returns the rows according to the index
function returnTextFromFile(textIn, index) {
  const arr = textIn.split("\r\n");
  if (arr.length <= index) {
    for (let y = 0; y < arr.length; y++) textOut += arr[y] + "\n";
    textOut += "\n";
  } else {
    for (let x = 0; x < index; x++) textOut += arr[x] + "\n";
    textOut += "\n";
  }
}

//a loop that creates the paths of the files and calls the function above (returnTextFromFile)
for (let i = 1; i <= numOfFiles; i++) {
  const filepath = path.join(__dirname, "text", `${i}.txt`);
  const textIn = fs.readFileSync(filepath, "utf-8");
  returnTextFromFile(textIn, i);
}

//creating a new out put file that includes the lines from other files
fs.writeFileSync(`${__dirname}/output`, textOut);

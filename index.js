/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

const question = [
    {
      type: 'input',
      name: 'URL',
      message: "Enter a URL to make it into a QR code:",
    }
];
 
inquirer.prompt(question).then((answers) => {
    console.log(answers);
    let image = qr.imageSync(answers.URL, { type: 'png' });
    fs.writeFileSync('qr_img.png', image);
    fs.writeFile("URL.txt", answers.URL, (err)=> {
        if (err) throw err;
        console.log("The file has been saved!");
    });
});

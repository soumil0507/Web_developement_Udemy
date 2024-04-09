/*
1. Use the inquirer npm package to get the user input
2. Use the qr-image npm package to turn the user entered URL into a QR code image
3. Create a txt file file to save the user input using the native fs node module
*/ 

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

var website_name = "";
var username = "";

function createQrImage(website_name){
    console.log(`Creating QR Code Image for ${website_name}`)
    var qr_png = qr.image(website_name, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_code.png'));
}

inquirer.prompt([{
    name:"username",
    message:"Hello! What is your name?",
    type:"input"
},
{
    name:"website",
    message:"What is your website name you wish to convert into QR-Code?",
    type:"input"

}]).then(function (response) {
    username = response.username;
    website_name = response.website;
    createQrImage(website_name)
});



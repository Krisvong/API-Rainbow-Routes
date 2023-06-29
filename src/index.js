"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import the express module using ES modules
const dotenv_1 = __importDefault(require("dotenv")); // Import the dotenv module for environment variables
dotenv_1.default.config(); // Load environment variables from the .env file
const app = (0, express_1.default)(); // Initialize the express application
// Declare routes that people can visit on the application
// White Page
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `);
});
// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color; // Get the color from the request parameter
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
        </body>
    `);
});
const port = Number(process.env.PORT); // Specify the port number as a number
app.listen(port); // Start the server and listen on the specified port

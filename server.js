const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Create an instance of Express application
const app = express();

// Configuration for the database connection
const db = mysql.createConnection({
  host: "localhost", // Database host
  user: "root", // Database user
  password: "password", // Database password
  database: "SZNS", // Database name
});

// Connect to the database using the configuration settings
db.connect((err) => {
  if (err) {
    console.log(err); // If there's an error, log the error message to the console
    return err; // Return the error
  } else {
    console.log("db connection successful!"); // If the connection is successful, log a success message to the console
  }
});

// Middleware setup
app.use(cors()); // Enable CORS for the Express app, allowing requests from other domains
app.use(express.json()); // Parse incoming JSON data and make it accessible through the request object

// Define a route to handle GET requests to "/api/products"
app.get("/api/products", (req, res) => {
  // When a request is made to "/api/products", perform a database query to fetch all products
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err); // If there's an error during the database query, log the error to the console
    } else {
      res.send(result); // If the query is successful, send the result (array of products) as a response to the client
    }
  });
});

// Start the Express server and listen on port 4000
app.listen(4000, () => {
  console.log(`Console server listening on port 4000.`); // Log a message to the console indicating that the server is running on port 4000
});
console.log("test7");

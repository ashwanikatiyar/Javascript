const express = require('express');
const app = express();
const port = 3000; // Set your desired port number

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port https://localhost:${port}`);
});
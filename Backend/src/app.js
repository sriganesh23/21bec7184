const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Define the POST route
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    // Arrays to hold numbers and alphabets
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    // Process the input data
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    // Send the response
    res.json({
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// Define the GET route
app.get('21bec7184-ganeshs-projects-65eb4db6.vercel.app
', (req, res) => {
    res.json({ operation_code: 1 });
});

module.exports = app;

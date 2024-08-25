const { extractData, getHighestLowercaseAlphabet } = require('../utils/helpers');

const handlePostRequest = (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = getHighestLowercaseAlphabet(alphabets);
    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
};
const handleGetRequest = (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
};
module.exports = { handlePostRequest, handleGetRequest };

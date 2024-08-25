const getHighestLowercaseAlphabet = (alphabets) => {
    const lowercaseAlphabets = alphabets.filter(char => char >= 'a' && char <= 'z');
    if (lowercaseAlphabets.length === 0) return null;
    return lowercaseAlphabets.sort().pop();
};

module.exports = { getHighestLowercaseAlphabet };

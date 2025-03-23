function firstNonRepeatedChar(str) {
    let charCount = {}; // Object to store character frequencies

    // Step 1: Count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first character that is not repeated
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i]; // Return first non-repeating character
        }
    }

    return null; // If no non-repeating character is found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

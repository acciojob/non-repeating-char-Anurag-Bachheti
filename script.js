function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
            return str[i]; // Return the first character that breaks the repetition chain
        }
    }
    return null; // If no such character is found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

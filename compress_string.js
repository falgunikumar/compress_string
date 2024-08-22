function compressString(s) {
    if (!s) {
        return "";
    }

    let compressed = [];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            compressed.push(s[i - 1]);
            compressed.push(count.toString());
            count = 1;
        }
    }

    // Append the last character and its count
    compressed.push(s[s.length - 1]);
    compressed.push(count.toString());

    let compressedString = compressed.join('');

    // Only return the compressed string if it's shorter than the original
    return compressedString.length < s.length ? compressedString : s;
}

// Test cases
console.log(compressString("aabcccccaaa"));  // Expected output: a2b1c5a3
console.log(compressString("abc"));          // Expected output: abc (since compression isn't beneficial)
console.log(compressString(""));             // Expected output: "" (empty string)
console.log(compressString("aabbcc"));       // Expected output: aabbcc (since compression isn't beneficial)
console.log(compressString("aaAAaa"));       // Expected output: aaAAaa (since compression isn't beneficial)

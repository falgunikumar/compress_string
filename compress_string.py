def compress_string(s: str) -> str:
    if not s:
        return ""

    compressed = []
    count = 1

    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            compressed.append(s[i - 1])
            compressed.append(str(count))
            count = 1

    # Append the last character and its count
    compressed.append(s[-1])
    compressed.append(str(count))

    compressed_string = ''.join(compressed)
    
    # Only return the compressed string if it's shorter than the original
    return compressed_string if len(compressed_string) < len(s) else s

# Test cases
print(compress_string("aabcccccaaa"))  # Expected output: a2b1c5a3
print(compress_string("abc"))          # Expected output: abc (since compression isn't beneficial)
print(compress_string(""))             # Expected output: "" (empty string)
print(compress_string("aabbcc"))       # Expected output: aabbcc (since compression isn't beneficial)
print(compress_string("aaAAaa"))       # Expected output: aaAAaa (since compression isn't beneficial)

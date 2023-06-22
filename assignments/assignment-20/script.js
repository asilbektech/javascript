function isValidEmail(email) {
    let emailParts = email.split("@");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let allowedChars = "._";

    // let allValidChars = alphabet + numbers + allowedChars;

    let username = emailParts[0];
    let domain = emailParts[1];

    if (emailParts.length !== 2) {
        return false;
    }
    if (
        username[0] === "." ||
        username[0] === "_" ||
        [username.length - 1] === "." ||
        [username.length - 1] === "_"
    ) {
        return false;
    }
    for (let i = 0; i < username.length; i++) {
        let char = username[i];

        if (
            !alphabet.includes(char.toLowerCase()) &&
            !numbers.includes(char) &&
            !allowedChars.includes(char)
        ) {
            return false;
        }
    }

    // if (allValidChars.includes(char.toLowerCase())) {
    //     return false;
    // }

    for (var i = 0; i < username.length - 1; i++) {
        var currentChar = username[i];
        var nextChar = username[i + 1];
        if (
            allowedChars.includes(currentChar) &&
            allowedChars.includes(nextChar)
        ) {
            return false;
        }
    }

    // if (domain[domain.length - 1] === ".") {
    //     return false;
    // }

    let domainParts = domain.split(".");
    if (domainParts.length !== 2) {
        return false;
    }

    if (
        domainParts[0].length < 1 ||
        domainParts[1].length < 2 ||
        domainParts[1].length > 3
    ) {
        return false;
    }

    let domainPartwithoutDot = domainParts.join("");
    for (let i = 0; i < domainPartwithoutDot; i++) {
        let char = domainPartwithoutDot[i];
        if (!alphabet.includes(char.toLowerCase())) {
            return false;
        }
    }
    return true;
}

// Regular and valid email
console.log(isValidEmail("john.doe@example.com")); // Should return: true

// Valid email with numbers in username
console.log(isValidEmail("john2.doe3@example.com")); // Should return: true

// Valid email with underscore in username
console.log(isValidEmail("john_doe@example.com")); // Should return: true

// Valid email with capital letters
console.log(isValidEmail("John.Doe@Example.com")); // Should return: true

// Test for an email with three-letter domain extension
console.log(isValidEmail("john.doe@example.net")); // Should return: true

// Test for an email with two-letter domain extension
console.log(isValidEmail("john.doe@example.co")); // Should return: true

// Test for an email with one letter domain name
console.log(isValidEmail("john@d.com")); // Should return: true

// Test for an email with no "@" symbol:
console.log(isValidEmail("johndoexample.com")); // Should return: false

// Test for an email with multiple "@" symbols:
console.log(isValidEmail("john@doe@example.com")); // Should return: false

// Test for an email where username starts or ends with a dot or an underscore:
console.log(isValidEmail(".john@doe.com")); // Should return: false
console.log(isValidEmail("john.@doe.com")); // Should return: false
console.log(isValidEmail("_john@doe.com")); // Should return: false
console.log(isValidEmail("john_@doe.com")); // Should return: false

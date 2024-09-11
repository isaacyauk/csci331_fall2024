function isStrongPassword(password) {
    // --------------------- Define Function variables ---------------------
    let hasNumber = false;
    let hasChar = false;
    const uniqueCharsASCII = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];

    // --------------------- Check for a number here --------------------- 
    for (let i = 0; i < password.length; i++) {
        // Need to check if EITHER category is satisfied, so use && ! (Originally used || which was wrong!)
        if (password.charCodeAt(i) > 47 && password.charAt(i) < 58) { 
            // One number was found, so the password is valid! No need to continue checking.
            hasNumber = true;
        }
    };

    if (!hasNumber) {
        console.log("You passoword must contain at least one number.");
        return false;
    };

    // --------------------- Check for a unique character here ---------------------
    for (let i = 0; i < password.length; i++) {
        // Need to check if EITHER category is satisfied, so use && ! (Originally used || which was wrong!)
        if (uniqueCharsASCII.includes(password.charCodeAt(i))) { 
            // One number was found, so the password is valid! No need to continue checking.
            hasChar = true;
        }
    };

    if (!hasChar) {
        console.log("You password must contain at least one unique character. (e.g. #%&'()*+,-./:;<=>?@[]^_{}~)");
        return false;
    };
    
    // --------------------- Check entry cases here. ---------------------
    if (password.includes("password") || password.includes("1234")) {
        console.log("Your password cannot contain 'password' or '1234.'");
        return false;
    }
    else if (password.length < 8) {
        console.log("Your password cannot be shorter than 8 characters.");
        return false;
    }
    else if (password.toLowerCase().includes("password")) {
        // Check more cases here!
        console.log("You look stupid typing password like that...");
        return false;
    }
}

// --------------------- MAIN LOOP ---------------------
// isStrongPassword("qwerty1");            // false - Too short
// isStrongPassword("qwerty1234");         // false - contains "1234"
// isStrongPassword("qwertypassword");     // false - Contains "pasword"
// isStrongPassword("qwertyABC");          // false - no numbers
// isStrongPassword("qwerty123");          // true
isStrongPassword("1adfadfsfdsfdgsdfg");
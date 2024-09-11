function isStrongPassword(password) {
    // -------------- Check for a number here --------------
    let hasNumber = false;

    // Check for a number to be within the string here
    for (let i = 1; i < password.length; i++) {
        // Need to check if EITHER category is satisfied, so use && ! (Originally used || which was wrong!)
        if (password.charCodeAt(i) > 47 && password.charAt(i) < 58) { 
            // One number was found, so the password is valid! No need to continue checking.
            hasNumber = true;
        }
    };

    if (!hasNumber) {
        console.log("You passoword must contain at least one number.");
        return;
    };
    
    // -------------- Check entry cases here. --------------
    if (password.includes("password") || password.includes("1234")) {
        console.log("Your password cannot contain 'password' or '1234.'");
        return;
    }
    else if (password.length < 8) {
        console.log("Your password cannot be shorter than 8 characters.");
        return;
    }
    else if (password.includes("")) {
        // Check more cases here!
    }
}

// isStrongPassword("qwerty1");            // false - Too short
// isStrongPassword("qwerty1234");         // false - contains "1234"
// isStrongPassword("qwertypassword");     // false - Contains "pasword"
// isStrongPassword("qwertyABC");          // false - no numbers
// isStrongPassword("qwerty123");          // true
isStrongPassword("erty1ywui");
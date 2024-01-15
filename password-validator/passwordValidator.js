// passwordValidator.js

function validatePassword(password, rules) {
    if (password.length < rules.minLength) {
        return false;
    }
    
    const digitMatches = password.match(/[0-9]/g);
    if (!digitMatches || digitMatches.length < rules.minDigits) {
        console.log('digitMatches', digitMatches);
        return false;
    }
    
    const letterMatches = password.match(/[a-zA-Z]/g);
    if (!letterMatches || letterMatches.length < rules.minLetters) {
        return false;
    }
    
    const specialCharMatches = password.match(/[!@#$%^&*()_+[\]{}|;:,.<>?]/g);
    if (!specialCharMatches || specialCharMatches.length < rules.minSpecialChars) {
        return false;
    }
    
    return true;
}

// test that function works
const rules = {
  minLength: 8,
  minDigits: 1,
  minLetters: 1,
  minSpecialChars: 1,
  specialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
};

console.log(validatePassword('Abcderty1', rules));

module.exports = validatePassword;

// passwordValidator.test.js

const validatePassword = require('./passwordValidator');

describe('Password Validation', () => {
  test('should validate password based on rules', () => {
    const rules = {
      minLength: 8,
      minDigits: 1,
      minLetters: 1,
      minSpecialChars: 1,
      specialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    expect(validatePassword('Abcd123!', rules)).toBeTruthy(); 
    
  });

  test('should fail validation if password is too short', () => {
    const rules = {
      minLength: 8,
      minDigits: 1,
      minLetters: 1,
      minSpecialChars: 1,
      specialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    expect(validatePassword('Abcd12!', rules)).toBeFalsy();
  });

  test('should fail validation if password does not have enough digits', () => {
    const rules = {
      minLength: 8,
      minDigits: 1,
      minLetters: 1,
      minSpecialChars: 1,
      specialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    expect(validatePassword('Abcdefg!', rules)).toBeFalsy();
  });

  test('should fail validation if password does not have enough letters', () => {
    const rules = {
      minLength: 8,
      minDigits: 1,
      minLetters: 1,
      minSpecialChars: 1,
      specialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    expect(validatePassword('1234567!', rules)).toBeFalsy();
  });

  test ('should fail validation if password does not have enough special characters', () => {
    const rules = {
      minLength: 8,
      minDigits: 1,
      minLetters: 1,
      minSpecialChars: 1,
      specialChars: '!@#$%^&*()_+[]{}|;:,.<>?'
    };


    expect(validatePassword('Abcd1234', rules)).toBeFalsy();
  });
});

const validators = {

  // Email Validator
  email(email) {

    const pattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const valid = pattern.test(email);

    return {
      valid,
      error: valid
        ? null
        : "Invalid email address."
    };
  },

  // Phone Validator
  phone(phone) {

    const pattern =
      /^(\+?\d{1,3}[- ]?)?\d{10,14}$/;

    const valid = pattern.test(phone);

    return {
      valid,
      error: valid
        ? null
        : "Invalid phone number."
    };
  },

  // Strong Password Validator
  password(password) {

    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const valid = pattern.test(password);

    return {
      valid,
      error: valid
        ? null
        : "Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character."
    };
  },

  // URL Validator
  url(url) {

    const pattern =
      /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/;

    const valid = pattern.test(url);

    return {
      valid,
      error: valid
        ? null
        : "Invalid URL."
    };
  },

  // Date Validator (YYYY-MM-DD)
  date(date) {

    const pattern =
      /^\d{4}-\d{2}-\d{2}$/;

    if (!pattern.test(date)) {
      return {
        valid: false,
        error: "Date must be in YYYY-MM-DD format."
      };
    }

    const parsedDate = new Date(date);

    const valid =
      !isNaN(parsedDate.getTime());

    return {
      valid,
      error: valid
        ? null
        : "Invalid date."
    };
  }
};
console.log(validators.email("nikinggs101@gmail.com"))

console.log(validators.email("nikinggsgmail.com"))

console.log(validators.date("2026-06-04"))
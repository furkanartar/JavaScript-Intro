export default class CustomerValidator {
  validate(customer) {
    const errors = [];
    if (!user.id) {
      errors.push("First name is required");
    }
    if (!user.firstName) {
      errors.push("First name is required");
    }
    if (!user.lastName) {
      errors.push("Last name is required");
    }
    if (!user.city) {
      errors.push("City is required");
    }
    if (!user.age < 0) {
      errors.push("Age is required");
    }
    if (!isNaN(user.creditCardNumber) || user.creditCardNumber.length !== 16) {
      errors.push("Credit card number is type false");
    }
    return errors;
  }
}

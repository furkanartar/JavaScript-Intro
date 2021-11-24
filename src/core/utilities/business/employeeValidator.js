export default class EmployeeValidator {
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
    if (!user.salary) {
      errors.push("Salary is required");
    }
    if (!user.age || user.age < 0) {
      errors.push("Age is null or type false");
    }
    if (!isNaN(user.creditCardNumber) || user.creditCardNumber.length !== 16) {
      errors.push("Credit card number is null or type false");
    }
    return errors;
  }
}

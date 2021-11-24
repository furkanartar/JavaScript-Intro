export default class UserValidator {
  static validate(user) {
    let errors = [];
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
    return errors;
  }
}

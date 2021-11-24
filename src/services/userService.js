import users from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService {
    
  constructor(loggerService) {
    this.errors = [];
    this.users = [];
    this.loggerService = loggerService;
  }

  add(users) {
    if (!this.checkUserValidityForErrors(users)) {
      this.users.push(users);
    }
    // this.loggerService.log(users);
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((users) => user.id === id);
  }

  getUsersSorted() {
    return this.users.sort((user1, user2) => {
      if (user1.firstName > user2.firstName) {
        return 1;
      } else if (user1.firstName === user2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }

  //formik ayrıca validator klasörüne taşıyak
  checkUserValidityForErrors(user) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(+user.age))) {
      hasErrors = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
    }

    return hasErrors;
  }
}

import { users } from "../data/users.js";
import ErrorDataResult from "../core/utilities/results/errorDataResult.js";
import SuccessDataResult from "../core/utilities/results/successDataResult.js";
import Messages from "../core/utilities/constants/messages.js";

export default class UserService {
  constructor(loggerService, userValidatorService) {
    this.loggerService = loggerService;
    this.userValidatorService = userValidatorService;
    this.users = [];
    this.errors = [];
    this.messages = new Messages();
  }

  load() {
    this.users = users.filter((user) => user.type === "user");
  }

  add(user) {
    let result = this.userValidatorService.validate(user);

    if (result.length > 0) {
      this.loggerService.log(new ErrorDataResult(user, result));
    } else {
      this.users.push(user);
      this.loggerService.log(new SuccessDataResult(user, this.messages.add(user.firstName)));
    }
  }

  update(newUser) {
    let result = this.userValidatorService.validate(newUser);

    if (result.length > 0) {
      this.loggerService.log(new ErrorDataResult(newUser, result));
    } else {
      let olduserIndex = this.users.findIndex((user) => user.id === newUser.id);
      this.users[olduserIndex] = newUser;
      this.loggerService.log(new SuccessDataResult(newUser, this.messages.update(newUser.firstName)));
    }
  }

  delete(id) {
    this.users = this.users.filter((user) => user.id !== id);
    this.loggerService.log(new SuccessDataResult(id, this.messages.delete(id)));
  }

  getAll() {
    return new SuccessDataResult(this.users);
  }

  getById(id) {
    return new SuccessDataResult(this.users.find(user => user.id === id));
  }

  getBySorted() {
    let result = this.users.sort((user1, user2) => {
      if (user1.firstName > user2.firstName) {
        return 1;
      } else if (user1.firstName === user2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });

    return new SuccessDataResult(result);
  }
}

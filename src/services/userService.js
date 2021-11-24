import UserValidator from '../core/utilities/business/userValidator.js';
import { users } from '../data/users.js';

export default class UserService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.users = [];
    this.errors = [];
    this.userValidator = new UserValidator();
  }

  load(){
    this.users = users.filter(user => user.type === 'user');
  }

  add(user) {
    let result = this.userValidator.validate(user);
    
    // if (result.length > 0) {
    //   return result;
    // } else {
    //   this.users.push(user);
    // }
    
    this.loggerService.log(user);
  }

  update(user) {
    let olduserIndex = this.users.findIndex(user => user.id === user.id);
    this.user[olduserIndex] = user;
  }

  delete(id) {
    this.users = this.users.filter(user => user.id !== id);
  }

  getAll() {
    return this.users;
  }

  getById(id) {
    return this.user.find(user => user.id === id);
  }

  getBySorted() {
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
}

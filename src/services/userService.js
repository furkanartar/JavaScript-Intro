import { users } from '../data/users.js';

export default class UserService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.users = [];
    this.errors = [];
  }

  load(){
    this.users = users.filter(user => user.type === 'user');
  }

  add(user) {
    //iş kuralı eklenecek sonra proje finito
    // if (!this.checkEmployeeValidityForErrors(employee)) {
    //   this.employees.push(employee);
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

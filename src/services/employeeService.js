import { users } from '../data/users.js';

export default class EmployeeService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.employees = [];
    this.errors = [];
  }

  load(){
    this.employees = users.filter(user => user.type === 'employee');
  }

  add(employee) {
    //iş kuralı eklenecek sonra proje finito
    // if (!this.checkEmployeeValidityForErrors(employee)) {
    //   this.employees.push(employee);
    // }
    
    this.loggerService.log(employee);
  }

  update(employee) {
    let oldEmployeeIndex = this.employees.findIndex(employee => employee.id === employee.id);
    this.employees[oldEmployeeIndex] = employee;
  }

  delete(id) {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }

  getAll() {
    return this.employees;
  }

  getById(id) {
    return this.employees.find(employee => employee.id === id);
  }

  getBySorted() {
    return this.employees.sort((employee1, employee2) => {
      if (employee1.firstName > employee2.firstName) {
        return 1;
      } else if (employee1.firstName === employee2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}

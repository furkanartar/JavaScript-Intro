import { users } from '../data/users.js';
import ErrorDataResult from "../core/utilities/results/errorDataResult.js";
import SuccessDataResult from "../core/utilities/results/successDataResult.js";
import Messages from '../core/utilities/constants/messages.js';

export default class EmployeeService {
  constructor(loggerService, employeeValidatorService) {
    this.loggerService = loggerService;
    this.employees = [];
    this.errors = [];
    this.employeeValidatorService = employeeValidatorService;
    this.messages = new Messages();
  }

  load(){
    this.employees = users.filter(user => user.type === 'employee');
  }

  add(employee) {
    let result = this.employeeValidatorService.validate(employee);

    if (result.length > 0) {
      this.loggerService.log(new ErrorDataResult(employee, result));
    } else {
      this.employees.push(employee);
      this.loggerService.log(new SuccessDataResult(employee, this.messages.add(employee.firstName)));
    }
  }

  update(newEmployee) {
    let result = this.employeeValidatorService.validate(newEmployee);

    if (result.length > 0) {
      this.loggerService.log(new ErrorDataResult(newEmployee, result));
    } else {
      let oldEmployeeIndex = this.employees.findIndex((employee) => employee.id === newEmployee.id);
      this.employees[oldEmployeeIndex] = newEmployee;
      this.loggerService.log(new SuccessDataResult(newEmployee, this.messages.update(newEmployee.firstName)));
    }
  }

  delete(id) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
    this.loggerService.log(new SuccessDataResult(employee, this.messages.delete(uemployeeer.firstName)));
  }

  getAll() {
    return new SuccessDataResult(this.employees);
  }

  getById(id) {
    return new SuccessDataResult(this.employees.find(employee => employee.id === id));
  }

  getBySorted() {
    let result = this.employees.sort((employee1, employee2) => {
      if (employee1.firstName > employee2.firstName) {
        return 1;
      } else if (employee1.firstName === employee2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });

    return new SuccessDataResult(result);
  }
}

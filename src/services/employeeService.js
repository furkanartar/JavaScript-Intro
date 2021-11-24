import DataError from '../models/dataError.js';
export default class EmployeeService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.employees = [];
    this.errors = [];
  }

  add(employee) {
    if (!this.checkEmployeeValidityForErrors(employee)) {
      this.employees.push(employee);
    }
    
    this.loggerService.log(employee);
  }

  getAll() {
    return this.employees;
  }

  getById(id) {
    return this.employees.find((employee) => employee.id === id);
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

  //formik ayrıca validator klasörüne taşıyak
  checkEmployeeValidityForErrors(employee) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!employee[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, employee)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(+employee.age))) {
      hasErrors = true;
      this.errors.push(
        new DataError(
          `Validation problem. ${employee.age} is not a number`,
          employee
        )
      );
    }

    return hasErrors;
  }
}

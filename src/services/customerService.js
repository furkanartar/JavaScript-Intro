import { users } from "../data/users.js";
import ErrorDataResult from "../core/utilities/results/errorDataResult.js";
import SuccessDataResult from "../core/utilities/results/successDataResult.js";
import Messages from "../core/utilities/constants/messages.js";

export default class CustomerService {
  constructor(loggerService, customerValidatorService) {
    this.loggerService = loggerService;
    this.customerValidatorService = customerValidatorService;
    this.customers = [];
    this.errors = [];
    this.messages = new Messages();
  }

  load() {
    this.customers = users.filter((user) => user.type === "customer");
  }

  add(customer) {
    let result = this.customerValidatorService.validate(customer);

    if (result.length > 0) {
      this.loggerService.log(new ErrorDataResult(customer, result));
    } else {
      this.customers.push(customer);
      this.loggerService.log(new SuccessDataResult(customer, this.messages.add(customer.firstName)));
    }
  }

  update(newCustomer) {
    let result = this.customerValidatorService.validate(customer);

    if (result.length > 0) {
      this.loggerService.log(new ErrorDataResult(newCustomer, result));
    } else {
      let oldCustomerIndex = this.customers.findIndex((customer) => customer.id === newCustomer.id);
      this.customer[oldCustomerIndex] = newCustomer;
      this.loggerService.log(new SuccessDataResult(newCustomer, this.messages.update(newCustomer.firstName)));
    }
  }

  delete(id) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
    this.loggerService.log(new SuccessDataResult(id, this.messages.delete(id)));
  }

  getAll() {
    return new SuccessDataResult(this.customers);
  }

  getById(id) {
    return new SuccessDataResult(this.customers.find(customer => customer.id === id));
  }

  getBySorted() {
    let result = this.customers.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });

    return new SuccessDataResult(result);
  }
}

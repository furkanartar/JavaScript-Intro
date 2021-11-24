import { users } from '../data/users.js';

export default class CustomerService {
  constructor(loggerService) {
    this.loggerService = loggerService;
    this.customers = [];
    this.errors = [];
  }

  load(){
    this.customers = users.filter(user => user.type === 'customer');
  }

  add(customer) {
    //iş kuralı eklenecek sonra proje finito
    // if (!this.checkEmployeeValidityForErrors(customer)) {
    //   this.employees.push(employee);
    // }
    
    this.loggerService.log(customer);
  }

  update(customer) {
    let oldCustomerIndex = this.customers.findIndex(customer => customer.id === customer.id);
    this.customers[oldCustomerIndex] = customer;
  }

  delete(id) {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }

  getAll() {
    return this.customers;
  }

  getById(id) {
    return this.customers.find(customer => customer.id === id);
  }

  getBySorted() {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else {
        return -1;
      }
    });
  }
}

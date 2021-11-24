export default class CustomerService {
  loggerService = null;
  customers = [];
  constructor(loggerService) {
    this.loggerService = loggerService;
  }

  add(customer) {
    if (!this.checkCustomerValidityForErrors(customer)) {
      this.customers.push(customer);
    }
    this.loggerService.log(customer);
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomerById(id) {
    return this.customers.find((customer) => customer.id === id);
  }

  getCustomersSorted() {
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

  //formik ayrıca validator klasörüne taşıyak
  checkCustomerValidityForErrors(customer) {
    let requiredFields = "id firstName lastName age city".split(" ");
    let hasErrors = false;
    for (const field of requiredFields) {
      if (!customer[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, customer)
        );
      }
    }

    if (Number.isNaN(Number.parseInt(+customer.age))) {
      hasErrors = true;
      this.errors.push(
        new DataError(
          `Validation problem. ${customer.age} is not a number`,
          customer
        )
      );
    }

    return hasErrors;
  }
}

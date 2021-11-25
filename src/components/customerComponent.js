import MongoLogger from '../core/crossCuttingConcerns/logging/mongoLogger.js'
import CustomerService from '../services/customerService.js'
import Customer from '../models/customer.js';
import CustomCustomerValidator from '../core/utilities/business/validationRules/customValidation/customCustomerValidator.js';
console.log("");
console.log("");
console.log("Customer component yüklendi.");
const mongoLogger = new MongoLogger()
const customCustomerValidator = new CustomCustomerValidator()
const customerService = new CustomerService(mongoLogger, customCustomerValidator)

let furkan = new Customer(9, "Furkan", "ARTAR", "Bursa", 18, 1234561234561234)
let sukran = new Customer(10, "Şükran", "KARAKAYA", "ANTALYA", 19)

customerService.load();
customerService.add(furkan);
customerService.add(sukran);
console.log("Kullanıcı listesi: ", customerService.getAll());

console.log("Mongo logger'daki tüm kayıtlar: ", mongoLogger.getAll());
// customerService.getBySorted()
// customerService.getById(2)
// customerService.delete(2)
// customerService.update(newCustomer);
// customerService.getAll()
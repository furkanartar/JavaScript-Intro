import ElasticLogger from '../core/crossCuttingConcerns/logging/elasticLogger.js'
import EmployeeService from '../services/employeeService.js'
import Employee from '../models/employee.js';
import CustomEmployeeValidator from '../core/utilities/business/validationRules/customValidation/customEmployeeValidator.js';
console.log("");
console.log("");
console.log("Employee Component Yüklendi");
const elasticLogger = new ElasticLogger()
const customEmployeeValidator = new CustomEmployeeValidator()
const employeeService = new EmployeeService(elasticLogger, customEmployeeValidator)

let ahmet = new Employee(2, "Ahmet", "ALAN", "Bursa")
let cemile = new Employee(2, "Cemile", "ÖZALAN", "Antalya", 18, 19999)

employeeService.load();
employeeService.add(ahmet);
employeeService.add(cemile);
console.log("Kullanıcı listesi: ", employeeService.getAll());

console.log("Elastic logger'daki tüm kayıtlar: ", elasticLogger.getAll());
// employeeService.getBySorted()
// employeeService.getById(2)
// employeeService.delete(2)
// employeeService.update(newEmployee);
// employeeService.getAll()
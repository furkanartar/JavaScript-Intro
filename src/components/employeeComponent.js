import MongoLogger from '../crossCuttingConcerns/logging/mongoLogger.js'
import EmployeeService from '../services/employeeService.js'
import User from '../models/user.js';
import EmployeeValidators from '../validators/employeeValidators.js';


const mongoLogger = new MongoLogger()
const employeeService = new EmployeeService(mongoLogger)
let engin = new User(1, "Engin", "Demiroğ", "Ankara", 36)
let ahmet = new User(2, "Ahmet", "ALAN", "Bursa")
let furkan = new User(2, "Furkan", "ARTAR", "Bursa", 18)

employeeService.add(engin);
employeeService.add(ahmet);
employeeService.add(furkan);

console.log("Kullanıcı listesi: ", employeeService.getAll());
console.log("2 ID'li kullanıcı: ", employeeService.getById(2));
console.log("İsme göre alfabetik sıralanmış kullanıcı listesi: ", employeeService.getBySorted());

console.log("MongoLogger'daki tüm kayıtlar:", mongoLogger.getAll());

let employeeValidators = new EmployeeValidators();
// employeeValidators.checkValidity(engin);

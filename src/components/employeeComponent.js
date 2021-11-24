import MongoLogger from '../core/crossCuttingConcerns/logging/mongoLogger.js'
import EmployeeService from '../services/employeeService.js'
import User from '../models/user.js';

const mongoLogger = new MongoLogger()
const employeeService = new EmployeeService(mongoLogger)

let engin = new User(1, "Engin", "Demiroğ", "Ankara", 36)
let ahmet = new User(2, "Ahmet", "ALAN", "Bursa")
let furkan = new User(3, "Furkan", "ARTAR", "Bursa", 18)
let yeni = new User(1, "yeni", "yeni", "yeni", 11)
employeeService.load();

employeeService.add(engin);
// employeeService.add(ahmet);
// employeeService.add(furkan);

console.log(employeeService.getAll());
// employeeService.getBySorted()
// employeeService.getById(2)
// employeeService.delete(2)
// employeeService.update(yeni);
// employeeService.getAll()



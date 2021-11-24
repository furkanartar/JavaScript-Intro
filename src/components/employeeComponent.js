import MongoLogger from '../crossCuttingConcerns/logging/mongoLogger.js'
import EmployeeService from '../services/employeeService.js'
import User from '../models/user.js';

console.log("employee component yüklendi");

const mongoLogger = new MongoLogger()
const employeeService = new EmployeeService(mongoLogger)
let user = new User(1, "Engin", "Demiroğ", "Ankara", 36)

employeeService.add(user);
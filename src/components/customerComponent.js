import MongoLogger from '../core/crossCuttingConcerns/logging/mongoLogger.js'
import CustomerService from '../services/customerService.js'
import User from '../models/user.js';

const mongoLogger = new MongoLogger()
const customerService = new CustomerService(mongoLogger)

let engin = new User(1, "Engin", "Demiroğ", "Ankara", 36)
let ahmet = new User(2, "Ahmet", "ALAN", "Bursa")
let furkan = new User(3, "Furkan", "ARTAR", "Bursa", 18)
let yeni = new User(1, "yeni", "yeni", "yeni", 11)
customerService.load();

customerService.add(engin);
// customerService.add(ahmet);
// customerService.add(furkan);

console.log(customerService.getAll());
// customerService.getBySorted()
// customerService.getById(2)
// customerService.delete(2)
// customerService.update(yeni);
// customerService.getAll()



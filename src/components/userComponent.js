import MongoLogger from '../core/crossCuttingConcerns/logging/mongoLogger.js'
import UserService from '../services/userService.js'
import User from '../models/user.js';

const mongoLogger = new MongoLogger()
const userService = new UserService(mongoLogger)

let engin = new User(1, "Engin", "Demiroğ", "Ankara", 36)
let ahmet = new User(2, "Ahmet", "ALAN", "Bursa")
let furkan = new User(3, "Furkan", "ARTAR", "Bursa", 18)
let yeni = new User(1, "yeni", "yeni", "yeni", 11)
userService.load();
console.log(userService.getAll());

userService.add(engin);
userService.add(ahmet);
// userService.add(furkan);

// userService.getBySorted()
// userService.getById(2)
// userService.delete(2)
// userService.update(yeni);
// userService.getAll()

console.log("Mongo kayıtları: ", mongoLogger.getAll());



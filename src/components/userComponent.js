import MongoLogger from "../core/crossCuttingConcerns/logging/mongoLogger.js";
import UserService from "../services/userService.js";
import User from "../models/user.js";
import CustomUserValidator from "../core/utilities/business/validationRules/customValidation/customUserValidator.js";
console.log("User component yüklendi.");
const mongoLogger = new MongoLogger();
const customUserValidator = new CustomUserValidator();
const userService = new UserService(mongoLogger, customUserValidator);

userService.load();

let engin = new User(7, "Engin", "DEMİROĞ", "Ankara", 36);
let esra = new User(8, "Esra", "SANCAK", "Ankara");
userService.add(engin);
userService.add(esra);

console.log("Kullanıcı listesi: ", userService.getAll());
console.log("Mongo logger'daki tüm kayıtlar: ", mongoLogger.getAll());

// console.log(userService.getBySorted());
// console.log(userService.getById(7));
// userService.delete(7);
// let newUser = new User(7, "Ertan", "CEVHER", "Bulgaristan", 17);
// userService.update(newUser)

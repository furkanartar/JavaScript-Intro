import Messages from "../../../constants/messages.js";
import CustomValidator from "./customValidator.js";

export default class CustomCustomerValidator extends CustomValidator{
  constructor(){
    super();
    this.messages = new Messages();
  }

  validate(customer) {
    let errors = [];

    errors.push(this.checkIdField(customer.id));
    errors.push(this.checkFirstNameField(customer.firstName));
    errors.push(this.checkLastNameField(customer.lastName));
    errors.push(this.checkCityField(customer.city));
    errors.push(this.checkCreditCardNumberField(customer.creditCardNumber));
    errors.push(this.checkAgeField(customer.age));

    return errors.filter(error => error !== undefined);
  }

  checkIdField(id){
    if (!id || isNaN(id)) {
      return this.messages.checkField("Id");
    }
  }

  checkFirstNameField(firstName){
    if (!firstName || firstName.length < 3 || firstName.match(/[^a-zA-ZİığüşöçĞÜŞÖÇİ]/)) {
      return this.messages.checkField("Ad");
    }
  }

  checkLastNameField(lastName){
    if (!lastName || lastName.length < 3 || lastName.match(/[^a-zA-ZİığüşöçĞÜŞÖÇİ]/)) {
      return this.messages.checkField("Soyad");
    }
  }

  checkCityField(city){
    if (!city || city.length < 3 || city.match(/[^a-zA-Z]/)) {
      return this.messages.checkField("Şehir");
    }
  }

  checkCreditCardNumberField(creditCardNumber){
    if (!creditCardNumber || creditCardNumber.length < 16 || isNaN(creditCardNumber)) {
      return this.messages.checkField("Kredi kartı numarası");
    }
  }

  checkAgeField(age){
    if (!age || isNaN(age) || age < 1 || age > 120) {
      return this.messages.checkField("Yaş");
    }
  }
}
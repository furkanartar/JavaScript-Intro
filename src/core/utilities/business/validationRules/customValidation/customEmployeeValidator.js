import Messages from "../../../constants/messages.js";
import CustomValidator from "./customValidator.js";

export default class EmployeeValidator extends CustomValidator {
  constructor() {
    super();
    this.messages = new Messages();
  }

  validate(employee) {
    let errors = [];

    errors.push(this.checkIdField(employee.id));
    errors.push(this.checkFirstNameField(employee.firstName));
    errors.push(this.checkLastNameField(employee.lastName));
    errors.push(this.checkCityField(employee.city));
    errors.push(this.checkSalaryField(employee.salary));
    errors.push(this.checkAgeField(employee.age));

    let filterErrors = errors.filter((error) => error !== undefined);
    if (filterErrors.length > 1) {
      return filterErrors;
    } else {
      return filterErrors[0];
    }
  }

  checkIdField(id) {
    if (!id || isNaN(id)) {
      return this.messages.checkField("Id");
    }
  }

  checkFirstNameField(firstName) {
    if (!firstName || firstName.length < 3 || firstName.match(/[^a-zA-ZİığüşöçĞÜŞÖÇİ]/)) {
      return this.messages.checkField("Ad");
    }
  }

  checkLastNameField(lastName) {
    if (!lastName || lastName.length < 3 || lastName.match(/[^a-zA-ZİığüşöçĞÜŞÖÇİ]/)) {
      return this.messages.checkField("Soyad");
    }
  }

  checkCityField(city) {
    if (!city || city.length < 3 || city.match(/[^a-zA-Z]/)) {
      return this.messages.checkField("Şehir");
    }
  }

  checkSalaryField(salary) {
    if (!salary || isNaN(salary) || salary < 1) {
      return this.messages.checkField("Maaş");
    }
  }

  checkAgeField(age) {
    if (!age || isNaN(age) || age < 1 || age > 120) {
      return this.messages.checkField("Yaş");
    }
  }
}

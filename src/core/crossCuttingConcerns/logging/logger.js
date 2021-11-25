export default class BaseLogger {
  constructor() {
    this.datas = [];
  }

  log(data, message) {
    this.datas.push(data);
  }

  getAll() {
    return this.datas;
  }
}

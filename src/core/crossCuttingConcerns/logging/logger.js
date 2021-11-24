export default class BaseLogger {
  constructor() {
    this.datas = [];
  }

  log(data) {
    this.datas.push(data);
  }

  getAll() {
    return this.datas;
  }
}

import BaseLogger from "./logger.js";

export default class MongoLogger extends BaseLogger {
  constructor() {
    super();
    this.datas = [];
  }

  log(data) {
    this.datas.push(data);
  }

  getAll() {
    return this.datas;
  }
}

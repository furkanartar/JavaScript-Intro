import BaseLogger from "./logger.js";

export default class ElasticLogger extends BaseLogger {
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

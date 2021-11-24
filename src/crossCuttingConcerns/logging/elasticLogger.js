import BaseLogger from "./logger.js";

export default class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Elastic ", data.firstName);
    }
}

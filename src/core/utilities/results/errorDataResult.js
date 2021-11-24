import DataResult from "./dataResult.js";

export default class ErrorDataResult extends DataResult{
    constructor(data, message){
        super(false, data, message)
    }
}
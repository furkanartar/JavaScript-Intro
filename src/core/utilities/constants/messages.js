export default class Messages {
    add(firstName) {
        return `${firstName} eklendi`;
    }
    update(firstName) {
        return `${firstName} güncellendi`;
    }
    delete(firstName) {
        return `${firstName} silindi`;
    }
    exists(firstName) {
        return `${firstName} zaten var`;
    }
    checkField(fieldName){
        return `${fieldName} alanını kontrol ediniz`;
    }
}
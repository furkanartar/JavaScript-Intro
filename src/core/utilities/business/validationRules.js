export default class BusinessRule {
    //logic'i döndürmek yerine dizi yap hataların toplamını döndürek
  static run(...logics) {
    for (const logic of logics) {
      if (!logic.success) {
        return logic;
      }
    }
    return null;
  }
}

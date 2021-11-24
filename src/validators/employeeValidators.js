// import * as Yup from 'yup';


export default class EmployeeValidators {
    constructor(){
        const validationSchema = Yup.object().shape({
            id: Yup.number().required('Id is required'),
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            age: yup.number().required().positive().integer(),
            city: Yup.string().required('City is required')
        });
    }

    checkValidity(employee) {
        return validationSchema.isValid(employee);
    }
}

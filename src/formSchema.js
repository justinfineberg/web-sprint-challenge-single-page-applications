import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
    .string(),
    onions: yup.boolean(), 
    sasuage: yup.boolean(),
    mushrooms: yup.boolean(),
    bacon: yup.boolean(),
    special: yup
        .string()
})

export default formSchema
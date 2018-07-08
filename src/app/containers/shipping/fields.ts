import { required, validPhone } from 'app/components/form/validations';
import { Field } from "app/components/form";

export const fields: Field<any>[] =  [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true,
        validate: [required]
    },
    {
        name: 'address',
        label: 'Address',
        type: 'text',
        required: true,
        validate: [required]
    },
    {
        name: 'phone',
        label: 'Phone',
        type: 'text',
        required: true,
        validate: [required, validPhone]
    },
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validate: [required]
    },
    {
        name: 'delivery',
        label: 'Shipping options',
        type: 'select',
        required: true,
        validate: [required],
        values: ['DHL', 'Fedex'],
    }
];

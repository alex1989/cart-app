import * as React from 'react';
import { Field } from 'redux-form';
import {
    InputField,
    SelectField,
} from './inputs';


export const getFieldType = (field: any) => {
    if (field.type === 'select') {
        return (
            <Field
                component={SelectField}
                normalize={(value: string | null | undefined) => (value === '' ? null : value)}
                required={field.required}
                key={`field-${field.name}`}
                {...field}
            />
        );
    } else {
        return (
            <Field
                component={InputField}
                key={`field-${field.name}`}
                {...field}
            />
        );
    }
};
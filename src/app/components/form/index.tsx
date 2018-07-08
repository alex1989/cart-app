import * as React from 'react';
import { getFieldType } from "./fields";
import * as style from './style.scss';


interface Submit<TValues extends any, TResult extends any> {
    (values: TValues): TResult;
}

interface HandleSubmit<TValues extends any, TResult extends any> {
    (submit: Submit<TValues, TResult>): TResult
}

export interface Field<TValue extends any> {
    name: string;
    label: string;
    type: string;
    required: boolean | null;
    validate: Validate<TValue>[] | null | undefined;
    values?: any[];
}

export interface FormProps<TValues extends any, TResult extends any> {
    onSubmit: Submit<TValues, TResult>;
    handleSubmit: HandleSubmit<TValues, TResult>;
    fields: Field<any>[];
    pristine: boolean;
    invalid: boolean;
    cta: string;
}

interface Validate<TValue> {
    (value: TValue): TValue
}

export const Form:React.StatelessComponent<FormProps<any, any>> = (props: FormProps<any, any>) => (
    <form
        onSubmit={props.handleSubmit(props.onSubmit)}
    >
        {props.fields.map((field: any, index: number) => (
            <div className="form-field" key={`form-field-${index}`}>
                {getFieldType(field)}
            </div>
        ))}
        <button
            type="submit"
            className={style["submit-button"]}
            disabled={props.pristine || props.invalid}
        >
            {props.cta}
        </button>
    </form>
);

import * as React from 'react';
import * as style from './style.scss';

interface Meta {
    touched:boolean;
    error: any;
    warning: any;
}

interface GenericProps {
    children: any;
    values: any;
    input: any;
    label: string;
    type: string;
    required: boolean;
    select: boolean;
    meta: Meta;
}

const GeneralField: React.StatelessComponent<GenericProps> = (props) => {
    let classes = [];

    if (props.meta.touched) {
        if (props.meta.error || (props.meta.error && props.meta.warning)) {
            classes.push('error');
        } else if (props.meta.warning && !props.meta.error) {
            classes.push('warning');
        }
    }

    return (
        <div className={style["form-group"]}>
            {props.label && (
                <div className={style.label}>
                    <label>{props.label}</label>
                </div>
            )}
            <div className={[style["input-group"], ...classes.map((className: string) => style[className])].join(' ')}>
                {props.children }
                {props.meta.touched && (
                    <div className={style.details}>
                        {
                            (props.meta.error && <span className={style.errors}>{props.meta.error}</span>) ||
                            (props.meta.warning && <span className={style.warnings}>{props.meta.warning}</span>)
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export const InputField: React.StatelessComponent<GenericProps> = (props: GenericProps) => (
    <GeneralField {...props}>
        <input {...props.input} onChange={(evt) => props.input.onChange(evt)} placeholder={props.label} type={props.type} />
    </GeneralField>
);


export const SelectField: React.StatelessComponent<GenericProps> = (props: GenericProps) => (
    <GeneralField {...props} select>
        <select
            {...props.input}
            value={props.input.value ? props.input.value : ''}
        >
            <option value="" disabled>
                {props.label}
            </option>
            {props.values.map((value: any, index: number) => {
                if (typeof value === 'string' || typeof value === 'number') {
                    return (
                        <option
                            value={value}
                            key={`select-${props.label}-option-${index}`}
                        >
                            {value}
                        </option>
                    );
                } else {
                    return (
                        <option
                            value={value.value}
                            key={`select-${props.label}-option-${value.value}`}
                        >
                            {value.label}
                        </option>
                    );
                }
            })}
        </select>
    </GeneralField>
);

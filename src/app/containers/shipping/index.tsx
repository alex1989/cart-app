import * as React from 'react';
import { reduxForm } from 'redux-form';
import { Form, FormProps } from "app/components/form";
import { fields as shippingFields } from "./fields";
import * as style from './style.scss';


enum ShippingOptions {
    DHL = 'DHL',
    Fedex = 'Fedex'
}

interface ShippingFormProps {
    name: string,
    email: string,
    phone: string,
    address: string,
    deliveryService: ShippingOptions
}

interface ShippingProps extends FormProps<ShippingFormProps, any> {

}

@(reduxForm as any)({
    form: 'shipping',
    enableReinitialize: true
})
export class Shipping extends React.Component<ShippingProps> {
    render() {
        return (
            <div className={style["shipping-form"]}>
                <h2>Shipping Information</h2>
                <p className={style["subtitle"]}>
                    Please fill it very carefully
                </p>
                <Form
                    onSubmit={(values: ShippingFormProps) => {
                        alert('Congratulation! Order has been placed');
                    }}
                    fields={shippingFields}
                    cta="Pay"
                    {...this.props}
                />
            </div>
        );
    }
}

// Validations
export const required = (value: any) => (value ? undefined : 'This field is required');
export const validPhone = (value: string) =>
    value && !/^\+?[0-9]{11}$/.test(value)
        ? 'Please enter a valid phone number'
        : undefined;
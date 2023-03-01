type FieldValidatorType = (value: string) => undefined | string;

export const required: FieldValidatorType = (value: string) => {
    if (value) return undefined;

    return 'Обязательное поле';
};
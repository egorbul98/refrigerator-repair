import React, { useState } from 'react';
import styles from './feedback-form.module.scss';
import { TextInput } from '../inputs/text-input/text-input';
import { Button } from '../button/button';
import { PhoneInput } from '../inputs/phone-input/phone-input';

interface Props {
    onSubmit: (data?: any) => void;
}

export const FeedbackForm = ({ onSubmit: _onSubmit }: Props) => {
    const { name, phone, onChangeName, onChangePhone } = useFormInputs();

    const onSubmit = () => {
        _onSubmit?.({ name, phone });
    };

    return (
        <>
            <div className={styles.field}>
                <TextInput placeholder="Ваше имя" value={name} onChange={onChangeName} />
            </div>
            <div className={styles.field}>
                <PhoneInput placeholder="Ваш телефон" value={phone} onChange={onChangePhone} />
            </div>
            <div className={styles.field}>
                <Button onClick={onSubmit} fullWidth>
                    Отправить
                </Button>
            </div>
        </>
    );
};

const useFormInputs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onChangePhone = (value: any) => {
        setPhone(value);
    };

    const onChangeName = (value: any) => {
        setName(value);
    };

    return { phone, name, onChangePhone, onChangeName };
};

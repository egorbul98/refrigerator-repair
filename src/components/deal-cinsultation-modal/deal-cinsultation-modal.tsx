import React, { useState } from 'react';
import styles from './deal-cinsultation-modal.module.scss';
import cn from 'classnames';
import { Modal } from '../modal/modal';
import { TextInput } from '../inputs/text-input/text-input';

export const DealConsultationModal = () => {
    const { name, phone, onChangeName, onChangePhone } = useFormInputs();
    const [open, setOpen] = useState(true);
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button onClick={() => setOpen(true)} style={{ marginLeft: '300px' }}>
                wwwww
            </button>
            <Modal
                title="Вызов мастера"
                description="Оставьте заявку и мы свяжемся с Вами в течение 15 минут"
                open={open}
                onClose={onClose}
            >
                <div className={styles.field}>
                    <TextInput placeholder="Ваше имя" value={name} onChange={onChangeName} />
                </div>
                <div className={styles.field}>
                    <TextInput placeholder="Ваш телеофон" value={phone} onChange={onChangePhone} />
                </div>
            </Modal>
        </>
    );
};

const useFormInputs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onChangePhone = (value: any) => {
        console.log(value);

        setPhone(value);
    };

    const onChangeName = (value: any) => {
        setName(value);
    };

    return { phone, name, onChangePhone, onChangeName };
};

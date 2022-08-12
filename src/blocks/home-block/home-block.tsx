import React from 'react';
import { Container } from '../../components/container/container';
import cn from 'classnames';
import styles from './home-block.module.scss';
import backgroundImage from '../../assets/images/header-background.jpg';
import { useFeedbackFormInputs } from '../../components/feedback-form/feedback-form';
import { PhoneInput } from '../../components/inputs/phone-input/phone-input';
import { TextInput } from '../../components/inputs/text-input/text-input';
import { Button } from '../../components/button/button';
import { FEEDBACK_FORM_CONSENT, FEEDBACK_FORM_DESCRIPTION } from '../../components/feedback-form/constants';

const listData = [
    {
        label: 'Срочный выезд в день обращения',
        icon: 'local_shipping',
    },
    {
        label: 'Бесплатная диагностика (при согласии на ремонт)',
        icon: 'build_circle',
    },
    {
        label: 'Оригинальные запчасти в наличии',
        icon: 'handyman',
    },
];

export const HomeBlock = () => {
    const onSubmit = () => {
        // console.log('SSSSS');
    };

    return (
        <section className={styles.container}>
            <div className={styles.backgroundImage}>
                <img src={backgroundImage} alt="" />
            </div>
            <Container className={styles.innerContainer}>
                <div className={styles.top}>
                    <h1 className={styles.title}>Профессиональный и&nbsp;качественный ремонт холодильников</h1>
                    <div className={styles.subtitle}>
                        Выезд на&nbsp;дом в&nbsp;Москве и&nbsp;области в&nbsp;день обращения!
                    </div>
                </div>

                <ul className={styles.list}>
                    {listData.map((item) => {
                        return (
                            <li key={item.label} className={styles.item}>
                                <span className={cn('material-symbols-outlined', styles.icon)}>{item.icon}</span>
                                <span>{item.label}</span>
                            </li>
                        );
                    })}
                </ul>

                <div className={styles.formWrapper}>
                    <Form onSubmit={onSubmit} />
                </div>
            </Container>
        </section>
    );
};

interface Props {
    onSubmit: (data?: any) => void;
}

const Form = ({ onSubmit: _onSubmit }: Props) => {
    const { name, phone, onChangeName, onChangePhone, onSubmit, errorsComponent } = useFeedbackFormInputs({
        onSubmit: _onSubmit,
    });

    return (
        <div>
            <div className={styles.formDesciption}>{FEEDBACK_FORM_DESCRIPTION}</div>
            <div className={styles.form}>
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
            </div>
            <div className={styles.consent}>{FEEDBACK_FORM_CONSENT}</div>
            {errorsComponent && <div className={styles.errors}>{errorsComponent}</div>}
        </div>
    );
};

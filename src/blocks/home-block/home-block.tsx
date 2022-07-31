import React from 'react';
import { Container } from '../../components/container/container';
import cn from 'classnames';
import styles from './home-block.module.scss';
import backgroundImage from '../../assets/images/header-background.jpg';

export const HomeBlock = () => {
    return (
        <section className={styles.container}>
            <div className={styles.backgroundImage}>
                <img src={backgroundImage} alt="" />
            </div>
            <Container className={styles.innerContainer}>
                <div className={styles.top}>
                    <h1 className={styles.title}>Профессиональный и&nbsp;качественный ремонт&nbsp;холодильников</h1>
                    <div className={styles.subtitle}>
                        Выезд на&nbsp;дом в&nbsp;Москве и&nbsp;области в&nbsp;день обращения!
                    </div>
                </div>
            </Container>
        </section>
    );
};

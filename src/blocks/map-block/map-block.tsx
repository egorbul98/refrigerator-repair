import React from 'react';
import styles from './map-block.module.scss';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { ADDRESS, MASTER_EMAIL, MASTER_PHONE } from '../../components/feedback-form/constants';
import { Anchor } from '../../components/anchor/anchor';
import { Container } from '../../components/container/container';

// const listData = [];

const coordsPlacemark = [55.78567, 37.484029];
const coordsCenter = [coordsPlacemark[0] + 0.03, coordsPlacemark[1] - 0.1];

export const MapBlock = () => {
    return (
        <>
            <Anchor id="contacts" offset={false} />
            <div className={styles.container}>
                <Container className={styles.innerContainer}>
                    <div className={styles.contacts}>
                        <h2 className={styles.title}>Контакты</h2>
                        <div className={styles.field}>
                            <b>Адрес:</b> {ADDRESS}
                        </div>
                        <div className={styles.field}>
                            <b>Телефон:</b> <a href={`tel:${MASTER_PHONE}`}>{MASTER_PHONE}</a>
                        </div>
                        <div className={styles.field}>
                            <b>E-mail:</b> <a href={`mailto:${MASTER_EMAIL}`}>{MASTER_EMAIL}</a>
                        </div>
                    </div>
                </Container>

                <YMaps width={'100%'} height={'100%'}>
                    <Map
                        defaultState={{
                            center: coordsCenter,
                            zoom: 11,
                        }}
                        className={styles.map}
                    >
                        <Placemark geometry={coordsPlacemark} />
                    </Map>
                </YMaps>
            </div>
        </>
    );
};

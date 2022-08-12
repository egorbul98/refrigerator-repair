import React from 'react';
import styles from './map-block.module.scss';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { ADDRESS, MASTER_EMAIL, MASTER_PHONE } from '../../components/feedback-form/constants';

// const listData = [];

const coords = [55.751574, 37.573856];

export const MapBlock = () => {
    return (
        <div className={styles.container}>
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

            <YMaps width={'100%'} height={'100%'}>
                <Map
                    defaultState={{
                        center: coords,
                        zoom: 9,
                    }}
                    width={'100%'}
                    height={600}
                >
                    <Placemark geometry={coords} />
                </Map>
            </YMaps>
        </div>
    );
};

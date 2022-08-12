import React from 'react';
import cn from 'classnames';
import styles from './contacts.module.scss';
import { Link } from '../link/link';
import { MASTER_PHONE } from '../feedback-form/constants';

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <Link className={styles.phone} href={`tel:${MASTER_PHONE}`}>
                <span className={cn(styles.iconPhone, 'material-symbols-outlined')}>call</span>
                {MASTER_PHONE}
            </Link>
            <div className={styles.capture}>8:00 — 21:00 без выходных</div>
        </div>
    );
};

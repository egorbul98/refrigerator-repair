import React from 'react';
import styles from './contacts.module.scss';
import { Link } from '../link/link';
import { MASTER_PHONE } from '../feedback-form/constants';

import CallOutlined from '@mui/icons-material/CallOutlined';

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <Link className={styles.phone} href={`tel:${MASTER_PHONE}`}>
                <span className={styles.iconPhone}>
                    <CallOutlined />
                </span>
                {MASTER_PHONE}
            </Link>
            <div className={styles.capture}>8:00&nbsp;—&nbsp;21:00 без выходных</div>
        </div>
    );
};

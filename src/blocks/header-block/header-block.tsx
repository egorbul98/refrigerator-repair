import React from 'react';
import { Container } from '../../components/container/container';
import cn from 'classnames';
import styles from './header-block.module.scss';
import { Button } from '../../components/button/button';
import { Link } from '../../components/link/link';

export const HeaderBlock = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.leftBlock}>
                    <div className={styles.logo}>
                        <span className={cn('material-symbols-outlined', styles.icon)}>kitchen</span>
                        <span>ПрофХолод</span>
                    </div>

                    <div className={styles.contacts}>
                        <div className={styles.link}>
                            <Link className={styles.phone} href="tel:+7 (800) 555 35 35">
                                <span className={cn(styles.iconPhone, 'material-symbols-outlined')}>call</span>
                                +7&nbsp;(800)&nbsp;555&nbsp;35&nbsp;35
                            </Link>
                            <div className={styles.capture}>8:00 — 21:00 без выходных</div>
                        </div>
                    </div>
                </div>

                <div>
                    <Button>Получить консультацию</Button>
                </div>
            </Container>
        </header>
    );
};
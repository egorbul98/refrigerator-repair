import React from 'react';
import { Container } from '../../components/container/container';
import cn from 'classnames';
import styles from './header-block.module.scss';
import { Button } from '../../components/button/button';
import { Link } from '../../components/link/link';
import { MenuButton } from '../../components/menu-button/menu-button';
import { Contacts } from '../../components/contacts/contacts';
import { Logo } from '../../components/logo/logo';

interface Props {
    onClickConsultation: () => void;
    openMenu: boolean;
    toggleMenuHandler: () => void;
}

export const HeaderBlock = ({ onClickConsultation, openMenu, toggleMenuHandler }: Props) => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.leftBlock}>
                    <MenuButton onClick={toggleMenuHandler} open={openMenu} className={styles.mobile} />

                    <div className={styles.logo}>
                        <Logo />
                    </div>

                    <div className={styles.contacts}>
                        <Contacts />
                    </div>
                </div>

                <div>
                    <Button onClick={onClickConsultation}>
                        <span className={styles.desktop}>Получить консультацию</span>
                        <span className={styles.mobile}>Консультация</span>
                    </Button>
                </div>
            </Container>
        </header>
    );
};

import React, { useState } from 'react';
import { HeaderBlock } from '../../blocks/header-block/header-block';
import styles from './home-layout.module.scss';
import cn from 'classnames';
import { Link } from '../../components/link/link';
import { HomeBlock } from '../../blocks/home-block/home-block';
import { FeedbackFormModal } from '../../components/feedback-form/feedback-form-modal';
import { AboutUsBlock } from '../../blocks/about-us-block/about-us-block';
import { ServicesBlock } from '../../blocks/services-block/services-block';
import { BrandsBlock } from '../../blocks/brands-block/brands-block';
import { FaqBlock } from '../../blocks/faq-block/faq-block';
import { CertificatesBlock } from '../../blocks/certificates-block/certificates-block';
import { ReviewsBlock } from '../../blocks/reviews-block/reviews-block';
import { BannerBlock } from '../../blocks/banner-block/banner-block';
import { SuccessModal } from '../../components/success-modal/success-modal';
import { useBodyHidden } from '../../utils/use-body-hidden';
import { Contacts } from '../../components/contacts/contacts';
import { Logo } from '../../components/logo/logo';
import { MapBlock } from '../../blocks/map-block/map-block';

export const HomeLayout = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    };

    const toggleMenuHandler = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenuHandler = () => {
        setOpenMenu(false);
    };

    return (
        <>
            <div className={styles.container}>
                <Sidebar openMenu={openMenu} closeMenuHandler={closeMenuHandler} />

                <main className={styles.content}>
                    <HeaderBlock
                        onClickConsultation={openModalHandler}
                        toggleMenuHandler={toggleMenuHandler}
                        openMenu={openMenu}
                    />
                    <HomeBlock />
                    <AboutUsBlock />
                    <ServicesBlock onClickItem={openModalHandler} />
                    <BannerBlock onClickButton={openModalHandler} />
                    <BrandsBlock />
                    <CertificatesBlock />
                    <BannerBlock onClickButton={openModalHandler} />
                    <FaqBlock />
                    <ReviewsBlock />

                    <MapBlock />
                </main>
            </div>

            <FeedbackLogic onClose={() => setOpenModal(false)} openModal={openModal} />
        </>
    );
};

const Sidebar = ({ openMenu, closeMenuHandler }: { openMenu: boolean; closeMenuHandler: () => void }) => {
    useBodyHidden(openMenu);
    return (
        <aside className={cn(styles.sidebar, { [styles.openMenu]: openMenu })}>
            <div className={styles.sidebarLogo}>
                <Logo />
            </div>
            <NavigationLinks items={navLinks} onClickItem={closeMenuHandler} />
            <div className={styles.sidebarContacts}>
                <Contacts />
            </div>
        </aside>
    );
};

const FeedbackLogic = ({ openModal, onClose: _onClose }: { openModal: boolean; onClose: () => void }) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const onSubmit = () => {
        setOpenSuccessModal(true);
    };

    const onCloseFeedbackModal = () => {
        _onClose();
    };

    const onCloseSuccessModal = () => {
        setOpenSuccessModal(false);
    };

    return (
        <>
            <FeedbackFormModal open={openModal} onClose={onCloseFeedbackModal} onSubmit={onSubmit} />
            <SuccessModal open={openSuccessModal} onClose={onCloseSuccessModal} />
        </>
    );
};

const navLinks: NavLinkProp[] = [
    { label: 'О компании', icon: 'kitchen', href: '#about' },
    { label: 'Стоимость ремонта', icon: 'tools_wrench', href: '#services' },
    { label: 'Бренды', icon: 'kitchen', href: '#about' },
    { label: 'Сертификаты и партнеры', icon: 'verified', href: '#about' },
    { label: 'Вопросы', icon: 'quiz', href: '#about' },
    { label: 'Отзывы', icon: 'reviews', href: '#about' },
    { label: 'Контакты', icon: 'pin_drop', href: '#about' },
];

interface NavLinkProp {
    label: string;
    href: string;
    icon: string;
}

const NavigationLinks = ({ items, onClickItem }: { items: NavLinkProp[]; onClickItem: (e?: any) => void }) => {
    return (
        <nav className={styles.links}>
            {items.map((item) => {
                return (
                    <Link className={styles.item} key={item.label} href={item.href} onClick={onClickItem}>
                        <div className={cn('material-symbols-outlined', styles.icon)}>{item.icon}</div>
                        <div className={styles.label}>{item.label}</div>
                    </Link>
                );
            })}
        </nav>
    );
};

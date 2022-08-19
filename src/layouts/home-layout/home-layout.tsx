import React, { useEffect, useRef, useState } from 'react';
import { HeaderBlock } from '../../blocks/header-block/header-block';
import styles from './home-layout.module.scss';
import cn from 'classnames';
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
import { navLinksData } from '../../data/nav-links-data';
import { NavigationLinks } from '../../components/nav-links/nav-links';
import { FooterBlock } from '../../blocks/footer-block/footer-block';

export const HomeLayout = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const needOpenModalByTimeout = useRef(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (needOpenModalByTimeout.current) {
                setOpenModal(true);
            }
        }, 20000);

        return () => clearTimeout(timeoutId);
    }, [setOpenModal, needOpenModalByTimeout]);

    const openModalHandler = () => {
        needOpenModalByTimeout.current = false;
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

                    <FooterBlock navLinks={navLinksData} />
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
            <NavigationLinks items={navLinksData} onClickItem={closeMenuHandler} />
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

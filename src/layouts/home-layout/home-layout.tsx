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

export const HomeLayout = () => {
    const [openModal, setOpenModal] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true);
    };

    return (
        <>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <NavigationLinks items={navLinks} />
                </aside>

                <main className={styles.content}>
                    <HeaderBlock onClickConsultation={openModalHandler} />
                    <HomeBlock />
                    <AboutUsBlock />
                    <ServicesBlock onClickItem={openModalHandler} />
                    <BannerBlock onClickButton={openModalHandler} />
                    <BrandsBlock />
                    <CertificatesBlock />
                    <BannerBlock onClickButton={openModalHandler} />
                    <FaqBlock />
                    <ReviewsBlock />
                </main>
            </div>

            <FeedbackFormModal open={openModal} onClose={() => setOpenModal(false)} />
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

const NavigationLinks = ({ items }: { items: NavLinkProp[] }) => {
    return (
        <nav className={styles.links}>
            {items.map((item) => {
                return (
                    <Link className={styles.item} key={item.label} href={item.href}>
                        <div className={cn('material-symbols-outlined', styles.icon)}>{item.icon}</div>
                        <div className={styles.label}>{item.label}</div>
                    </Link>
                );
            })}
        </nav>
    );
};

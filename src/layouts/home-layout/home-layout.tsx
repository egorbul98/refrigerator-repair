import React from 'react';
import { HeaderBlock } from '../../blocks/header-block/header-block';
import styles from './home-layout.module.scss';
import cn from 'classnames';
import { Link } from '../../components/link/link';
import { HomeBlock } from '../../blocks/home-block/home-block';
import { DealConsultationModal } from '../../components/deal-cinsultation-modal/deal-cinsultation-modal';

export const HomeLayout = () => {
    return (
        <>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <NavigationLinks items={navLinks} />
                </aside>

                <main className={styles.content}>
                    <HeaderBlock />
                    <HomeBlock />
                </main>
            </div>

            <DealConsultationModal />
        </>
    );
};

const navLinks: NavLinkProp[] = [
    { label: 'О компании', icon: 'kitchen', href: '#about' },
    { label: 'Стоимость ремонта', icon: 'tools_wrench', href: '#about' },
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

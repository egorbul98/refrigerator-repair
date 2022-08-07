import React, { useRef } from 'react';
import styles from './slider.module.scss';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import cn from 'classnames';

interface Props {
    slides: React.ReactNode[];
    swiperProps?: SwiperProps;
    classNames?: { navigation?: string; swiper?: string };
}

export const Slider = ({ slides, swiperProps, classNames }: Props) => {
    const swiperRef = useRef<any>(null);

    const prev = () => {
        swiperRef.current?.slidePrev();
    };
    const next = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <div className={styles.swiperWrapper}>
            <div className={classNames?.navigation}>
                <Navigation prev={prev} next={next} />
            </div>

            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={cn(styles.swiper, classNames?.swiper)}
                autoplay={{ delay: 100 }}
                breakpoints={{
                    1200: {
                        slidesPerView: 4,
                    },
                    960: {
                        spaceBetween: 32,
                        slidesPerView: 3,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                }}
                autoHeight
                loop
                {...swiperProps}
            >
                {slides.map((item, i) => {
                    return (
                        <SwiperSlide key={i} className={styles.slide}>
                            {item}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

interface NavigationProps {
    prev: () => void;
    next: () => void;
}

const Navigation = ({ next, prev }: NavigationProps) => {
    return (
        <div className={styles.navigation}>
            <button className={styles.navigationButton} onClick={prev}>
                <span className={cn('material-symbols-outlined', styles.icon)}>arrow_back_ios_new</span>
            </button>

            <button className={styles.navigationButton} onClick={next}>
                <span className={cn('material-symbols-outlined', styles.icon)}>arrow_forward_ios</span>
            </button>
        </div>
    );
};
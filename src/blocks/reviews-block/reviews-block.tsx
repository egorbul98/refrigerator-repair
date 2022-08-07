import React from 'react';
import styles from './reviews-block.module.scss';
import { BlockLayout } from '../../components/block-layout/block-layout';
import { Slider } from '../../components/slider/slider';

const listData = [
    {
        name: 'Борис',
        text: 'Мастер быстро приехал, проконсультировал и починил холодильник. Вежлив. Чувствуется опыт.',
        date: new Date('2022.06.07'),
        rating: 5,
    },
    {
        name: 'Константин',
        text: 'Провёл качественную диагностику, объяснял все свои действия, разложил по полочкам причины поломки, не стал раскручивать на лишние траты, посоветовал купить новый холодильник в силу того, что ремонт обойдётся в цену равную покупке нового холодильника.',
        date: new Date('2022.05.26'),
        rating: 5,
    },
    {
        name: 'Надежда Ивановна',
        text: 'Позвонила в компанию ПрофХолод, чтобы отремонтировать своего старичка. Приехал мастер, как и договаривались по времени. Сделал все быстро и надежно. Надеюсь холодильник прослужит еще 20 лет',
        date: new Date('2022.05.15'),
        rating: 5,
    },
    {
        name: 'Егор Булахтин',
        text: 'Мастер приехал быстро и оперативно починил холодильник. Благодарны за работу.',
        date: new Date('2022.05.03'),
        rating: 5,
    },
];

function dateToString(date: Date) {
    return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: '2-digit' });
}

export const ReviewsBlock = () => {
    return (
        <BlockLayout
            title="Отзывы"
            description="Мы благодарны за отзывы и предложения — нам важно знать ваше мнение."
            id="reviews"
            backgroundColor="blue-light"
            paddingBottom
            paddingTop
        >
            <Slider
                slides={listData.map((item, i) => {
                    return (
                        <div key={i} className={styles.card}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.rating}>
                                <Stars num={item.rating} />
                            </div>
                            <div className={styles.content}>{item.text}</div>
                            <div className={styles.date}>{dateToString(item.date)}</div>
                        </div>
                    );
                })}
                swiperProps={{
                    slidesPerView: 1,
                    breakpoints: {
                        1200: {
                            slidesPerView: 3,
                        },
                        960: {
                            slidesPerView: 2,
                        },
                    },
                }}
                classNames={{ navigation: styles.navigation }}
            />
        </BlockLayout>
    );
};

const Stars = ({ num }: { num: number }) => {
    return (
        <div>
            {Array.from(Array(num).keys()).map((item) => (
                <span className="material-symbols-outlined" key={item}>
                    star
                </span>
            ))}
        </div>
    );
};

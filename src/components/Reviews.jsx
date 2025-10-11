import React from 'react';
import reviewsImg from '../assets/img/reviews.svg';
import person1 from '../assets/img/reviewPersons/review-1.jpg';
import person2 from '../assets/img/reviewPersons/review-2.jpg';
import person3 from '../assets/img/reviewPersons/review-3.jpg';
import person4 from '../assets/img/reviewPersons/review-4.jpg';
import star from '../assets/img/star.svg';
import arrowImg from '../assets/img/arrow-bounce.svg';

const reviewsData = [
    {
        id: 1,
        name: 'Ахмед Аль Асри',
        img: person1,
        text: 'Ребята классные, всегда отвечали на мои вопросы, сделали мне семестровку за три дня. Качество хорошее, оценю на 21/25, надеюсь на дальнейшее сотрудничество.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Айгиза Айнурович',
        img: person3,
        text: 'Работа выполнена качественно и в срок! Команда действительно знает, что делает. Всем советую ITea Team.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Лейла Аскерова',
        img: person3,
        text: 'Очень приятное взаимодействие — всё чётко, быстро и без лишних слов. Сделали сайт лучше, чем я представляла.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Дамир Каримов',
        img: person4,
        text: 'Сотрудничаем не первый раз, и как всегда — результат 🔥. Спасибо команде за внимание к деталям!',
        rating: 4,
    },
    {
        id: 5,
        name: 'Мария Соколова',
        img: person1,
        text: 'Помогли с Telegram-ботом для бизнеса. Работает стабильно, поддержка всегда на связи. Отличная команда!',
        rating: 5,
    },
    {
        id: 6,
        name: 'Иван Петров',
        img: person2,
        text: 'Проект выполнили в срок, всё по ТЗ. Команда адекватная и на связи 24/7. Буду обращаться снова!',
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <section id="reviews" className="mt-[80px] md:mt-[145px] relative overflow-hidden">
            <div>
                <img
                    className="absolute top-[70%] -left-[80px] -z-20 w-[250px] sm:w-[350px] md:w-auto opacity-30 md:opacity-100"
                    src={reviewsImg}
                    alt=""
                />
            </div>

            <div className="container mx-auto px-4">
                <h2 className="text-[34px] sm:text-[60px] md:text-[80px] text-center instrument_sans--medium leading-tight uppercase">
                    Отзывы
                </h2>

                <p className="mt-[20px] mb-[50px] md:mt-[24px] md:mb-[64px] mx-auto text-center max-w-[856px] leading-relaxed text-[18px] sm:text-[20px] md:text-[24px] uppercase">
                    Мы не пишем о себе — за нас говорят проекты и клиенты. <br className="hidden sm:block" />
                    Вот немного тепла и честных слов от тех, кто уже работал с ITea Team.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[18px] md:gap-[23px]">
                    {reviewsData.map((review) => (
                        <div
                            key={review.id}
                            className="flex p-[15px] md:p-[20px] text-[#000] gap-[15px]  bg-white rounded-[20px] md:rounded-[30px] shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img
                                className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] rounded-[10px] object-cover"
                                src={review.img}
                                alt={review.name}
                            />
                            <div>
                <span className="text-[14px] sm:text-[16px] instrument_sans--medium block">
                  {review.name}
                </span>
                                <div className="flex gap-[4px] my-[8px] sm:my-[10px]">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <img key={i} src={star} alt="star" className="w-[14px] sm:w-[16px]" />
                                    ))}
                                </div>
                                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-snug sm:leading-normal">
                                    {review.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center uppercase text-[20px] sm:text-[22px] md:text-[24px] mt-[50px] md:mt-[66px] cursor-pointer w-fit mx-auto duration-300 hover:opacity-75">
                    <span>Смотреть больше</span>
                    <img
                        className="mt-[10px] md:mt-[15px] w-[28px] md:w-[32px] h-[28px] md:h-[32px] animate-bounce mx-auto"
                        src={arrowImg}
                        alt="arrow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Reviews;

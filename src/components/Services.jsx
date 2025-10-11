import React from 'react';
import povImg from '../assets/img/pov.svg';
import mock from '../assets/img/mock-service.png';
import fireImg from '../assets/img/fire.svg';

const Services = () => {
    const services = [
        { id: 1, title: 'Сайт', desc: 'Любой сложности', img: mock },
        { id: 2, title: 'Бот', desc: 'Telegram, Discord и др.', img: mock },
        { id: 3, title: 'Приложение', desc: 'iOS / Android', img: mock },
        { id: 4, title: 'CRM Система', desc: 'Node.js / Python', img: mock },
    ];

    return (
        <section id="services"  className="mt-[40px] sm:mt-[120px] relative overflow-hidden">
            <img
                className="-z-20 absolute -right-25 top-1/3 w-[200px] sm:w-[250px] md:w-auto opacity-40 md:opacity-100"
                src={fireImg}
                alt=""
            />

            <div className="container">
                <div className="hidden lg:flex justify-between">
                    <div>
                        <h2 className="text-[80px] instrument_sans--medium leading-20 uppercase">
                            Наши <br /> услуги
                        </h2>
                        <div className="transform -rotate-8 mt-[60px]">
                            <img
                                className="rounded-[23px] border-white border-[10px] max-w-[360px] xl:max-w-[415px] mb-[30px] shadow-[0_0_60px_1px_rgba(255,255,255,0.4)]"
                                src={povImg}
                                alt="POV"
                            />
                            <span className="text-[23px] uppercase">
                                POV: Не сделал проект с ITea Team
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="leading-8 text-[16px] sm:text-[24px] mb-[10px] uppercase">
                            Сайты, боты, приложения, crm системы — <br />
                            всё, что можно написать на кофе и бессоннице, <br /> мы сделаем. <br />
                            Чтобы у тебя не горело — пусть горит у нас.
                        </p>

                        <div className="grid grid-cols-2 gap-[56px] leading-6">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="max-w-[240px] rounded-[20px] p-[10px] border-[0.5px] border-white/50"
                                >
                                    <div className="relative">
                                        <img
                                            className="max-w-[220px] max-h-[200px] rounded-[10px]"
                                            src={service.img}
                                            alt={service.title}
                                        />
                                    </div>
                                    <h3 className="gilroy--regular text-[24px] p-0 mt-[10px] tracking-tighter">
                                        {service.title}
                                    </h3>
                                    <span className="text-[16px] opacity-80">{service.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:hidden items-center text-center gap-[24px] sm:gap-[40px]">
                    <h2 className="text-[34px] sm:text-[48px] uppercase instrument_sans--medium">
                        наши услуги
                    </h2>

                    <p className="max-w-[900px] text-[16px] sm:text-[24px] uppercase leading-6 px-[10px]">
                        Сайты, боты, приложения, CRM — всё, что можно написать на кофе и
                        бессоннице, мы сделаем. Чтобы у тебя не горело 🔥
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="rounded-[16px] p-[12px] border border-white/40 backdrop-blur-sm"
                            >
                                <img
                                    className="rounded-[10px] mb-[10px] mx-auto w-[90%] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    src={service.img}
                                    alt={service.title}
                                />
                                <h3 className="text-[20px] uppercase">{service.title}</h3>
                                <span className="text-[14px] opacity-80">{service.desc}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center transform -rotate-3 mt-[40px]">
                        <img
                            className="rounded-[20px] border-white border-[6px] max-w-[260px] mb-[20px] shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                            src={povImg}
                            alt="POV"
                        />
                        <span className="text-[18px] uppercase">
                            POV: не сделал проект с ITea Team
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

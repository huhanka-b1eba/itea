import React from 'react';
import iStoreImg from '../assets/img/portfolio/istore.png';
import RomsemImg from '../assets/img/portfolio/romsem.png';
import reviewsImg from "../assets/img/reviews.svg";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: 'ISTORE',
            img: iStoreImg,
            desc: 'Интернет-магазин по продаже техники Apple.',
            stack: 'React, Tailwind, Fast Api, Docker',
        },
        {
            id: 2,
            title: 'ROMSEM',
            img: RomsemImg,
            desc: 'Интернет-магазин по продаже техники Apple.',
            stack: 'React, Tailwind, Fast Api, Docker',
        },
    ];

    return (
        <section id="portfolio" className="mt-[80px] sm:mt-[120px] relative">
            <div className="container">
                <div>
                    <img
                        className="absolute top-1/3 -left-45 -z-20 opacity-30 md:opacity-100 w-[250px] md:w-auto"
                        src={reviewsImg}
                        alt=""
                    />
                </div>

                {/* Десктопная версия */}
                <div className="hidden lg:flex justify-between">
                    <div>
                        <h2 className="text-[80px] instrument_sans--medium leading-20 uppercase h-[200px]">
                            портфолио
                        </h2>

                        <div>
                            {projects.map((project) => (
                                <div key={project.id} className="h-[400px]">
                                    <img
                                        className="rounded-[30px] shadow-[0_0_40px_1px_rgba(255,255,255,0.4)]"
                                        src={project.img}
                                        alt={project.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ml-[24px]">
                        <p className="leading-8 text-[24px] uppercase h-[200px]">
                            Мы не любим слова вроде “портфолио”. <br />
                            Мы просто делаем вещи, которые работают и выглядят чётко. <br />
                            Вот доказательства.
                        </p>

                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="flex flex-col h-[400px]"
                            >
                                <h3 className="text-[24px] px-[22px] py-[52px] border-t border-b border-[#f1f1f1]/20">
                                    <span className="mr-[25px]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="instrument_sans--bold">
                                        {project.title}
                                    </span>
                                </h3>

                                <span className="text-[18px] pt-[22px] px-[25px]">
                                    {project.desc}
                                </span>

                                <span className="text-[18px] pb-[22px] px-[25px] border-b border-[#f1f1f1]/20">
                                    Стек: {project.stack}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Мобильная версия */}
                <div className="flex flex-col lg:hidden gap-[24px] sm:gap-[40px] mt-[40px]">
                    <h2 className="text-[34px] sm:text-[48px] text-center instrument_sans--medium uppercase">
                        портфолио
                    </h2>
                    <p className="text-[18px] uppercase text-center leading-6 px-[10px]">
                        Мы не любим слова вроде “портфолио”.
                        Просто делаем вещи, которые работают.
                    </p>

                    {projects.map((project, index) => (
                        <div key={project.id} className="bg-white/5 p-[16px] rounded-[20px] text-center">
                            <img
                                className="rounded-[20px] mb-[16px] mx-auto shadow-[0_0_25px_1px_rgba(255,255,255,0.3)]"
                                src={project.img}
                                alt={project.title}
                            />
                            <h3 className="text-[22px] uppercase instrument_sans--bold">
                                <span className="instrument_sans--medium mr-3">{String(index + 1).padStart(2, '0')}</span> {project.title}
                            </h3>
                            <p className="text-[16px] mt-[10px]">
                                {project.desc}
                            </p>
                            <p className="text-[16px] mt-[5px] text-[#dcdcdc]">
                                Стек: {project.stack}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

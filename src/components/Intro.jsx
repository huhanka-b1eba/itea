import React, { useState } from 'react';
import cupImg from '../assets/img/cup.png';
import MyButton from './ui/MyButton.jsx';
import introBg from '../assets/img/intro-bg.svg';
import maskIntro from '../assets/img/mask-intro.png';
import circleImg from '../assets/img/circle.svg';
import MyModal from './ui/MyModal.jsx';

const Intro = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative overflow-hidden">
            <div className="container relative z-10">
                <div
                    className="mt-[0px] lg:mt-[16px] bg-no-repeat bg-center
                    relative flex flex-col justify-center lg:justify-between min-h-[85vh]"
                    style={{ backgroundImage: `url(${introBg})` }}
                >
                    <img
                        src={circleImg}
                        alt="Circle"
                        className="hidden lg:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[978px] h-[554px] sm:w-[700px] sm:h-[400px] lg:w-[900px] lg:h-[500px]
                        scale-[2] lg:scale-[1.8] sm:scale-[1.4]
                        -z-10 opacity-80 object-contain pointer-events-none"
                    />

                    <div className="relative z-10 px-[16px] sm:px-[0] text-center lg:text-left">
                        <p className="text-[24px] uppercase">ITEA TEAM</p>
                        <p className="text-[16px] sm:text-[24px] mt-[8px]">
                            Мы объединяем технологии и энергию команды. <br />
                            Делаем сайты, ботов, приложения. <br />
                            Помогаем бизнесу и проектам расти — быстро, чётко, современно.
                        </p>
                    </div>

                    <div className="relative flex flex-col lg:flex-row items-center mt-[36px] overflow-visible px-[16px] sm:px-[24px] gap-[24px] lg:gap-[40px]">
                        <div className="relative flex-shrink-0">
                            <img
                                src={maskIntro}
                                alt="Mask"
                                className="hidden lg:absolute -z-10 top-1/2 left-1/2 transform -translate-x-[30px] -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] object-contain"
                            />
                            <img
                                className="hidden lg:block relative z-10 max-w-[300px] sm:max-w-[400px] xl:max-w-[478px] mx-auto"
                                src={cupImg}
                                alt="Cup"
                            />
                        </div>

                        <div className="relative z-20 text-center lg:text-left">
                            <h1 className="gilroy--semibold text-[28px] sm:text-[42px] lg:text-[58px] leading-tight max-w-full sm:max-w-[600px] lg:max-w-[780px]">
                                С нами <span className="text-[#FFB129]">сделать проект легче</span>,<br />
                                чем заварить чай
                            </h1>

                            <div className="flex flex-col justify-center lg:justify-start sm:flex-row gap-[12px] sm:gap-[20px] mt-[24px] lg:mt-[44px]">
                                <MyButton className="mx-auto sm:m-0" onClick={() => setIsModalOpen(true)}>
                                    <span>оставить заявку</span>
                                    <span>📄</span>
                                </MyButton>

                                <a
                                    href="https://t.me/cup_of_itea"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-auto sm:m-0"
                                >
                                    <MyButton>
                                        <span>связаться в telegram</span>
                                        <span>💬</span>
                                    </MyButton>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-row items-center gap-[12px] lg:gap-[24px] mt-auto relative z-10">
                        <span className="whitespace-nowrap text-center lg:text-left">ITEA TEAM</span>
                        <div className="border-b border-white w-full"></div>
                    </div>
                </div>
            </div>

            <MyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
};

export default Intro;

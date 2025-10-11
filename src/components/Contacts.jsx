import React from 'react';
import catImg from '../assets/img/cat.png';
import MyButton from "./ui/MyButton.jsx";
import telegram from '../assets/img/social/telegram.svg';
import whatsapp from '../assets/img/social/whatsapp.svg';

const Contacts = () => {
    return (
        <section id="contacts" className="mt-[80px] md:mt-[145px] relative">
            <div className="container mx-auto px-4">
                <h2 className="text-[38px] sm:text-[60px] md:text-[80px] text-center instrument_sans--medium leading-tight uppercase">
                    Контакты
                </h2>

                <div className="flex flex-col md:flex-row justify-center md:justify-around mt-[50px] md:mt-[70px] mb-[70px] md:mb-[95px] items-center md:items-end gap-[40px] lg:gap-[80px] text-center md:text-left">
                    <img
                        className="w-[250px] lg:w-[320px] xl:w-[400px] rounded-[20px]"
                        src={catImg}
                        alt="cat"
                    />

                    <div>
                        <span className="leading-snug uppercase text-[18px] sm:text-[28px] md:text-[32px] block">
                            свяжемся с вами <br className="hidden sm:block" />
                            в ближайшее время!
                        </span>

                        <div className="flex flex-col lg:flex-row justify-center md:justify-start gap-[16px] sm:gap-[24px] md:gap-[28px] pt-[30px] md:pt-[40px]">
                            <a
                                href="https://t.me/cup_of_itea"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-auto sm:m-0"
                            >
                                <MyButton>
                                    <span>Связаться в Telegram</span>
                                    <img src={telegram} alt="Telegram" />
                                </MyButton>
                            </a>

                            <a
                                href="https://wa.me/79953600674"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mx-auto sm:m-0"
                            >
                                <MyButton>
                                    <span>Связаться в Whatsapp</span>
                                    <img src={whatsapp} alt="Whatsapp" />
                                </MyButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;

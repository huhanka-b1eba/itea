import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-[50px] pb-[60px] md:pt-[70px] md:pb-[84px]">
            <div className="container mx-auto px-4">
                <hr className="border-gray-700" />
                <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-[24px] text-center md:text-left gap-6">
          <span className="instrument_sans--regular text-[40px] sm:text-[48px] md:text-[64px] text-[#F1F1F1]">
            ITea
          </span>

                    <nav>
                        <ul className="flex flex-col sm:flex-row text-[18px] sm:text-[20px] md:text-[24px] gap-3 sm:gap-[30px] md:gap-[40px] uppercase text-[#F1F1F1]">
                            <li>Скорость</li>
                            <li>Качество</li>
                            <li>Отзывчивость</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

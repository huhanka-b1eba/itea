import React, { useState } from 'react';
import arrowUp from '../assets/img/arrow-up.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const headerList = "text-[16px] uppercase duration-150 transition-all hover:opacity-80";

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="pt-[40px] relative z-50">
            <div className="container">
                <div className="pb-[14px] border-b border-white border-opacity-40 flex justify-between items-center">
                    <a href="#">
                        <div className="flex items-center gap-[8px]">
                            <span className="text-[24px]">ITea</span>
                            <img className="w-[24px] h-[24px]" src={arrowUp} alt="Logo"/>
                        </div>
                    </a>

                    <nav className="hidden md:block">
                        <ul className="flex gap-[38px]">
                            <li className={headerList}><a href="#services">Услуги</a></li>
                            <li className={headerList}><a href="#portfolio">Портфолио</a></li>
                            <li className={headerList}><a href="#reviews">Отзывы</a></li>
                            <li className={headerList}><a href="#contacts">Контакты</a></li>
                        </ul>
                    </nav>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="p-2 focus:outline-none">
                            <div className="w-[35px] h-[3px] bg-white mb-[8px]"></div>
                            <div className="w-[35px] h-[3px] bg-white mb-[8px]"></div>
                            <div className="w-[35px] h-[3px] bg-white"></div>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black/95 absolute top-full left-0 w-full text-center py-6 flex flex-col gap-6 z-40">
                    <a onClick={() => setIsOpen(false)} className={headerList} href="#services">Услуги</a>
                    <a onClick={() => setIsOpen(false)} className={headerList} href="#portfolio">Портфолио</a>
                    <a onClick={() => setIsOpen(false)} className={headerList} href="#reviews">Отзывы</a>
                    <a onClick={() => setIsOpen(false)} className={headerList} href="#contacts">Контакты</a>
                </div>
            )}
        </header>
    );
};

export default Header;

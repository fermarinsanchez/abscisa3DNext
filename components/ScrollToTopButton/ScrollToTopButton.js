import React, { useState, useEffect } from 'react';
import style from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight * 1.5) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className={style.scrollToTop}>
                    ↑ Top
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;


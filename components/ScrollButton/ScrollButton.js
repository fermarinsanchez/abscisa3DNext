import React from 'react'
import { useState, useEffect } from 'react';
import { useInView, InView } from 'react-intersection-observer';
import style from './ScrollB.module.css'

export default function ScrollButton(props) {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        triggerOnce: true,
        rootMargin: '-300px 0px',
      });
    
    const [offset, setOffset] = useState(0)

    useEffect(() => {
    function handleScroll() {
        setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
    }, [])

    return (
        <div className={style.loaderContainer} style={{opacity: `${1 - offset * 0.0015}`}}>
            <span className={style.loader}></span>
        </div>
    )
}

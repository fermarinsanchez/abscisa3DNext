import React from 'react'
import Link from 'next/link'
import style from './HeaderLogo.module.css'

export default function HeaderLogo() {
    return (
        <div className={style.logo_wrap}>
            <Link href="/">
                <a>
                    <img
                        src='/images/logo-abscisa-vector.svg'
                        alt='abscisa3d logo'
                    />
                </a>
            </Link>
        </div>
    )
}

import React from 'react'
import style from './cube.module.css'

export default function Cube() {
    return (
        <div className={style.box3d}>
            <div className={style.p1}></div>
            <div className={style.p2}></div>
            <div className={style.p3}></div>
            <div className={style.p4}></div>
            <div className={style.p5}></div>
            <div className={style.p6}></div>
        </div>
    )
}

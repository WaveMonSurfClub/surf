import React from 'react';
import style from './Intro.scss';
import { Svg } from 'components';
import { Parallax } from 'react-scroll-parallax';
import ring from '!!raw-loader!./ring-of-dots.svg';
import hemispheres from '!!raw-loader!./hemispheres.svg';
import logo from '!!raw-loader!./wavemon-surfclub-logo.svg';

const Intro = () => (
    <div className={style.root}>
        <div className={style.container}>
            <Parallax
                offsetYMin={-100}
                offsetYMax={100}
                className={style.logo}
            >
                <div className={style.logo}>
                    <Svg
                        className={style.logo}
                        svg={logo} />
                </div>

            </Parallax>
            {/* <Parallax
                offsetYMin={-50}
                offsetYMax={50}
                className={style.circle}
            >
                <div className={style.circleInner}/>
            </Parallax>
            <Svg
                className={style.hemispheres}
                svg={hemispheres}
            /> */}
        </div>
        <div className={style.ocean}>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
        </div>
        <p className={style.scroll}>GO TO PLANET</p>
    </div>
);

export default Intro;

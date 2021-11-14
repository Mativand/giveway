import React from 'react';
import s from './Header.module.css'
import image from '../../images/banner_picture.png'

const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.container}>
                <div className={s.text}>
                    <h1 className={s.title}>Autumn Giveaways for FREE</h1>
                    <div className={s.description}>
                        Participate in Autumn Giveaway and
                        treat yourself
                        to nice and refreshing
                        cosmetics for free
                    </div>
                </div>
                <div className={s.image}>
                    <img src={image} alt="Баночка с кремом"/>
                </div>
            </div>
        </div>
    );
};

export default Header;
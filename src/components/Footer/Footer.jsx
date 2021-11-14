import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.top}>
                <div className={s.container}>
                    <div className={s.column}>
                        <div className={s.content}>
                            <div className={s.title}>Privacy and Terms</div>
                            <a href={"/"} className={s.ref}>Privacy Policy</a>
                            <a href={"/"} className={s.ref}>Terms of use</a>
                        </div>
                    </div>
                    <div className={s.column}>
                        <div className={s.content}>
                            <div className={s.title}>Need Help?</div>
                            <a href={"/"} className={s.ref}>mail@gmail.com</a>
                        </div>
                    </div>

                    <div className={s.column}>
                        <div className={s.content}>
                            <div className={s.title}>Social</div>
                            <a href={"/"} className={s.ref}>Facebook</a>
                            <a href={"/"} className={s.ref}>Instagram</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.container}>
                <div className={s.bottom}>
                    <span>© All Rights Reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
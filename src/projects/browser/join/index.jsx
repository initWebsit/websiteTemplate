/*
 + ------------------------------------------------------------------
 | 加入我们
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import join_banner from '@/assets/join_banner.png';
import join_mobileBanner from '@/assets/join_mobileBanner.png';
import join_culture from '@/assets/join_culture.png';
import join_mobileCulture from '@/assets/join_mobileCulture.png';
import join_contact1 from '@/assets/join_contact1.png';
import join_contact2 from '@/assets/join_contact2.png';
import { SafetySvg3 } from "@browser/safety/safetySvg";
import { JoinSvg1, JoinSvg2, JoinSvg3, JoinSvg4, JoinSvg5, JoinSvg6, JoinSvg7, JoinSvg8 } from "./joinSvg";
import "./index.less";

function JoinPage(props) {
    const location = useLocation();
    const list = [
        {
            svg: JoinSvg1,
            title1: 'Be Passionate about Work'
        },
        {
            svg: JoinSvg2,
            title1: 'Insist on High Standard Deliverables'
        },
        {
            svg: JoinSvg3,
            title1: 'Act Like an Owner'
        },
        {
            svg: JoinSvg4,
            title1: 'Be Result-oriented'
        },
        {
            svg: JoinSvg5,
            title1: 'Be Purposeful and Responsible'
        },
        {
            svg: JoinSvg6,
            title1: 'Be Honest and Communicate Positively'
        },
        {
            svg: JoinSvg7,
            title1: 'Prioritize Professionalism'
        },
        {
            svg: JoinSvg8,
            title1: 'Stay Curious, Stay Innovative'
        }
    ];

    useEffect(() => {
        if (location.state && location.state.stage) {
            switch (location.state.stage) {
                case 1:
                    document.getElementsByClassName($q.is.desktop ? 'layout-d-content' : 'layout-m-content')[0].scrollTop = 0;
                    break;
                case 2:
                    document.getElementsByClassName($q.is.desktop ? 'layout-d-content' : 'layout-m-content')[0].scrollTop = document.getElementsByClassName('page-join-culture')[0].offsetTop - ($q.is.desktop ? 80 : 0);
                    break;
                case 3:
                    document.getElementsByClassName($q.is.desktop ? 'layout-d-content' : 'layout-m-content')[0].scrollTop = document.getElementsByClassName('page-join-contact-center-contactBox')[0].offsetTop - ($q.is.desktop ? 80 : 0);
                    break;
            }
        }
    }, []);

    return (
        <div className={`${$q.is.desktop ? 'page-d-join' : 'page-m-join'}`}>
            {
                $q.is.desktop &&
                <article className="page-join">
                    <section className="page-join-top">
                        <img src={join_banner}/>
                        <div className="page-join-top-shadow"></div>
                        <div className="page-join-top-des">
                            <p>Ready for a collaboration of a lifetime?</p>
                            <p>Our global staff are waiting to hear from you. </p>
                            <a href="https://www.linkedin.com/company/ola-chat/?viewAsMember=true" target="_blank" className="linkBox">
                                <span>Apply Now</span>
                                <SafetySvg3 color="#fff" className="safetySvg2"/>
                            </a>
                        </div>
                    </section>
                    <section className="page-join-culture">
                        <div className="page-join-culture-center">
                            <p className="page-join-culture-center-p1">Culture and Values</p>
                            <p className="page-join-culture-center-p2">At Ola Chat, we love creative minds and embrace values such as openness, respect and integrity.  That’s why it’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone.</p>
                            <img className="page-join-culture-center-img1" src={join_culture}/>
                            <div className="page-join-culture-center-keys">
                                <p>Here are some keys to our success</p>
                                <div>
                                    {
                                        list.map((res, index) => (
                                            <div key={index}>
                                                <res.svg/>
                                                <p>{res.title1}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-join-contact">
                        <div className="page-join-contact-center">
                            <div className="page-join-contact-center-imgBox">
                                <div>
                                    <img src={join_contact1}/>
                                    <div>We create an equal and open workplace</div>
                                    <p>Boosting honest, transparent, and free atmosphere</p>
                                    <p>Gathering experts and top talents in the industry</p>
                                    <p>Providing flexible working hours</p>
                                    <p>Buliding efficient and open office environment</p>
                                </div>
                                <div>
                                    <img src={join_contact2}/>
                                    <div>We offer all-round care for your growth</div>
                                    <p>Comprehensive vocational training</p>
                                    <p>Full recognition of professional output</p>
                                    <p>Challenging opportunities</p>
                                </div>
                            </div>
                            <div className="page-join-contact-center-contactBox">
                                <p>General Contact</p>
                                <p>hr-sg@olaola.chat</p>
                            </div>
                        </div>
                    </section>
                </article>
            }
            {
                $q.is.mobile &&
                <article className="page-join">
                    <section className="page-join-top">
                        <img src={join_mobileBanner}/>
                        <div className="page-join-top-shadow"></div>
                        <div className="page-join-top-des">
                            <p>Ready for a collaboration of a lifetime?</p>
                            <p>Our global staff are waiting to hear from you. </p>
                            <a href="https://www.linkedin.com/company/ola-chat/?viewAsMember=true" target="_blank" className="linkBox">
                                <span>Apply Now</span>
                                <SafetySvg3 color="#fff" className="safetySvg2"/>
                            </a>
                        </div>
                    </section>
                    <section className="page-join-culture">
                        <div className="page-join-culture-center">
                            <p className="page-join-culture-center-p1">Culture and Values</p>
                            <p className="page-join-culture-center-p2">At Ola Chat, we love creative minds and embrace values such as openness, respect and integrity.  That’s why it’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone.</p>
                            <img className="page-join-culture-center-img1" src={join_mobileCulture}/>
                            <div className="page-join-culture-center-keys">
                                <p>Here are some keys to our success</p>
                                <div>
                                    {
                                        list.map((res, index) => (
                                            <div key={index}>
                                                <div>
                                                    <res.svg/>
                                                </div>
                                                <p>{res.title1}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="page-join-contact">
                        <div className="page-join-contact-center">
                            <div className="page-join-contact-center-imgBox">
                                <div>
                                    <img src={join_contact1}/>
                                    <div>We create an equal and open workplace</div>
                                    <p>Boosting honest, transparent, and free atmosphere</p>
                                    <p>Gathering experts and top talents in the industry</p>
                                    <p>Providing flexible working hours</p>
                                    <p>Buliding efficient and open office environment</p>
                                </div>
                                <div>
                                    <img src={join_contact2}/>
                                    <div>We offer all-round care for your growth</div>
                                    <p>Comprehensive vocational training</p>
                                    <p>Full recognition of professional output</p>
                                    <p>Challenging opportunities</p>
                                </div>
                            </div>
                            <div className="page-join-contact-center-contactBox">
                                <p>General Contact</p>
                                <p>hr-sg@olaola.chat</p>
                            </div>
                        </div>
                    </section>
                </article>
            }
        </div>
    );
}

export default JoinPage;

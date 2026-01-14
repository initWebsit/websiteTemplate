/*
 + ------------------------------------------------------------------
 | 安全性
 + ------------------------------------------------------------------ 
 */
import React from "react";
import safety_banner from "@/assets/safety_banner.png";
import safety_mobileBanner from "@/assets/safety_mobileBanner.png";
import safety_trust from "@/assets/safety_trust.png";
import { SafetySvg1, SafetySvg2, SafetySvg3 } from "./safetySvg";
import "./index.less";
import { useNavigate } from "react-router-dom";

function Safety(props) {
    const navigate = useNavigate();

    return (
        <div className={`${$q.is.desktop ? 'page-d-safety' : 'page-m-safety'}`}>
            {
                $q.is.desktop &&
                <article className="page-safety">
                    <section className="page-safety-top">
                        <img src={safety_banner}/>
                        <div className="page-safety-top-shadow"></div>
                        <p>Trust and Safety</p>
                    </section>
                    <section className="page-safety-trustBox">
                        <div className="page-safety-trustBox-center">
                            <p>Trust and Safety Center</p>
                            <p>At Ola Chat, we develop apps starting with our users in mind. From gaming to dating, we do not compromise and place absolute importance on your security. Explore our dynamic policies below!</p>
                            <img src={safety_trust}/>
                        </div>
                    </section>
                    <section className="page-safety-agreementBox">
                        <div className="page-safety-agreementBox-center">
                            <div>
                                <p>
                                    <SafetySvg1 className="safetySvg1"/>
                                </p>
                                <p>User Agreement</p>
                                <p>Building successful global products means meeting global standards and ensuring the safety of all our users, no matter where you’re from.</p>
                                <div className="linkBox" onClick={() => navigate('/agreement')}>
                                    <span>Learn More</span>
                                    <SafetySvg3 className="safetySvg2"/>
                                </div>
                            </div>
                            <div>
                                <p>
                                    <SafetySvg2 className="safetySvg2"/>
                                </p>
                                <p>Privacy Policy</p>
                                <p>We take data security very seriously and are committed to investing in safety tools and working closely with lawmakers and partners across the world.</p>
                                <div className="linkBox" onClick={() => navigate('/privacy')}>
                                    <span>Learn More</span>
                                    <SafetySvg3 className="safetySvg2"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            }
            {
                $q.is.mobile &&
                <article className="page-safety">
                    <section className="page-safety-top">
                        <img src={safety_mobileBanner}/>
                        <div className="page-safety-top-shadow"></div>
                        <p>Trust and Safety</p>
                    </section>
                    <section className="page-safety-trustBox">
                        <div className="page-safety-trustBox-center">
                            <p>Trust and Safety Center</p>
                            <p>At Ola Chat, we develop apps starting with our users in mind. From gaming to dating, we do not compromise and place absolute importance on your security. Explore our dynamic policies below!</p>
                            <img src={safety_trust}/>
                        </div>
                    </section>
                    <section className="page-safety-agreementBox">
                        <div className="page-safety-agreementBox-center">
                            <div>
                                <p>
                                    <SafetySvg1 className="safetySvg1"/>
                                </p>
                                <div>
                                    <p>User Agreement</p>
                                    <p>Building successful global products means meeting global standards and ensuring the safety of all our users, no matter where you’re from.</p>
                                    <div className="linkBox" onClick={() => navigate('/agreement')}>
                                        <span>Learn More</span>
                                        <SafetySvg3 className="safetySvg2"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    <SafetySvg2 className="safetySvg2"/>
                                </p>
                                <div>
                                    <p>Privacy Policy</p>
                                    <p>We take data security very seriously and are committed to investing in safety tools and working closely with lawmakers and partners across the world.</p>
                                    <div className="linkBox" onClick={() => navigate('/privacy')}>
                                        <span>Learn More</span>
                                        <SafetySvg3 className="safetySvg2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            }
        </div>
    );
}

export default Safety;

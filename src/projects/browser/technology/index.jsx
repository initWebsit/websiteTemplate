/*
 + ------------------------------------------------------------------
 | 科技
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import technologyBanner from "@/assets/technology_banner1.png";
import technologyMobileBanner from "@/assets/technology_mobileBanner1.png";
import technologyLimit from "@/assets/technology_limit.png";
import technologyMobileLimit from "@/assets/technology_mobileLimit.png";
import technologyMindset from "@/assets/technology_mindset.png";
import technologyMobileMindset from "@/assets/technology_mobileMindset.png";
import { ListSvg1, ListSvg2, ListSvg3, ListSvg4, ListSvg5, ListSvg6, ListSvg7, ListSvg8 } from "./technologySvg";
import "./index.less";

function Technology(props) {
    const location = useLocation();
    const list = [
        {
            svg: ListSvg1,
            title1: 'Design and development of products',
            title2: 'Evaluation of mobile app performance, testing and troubleshooting, optimization of internal management and business intelligence systems, and technical support for in-app updates.'
        },
        {
            svg: ListSvg2,
            title1: 'Real-time interactive service platform',
            title2: 'The industry\'s leading self-research model provides low latency and high quality real-time voice interactive services that perform under complex network conditions in different regions.'
        },
        {
            svg: ListSvg3,
            title1: 'Privacy and security',
            title2: 'Develop and enhance privacy and security features for applications.'
        },
        {
            svg: ListSvg4,
            title1: 'Research & Development',
            title2: 'real time data analytics and artificial intelligence (AI) features to understand user needs and improve user experience like personalised recommendations.'
        },
        {
            svg: ListSvg5,
            title1: 'Distributed computing engine',
            title2: 'We combine AI, big data and real-time recommendation engines to provide personalized content services that match individual needs for each user.'
        },
        {
            svg: ListSvg6,
            title1: 'Multi-dimensional user analysis and insight',
            title2: 'Our self-owned big data research site tests MVP and includes usability research tools to optimize the product experience. With 10,000+ user tags, we know what users need better than they do themselves.'
        },
        {
            svg: ListSvg7,
            title1: 'Virtual Reality',
            title2: 'State of the art audio / video / virtual reality (VR) technologies to promote social interaction apps and games on a global scale.'
        },
        {
            svg: ListSvg8,
            title1: 'Cross-platform client development framework',
            title2: 'Client development technology that can be adapted to multiple operating systems at the same time to efficiently meet the needs of rapid iteration on multiple devices.'
        }
    ];

    useEffect(() => {
        if (location.state && location.state.stage) {
            switch (location.state.stage) {
                case 1:
                    if ($q.is.desktop) {
                        document.getElementsByClassName('layout-d-content')[0].scrollTop = document.getElementsByClassName('page-technology-mindset')[0].offsetTop - 80;
                    } else {
                        document.getElementsByClassName('layout-m-content')[0].scrollTop = document.getElementsByClassName('page-technology-mindset')[0].offsetTop;
                    }
                    break;
            }
        }
    }, []);

    return (
        <div className={`${$q.is.desktop ? 'page-d-technology' : 'page-m-technology'}`}>
            {
                $q.is.desktop &&
                <article className="page-technology">
                    <section className="page-technology-top">
                        <img src={technologyBanner}/>
                        <p>Technology</p>
                    </section>
                    <section className="page-technology-limit">
                        <div className="page-technology-limit-center">
                            <img src={technologyLimit}/>
                            <div>
                                <p>We Push Limits in Technology</p>
                                <p>Creating innovative products requires thinking out of
                                    the box. At Ola chat, we have found that inventing new
                                    technology allows us to shape a better experience, so
                                    our users can focus on having a great time on our
                                    many products. Here are tools that sets us apart from
                                    the competition.</p>
                            </div>
                        </div>
                    </section>
                    <section className="page-technology-development">
                        <div className="page-technology-development-center">
                            {
                                list.map((res, index) => (
                                    <div key={index} className="page-technology-development-center-list">
                                        <div>
                                            <res.svg/>
                                        </div>
                                        <p>{res.title1}</p>
                                        <p>{res.title2}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section className="page-technology-mindset">
                        <div className="page-technology-mindset-center">
                            <div>
                                <p>Global Mindset</p>
                                <p>We build and manage diversified teams so that we can give the best to the world. Our teams located in Southeast Asia,  Middle East, US and Europe collaborate on a daily basis, giving us a global advantage.</p>
                            </div>
                            <img src={technologyMindset}/>
                        </div>
                    </section>
                </article>
            }
            {
                $q.is.mobile &&
                <article className="page-technology">
                    <section className="page-technology-top">
                        <img src={technologyMobileBanner}/>
                        <p>Technology</p>
                    </section>
                    <section className="page-technology-limit">
                        <div className="page-technology-limit-center">
                            <img src={technologyMobileLimit}/>
                            <div>
                                <p>We Push Limits in Technology</p>
                                <p>Creating innovative products requires thinking out of
                                    the box. At Ola chat, we have found that inventing new
                                    technology allows us to shape a better experience, so
                                    our users can focus on having a great time on our
                                    many products. Here are tools that sets us apart from
                                    the competition.</p>
                            </div>
                        </div>
                    </section>
                    <section className="page-technology-development">
                        <div className="page-technology-development-center">
                            {
                                list.map((res, index) => (
                                    <div key={index} className="page-technology-development-center-list">
                                        <div>
                                            <res.svg/>
                                        </div>
                                        <p>{res.title1}</p>
                                        <p>{res.title2}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                    <section className="page-technology-mindset">
                        <div className="page-technology-mindset-center">
                            <div>
                                <p>Global Mindset</p>
                                <p>We build and manage diversified teams so that we can give the best to the world. Our teams located in Southeast Asia,  Middle East, US and Europe collaborate on a daily basis, giving us a global advantage.</p>
                            </div>
                            <img src={technologyMobileMindset}/>
                        </div>
                    </section>
                </article>
            }
        </div>
    );
}

export default Technology;

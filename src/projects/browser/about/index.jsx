/*
 + ------------------------------------------------------------------
 | 关于我们
 + ------------------------------------------------------------------ 
 */
import React, { useState, useEffect } from "react";
import aboutBanner1 from "@/assets/about_banner1.png";
import aboutSwiper1 from "@/assets/about_swiper1.png";
import aboutSwiper2 from "@/assets/about_swiper2.png";
import aboutSwiper3 from "@/assets/about_swiper3.png";
import aboutSwiper4 from "@/assets/about_swiper4.png";
import about_global from "@/assets/about_global.png";
import about_map from "@/assets/about_map.png";
import about_house from "@/assets/about_house.png";
import { RightArrow, Svg1, Svg2, Svg3 } from "./aboutSvg";
import { useLocation } from "react-router-dom";
import "./index.less";

function About(props) {
    const location = useLocation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrow, setShowArrow] = useState(false);
    const imgList = [
        {
            img: aboutSwiper1,
            title1: '2019',
            list: [
                'Ola Chat was established',
                '2019/8 - First office in Singapore opened'
            ]
        },
        {
            img: aboutSwiper2,
            title1: '2020',
            list: [
                '2020/7 Started business operations in Thailand, Vietnam, Middle East and Korea',
                '2020/10 Opened offices in Indonesia and Malaysia',
                '2020/11 Global registered users surpass 50 million'
            ]
        },
        {
            img: aboutSwiper3,
            title1: '2021',
            list: [
                '2021/1 Opened offices in Thailand and the Middle East',
                '2021/10 Full-scale launch of operations in North America',
                'Global registered users surpass 100 million'
            ]
        },
        {
            img: aboutSwiper4,
            title1: '2022',
            list: [
                'Multiple apps in the pipeline coming soon!'
            ]
        }
    ];
    const globalList = [
        {
            svg: Svg1,
            title1: '14',
            title2: 'Countries'
        },
        {
            svg: Svg2,
            title1: '18',
            title2: 'Local Offices'
        },
        {
            svg: Svg3,
            title1: '1000+',
            title2: 'Global Staff'
        }
    ];

    useEffect(() => {
        if (location.state && location.state.stage) {
            switch (location.state.stage) {
                case 1:
                    document.getElementsByClassName('layout-d-content')[0].scrollTop = document.getElementsByClassName('page-about-missionBox-center-milestones')[0].offsetTop - 80;
                    break;
                case 2:
                    document.getElementsByClassName('layout-d-content')[0].scrollTop = document.getElementsByClassName('page-about-globalBox-center')[0].offsetTop - 80;
                    break;
            }
        }
    }, []);

    const selectSwiperFunc = (index) => {
        if (index === currentIndex) {
            return;
        }
        if (index > currentIndex) {
            for (let i = 0; i < index - currentIndex; i++) {
                slideFunc(2);
            }
        } else {
            for (let i = 0; i < currentIndex - index; i++) {
                slideFunc(1);
            }
        }
        setCurrentIndex(index);
    }

    const slideFunc = (type) => {
        if (type === 1) {
            let ele, index;
            for (let i = 0; i < 3; i++) {
                let num = parseInt(document.getElementsByClassName("operatorSwiperList")[i].style.transform.split('translateX(')[1].split('px')[0]) + 1290;
                document.getElementsByClassName("operatorSwiperList")[i].style.transform = `translateX(${num}px)`;
                document.getElementsByClassName("operatorSwiperList")[i].style.opacity = '1';
                if (num >= 5160 * (2 - i)) {
                    ele = document.getElementsByClassName("operatorSwiperList")[i];
                    index = i;
                }
            }
            // 极值处理
            if (ele) {
                switch (index) {
                    case 0:
                        ele.style.opacity = '0';
                        ele.style.transform = `translateX(-5160px)`;
                        break;
                    case 1:
                        ele.style.opacity = '0';
                        ele.style.transform = `translateX(${-5160 * 2}px)`;
                        break;
                    case 2:
                        ele.style.opacity = '0';
                        ele.style.transform = `translateX(${-5160 * 3}px)`;
                        break;
                }
            }
            setCurrentIndex(state => {
                return state === 0 ? imgList.length - 1 : state - 1;
            });
        } else {
            let ele, index;
            for (let i = 0; i < 3; i++) {
                let num = parseInt(document.getElementsByClassName("operatorSwiperList")[i].style.transform.split('translateX(')[1].split('px')[0]) - 1290;
                document.getElementsByClassName("operatorSwiperList")[i].style.transform = `translateX(${num}px)`;
                document.getElementsByClassName("operatorSwiperList")[i].style.opacity = '1';
                if (num <= -5160 * (2 + i)) {
                    ele = document.getElementsByClassName("operatorSwiperList")[i];
                    index = i;
                }
            }
            // 极值处理
            if (ele) {
                switch (index) {
                    case 0:
                        ele.style.opacity = '0';
                        ele.style.transform = `translateX(5160px)`;
                        break;
                    case 1:
                        ele.style.opacity = '0';
                        ele.style.transform = `translateX(0px)`;
                        break;
                    case 2:
                        ele.style.opacity = '0';
                        ele.style.transform = `translateX(-5160px)`;
                        break;
                }
            }
            setCurrentIndex(state => {
                return state === imgList.length - 1 ? 0 : state + 1;
            });
        }
    }

    return (
        <article className="page-about">
           <section className="page-about-top">
               <img src={aboutBanner1}/>
               <p>Enabling more efficient human connections through technology.</p>
           </section>
            <section className="page-about-missionBox">
                <div className="page-about-missionBox-center">
                    <p>Ola Chat is a <span>global Internet technology company</span> which focuses
                        on mobile applications.</p>
                    <p>We believe technology can better connect people in meaningful
                        ways and are constantly pushing the boundaries of how tech can
                        be more “human” through our many exciting products.
                        Ola Chat is one of the fastest growing
                        companies in the world. Our global footprint and years of
                        commercialization experience have contributed to us becoming
                        an industry leader.</p>
                    <div className="page-about-missionBox-center-vision">
                        <div>
                            <p>Our Mission</p>
                            <p>Enabling more efficient human connections
                                through technology.</p>
                        </div>
                        <div>
                            <p>Our Vision</p>
                            <p>To be the leading real time scenario-based social
                                platform by enabling warm and diversified
                                real-time human connections.</p>
                        </div>
                    </div>
                    <div className="page-about-missionBox-center-milestones">Our Milestones</div>
                    <div className="swiper-container swiper">
                        <div className="swiper-wrapper">
                            <div className="operatorSwiperBox"
                                 onMouseEnter={() => setShowArrow(true)}
                                 onMouseLeave={() => setShowArrow(false)}>
                                <div className="operatorSwiperListBox">
                                    {
                                        [1, 2, 3].map((res, index) => (
                                            <div key={index} className="operatorSwiperList" style={{'transform': 'translateX(-5160px)'}}>
                                                {
                                                    imgList.map((imgRes, imgIndex) => (
                                                        <div className="milestonesList" key={imgIndex}>
                                                            <img className="milestonesList-img" src={imgRes.img}/>
                                                            <div className="milestonesList-title">
                                                                <p className="milestonesList-title-p1">{imgRes.title1}</p>
                                                                <span className="milestonesList-title-span"></span>
                                                                {
                                                                    imgRes.list.map((element, elementIndex) => (
                                                                        <p key={elementIndex} className="milestonesList-title-p2"><span></span>{element}</p>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    // showArrow &&
                                    // <>
                                    //     <RightArrow color="#fff" onClick={() => slideFunc(2)} className="rightArrowSwiper"/>
                                    // </>
                                }
                                <div className="operatorSwiperPage">
                                    {
                                        imgList.map((res, index) => (
                                            <div
                                                key={index}
                                                className={`${currentIndex === index ? 'operatorSwiperPage-active' : ''}`}
                                                onClick={() => selectSwiperFunc(index)}></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <RightArrow color="#A5A3A9" onClick={() => slideFunc(2)} className="rightArrowSwiper"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-about-globalBox">
                <div className="page-about-globalBox-center">
                    <p>We Are Global</p>
                    <p>We believe that a strong localization strategy creates deeper connections and this belief has
                        driven our successful expansion globally. Whether it be product, operations or marketing, our
                        offices in these strategic locations means that you’re never far away from top Ola Chat service!</p>
                    <div className="page-about-globalBox-center-imgBox">
                        <img src={about_global}/>
                    </div>
                    <div className="page-about-globalBox-center-dataBox">
                        {
                            globalList.map((res, index) => (
                                <div key={index} className="page-about-globalBox-center-dataBox-list">
                                    <res.svg className="page-about-globalBox-center-dataBox-list-svg"/>
                                    <div className="page-about-globalBox-center-dataBox-list-des">
                                        <p>{res.title1}</p>
                                        <p>{res.title2}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="page-about-globalBox-center-mapBox">
                        <img src={about_map}/>
                    </div>
                </div>
            </section>
            <section className="page-about-officeBox">
                <img src={about_house}/>
            </section>
        </article>
    );
}

export default About;

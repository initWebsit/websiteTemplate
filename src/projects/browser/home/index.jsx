/*
 + ------------------------------------------------------------------
 | 首页
 + ------------------------------------------------------------------
 */
import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import home_background1 from "@/assets/home_background1.jpg";
import home_background2 from "@/assets/home_background2.jpg";
import home_background3 from "@/assets/home_background3.jpg";
import home_background4 from "@/assets/home_background4.jpg";
import home_mobile_1 from "@/assets/home_mobile_1.jpg";
import home_mobile_2 from "@/assets/home_mobile_2.jpg";
import { getDistanceTop } from "@/commons/tools";
import "./index.less";

function Home(props) {
    const navigate = useNavigate()
    const [imgList, setImgList] = useState([true, false, false, false]);
    const [imgListMobile, setImgListMobile] = useState([true, false, false, false]);

    const pcScrollFunc = (e, height) => {
        let top = typeof e === 'number' ? e : e.target.scrollTop;
        let classArr = ['container1', 'container2', 'bg3', 'bg4'];
        classArr.forEach((res, index) => {
            if (imgList[index]) return;
            if (top >= (getDistanceTop(document.getElementsByClassName(res)[0])?.top - (height ? height : e.target.offsetHeight))) {
                setImgList((arr) => {
                    if (!arr[index]) {
                        let temp = arr.map(res => res);
                        temp[index] = true;
                        return temp;
                    } else {
                        return arr;
                    }
                });
            }
        });
    };

    const mobileScrollFunc = (e, height) => {
        let top = typeof e === 'number' ? e : e.target.scrollTop;
        let classArr = ['container1', 'container2', 'bg3Mobile', 'bg4Mobile'];
        classArr.forEach((res, index) => {
            if (imgListMobile[index]) return;
            if (top >= (getDistanceTop(document.getElementsByClassName(res)[0])?.top - (height ? height : e.target.offsetHeight))) {
                setImgListMobile((arr) => {
                    if (!arr[index]) {
                        let temp = arr.map(res => res);
                        temp[index] = true;
                        return temp;
                    } else {
                        return arr;
                    }
                });
            }
        });
    };

    useEffect(() => {
        let name = $q.is.desktop ? 'layout-d-content' : 'layout-m-content';
        let top = window.document.getElementsByClassName(name)[0].scrollTop;
        let height = window.document.getElementsByClassName(name)[0].offsetHeight;
        $q.is.desktop ? pcScrollFunc(top, height) : mobileScrollFunc(top, height);
        window.document.getElementsByClassName(name)[0].addEventListener('scroll', $q.is.desktop ? pcScrollFunc : mobileScrollFunc);
        return () => {
            window.document.getElementsByClassName(name)[0].removeEventListener('scroll', $q.is.desktop ? pcScrollFunc : mobileScrollFunc);
        }
    }, []);

    return (
        <>
            {
                $q.is.desktop &&
                <section className="homeBoxPc">
                    <section className="container1">
                        <img src={imgList[0] ? home_background1 : ''} className="container1-bg"/>
                        <div className="container1-titleBox">
                            <p>INTERNATIONAL AGENT PARTYING</p>
                            <p>Earn Dollars At Home With Us</p>
                            <p>We are happy to know that you would like to register as a partying agent! To complete the Registration read and follow the steps given below.</p>
                        </div>
                    </section>
                    <section className="container2">
                        <img src={imgList[1] ? home_background2 : ''} className="container2-bg"/>
                        <div className="container2-titleBox">
                            <div>
                                <p><span>IT'S TIME</span></p>
                                <br/>
                                <p><span>Become A Family</span></p>
                            </div>
                            <div>
                                <div className="bg3">
                                    <img src={imgList[2] ? home_background3 : ''}/>
                                    <div>
                                        <p>Streamer</p>
                                        <p>Who likes live Instagram or calls for hours? Instead of getting lost, it's better to be the official host on the voice Chat partying App.</p>
                                        <p onClick={() => navigate('/streamer')}>Read More</p>
                                    </div>
                                </div>
                                <div className="bg4">
                                    <img src={imgList[3] ? home_background4 : ''}/>
                                    <div>
                                        <p>Agent</p>
                                        <p>We welcome ambitious Agents to join us. Many Agents have succeeded in achieving their dreams and targets.</p>
                                        <p onClick={() => navigate('/agent')}>Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            }
            {
                $q.is.mobile &&
                <section className="homeBoxMobile">
                    <section className="container1">
                        <img src={imgListMobile[0] ? home_mobile_1 : ''} className="container1-bg"/>
                        <div className="container1-titleBox">
                            <p>INTERNATIONAL AGENT PARTYING</p>
                            <p>Earn Dollars At Home With Us</p>
                            <p>We are happy to know that you would like to register as a partying agent! To complete the Registration read and follow the steps given below.</p>
                        </div>
                    </section>
                    <section className="container2">
                        <img src={imgListMobile[1] ? home_mobile_2 : ''} className="container2-bg"/>
                        <div className="container2-titleBox">
                            <div>
                                <p><span>IT'S TIME BECOME A FAMILY</span></p>
                            </div>
                            <div>
                                <div className="bg3Mobile">
                                    <img src={imgListMobile[2] ? home_background3 : ''}/>
                                    <div>
                                        <p>Streamer</p>
                                        <p>Who likes live Instagram or calls for hours? Instead of getting lost, it's better to be the official host on the voice Chat partying App.</p>
                                        <p onClick={() => navigate('/streamer')}>Read More</p>
                                    </div>
                                </div>
                                <div className="bg4Mobile">
                                    <img src={imgListMobile[3] ? home_background4 : ''}/>
                                    <div>
                                        <p>Agent</p>
                                        <p>We welcome ambitious Agents to join us. Many Agents have succeeded in achieving their dreams and targets.</p>
                                        <p onClick={() => navigate('/agent')}>Read More</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            }
        </>
    )
}

export default connect(
    (state) => {
        return {};
    },
    (dispatch) => ({
        actions: {}
    })
)(Home);

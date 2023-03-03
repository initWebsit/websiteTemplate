/*
 + ------------------------------------------------------------------
 | 成为经纪人页
 + ------------------------------------------------------------------
 */
import React, {useCallback, useEffect, useState} from "react";
import { connect } from "react-redux";
import agent_background1 from "@/assets/agent_background1.jpg";
import agent_background2 from "@/assets/agent_background2.jpg";
import agent_background3 from "@/assets/agent_background3.png";
import agent_background4 from "@/assets/agent_background4.png";
import agent_background5 from "@/assets/agent_background5.jpg";
import agent_background6 from "@/assets/agent_background6.png";
import agent_background7 from "@/assets/agent_background7.png";
import agent_background8 from "@/assets/agent_background8.png";
import agent_background9 from "@/assets/agent_background9.png";
import agent_mobile_1 from "@/assets/agent_mobile_1.jpg";
import agent_mobile_2 from "@/assets/agent_mobile_2.jpg";
import agent_mobile_3 from "@/assets/agent_mobile_3.jpg";
import { getDistanceTop } from "@/commons/tools";
import "./index.less";

function Agent(props) {
    const [imgList, setImgList] = useState([true, false, false, false, false, false, false, false, false]);
    const [imgListMobile, setImgListMobile] = useState([true, false, false, false, false, false, false, false, false]);

    const pcScrollFunc = (e, height) => {
        let top = typeof e === 'number' ? e : e.target.scrollTop;
        let classArr = ['agentTop1', 'agentTop2', 'agentBg3', 'agentBg4', 'agentTop3', 'agentBg6', 'agentBg7', 'agentBg8', 'agentBg9'];
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
        let classArr = ['agentTop1', 'agentTop2', 'agentBg3', 'agentBg4', 'agentTop3', 'agentBg6', 'agentBg7', 'agentBg8', 'agentBg9'];
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
                <section className="agentBoxPc">
                    <div className="agentTop1">
                        <img className="agentTop1-bg" src={imgList[0] ? agent_background1 : ''}/>
                        <div className="agentTop1-titleBox">
                            <p>AGENT</p>
                            <p>How Does Agent Work?</p>
                            <p>Attract more active hosts to partying and assist in the anchor's training, guidance, and daily management！</p>
                        </div>
                    </div>
                    <div className="agentTop2">
                        <img className="agentTop2-bg" src={imgList[1] ? agent_background2 : ''}/>
                        <div className="agentTop2-titleListBox">
                            <div className="agentTop2-titleListBox-titleList1">
                                <div className="agentBg3">
                                    <img src={imgList[2] ? agent_background3 : ''}/>
                                </div>
                                <div>
                                    <p>BASIC RRQUIREMENTS</p>
                                    <p>TO BECOME AN AGENT</p>
                                    <div>
                                        <div>
                                            <p>Age 18 years or older Man or woman</p>
                                            <p>Age is not a benchmark</p>
                                            <p>Potential to bring many new Streamers</p>
                                        </div>
                                        <div>
                                            <p>Obey the rules of the management official</p>
                                            <p>Able to manage and have the ability to calculate</p>
                                            <p>Have a laptop</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="agentTop2-titleListBox-titleList2">
                                <div>
                                    <h4>JOB SCOPE</h4>
                                    <p>Attract voice live streamers</p>
                                    <p>Responsible for the invitation, interview, evaluation, and signing of the anchor</p>
                                    <p>Assist in the anchor's training, guidance and daily management, live broadcast follow-up</p>
                                    <p>Responsible for solving the problems encountered by the anchor during the live broadcast</p>
                                </div>
                                <div className="agentBg4">
                                    <img src={imgList[3] ? agent_background4 : ''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agentTop3">
                        <img className="agentTop3-bg" src={imgList[4] ? agent_background5 : ''}/>
                        <div className="agentTop3-titleBox">
                            <div>
                                <img className="agentBg6" src={imgList[5] ? agent_background6 : ''}/>
                                <div>
                                    <h4>PAYMENTS</h4>
                                    <div>
                                        <div>
                                            <div className="agentBg7">
                                                <img src={imgList[6] ? agent_background7 : ''}/>
                                            </div>
                                            <p>No Liability base payments</p>
                                        </div>
                                        <div>
                                            <div className="agentBg8">
                                                <img src={imgList[7] ? agent_background8 : ''}/>
                                            </div>
                                            <p>Bonus payments</p>
                                        </div>
                                        <div>
                                            <div className="agentBg9">
                                                <img src={imgList[8] ? agent_background9 : ''}/>
                                            </div>
                                            <p>User <br/>reward</p>
                                        </div>
                                    </div>
                                    <p>total monthly income</p>
                                    <p>$400 - $1500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }

            {
                $q.is.mobile &&
                <section className="agentBoxMobile">
                    <div className="agentTop1">
                        <img className="agentTop1-bg" src={imgListMobile[0] ? agent_mobile_1 : ''}/>
                        <div className="agentTop1-titleBox">
                            <p>AGENT</p>
                            <p>How Does Agent Work?</p>
                            <p>Attract more active hosts to partying and assist in the anchor's training, guidance, and daily management！</p>
                        </div>
                    </div>
                    <div className="agentTop2">
                        <img className="agentTop2-bg" src={imgListMobile[1] ? agent_mobile_2 : ''}/>
                        <div className="agentTop2-titleListBox">
                            <div className="agentTop2-titleListBox-titleList1">
                                <div className="agentBg3">
                                    <img src={imgListMobile[2] ? agent_background3 : ''}/>
                                </div>
                                <div>
                                    <p>BASIC RRQUIREMENTS TO</p>
                                    <p>BECOME AN AGENT</p>
                                    <div>
                                        <div>
                                            <p>Age 18 years or older Man or woman</p>
                                            <p>Age is not a benchmark</p>
                                            <p>Potential to bring many new Streamers</p>
                                        </div>
                                        <div>
                                            <p>Obey the rules of the management official</p>
                                            <p>Able to manage and have the ability to calculate</p>
                                            <p>Have a laptop</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="agentTop2-titleListBox-titleList2">
                                <div className="agentBg4">
                                    <img src={imgListMobile[3] ? agent_background4 : ''}/>
                                </div>
                                <div>
                                    <h4>JOB SCOPE</h4>
                                    <p>Attract voice live streamers</p>
                                    <p>Responsible for the invitation, interview, evaluation, and signing of the anchor</p>
                                    <p>Assist in the anchor's training, guidance and daily management, live broadcast follow-up</p>
                                    <p>Responsible for solving the problems encountered by the anchor during the live broadcast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agentTop3">
                        <img className="agentTop3-bg" src={imgListMobile[4] ? agent_mobile_3 : ''}/>
                        <div className="agentTop3-titleBox">
                            <div>
                                <div>
                                    <h4>SALARY</h4>
                                    <div>
                                        <div>
                                            <div className="agentBg7">
                                                <img src={imgListMobile[6] ? agent_background7 : ''}/>
                                            </div>
                                            <p>No Liability base salary</p>
                                        </div>
                                        <div>
                                            <div className="agentBg8">
                                                <img src={imgListMobile[7] ? agent_background8 : ''}/>
                                            </div>
                                            <p>Bonus <br/>salary</p>
                                        </div>
                                        <div>
                                            <div className="agentBg9">
                                                <img src={imgListMobile[8] ? agent_background9 : ''}/>
                                            </div>
                                            <p>User <br/>reward</p>
                                        </div>
                                    </div>
                                    <p>total monthly income</p>
                                    <p>$400 - $1500</p>
                                </div>
                                <img className="agentBg6" src={imgListMobile[5] ? agent_background6 : ''}/>
                            </div>
                        </div>
                    </div>
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
)(Agent);

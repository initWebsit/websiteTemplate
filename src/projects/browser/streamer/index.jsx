/*
 + ------------------------------------------------------------------
 | become a streamer页
 + ------------------------------------------------------------------
 */
import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import streamer_background1 from "@/assets/streamer_background1.jpg";
import streamer_background2 from "@/assets/streamer_background2.jpg";
import streamer_background3 from "@/assets/streamer_background3.png";
import streamer_background4 from "@/assets/streamer_background4.png";
import streamer_background5 from "@/assets/streamer_background5.png";
import streamer_mobile_1 from "@/assets/streamer_mobile_1.jpg";
import agent_mobile_2 from "@/assets/agent_mobile_2.jpg";
import { getDistanceTop } from "@/commons/tools";
import "./index.less";

function Streamer(props) {
    const [imgList, setImgList] = useState([true, false, false, false, false]);
    const [imgListMobile, setImgListMobile] = useState([true, false, false, false, false]);

    const pcScrollFunc = (e, height) => {
        let top = typeof e === 'number' ? e : e.target.scrollTop;
        let classArr = ['streamerTop1', 'streamerTop2', 'streamerBg3', 'streamerBg4', 'streamerBg5'];
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
        let classArr = ['streamerTop1', 'streamerTop2', 'streamerBg3', 'streamerBg4', 'streamerBg5'];
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
                <div className="streamerBoxPc">
                    <div className="streamerTop1">
                        <img className="streamerTop1-bg" src={imgList[0] ? streamer_background1 : ''}/>
                        <div className="streamerTop1-titleBox">
                            <p>STREAMER (HOST)</p>
                            <p>How Does Streamer (Host) Work?</p>
                            <p>Streamer is a term for women who actively use our application, namely by having voice chat with other community members.</p>
                        </div>
                    </div>
                    <div className="streamerTop2">
                        <img className="streamerTop2-bg" src={imgList[1] ? streamer_background2 : ''}/>
                        <div className="streamerTop2-titleListBox">
                            <div className="streamerTop2-titleListBox-titleList1 streamerBg3">
                                <div>
                                    <img src={imgList[2] ? streamer_background3 : ''}/>
                                </div>
                                <div>
                                    <p>THE REQUIREMENTS</p>
                                    <p>ARE VERY SIMPLE</p>
                                    <div>
                                        <div>
                                            <p>Woman</p>
                                            <p>There Is No Minimum Education</p>
                                            <p>Age Is Not A Benchmark</p>
                                            <p>Communicative And Friendly (Likes To Chat)</p>
                                            <p>Responsible</p>
                                        </div>
                                        <div>
                                            <p>Have a Smartphone</p>
                                            <p>Confident (Not Too Shy)</p>
                                            <p>Good Attitude</p>
                                            <p>Can I Wear A Hijab</p>
                                            <p>You Don't Have To Be Good Looking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="streamerTop2-titleListBox-titleList2  streamerBg4">
                                <div>
                                    <h4>PAYMENTS OFFER</h4>
                                    <p>Basic payments $8-6400 weekly</p>
                                    <p>Reward for New users</p>
                                    <p>Reward for Assigned tasks</p>
                                    <p>Hands-on training for new streamers</p>
                                </div>
                                <div>
                                    <img src={imgList[3] ? streamer_background4 : ''}/>
                                </div>
                            </div>
                            <div className="streamerTop2-titleListBox-titleList1  streamerBg5">
                                <div>
                                    <img src={imgList[4] ? streamer_background5 : ''}/>
                                </div>
                                <div>
                                    <p>OUR ADVANTAGES</p>
                                    <div>
                                        <div>
                                            <p>Zero streaming cost</p>
                                            <p>No need to sit still and face the Camera</p>
                                            <p>Higher salary compared to video streaming, but less work</p>
                                            <p>Perfect resource support, each anchor has a fixed traffic group</p>
                                        </div>
                                        <div>
                                            <p>Voice streaming, low mobile data cost</p>
                                            <p>The company has strong funds to support, and your income is guaranteed</p>
                                            <p>Perfect anchor support policy, the company is committed to training high-quality anchors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lineBorder"></div>
                    </div>
                </div>
            }
            {
                $q.is.mobile &&
                <div className="streamerBoxMobile">
                    <div className="streamerTop1">
                        <img className="streamerTop1-bg" src={imgListMobile[0] ? streamer_mobile_1 : ''}/>
                        <div className="streamerTop1-titleBox">
                            <p>STREAMER (HOST)</p>
                            <p>How Does Streamer (Host) Work?</p>
                            <p>Streamer is a term for women who actively use our application, namely by having voice chat with other community members.</p>
                        </div>
                    </div>
                    <div className="streamerTop2">
                        <img className="streamerTop2-bg" src={imgListMobile[1] ? agent_mobile_2 : ''}/>
                        <div className="streamerTop2-titleListBox">
                            <div className="streamerTop2-titleListBox-titleList1 streamerBg3">
                                <div>
                                    <img src={imgListMobile[2] ? streamer_background3 : ''}/>
                                </div>
                                <div>
                                    <p>THE REQUIREMENTS</p>
                                    <p>ARE VERY SIMPLE</p>
                                    <div>
                                        <div>
                                            <p>Woman</p>
                                            <p>There Is No Minimum Education</p>
                                            <p>Age Is Not A Benchmark</p>
                                            <p>Communicative And Friendly (Likes To Chat)</p>
                                            <p>Responsible</p>
                                        </div>
                                        <div>
                                            <p>Have a Smartphone</p>
                                            <p>Confident (Not Too Shy)</p>
                                            <p>Good Attitude</p>
                                            <p>Can I Wear A Hijab</p>
                                            <p>You Don't Have To Be Good Looking</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="streamerTop2-titleListBox-titleList2  streamerBg4">
                                <div>
                                    <img src={imgListMobile[3] ? streamer_background4 : ''}/>
                                </div>
                                <div>
                                    <h4>SALARY OFFER</h4>
                                    <p>Basic salary $8-6400 weekly</p>
                                    <p>Reward for New users</p>
                                    <p>Reward for Assigned tasks</p>
                                    <p>Hands-on training for new streamers</p>
                                </div>
                            </div>
                            <div className="streamerTop2-titleListBox-titleList1  streamerBg5">
                                <div>
                                    <img src={imgListMobile[4] ? streamer_background5 : ''}/>
                                </div>
                                <div>
                                    <p>OUR ADVANTAGES</p>
                                    <div>
                                        <div>
                                            <p>Zero streaming cost</p>
                                            <p>No need to sit still and face the Camera</p>
                                            <p>Higher salary compared to video streaming, but less work</p>
                                            <p>Perfect resource support, each anchor has a fixed traffic group</p>
                                        </div>
                                        <div>
                                            <p>Voice streaming, low mobile data cost</p>
                                            <p>The company has strong funds to support, and your income is guaranteed</p>
                                            <p>Perfect anchor support policy, the company is committed to training high-quality anchors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
)(Streamer);

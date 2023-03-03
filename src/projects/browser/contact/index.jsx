/*
 + ------------------------------------------------------------------
 | Contact Us页
 + ------------------------------------------------------------------
 */
import React, {useState, useCallback} from "react";
import { connect } from "react-redux";
import contact_mobile_1 from "@/assets/contact_mobile_1.jpg";
import contact_background2 from "@/assets/contact_background2.png";
import contact_background3 from "@/assets/contact_background3.png";
import contact_background4 from "@/assets/contact_background4.png";
import contact_background5 from "@/assets/contact_background5.png";
import Footer from '@/layout/template_01/Footer';
import { usePost } from '@/library/ajax'
import { Toast } from '@/library/ui'
import "./index.less";

function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [loadingSubmit, fetchSubmit] = usePost(
        '/anchoragent/contractUs'
    );

    const submitFunc = useCallback(async () => {
        if (!name) return Toast.error('Please enter your name');
        if (!/^[-a-zA-Z0-9_\.]+\@([0-9A-Za-z_][0-9A-Za-z-]+\.)+[A-Za-z]{2,8}$/.test(email)) return Toast.error('Please enter your correct email');
        if (!title) return Toast.error('Please enter your message title');
        if (!message) return Toast.error('Please enter your message');

        if (loadingSubmit) return;
        Toast.loading({maskClickable: false});
        let json = {
            name: name,
            email: email,
            title: title,
            content: message
        };
        let res;
        try {
            res = await fetchSubmit(json);
        } catch (err) {
            res = err;
        }
        if (!res?.success) return Toast.error(res?.msg || 'server error');
        Toast.clear();

        Toast.success('submit successfully');
        setName('');
        setEmail('');
        setTitle('');
        setMessage('');
    }, [name, email, title, message]);

    const goToLink = useCallback((url) => {
        window.open(url, '_blank');
    }, []);
    return (
        <>
            {
                $q.is.desktop &&
                <section className="contactBoxPc">
                    <div className="contactBoxPc-imgBox"></div>
                    <div className="contactBoxPc-containerBox">
                        <div className="contactBoxPc-containerBox-top1">
                            <div>
                                <img src={contact_background2}/>
                            </div>
                            <div>
                                <p>GET IN TOUCH</p>
                                <div>
                                    <input value={name} onInput={(e) => setName(e.target.value)} placeholder="Name" maxLength={100}/>
                                    <input value={email} onInput={(e) => setEmail(e.target.value)} placeholder="Email" maxLength={100}/>
                                </div>
                                <div>
                                    <input value={title} onInput={(e) => setTitle(e.target.value)} placeholder="Message Title" maxLength={100}/>
                                </div>
                                <div>
                                    <textarea value={message} onInput={(e) => setMessage(e.target.value)} placeholder="Message" maxLength={200}/>
                                </div>
                                <div>
                                    <p onClick={() => submitFunc()}>Submit</p>
                                </div>
                                <div>
                                    <span>Contact us at</span>
                                    <img onClick={() => goToLink('https://www.instagram.com/yargula133/')} src={contact_background3}/>
                                    <img onClick={() => goToLink('https://www.facebook.com/profile.php?id=100082467166889')} src={contact_background4}/>
                                    <img onClick={() => goToLink('https://wa.me/8617329961245')} src={contact_background5}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer isFixed={true} />
                </section>
            }

            {
                $q.is.mobile &&
                <section className="contactBoxMobile">
                    <div className="contactBox">
                        <img className="contactBox-imgBg" src={contact_mobile_1}/>
                        <div className="contactBox-containerBox">
                            <div className="contactBox-containerBox-top1">
                                <p>GET IN TOUCH</p>
                                <div>
                                    <img src={contact_background2}/>
                                </div>
                                <div>
                                    <div>
                                        <input value={name} onInput={(e) => setName(e.target.value)} placeholder="Name" maxLength={100}/>
                                    </div>
                                    <div>
                                        <input value={email} onInput={(e) => setEmail(e.target.value)} placeholder="Email" maxLength={100}/>
                                    </div>
                                    <div>
                                        <input value={title} onInput={(e) => setTitle(e.target.value)} placeholder="Message Title" maxLength={100}/>
                                    </div>
                                    <div>
                                        <textarea value={message} onInput={(e) => setMessage(e.target.value)} placeholder="Message" maxLength={200}/>
                                    </div>
                                    <div>
                                        <p onClick={() => submitFunc()}>Submit</p>
                                    </div>
                                    <div>
                                        <span>Contact us at</span>
                                    </div>
                                    <div>
                                        <img onClick={() => goToLink('https://www.instagram.com/yargula133/')} src={contact_background3}/>
                                        <img onClick={() => goToLink('https://www.facebook.com/profile.php?id=100082467166889')} src={contact_background4}/>
                                        <img onClick={() => goToLink('https://wa.me/8617329961245')} src={contact_background5}/>
                                    </div>
                                </div>
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
)(Contact);

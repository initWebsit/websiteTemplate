/*
 + ------------------------------------------------------------------
 | 用户协议
 + ------------------------------------------------------------------ 
 */
import React, { useEffect } from "react";
import { SafetySvg1 } from "@browser/safety/safetySvg";
import "./index.less";

function Agreement(props) {

    useEffect(() => {
        document.getElementsByClassName($q.is.desktop ? 'layout-d-content' : 'layout-m-content')[0].scrollTop = 0;
    }, []);
    return (
        <article className="page-agreement">
            <section className={`page-agreement-center ${$q.is.mobile ? 'mobileCenter' : ''}`}>
                <div className="page-agreement-center-top">
                    <SafetySvg1/>
                    <span>User Agreement</span>
                </div>
                <div className="page-agreement-center-container">
                    <p className="timeDes">Updated date: July 29, 2022</p>

                    <p className="timeDes marginBottom80">Effective date: July 29, 2022</p>

                    <p>You are welcome (hereinafter referred to as "user" or "you") to sign this "User Agreement" (hereinafter referred to as "the Agreement") with the Partying operator and use Partying services! The title of each clause is only to help you understand the purpose of the clause, and does not affect or limit the meaning or interpretation of the terms of the Agreement. In order to protect your own rights and interests, it is recommended that you carefully read the specific expressions of each clause.</p>

                    <p className="title1">Article 1 [ Agreement Acceptance]</p>

                    <p>[Please Read Prudently] Before you click to agree to the Agreement in the application registration, you should read it carefully (if you are a minor, you should read it with a legal guardian) and fully understand the contents of the terms of the Agreement, especially the exemption or restriction of Partying’s responsibility, the terms restricting the rights of users, the terms of application laws and the terms of dispute resolution. The clauses exempting or restricting liability will be marked in bold black, and you should read them carefully. If you have any questions about the agreement, please do not proceed to the next step, and you may consult the customer service personnel of the Partying. The Partying operator has fulfilled its legal obligation to take reasonable measures to draw users' attention to and explain the relevant provisions, and has given users sufficient time and sufficient options to decide whether to conclude the Agreement.</p>

                    <p>[Contract Signing] When you fill in the information, read and agree to the Agreement and complete all the registration procedures according to the prompts on the registration page, it means that you have fully read, understood and accepted all the contents of the Agreement, and reached agreement with the Partying operator to become a "user" of the Partying. In the process of reading the Agreement, if you do not agree with the Agreement or any of its provisions, you should immediately stop any further process and stop using the Partying services. If you click on the buttons of "Agree", "Accept", "Register Account" etc., or actually use the Partying services, it is deemed that you have fully accepted and signed the Agreement. If you have not applied for the registration process, or have become a registered user of the Partying before the Agreement comes into effect, then by accessing and / or using the Partying, you are deemed to have agreed to accept the entire contents of the Agreement, otherwise you have no right to access or use the Partying.</p>

                    <p>[Agreement Modification] After you sign the Agreement, the content of the Agreement may be modified due to changes in national policies, product functions and forms, operating plans, and the environment in which the Agreement is performed. The revised agreement is posted on the Partying and you may view it at any time. If you have a protest against the revised agreement, please immediately stop logging in and stop using the Partying service. If you log in or continue to use the Partying, it is deemed that you have recognized the revised agreement and agreed to be bound by it.</p>

                    <p>[Overseas Users] If you are not a user in the Republic of Singapore, you must also abide by the laws of your country or region, and you confirm that the conclusion and performance of the Agreement does not violate the laws and regulations’ of the country or regional area where you belong, live or carry out business activities or other business.</p>

                    <p className="title1">Article 2 [Definition]</p>

                    <p>Partying: refers to Partying website and app.</p>

                    <p>Partying services: various services provided by Partying operators to you based on the Internet in various forms including the Partying website, users, etc. (including new service forms that will emerge in future technological development). If the user logs in or uses the products or services of the affiliated company of the Partying operator, and the associated products or services do not have an independent user agreement and private policy, the Agreement also applies to those products or services.</p>

                    <p>Partying operator: OLA PARTY PTE. LTD.and its related parties.</p>

                    <p>Partying rules: including all rules, interpretations, announcements and other content that have been published and subsequently published on all Partying websites, as well as various rules, implementation rules, product descriptions, announcements, etc. published on the Partying channels and event pages, such as “Partying Agency Violation Management Measures”, "Chat Room Management Standards", "Master Management Rules", "User Behavior Rules", "Information Release Standards", etc. You know and agree that the subsequently updated and adjusted Partying rules are an integral part of Partying rules. The Partying rules have been fully publicized and are effective and binding on all users of the platform.</p>

                    <p>User: hereinafter referred to as “you” or “user”, refers to the individual or organization that registers, logs in, uses, browses, and obtains services under the Agreement.</p>

                    <p className="title1">Article 3 [Scope of Agreement]</p>

                    <p>3.1 Signing subject</p>

                    <p>The Agreement is an agreement between you and the Partying regarding registration, login to the Partying and use of the Partying services. The Agreement has a contractual effect on you and the Partying operator.</p>

                    <p>Partying operators refer to the legal entities that operate the Partying. Under the Agreement, the Partying operator may change according to the Partying's business adjustments. The changed Partying operator will perform the Agreement jointly with you and provide services to you. Partying operators may also be added because of new Partying services. If you use the newly added Partying services, you are deemed to agree that the newly added Partying operators will perform the Agreement with you. In the event of a dispute, you can determine the entity and the counterparty to the dispute based on the services you specifically use and the specific behavior objects that affect your rights.</p>

                    <p>3.2 Supplemental Agreement</p>

                    <p>Due to the rapid development of the Internet, the terms set out in the Agreement between you and the Partying operator cannot be fully listed and cover all your rights and obligations with Partying, nor can the existing agreements guarantee full compliance with future development needs. Therefore, the relevant declarations and policies, Partying rules and agreements publicized by the Partying are supplementary agreements to the Agreement, which are inseparable from the Agreement and have the same legal effect. If you use the Partying service, you are deemed to agree to the above supplementary agreement.</p>

                    <p className="title1">Article 4 [Registration and Use of the Account]</p>

                    <p>4.1 User qualification</p>

                    <p>You confirm that before you start to use / register the program to use the Partying services, you should have the capacity for civil conduct that suits your conduct as required by the laws of your area. If you do not have the aforementioned capacity for civil conduct appropriate to your behavior, you and your legal guardian shall bear all consequences arising therefrom in accordance with the law.</p>

                    <p>Minors under 12 years of age are not allowed to register as Partying users or use Partying services. If the user is a minor over 12 years old, his legal guardian should read, understand and agree to all the contents of the Agreement and its revised contents before they can start to use or continue to use the service; if the user starts to use or continue to use the service, it is deemed that his legal guardian has read, understood, and agreed to all the contents of the Agreement and its revised contents.</p>

                    <p>In addition, you also need to ensure that you are not the object of trade restrictions, sanctions or laws and regulations imposed by any country, international organization or region, otherwise you may not be able to register and use the service normally.</p>

                    <p>4.2 Account description</p>

                    <p>When you fill in the information, read and agree to the Agreement and complete all registration procedures according to the prompts on the registration page, you can get a Partying account and become a Partying user.</p>

                    <p>You have the right to log in to the Partying using the Partying user name (hereinafter referred to as "account name") and the password (account name and password collectively referred to as "account") that you have set or confirmed. Because your Partying account is linked to your personal information and Partying business information, your Partying account is limited to your own use. Without the consent of the Partying operator, you are not allowed to directly or indirectly authorize a third party to use your Partying account or obtain information under your account. All responsibility and consequences arising from your account shall be borne by you, and the Partying operator shall not bear any responsibility for this. However, if the Partying operator determines that the use of your Partying account may endanger your account security and / or Partying information security, the Partying operator may refuse to provide corresponding services or terminate the Agreement. Since user account is associated with user credit information, you can only transfer the account if there is a legal requirement, a judicial ruling, or with the consent of the Partying operator and in compliance with the user account transfer process stipulated in the Partying rules. Once your account is transferred, the rights and obligations under the account are transferred together. Except for this, your account must not be transferred in any way, otherwise you will bear all the responsibilities arising therefrom.</p>

                    <p>In order to enable you to better use the services of the Partying and protect your account security, the Partying operator may require you to complete the real-name authentication according to the requirements of the Partying and legal regulations. If your account has not been logged in for a long time, the Partying operator has the right to cancel, recover, replace or delete any records of your account in the Partying database (including but not limited to registration information, virtual gift information, etc.), and your account will no longer be able to be logged in to any Partying platform, and the corresponding service will be terminated at the same time. Partying will notify you by including but not limited to pop-ups, website announcements, site messages, and user-side push information before cleaning up such accounts.</p>

                    <p>4.3 Registration Information Management</p>

                    <p>4.3.1 Authenticity and Legitimacy</p>

                    <p>When using the Partying service, you should provide your information accurately (including but not limited to your identification, contact number, etc.) as prompted by the Partying page, so that Partying can contact you when necessary. You understand and agree that you have an obligation to maintain the authenticity and validity of the information you provide. The account name you set must not violate the laws and regulations and the Partying rules regarding account name management, otherwise the Partying operator can suspend or cancel your account name and report it to the competent authority.</p>

                    <p>You understand and promise that there will be no illegal or undesirable information, no use of affiliated institutions or celebrities in your account name, avatar, profile and other registered information. You must abide by the bottom line of laws and regulations, citizens’ legal rights and interests, public order, social morality and the authenticity of information during the account registration process.</p>

                    <p>If the Partying operator finds that any of your custom name such as your account registered or used in the Partying is the same as other users, making the name unrecognizable, the Partying operator has the right to ask you to modify the above name. If you fail to modify the name within the time limit requested by the Partying operator, the Partying operator has the right to distinguish it by adding an identification symbol, and you promise to unconditionally agree to the above modification.</p>

                    <p>You understand and recognize that the Partying implements some product technical functions (such as embedded code, plug-ins, etc.) by accessing third-party services. The above-mentioned third-party services can only access the personal information of users required to perform their duties and ensure that they will use industry-leading technology to protect the security of your personal information. You agree and authorize that, in order to better provide services for you and ensure the security of your account, the operator of Partying platform can initiate an inquiry of user's identity authenticity, credit record, and mobile phone number validity status from telecommunications operators, financial service institutions and other reliable organizations accoring to the mobile phone number, ID card number and other information you provide..</p>

                    <p>4.3.2 Update and Maintenance</p>

                    <p>You should update the information you provide (including but not limited to registration information, etc.) in a timely manner to ensure that it is timely, detailed, true, and accurate. In cases where the law clearly requires the Partying operator to verify the information of users, the Partying operator will check and verify your information from time to time according to law, and you should cooperate to provide the latest, true and complete information . When you change or delete relevant information, you may also cause the loss of content, pictures, videos, etc. stored in the system. The Partying operator is not responsible for the loss of content caused by your independent operation. If the Partying operator fails to contact you according to the information you provided last time, because you did not provide the information in time according to the requirements of the Partying operator, or the information you provide is obviously untrue or the administrative and judicial authorities verify that the information you provide is invalid, you will bear all losses and adverse consequences caused to you, others and Partying operators. The Partying operator may send you an inquiry or request for rectification notice, and require you to re-authenticate, or suspend, or teminate to provide part or all of the Partying services. The Partying operator is not responsible for this.</p>

                    <p>4.3.3 Account Security Specification</p>

                    <p>Your account is set up for you and kept by you. Partying will not ask you to provide your account password at any time. Therefore, it is recommended that you keep your account safe and ensure that you log out and leave the Partying with the correct steps at the end of each online session. If you take the initiative to notify the Partying operator and require the Partying operator to take measures to suspend the login and use of your account, the Partying operator should require you to provide and verify personal valid identity information consistent with your registered identity information, otherwise the Partying operator has the right to refuse your above requests. If the Partying operator verifies that the personal identity information you provided is consistent with the registered identity information, the operator shall take timely measures to suspend the login and use of the user account. If the user does not provide his personal valid ID or the personal valid ID provided by the user is inconsistent with the registered identity information, the Partying operator has the right to refuse the user's above request.</p>

                    <p>The loss and consequences of the account due to your active disclosure or because you have been attacked or defrauded by others will be borne by you. The Partying operator is not responsible, and you may recover from the infringer through judicial, administrative and other relief channels.</p>

                    <p>Your account is accessible to you only and cannot be borrowed, donated, rented, transferred, sold or shared by others without the prescribed procedures. When your account is used without authorization, you should immediately notify the Partying operator, otherwise the unauthorized use will be regarded as your own behavior, and you will bear all the losses and consequences arising therefrom. Except for the fault of the Partying operator, you are responsible for all the behavior results under your account (including but not limited to signing agreements online, publishing information, purchasing goods and services, and disclosing information, etc.). If you find any unauthorized use of your account to log in to the Partying or other situations that may cause your account to be stolen or lost, we recommend that you immediately notify the Partying operator. You understand that it takes reasonable time for the Partying operator to take action on any of your requests, and the actions taken by the Partying operator at your request may not avoid or prevent the formation or expansion of the consequences of the violation. Except that it is the Partying operator's legal fault, Partying operator does not assume any responsibility.</p>

                    <p>4.4 Personal Data Protection</p>

                    <p>Please refer to the “Privacy Policy” and “Children's Privacy Protection Statement” on the Partying. Once you start using the products or services provided by us, it is deemed that you have fully understood and agreed to the “Privacy Policy” and “Children's Privacy Protection Statement” of the Partying.</p>

                    <p className="title1">Article 5 [Partying services and specifications]</p>

                    <p>5.1 Partying service</p>

                    <p>5.1 The Partying provides you with services including but not limited to:</p>

                    <p>5.1.1 Any website directly owned or operated by the Partying operator;</p>

                    <p>5.1.2 The user terminals directly owned or operated by the Partying operator, including but not limited to the user terminals of PC, tablet computer, mobile phone, etc.;</p>

                    <p>5.1.3 Personal center service for Partying user;</p>

                    <p>5.1.4 Partying chat room service: creating and entering chat rooms to participate in voice and text chats;</p>

                    <p>5.1.5 Partying message service: private chat, group, friend relationship, etc.;</p>

                    <p>5.1.6 Partying invitation, rewards, and red envelope services: initiating invitations, rewards, and sending red envelopes to users;</p>

                    <p>5.1.7 Other technologies and / or services , such as mini games and the creation, joining, and management of agencies,provided by the Partying (hereinafter referred to as "other technologies and services").</p>

                    <p>(The above services are collectively referred to as "Partying services").</p>

                    <p>The Partying service can only used by yourself on the Partying. Any illegal separation of the Partying service from the Partying by malicious cracking, etc., does not belong to the Partying service agreed in this agreement. The actor is responsible for all legal consequences arising therefrom, and the Partying operator will pursue the legal responsibility of the actor according to law.</p>

                    <p>The official method announced by the Partying website is the only legal way to register, log in, download, and use the Partying service. The Partying services (including but not limited to accounts, props, downloads, etc.) that you obtain through any other channels or in any way are all for illegal acquisition, the Partying operator does not recognize its effectiveness, and once found out, Partying operator has the right to delete, freeze, clear, seal, etc. immediately. Any adverse consequences caused by you shall be borne by you, and Partying operator has the right to pursue the legal responsibility of the corresponding person or organization according to law. The Partying operator has the right to announce to you (including but not limited to pop-up pages, website announcements, site messages, etc.) to modify, replace, and upgrade any software related to the Partying service. If you do not agree or do not accept the modification, replacement, and upgrade of Partying service-related software, please directly refuse, stop, or cancel all actions of using the Partying; otherwise you are deemed to agree and accept the modification, replacement, and upgrade of Partying-related software. At the same time, the agreed and accepted actions are still bound by this agreement.</p>

                    <p>You understand and recognize that Partying virtual items include, but are not limited to, virtual gifts, props, titles, etc. The ownership belongs to the Partying operator, and users can only use and consume in accordance with the rules of the platform in accordance with the law, and the sale or cash out of virtual items is prohibited. You understand and recognize that the Partying operator has the right to establish, add, and modify value-added services and issue value-added service tokens in the platform services as needed. The value-added service token is obtained by using the actual currency. Once the actual currency is converted into the value-added service token, it cannot be returned. The value-added service token is used to purchase the use right of relevant virtual props or accept relevant value-added services, and cannot be converted into actual currency. The platform has the right to award corresponding charm value according to the actual situation of users using value-added service tokens, rewards or giving virtual gifts. The charm value can only be consumed on the platform and cannot be converted into real currency.</p>

                    <p>If there is no special requirement for the using period, it is preset that the user can continue to use all kinds of virtual items in the Partying after obtaining the right to use until the corresponding Partying service is terminated; if there is a special requirement for the using period, you may use the product till the expire date. If the period of use is exceeded, the Partying operator has the right to withdraw its right to use at any time without further notice to the user (the period of use is not interrupted or suspended for any reason). In the case where users purchase the right of using virtual items or accept other value-added services, if the effective period of the virtual item or the effective service period of the value-added service (regardless of whether the user has actually used or enjoyed the service) is expired, or the number of valid uses or services is exhausted, the Partying operator has the right to take measures to cancel the user's right to use the above virtual items or stop providing value-added services.</p>

                    <p>Special Notices: Partying operators attach great importance to anti-fraud and anti-money laundering. In addition to taking applicable and necessary legal actions, Partying operator has the right to permanently confiscate，freeze or return to the original recharge account every virtual item and value-added service token in the user's account that we have determined to be obtained by fraud or to be related to money laundering; This includes the virtual items and value-added service tokens obtained by fraud, the virtual items and value-added service tokens presented or traded by other users after obtaining by fraud, and the virtual items and value-added service tokens involved in abnormal transaction or money laundering. If the Partying operator suspects that the virtual items or value-added service tokens you hold are purchased or obtained through fraud channels (whether or not fraudulent means are taken by you), or if the accounts, virtual items, and value-added service tokens are found to be inconsistent with regular transactions, the Partying operator has the right to freeze your account or the corresponding amount of virtual items and value-added service tokens in the account, and will provide you with an opportunity to complain. The judgment and final interpretation right of fraud and money laundering belongs to the partying operator.</p>

                    <p>You understand and acknowledge that, in view of the special nature of network services, Partying operator has the right to change, interrupt or terminate some or all of the services (including paid services) at any time. If the Partying operator changes, interrupts or terminates the service, it shall notify the user in time, and shall provide the affected user with an equivalent alternative service.</p>

                    <p>You understand and recognize that the Partying operator enjoys the following rights. The Partying operator ’s exercise of the following rights is not considered a breach of contract, and you do not pursue and exempt the Partying operator ’s related legal responsibilities: for your Experience value, level, attention, subscription, title, electronic ticketing, virtual live performance room, virtual items, virtual gifts and rewards, downloads, and any data information generated during the operation of the Partying and stored in the Partying network database (including but not limited to derivatives such as account data information, live broadcast period information, virtual gift information, consumption information, etc.) (hereinafter referred to as "derivatives"), you confirm that you do not have ownership (unless the Partying announces otherwise) , and the Partying operator permits you to use it in accordance with the rules of the Partying, and the Partying operator shall not be liable for any compensation for the above derivatives. The Partying operator has the right to decide the date of recovery according to the actual situation, without further notice to you or your consent.</p>

                    <p>You agree and guarantee that the Partying service or its derivatives shall not be used for illegal profit-making by reselling, exchanging, mortgage or other valuable transactions; you will not use the Partying service or its derivatives to infringe on the legal rights and interests of others. It is forbidden to steal or embezzle other people's accounts, virtual gifts, etc. by network vulnerabilities, malicious software or other illegal means.</p>

                    <p>You understand and agree that the value-added service tokens and charm value are prohibited from withdrawing, and any recharge and trading of virtual items performed not on official channel of Partying are prohibited behaviors. Once discovered, your account will be banned and the account balance, virtual gifts and other value-added services are not refundable. If you recharge your Partying account or purchase paid services of the Partying (including but not limited to the purchase of the right to use the virtual gifts in the Partying and the acceptance of other value-added services and other types of charging projects) on non-official channel of Partying, it may result in risks (including but not limited to criminals using your account or bank card and other valuable cards to carry out illegal activities) and your economic losses. Partying will not be responsible for the aforementioned risks and losses.</p>

                    <p>The relationship labels and related services provided by the platform for users are only for the purpose of entertainment and interaction, and are not the authentication of the true relationship between users, nor do they encourage, promote or guarantee the establishment of any true relationship between users. The relationships, connections and disputes between you and other users are not related to the platform. The illegal agreement between you and other users and the agreement that is contrary to the terms of this agreement will not be recognized by this platform. The platform will not bear any responsibility for handling the disputes arising from it. For the relevant behaviors that violate the provisions of this agreement and the rules of the platform, Partying operators have the right to take punishment measures.</p>

                    <p>5.2 Automatic Subscription Service</p>

                    <p>5.2.1 Service description: Partying operator provides users with automatic subscription services according to product needs. The automatic subscription services will be strictly implemented in accordance with the terms of service and operating instructions, and are a part of the platform services. The platform has the right to unilaterally decide and adjust the content and method of the automatic subscription service based on its own operating strategy.</p>

                    <p>5.2.2 Automatic subscription procedure</p>

                    <p>1. Before enabling the automatic subscription service, you must register as a platform user based on true, accurate, legal and valid personal information and successfully log in to the platform account, otherwise the platform has the right to refuse or cancel your automatic subscription. If you log in with a third-party account, you should ensure that the third-party account and the information contained in it are true, accurate, legal and valid. If you are unable to log in due to a third-party account issue, you may contact the third party for resolution, for which Partying platform operator is not responsible. Partying operator will not refund you the automatic subscription fee you have consumed and will not make any form of compensation/compensation.</p>

                    <p>2. When you choose the automatic subscription service, it means that you accept the Partying platform automatic subscription service and related service regulations. If you do not agree to any of the foregoing procedures, rules or contents, you are not able to perform automatic subscription operations. Once you have completed the automatic subscription operation, it means that you have no objection to all the procedures, rules and content.</p>

                    <p>3. You understand and agree that the automatic subscription service is limited to be used in the applied account; that the automatic subscription service belongs to network goods and virtual goods, and the service is provided only after payment; that the cost is for the price of the virtual goods/services you purchased, not for prepayments or savings, deposits, debit card or other uses; and that the automatic subscription service is non-refundable and non-transferable once it is enabled. You can check for free the virtual products/services, and consumption records, etc. that you have automatically subscribed in the platform, and you can also cancel the automatic subscription of the the corresponding virtual products/services.</p>

                    <p>5.2.3 Service content and service fee of automatic subscription</p>

                    <p>1. You understand and agree that in view of the diversity of virtual products/services in the platform, the automatic subscription of different virtual products/services has different prices, and the prices will be shown in the page description of the platform and may be adjusted. Partying operator has the right to adjust the automatic subscription fees and applicable user equipment terminals of all or part of virtual products/services based on its own operating strategies. Such adjustments will be notified by the platform on the corresponding service page or in other reasonable ways.</p>

                    <p>2. The service period of the automatic subscription service starts from the time you choose to activate the automatic subscription service and ends when you cancel the service or the balance in your account is insufficient. If you need to cancel the subscription, please turn off the automatic subscription function in the app store 24 hours before the current subscription expires.</p>

                    <p>3. The automatic subscription service is a fee-based service, and the corresponding service fee need to be paid in order to use the service. The platform operator did not provide other ways to obtain the service.</p>

                    <p>4. Before enabling the automatic subscription service, you should carefully check the account name, and the content, price, service period and other information of the virtual goods/service to be automatically renewed. The automatic subscription service fee is non-transferable and non-refundable when your payment is completed.</p>

                    <p>5. The charging standard of the automatic subscription service is independently determined by the platform according to its operating strategy, and will be shown to you on the relevant virtual product/service page. If the price of the automatic subscription service is adjusted, the current effective price published on the platform should prevail. You understand and agree that your continued operations (including but not limited to checking automatic subscription, continuing to pay or enjoying automatic subscription services, etc.) mean that you are aware of and agree to the adjusted charging standard.</p>

                    <p>5.3 Service Specification</p>

                    <p>The ownership of the Partying account belongs to the Partying operator. Upon the completion of registration, you will get the right to use the Partying account, which right belongs to the initial registrant. You are obliged to properly keep the account and password obtained when registering and using the Partying, and be responsible for the series of activities or activities started after logging in to the system for this group of accounts and passwords. In view of the particularity of the network service, the Partying does not check whether the group account and password are used for you, but only checks whether the account and password are consistent with those stored in the database, as long as the account and password entered by anyone is saved in the database. If you are consistent, you can log in to the Partying with this group of accounts and passwords. If the user is not the initial registrant of the account, the Partying operator has the right to freeze and withdraw the account without notice to the user and without any legal liability. The caused losses, including but not limited to your communication interruptions, and reset of user data and virtual items are borne by you. All activities under the user account are regarded as your own actions, and you are fully responsible for such activities. If the ownership of the user account or user account balance is in dispute, the Partying operator has the right to temporarily freeze the suspicious or disputed account and account balance when discovering suspicious accounts, suspicious funds, abnormal recharges, abnormal transactions, or receiving complaints from related parties. The parties to the dispute shall provide evidence to prove the attribution of the account or account balance within a reasonable period of time. The Partying operator will make a decision on the attribution according to the evidence provided by the parties, and reasonably handle the suspicious or disputed account and account funds.</p>

                    <p>Unless proven to the contrary, the Partying operator treats you as the copyright owner of the content you upload, publish or transmit on the Partying. Your use of the Partying service to upload, publish or transmit content means that you have the right and have consented to authorize all the intellectual property rights (including but not limited to copyrights, trademark rights, and all related derivative rights) to Partying operators with a global, irrevocable and permanent free use of all the uploaded content (including but not limited to video, audio, hereinafter referred to as “Performance”) you publish or transmit on the Partying. During the agreement period and after the agreement expires, the Partying operator can use the above performances in any way and enjoy the corresponding benefits. Without the prior written consent of the Partying operator, you are not allowed to provide or authorize any third party to use in any way and get any income.</p>

                    <p>In order to facilitate your use of Partying and other related services of affiliated companies, you authorize Partying operators to pass the information you provided and formed during the account registration and use of Partying services to other related companies service providers such as affiliated companies of Partying operators..</p>

                    <p>You can purchase value-added services for virtual products while using Partying services. If there is no special instructions, you can obtain virtual products through Partying or the legal channels authorized by the Partying. The specific usage methods and duration are subject to the instructions attached to the Partying page or similar official documents with the above explanatory nature. The virtual product will be adjusted at any time due to factors such as user needs, website strategy adjustment, user acceptance, etc. For specific information, please refer to the page description at the time. Based on the nature and characteristics of virtual products, Partying operators do not provide refund or exchange services for virtual products. If you consume all the obtained virtual products and will not continue to use the virtual product service, the service will be terminated.</p>

                    <p>You should abide by the terms of this agreement, use this service correctly and appropriately, and must not disrupt the order of the Partying, including but not limited to disrupting the financial order of the Partying (such as selling virtual property, virtual gifts, etc.). Unless you are authorized in writing by the Partying operator, you may not use virtual products in the commercial field, including but not limited to trading, exchanging, mortgage, or using virtual product services in a specific way to obtain improper profits. It is important to note that if you are suspected of using unreasonable means to recharge your account (including but not limited to illegal use of credit card cash), Partying operators have the right to temporarily or permanently close your account based on reasonable judgment. At the same time, the Partying operator reserves the right to withdraw the account, user name, account funds, and virtual products at any time.</p>

                    <p>Any user should obtain Partying virtual product services through legal channels. All virtual products and their derivative services obtained through unofficially announced channels shall not have legal effect on Partying. Partying operators have the right to unilaterally withdraw related virtual products and terminate corresponding services. In serious cases, the Partying operator has the right to suspend or terminate your use of all or part of the services of the Partying, close the account, and save relevant information in accordance with laws and regulations and report to the relevant departments.</p>

                    <p>The legal disputes caused by your civil actions with others on the Partying shall be handled or resolved by the parties on their own, and the Partying operators do not assume any responsibility. Partying operators will actively cooperate with police investigations to help users maintain their legitimate rights and interests.</p>

                    <p>You understand that when using the Partying services, you are exposed to a wide range of content and information sources. Partying operators cannot be responsible for the accuracy, authenticity, availability, security, integrity, and legitimacy of the content and information. You understand and acknowledge that you may be exposed to incorrect and unpleasant, inappropriate or offensive content and information, or anonymous or infamous information that infringes on the rights (including intellectual property rights) of others. These risks are not as a result of the Partying operator, you can not held Partying operator accountable for the related responsibilities. You can inform the Partying by promptly complaining to the official customer service of Partying. The Partying operator has the right to stop transmitting any of the foregoing content according to law and take corresponding treatment, including but not limited to suspending your continued use of part or all of the services of Partying and keeping relevant records and report to the relevant authorities.</p>

                    <p>Partying platform will not endorse, recommend or express opinions on any content and information uploaded, published or transmitted on the Partying platform, nor shall it be liable for any error, defect, loss or damage of any content and information. Any use of content and information is at your own risk.</p>

                    <p>You agree that the Partying operator will place commercial advertisements or any other type of commercial information in various ways during the process of providing services (including but not limited to placing advertisements on any location of the Partying, and placing it in the content you upload and disseminate Advertising), you agree to accept Partying operators to send you promotions or other relevant business information via email, in-site messages, SMS, telephone, instant messaging tool, website announcements or other means.At the same time, the Partying operator has the right to add watermark of website logo (or name) and time in the live broadcast room. The Partying operator will do its best but does not guarantee that it will not affect your platform experience.</p>

                    <p>You should restrict your user behavior on the Partying by yourself, and ensure your personal safety and property safety during online live broadcast, accompanying play and performance. The Partying operator shall not be liable for damages for personal and property losses caused by your own reasons, force majeure, unexpected events or third-parties.</p>

                    <p>During the use of the Partying service, you must abide by the laws and regulations of Singapore and your region regarding computer and Internet regulations. In any case, once the Partying operator reasonably believes that your actions may violate the above laws and regulations, it may terminate the provision of services to you at any time without prior notice.</p>

                    <p>You agree and acknowledge that once you choose to download Partying, purchase the right to use related virtual items, or accept related services, it indicates that the user has fully understood and accepted the corresponding charging methods and price. User agrees that the Partying operator has the right to determine the charging method and price of the Partying service. The Partying operator has the right to determine different charging methods and price for the various services of the Partying at different stages, and the Partying operator has the right to adjust the price policy as needed. You agree not to bypass the Partying's charging methods and price in any form for online or offline transactions, and you may not evade the Partying's charging methods and price through private transaction channels.</p>

                    <p>5.4 Prohibited Content</p>

                    <p>You understand and guarantee that the content you create, upload, publish or transmit on the Partying (including your account name, comments, barrage and other information) does not contain the following content:</p>

                    <p>(1) Leaking state secrets, endangering national security, endangering national defense, or harming national honor and interests;</p>

                    <p>(2) Hateful speech or conduct, including any content that promote racism, terrorism, ageism or sexism;</p>

                    <p>(3) Arouse people's hatred and contempt for the government and arouse dissatisfaction with the government;</p>

                    <p>(4) Pornographic, obscene or indecent, or any adult content, including any form of child exploitation;</p>

                    <p>(5) Excessively violent, including any content that is related to death or serious injury;</p>

                    <p>(6) Disturbing social order, destroying social stability, and suspected of shaking the public's confidence in law enforcement;</p>

                    <p>(7) Depicting, encouraging or assisting suicide or self-harm;</p>

                    <p>(8) Rumor, false or misleading information;</p>

                    <p>(9) Profane, blasphemous or any content that may offend people of certain faith, or otherwise related to religion;</p>

                    <p>(10) Related to gambling, abortion, weapon, or other highly explosive subject matter;</p>

                    <p>(11) Abusive, libelous, or otherwise harassing other people or group;</p>

                    <p>(12) Infringe on the legal rights and interests of others;</p>

                    <p>(13) Spam, junk mail or other unsolicited advertisement;</p>

                    <p>(14) Other contents prohibited by relevant laws, administrative regulations and state regulations;</p>

                    <p>(15) Partying determines that it is negative content or other content that is not suitable for publishing or transmission.</p>

                    <p>If the content you upload, post or transmit contains information or content that violates the above laws and regulations, or violates the legal rights of any third party, you will directly bear all the adverse consequences caused by the above. If this causes adverse consequences to the Partying, you shall be responsible for eliminating the impact and compensating all losses caused by this to the Partying operator, including but not limited to property damage compensation, reputation damage compensation, attorney fees, transportation fees, and any other reasonable expenses arising from the protection of rights.</p>

                    <p>5.5 Prohibition</p>

                    <p>You understand and guarantee that you will not perform the following prohibited actions on the Partying, nor allow anyone to use your account to perform the following actions:</p>

                    <p>1) Impersonate another person or organization, or misrepresent that you are in contact with any person or entity (including setting a false account name or access another user's account), or use maliciously your registered account, leading to misidentification of other users when registering an account, or using Partying services (including but not limited to uploading, publishing, disseminating information, etc.);</p>

                    <p>2) Forge the title or manipulate the content in other ways to make others mistake the content as being transmitted by Partying;</p>

                    <p>3) Upload, post, email or otherwise transmit content that is not authorized to be transmitted (such as internal information, confidential information, content that infringes anyone ’s patents, trademarks, copyrights, trade secrets or other exclusive rights, etc.);</p>

                    <p>4) Upload, post, send e-mail or transmit in any other way any unsolicited or unauthorized "spam", advertising or promotional materials, promotional materials, or any other commercial communications;</p>

                    <p>5) Without the explicit permission of the Partying operator, use the Partying services for any commercial purpose or for the benefit of any third party;</p>

                    <p>6) Track or harass others in any other way;</p>

                    <p>7) Participate in any activities or transactions that are illegal or likely to be illegal (judgment by Partying), including teaching criminal methods, selling any illegal drugs, money laundering activities, fraud, etc .;</p>

                    <p>8) Gambling, gambling in disguise or providing gambling information or inducing others to participate in gambling activities by any means;</p>

                    <p>9) Use the intellectual property rights of Partying operators (including Partying's trademarks, brands, logos, any other proprietary materials or the layout or design of any web page), or violate in any other way any intellectual property rights of Partying operators (including attempting to reverse engineer the users of the Partying platform or the software used);</p>

                    <p>10) By using any automated programs, software, engines, web crawlers, web analysis tools, data extraction tools or similar tools, access Partying services, collect or process content provided through Partying services;</p>

                    <p>11) Participate in any "framework", "mirror image" or other technology, with the purpose of imitating the appearance and function of the Partying service;</p>

                    <p>12) Intervene or attempt to interfere with any user or any other party to access Partying services;</p>

                    <p>13) Deliberately disseminate viruses, network worms, Trojan horses, or damaged viruses that contain interference, damage, or restrict computer software, hardware or communication device functions, Partying services, servers and networks connected to Partying services Data such as files or other malicious code or projects;</p>

                    <p>14) Without the explicit consent of others, share or publish personally identifiable information of such persons;</p>

                    <p>15) Explore or test whether the Partying service, system or other user's system is vulnerable to intrusion attacks, or circumvent (or attempt to circumvent) any security features of the Partying service, system or other user's system in any other way;</p>

                    <p>16) Decompile, reverse compile or reverse engineer the software used by the Partying service, or try to make the above matters;</p>

                    <p>17) Open multiple accounts for the purpose of destruction or abuse, or maliciously upload duplicate and invalid bulk data and information;</p>

                    <p>18) Perform any behavior that undermines the fairness of the Partying services or other activities that affect the normal order of the application, such as active or passive scoring, partnership cheating, use of plug-in or other cheating software, and use of BUG (also called "vulnerability" or "defect") to obtain unlawful and illegal benefits, or use the Internet or other methods to make the plug-in, cheating software, and BUG public;</p>

                    <p>19) Carry out any commercial activities such as publishing advertisements or selling commodities, or any illegal acts that infringe the interests of the Partying, such as selling Partying virtual products, plug-ins, etc.</p>

                    <p>20) Maliciously discredit and defame the Partying or its operator, spread relevant comments or reports that damage the Partying or its operator, instigate fans, netizens or other online groups to maliciously attack the Partying or its operator, regardless of whether your Partying account has been banned or cancelled;</p>

                    <p>21) Without the written consent of the Partying operator, publish comments on the Partying or its operators on any news media, self-media and other platforms, and accept interviews about the Partying or its operators, regardless of whether your Partying account has been banned or cancelled;</p>

                    <p>22) Intentional or unintentional violation of any relevant laws, regulations, rules and other legally valid regulations in Singapore and the region you are in.</p>

                    <p>5.6 Consequences of violation</p>

                    <p>If you violate the provisions of this agreement, in addition to being penalized according to other provisions, you also agree to bear one or more of the following penalties decided by the Partying operator:</p>

                    <p>1) Warning: Warning is merely an educational guide for users who violate the rules of the platform. It is a way to manage the normal operation of the platform.</p>

                    <p>2) Banned to make a speech: Close some or all chat channels of violating users, force the suspension of the online dialogue function of the user account, and prevent the user account from talking with other users until the penalty expires or is cancelled.</p>

                    <p>3) Temporarily freezing the gameplay: limit the service permissions of the violating users and restrict some of their platform service operations until the penalty expires or is cancelled.</p>

                    <p>4) Permanently freezing the gameplay: limit the service permissions of the violating users, restrict some of their platform service operations, and never release or release them forever.</p>

                    <p>5) Temporarily prohibiting login: The user account of the violating user will be temporarily unable to log in using one or several platforms provided by the Partying for a certain period of time, until the penalty expires or is cancelled.</p>

                    <p>6) Permanent login prohibition: The user account of the violating user will be permanently unable to log in to use the Partying service.</p>

                    <p>7) Mandatory offline: Force the illegal user to leave the current service and end the execution of the user's current service.</p>

                    <p>8) Suspension of account: Suspend or permanently stop the rights of the violating user account to log in to the Partying service.</p>

                    <p>9) Taking legal responsibility: If the user's improper behavior causes damage to others or the Partying or violates the current legal provisions, the user who violates the rules shall bear the corresponding civil, administrative or criminal responsibility according to law.</p>

                    <p>10) Dissolving organization: Dissolving rganizations established by users including but not limited to agencies and other organizations.</p>

                    <p>11) Modify nickname: Users’ character nicknames, gang names, chat room names, group names, etc. that can be independently named by the user are forcibly modified.</p>

                    <p>12) Temporarily restrict service from platform: The user account of the violating user will be restricted from some services within a certain period of time.</p>

                    <p>13) Cancellation: Cancel the improper transaction and restore the virtual items traded by both parties.</p>

                    <p>14) Deduction of income from improper transaction: deduction of virtual items obtained by the illegal party or both parties in the illegal transaction.</p>

                    <p>15) Trading function restrictions: temporarily freeze the virtual items obtained by the offending party or both parties in the improper transaction, and continue to investigate their behavior within the specified period. If it does not violate the regulations again within the specified time limit, it will automatically unfreeze the corresponding virtual items when it expires; if it violates the regulations again within the specified time limit, the frozen virtual items will be deducted when the company determines that the violations exist.</p>

                    <p>16) Freeze virtual items: limit the relevant functions of virtual items of the role of violating users, including but not limited to the use, transaction, and presenting of items.</p>

                    <p>17) Recovery of virtual items: recover, including but not limited to, virtual items obtained by users due to fraud or other violations as part of the liquidated damages.</p>

                    <p>18) Other punishment measures: including but not limited to confiscating undue benefits (such as virtual items obtained by users through improper channels) as part of liquidated damages, value of deductions (including but not limited to experience value, etc.), temporary suspension of services, etc.</p>

                    <p>5.7 User income and invoicing services</p>

                    <p>User income refers to the income obtained by users through the order taking and reward services on the Partying. The platform connects the aggregation and deployment of the service side and the demand side to provide relevant technical services for both parties to the transaction. The platform only charges platform service fees for the technical services provided above. The user agrees that the Partying charges the platform service fee for users’ order taking and rewards according to the determined charging standards and rules. The platform service fee is automatically deducted before each settlement, and the user obtains the user income after the deduction from the platform . The user agrees that the user income obtained through the platform is pre-tax income, and the user should pay taxes in accordance with the relevant regulations.</p>

                    <p>5.8 Special provisions for minors</p>

                    <p>Special reminder again, if you are a minor, you should read this agreement carefully under the supervision and guidance of your parents or other custodians before clicking to agree to this agreement in the application registration process, otherwise you shall not log in to the Partying and use the Partying service. If you are an adult, but do not meet the provisions of the person with full civil capacity in your area, you are deemed to be a "minor" as specified in this agreement. Special reminder: minor users understand that if you violate laws and regulations or the contents of this agreement, you and your custodian should bear all the consequences caused by this in accordance with the law.</p>

                    <p>The Partying attaches great importance to the protection of minors ’personal information. Minor users should strengthen their personal protection awareness and be cautious when filling out their personal information, and use the Partying services correctly under the guidance of custodians.</p>

                    <p>Minor users know and agree that their use of Partying services should be under the supervision and guidance of their custodians, should learn and use the network correctly within a reasonable range, avoid indulging in virtual network space, and develop good network habits. If custodians and others give mobile phones or other devices to minor users, they should strictly manage the payment passwords of bank cards and other online payment instruments, and do not perform any real-name authentication on behalf of a minor. Partying operators do not assume any responsibility for any losses caused by regulatory negligence .</p>

                    <p>Minor users know and agree that the Partying will limit their use of the Partying services to better protect them, The limitations include but not are limited to the restricted use of service content, restricted use of platform charging items, and restrictions on the platform recharge amount, etc. Minors should choose to accept this restriction when using Partying services, otherwise they have no right to log in to Partying and use Partying services.</p>

                    <p>Users should carefully publish content containing minor materials. Once published, it is deemed that the user agrees the Partying to display minors' information, portraits, sounds, etc., and allows the Partying operator to use and handle such minor-related content.</p>

                    <p className="title1">Article 6 【Intellectual Property Rights】</p>

                    <p>Unless otherwise agreed or otherwise stated by the Partying operator, all intellectual property rights (including but not limited to copyright, trademark rights, patent rights, trade secrets, etc.) and related rights of all the content (except for the content that the user has copyright), technology, software, programs, data and other information (including but not limited to text, images, pictures, photos, audio, video, graphics, color, layout, electronic documents) on the Partying all belong to the Partying operator or its affiliated company. Without the permission of the Partying operator, no one shall use (including but not limited to copy, disseminate, display, mirror, upload, download, modify, rent) it.</p>

                    <p>The Partying's Logo, "Partying", and graphics and combinations thereof, as well as the Partying's other logos, signs, product and service names are trademarks of Partying or Partying affiliated companies, and no one shall in any way exhibit, use or dispose of them without the written authorization of the Partying operator, nor shall it be shown to others that you have the right to exhibit, use or dispose of it.</p>

                    <p>Partying operators enjoy full intellectual property rights to Partying proprietary content, original content and other exclusive or exclusive content obtained through authorization. Without the permission of the Partying operator, no unit or individual may privately reprint, disseminate and provide viewing services or other acts that infringe Partying's intellectual property rights, otherwise they will bear all relevant legal responsibilities including infringement.</p>

                    <p className="title1">Article 7 [Infringement Complaint]</p>

                    <p>7.1 If any third party believes that the user uses the Partying to infringe its civil rights or to commit a tort, the infringed party has the right to notify the Partying operator in writing to take necessary measures such as deletion, masking, and disconnection.</p>

                    <p>7.2 Any third party that believes that the works, performances, audio and video products involved in the Partying infringes its legal rights and interests may submit a written notice to the Partying operator, requesting the Partying to delete the infringing work, or disconnect the link . The notice shall include the following: the name (name), contact information and address of the right holder; the name and network address of the infringing works, performances, recordings and video products that require deletion or disconnection; the effective right certificate of the right holder material. The right holder shall be responsible for the authenticity of the notice, and if the infringement complaint is untrue, it shall bear corresponding legal responsibility.</p>

                    <p>7.3 The infringement complaint must include the following information: the infringed person ’s valid proof of rights, or the original link and other certification materials of the infringed work; the specific name and link of the infringing information or work on the Partying; the complainant’s contact information, including e-mail address, phone number or mobile phone, etc. so that the Partying operator can get in touch with you in a timely manner. The content of the complaint must include the following statement: "In the principle of good faith, there is evidence that the object infringes my legitimate rights and interests. I promise that all complaint information is true and accurate, and I will voluntarily bear all consequences. " There shall be a autographic signature and a date. If the complaint is filed on behalf of another person, an authorization letter signed by the authorized person must be presented.</p>

                    <p>7.4 In order to avoid disputes, the user understands and agrees that all intellectual property rights disputes arising independently from the content of the Partying during the service of the Partying should be resolved separately with Partying operator.</p>

                    <p className="title1">Article 8 【User's breach and handling】</p>

                    <p>8.1 Determination of breach of contract</p>

                    <p>If one of the following situations occurs, it is regarded as your breach of contract:</p>

                    <p>(1) Violating relevant laws and regulations when using the Partying service;</p>

                    <p>(2) Violating this agreement or the supplementary agreement of this agreement (i.e., Article 3.2 of this agreement).</p>

                    <p>In order to adapt to the development of the Internet industry and meet the needs of mass users for efficient and high-quality services, you understand and agree that Partying operators can set the procedures and standards for determining breach of contract in the Partying rules. For example, the Partying operator can determine whether you constitute a breach of contract based on the relationship between your user data and massive user data.The authenticity of the data shall be subject to the background data of the Partying or the third-party platform data approved by the operator of the Partying, and the right of final interpretation belongs to the operator of the Partying; you are obliged to fully prove and reasonably explain the abnormal phenomena of your data, otherwise it will be deemed as a breach of contract.</p>

                    <p>8.2 Measures for handling breach of contract</p>

                    <p>If the content and information you publish on the Partying constitute a breach of contract, the Partying operator can immediately delete the corresponding content and information, mask, etc. according to the corresponding rules or suspend the use of your account, block, freeze or empty the virtual gifts and cancellations. If your behavior on the Partying, or the behavior that has not been implemented on the Partying but has an impact on the Partying and its users, constitutes a breach of contract, the Partying operator may perform restrictions on participation and suspension of your account in accordance with the corresponding rules. Provide you with some or all services (such as sealing up virtual performance rooms, freezing or emptying virtual gifts, deduction of penalty, etc.) handling measures. If your actions constitute a fundamental breach of contract, the Partying operator may close your account and terminate the provision of services to you. If your account is closed, the virtual products in your account will be cleared and the related virtual product services will be terminated.</p>

                    <p>If your behavior on the Partying violates relevant laws and regulations, the Partying operator may report and submit your usage records and other information to the relevant authorities in accordance with the law. At the same time, the Partying operator may publish information on the measures for handling the above violations and other illegal information confirmed by the legal documents in force of the administrative or judicial authorities on the Partying. In addition, Partying operators can perform blacklist management and credit management on you in accordance with relevant laws and regulations, and provide management and services linked to credit rating. If you are listed in the blocklist, the Partying has the right to take measures to prohibit re-registration of the account and report to the relevant authorities in time.</p>

                    <p>8.3 Liability</p>

                    <p>If your actions cause losses to Partying operators and / or their affiliates (including but not limited to their own direct economic losses, goodwill losses and externally paid compensation, settlement, legal fees, litigation fees and other indirect economic losses ), You shall compensate Partying operators and / or their affiliated companies for all the above losses. If your actions cause the Partying operator and / or its affiliated companies to be subject to rights claimed by a third party, the Partying operator and / or its affiliated companies may recover all losses from you after assuming financial payment obligations to the third party .</p>

                    <p>8.4 Special agreement</p>

                    <p>Partying operators are responsible for providing Partying services to you "as is" and "available". The Partying operator bears the corresponding obligations in accordance with the law, but is unable to respond to the maintenance of the information network equipment, connection failures, computer, communication or other system failures, hacking activities, computer viruses, power failures, strikes, riots, fires, floods , Storms, explosions, wars, government actions, the orders of judicial administrative agencies or the results of damages caused to you by third parties. And the Partying operator resume no responsibility to this.</p>

                    <p>Partying operators do not guarantee that the services controlled or provided are appropriate and feasible in all countries or regions. Any user who uses Partying services in other jurisdictions should ensure that they comply with local laws and regulations. Partying operators will be assumed no liability.</p>

                    <p className="title1">Article 9 [Change of Agreement]</p>

                    <p>Partying operators may modify this agreement and supplementary agreement from time to time according to the changes in national laws and regulations and Partying services. The changed agreement and supplementary agreement (hereinafter referred to as "changes") will be agreed through the way in Article 10 of this agreement to notify you. Once the updated agreement terms are announced, they will replace the original agreement terms.</p>

                    <p>If you disagree with the change, you should stop using the Partying service from the effective date of the change; if you continue using the Partying service after the change takes effect, it is deemed that you agree to the effective change.</p>

                    <p className="title1">Article 10 [Notice]</p>

                    <p>You agree that the Partying operator will send you notifications, information, and communication or contact requests to you in the following reasonable ways:</p>

                    <p>(1) The publicized texts, including but not limited to the revised "User Agreement";</p>

                    <p>(2) Messages on the Partying, pop-up messages, and messages pushed by APP;</p>

                    <p>(3) E-mails, SMS, phone calls, messages on instant messaging tools, and letters, etc. sent or made according to the contact information you reserved on the Partying;</p>

                    <p>The Partying operator will send you a notification through the above method, and it will be deemed to be delivered when it is sent successfully; the written notification sent by the paper carrier will be deemed to be delivered on the fifth natural day after it is sent according to the provided contact address.</p>

                    <p>For any disputes arising from trading activities on the Partying, you agree that the judiciary (including but not limited to courts and arbitration institutions) can serve you legal documents (including but Not limited to litigation documents and arbitration documents). The mobile phone number, e-mail address and other contact information you specify to receive legal documents are the mobile phone number and e-mail contact information you provided when you registered and updated on the Partying. Judicial authorities shall send the legal documents to the above contact information as if they were served. The mailing address you specify is your legal contact address or the valid contact address you provided.</p>

                    <p>You agree that the judiciary may use one or more of the above delivery methods to deliver legal documents to you. The judiciary may serve you with legal documents in multiple ways, and the delivery time shall be based on the first delivery method among the above delivery methods.</p>

                    <p>You agree that the above delivery method applies to all stages of the judicial process. Such as entering the proceedings, including but not limited to the first instance, second instance, retrial, execution and supervision procedures.</p>

                    <p>You should ensure that the contact information provided is accurate, effective, and updated in real time. If the contact information provided is inaccurate or the changed contact information is not notified in time, the legal documents cannot be delivered or not delivered in time, and you shall bear the legal consequences that may arise from it.</p>

                    <p className="title1">Article 11 [ Termination / Service Termination]</p>

                    <p>11.1 Case of termination</p>

                    <p>You have the right to terminate this agreement in any of the following ways:</p>

                    <p>(1) You can cancel your account through the website when meeting the clearing conditions such as account cancellation on the website of the Partying;</p>

                    <p>(2) Before the change becomes effective, you stop using it and expressly do not want to accept the change;</p>

                    <p>(3) You expressly do not want to continue using the services of the Partying and meet the termination conditions of the Partying.</p>

                    <p>When the following conditions occurs, the Partying operator may notify you to suspend or terminate this agreement without taking any responsibility by the methods listed in Article 10 of this agreement:</p>

                    <p>(1) If you violate this agreement, the Partying operator will terminate this agreement in accordance with the breach clause</p>

                    <p>(2) If you transfer your account, misappropriate someone else's account, provide false registered identity information, publish prohibited content and information, defraud others' property, or take improper means for profit, Partying operators have the rights to seal your account in accordance with Partying rules;</p>

                    <p>(3) In addition to the above circumstances, because you have repeatedly violated the relevant provisions of the Partying rules and the circumstances are serious, the Partying operator has the rights to seal up your account in accordance with the Partying rules;</p>

                    <p>(4) Your account was cleared or cancelled by the Partying operator in accordance with this agreement;</p>

                    <p>(5) You have violated the legal rights or interests of others or other serious violations of laws and contracts on the Partying;</p>

                    <p>(6) Other situations in which the Partying operator should terminate the service in accordance with relevant laws and regulations.</p>

                    <p>11.2 Treatment after termination of the agreement</p>

                    <p>After the termination of this agreement, unless clearly stipulated by law, the Partying operator has no obligation to disclose any information in your account to you or your designated third-party vendors.</p>

                    <p>After the termination of this agreement, Partying operators enjoy the following rights:</p>

                    <p>(1) Stop collecting and using your personal information, but can continue to save other content and information that you keep on the Partying;</p>

                    <p>(2) For your past breaches, the Partying operator can still hold you accountable for breach of contract in accordance with this agreement.</p>

                    <p className="title1">Article 12 [Law Application, Jurisdiction and Others]</p>

                    <p>The conclusion, entry into force, interpretation, amendment, supplementation, termination, execution and dispute resolution of this agreement shall be governed by the laws of the Republic of Singapore, without regard to the principle of legal selection; if there are no relevant provisions in the law, refer to business practices and / or industry practices.</p>

                    <p>Disputes arising from using the Partying service and related to the Partying service will be resolved by the Partying operator in consultation with you. When the negotiation fails, either party shall submit to the Wuhan International Arbitration Center, and the arbitration shall be conducted by it in accordance with the Wuhan International Arbitration Center ’s arbitration rules. The place of arbitration shall be Wuhan, and the language of arbitration shall be Chinese. .</p>

                    <p>If any clause of this agreement is deemed to be repealed, invalid or unenforceable, the clause shall be regarded as divisible and shall not affect the validity and enforceability of the remaining clauses of this agreement.</p>


                </div>
            </section>
        </article>
    );
}

export default Agreement;

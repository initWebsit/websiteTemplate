import React from "react";

export const RightArrow = (props) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" className={props.className} onClick={props.onClick}>
            <path d="M22.4191 25.0858L22.1716 25.3333L22.6666 25.8282L22.9141 25.5807L22.4191 25.0858ZM27.9999 19.9999L28.2474 20.2474L28.4949 19.9999L28.2474 19.7524L27.9999 19.9999ZM22.9141 14.4191L22.6666 14.1716L22.1716 14.6666L22.4191 14.9141L22.9141 14.4191ZM22.9141 25.5807L28.2474 20.2474L27.7524 19.7524L22.4191 25.0858L22.9141 25.5807ZM28.2474 19.7524L22.9141 14.4191L22.4191 14.9141L27.7524 20.2474L28.2474 19.7524ZM27.9999 19.6499H10.6666V20.3499H27.9999V19.6499ZM19.9999 38.3166C9.8839 38.3166 1.68325 30.1159 1.68325 19.9999H0.983252C0.983252 30.5025 9.4973 39.0166 19.9999 39.0166V38.3166ZM38.3166 19.9999C38.3166 30.1159 30.1159 38.3166 19.9999 38.3166V39.0166C30.5025 39.0166 39.0166 30.5025 39.0166 19.9999H38.3166ZM19.9999 1.68325C30.1159 1.68325 38.3166 9.8839 38.3166 19.9999H39.0166C39.0166 9.4973 30.5025 0.983252 19.9999 0.983252V1.68325ZM19.9999 0.983252C9.4973 0.983252 0.983252 9.4973 0.983252 19.9999H1.68325C1.68325 9.8839 9.8839 1.68325 19.9999 1.68325V0.983252Z" fill={props.color}/>
        </svg>
    )
}

export const Svg1 = (props) => {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={props.className} onClick={props.onClick}>
            <path d="M30.0041 60C13.4549 60 0 46.5451 0 30.0041C0 13.4632 13.4549 0 30.0041 0C46.5533 0 60.0082 13.4549 60.0082 30.0041C60.0082 46.5533 46.5533 60.0082 30.0041 60.0082V60ZM31.7899 41.9366C31.6747 41.9366 31.5677 41.9778 31.4854 42.0601C31.4031 42.1424 31.3537 42.2576 31.3537 42.3728V56.6507C31.3537 56.7823 31.4113 56.9058 31.5183 56.9881C31.5924 57.0539 31.6911 57.0786 31.7899 57.0786C31.8228 57.0786 31.8557 57.0786 31.8886 57.0704C36.4559 56.0335 40.6364 51.1452 43.0887 44.0022C43.1299 43.887 43.1134 43.7635 43.0641 43.6566C43.0064 43.5496 42.9077 43.4755 42.7925 43.4426C39.3691 42.5621 35.6741 42.0518 31.8146 41.9284H31.7981L31.7899 41.9366ZM28.2019 41.9366C24.3423 42.0601 20.6474 42.5703 17.224 43.4508C17.1088 43.4837 17.01 43.5578 16.9524 43.6648C16.8948 43.7718 16.8866 43.8952 16.9277 44.0104C19.3801 51.1535 23.5606 56.0335 28.1278 57.0704C28.1607 57.0704 28.1937 57.0786 28.2266 57.0786C28.3253 57.0786 28.4159 57.0457 28.4981 56.9881C28.5969 56.9058 28.6627 56.7823 28.6627 56.6507V42.3728C28.6627 42.2576 28.6134 42.1424 28.5311 42.0601C28.4488 41.9778 28.3418 41.9366 28.2266 41.9366H28.2101H28.2019ZM13.8417 44.5042C13.7923 44.5042 13.743 44.5124 13.6936 44.5289C11.9819 45.1461 10.4101 45.8703 9.0358 46.6603C8.92882 46.7261 8.84652 46.8331 8.83006 46.9565C8.80538 47.08 8.83829 47.2116 8.92059 47.3104C11.5457 50.5034 14.9198 53.0956 18.6806 54.8155C18.7382 54.8402 18.7958 54.8567 18.8616 54.8567C18.9933 54.8567 19.1167 54.7991 19.2072 54.6921C19.3307 54.5357 19.3307 54.3135 19.2072 54.1572C17.1664 51.6472 15.504 48.5036 14.2614 44.8004C14.2203 44.6935 14.1462 44.6029 14.0392 44.5453C13.9816 44.5206 13.9158 44.5042 13.85 44.5042H13.8417ZM46.1665 44.5042C46.1007 44.5042 46.0348 44.5206 45.9772 44.5453C45.8703 44.5947 45.7962 44.6852 45.755 44.8004C44.5124 48.5036 42.8501 51.6555 40.8092 54.1654C40.6858 54.3218 40.6775 54.544 40.8092 54.7003C40.8915 54.8073 41.0232 54.8649 41.1548 54.8649C41.2125 54.8649 41.2783 54.8484 41.3359 54.8238C45.0967 53.1038 48.4707 50.5034 51.0959 47.3186C51.1782 47.2199 51.2111 47.0882 51.1864 46.9647C51.1617 46.8413 51.0876 46.7343 50.9807 46.6685C49.5899 45.862 48.0263 45.1461 46.3229 44.5289C46.2735 44.5124 46.2241 44.5042 46.1747 44.5042H46.1665ZM48.4378 31.362C48.2074 31.362 48.0099 31.5512 48.0016 31.7816C47.8864 35.1145 47.4585 38.3486 46.7261 41.41C46.6767 41.6239 46.7919 41.8461 47.0059 41.9202C49.0879 42.6608 50.9807 43.5249 52.6183 44.5042C52.6841 44.5453 52.7664 44.5618 52.8405 44.5618C52.9886 44.5618 53.1285 44.4877 53.2108 44.3561C55.5479 40.587 56.9387 36.2584 57.2349 31.8228C57.2349 31.6994 57.202 31.5841 57.1197 31.5019C57.0374 31.4113 56.9222 31.362 56.807 31.362H48.446H48.4378ZM3.21767 31.362C3.09423 31.362 2.98724 31.4113 2.90495 31.5019C2.82266 31.5924 2.78151 31.7076 2.78974 31.8228C3.086 36.2502 4.46852 40.587 6.81388 44.3478C6.89617 44.4795 7.03607 44.5536 7.1842 44.5536C7.25826 44.5536 7.33233 44.5371 7.40639 44.496C9.04403 43.5249 10.9368 42.6526 13.0188 41.9119C13.2245 41.8379 13.348 41.6157 13.2986 41.4017C12.5662 38.3486 12.13 35.1063 12.023 31.7734C12.023 31.543 11.8255 31.3537 11.5869 31.3537H3.20944L3.21767 31.362ZM15.1584 31.362C15.0432 31.362 14.928 31.4113 14.8457 31.4936C14.7634 31.5759 14.7223 31.6911 14.7223 31.8146C14.8375 34.8265 15.2407 37.7644 15.9155 40.5541C15.9402 40.6693 16.0143 40.7681 16.113 40.8257C16.1789 40.8668 16.2611 40.8833 16.3352 40.8833C16.3681 40.8833 16.4093 40.8833 16.4422 40.8668C20.1372 39.904 24.1037 39.3526 28.2266 39.2292C28.457 39.2292 28.6463 39.0317 28.6463 38.793V31.7899C28.6463 31.5512 28.4488 31.3537 28.2101 31.3537H15.1502L15.1584 31.362ZM31.7981 31.362C31.5595 31.362 31.362 31.5595 31.362 31.7981V38.8013C31.362 39.0317 31.5512 39.2292 31.7816 39.2374C35.9045 39.3609 39.8711 39.9122 43.566 40.875C43.599 40.8833 43.6401 40.8915 43.673 40.8915C43.7471 40.8915 43.8294 40.8668 43.8952 40.8339C43.994 40.7763 44.068 40.6775 44.0927 40.5623C44.7675 37.7726 45.1708 34.8347 45.286 31.8228C45.286 31.7076 45.2448 31.5924 45.1625 31.5019C45.0802 31.4196 44.965 31.3702 44.8498 31.3702H31.7899L31.7981 31.362ZM52.8405 15.4547C52.7664 15.4547 52.6924 15.4711 52.6183 15.5123C50.9807 16.4833 49.0879 17.3556 47.0059 18.0963C46.8002 18.1703 46.6767 18.3925 46.7261 18.6065C47.4585 21.6596 47.8947 24.9019 48.0016 28.2348C48.0016 28.4652 48.1992 28.6545 48.4378 28.6545H56.7988C56.9222 28.6545 57.0292 28.6051 57.1115 28.5146C57.1938 28.4241 57.2349 28.3089 57.2267 28.1937C56.9305 23.7663 55.5397 19.4294 53.2026 15.6604C53.1203 15.5287 52.9804 15.4547 52.8323 15.4547H52.8405ZM43.673 19.1332C43.673 19.1332 43.599 19.1332 43.566 19.1496C39.8711 20.1125 35.9045 20.6638 31.7816 20.7873C31.5512 20.7873 31.362 20.9848 31.362 21.2234V28.2266C31.362 28.4652 31.5595 28.6627 31.7981 28.6627H44.858C44.9733 28.6627 45.0885 28.6134 45.1708 28.5311C45.2531 28.4488 45.2942 28.3336 45.2942 28.2101C45.179 25.1982 44.7757 22.2603 44.1009 19.4706C44.0763 19.3554 44.0022 19.2566 43.9034 19.199C43.8376 19.1579 43.7553 19.1414 43.6813 19.1414L43.673 19.1332ZM16.3352 19.1332C16.2611 19.1332 16.1789 19.1579 16.113 19.1908C16.0143 19.2484 15.9402 19.3471 15.9155 19.4624C15.2407 22.2521 14.8375 25.19 14.7223 28.2019C14.7223 28.3171 14.7634 28.4323 14.8457 28.5228C14.928 28.6051 15.0432 28.6545 15.1584 28.6545H28.2184C28.457 28.6545 28.6545 28.457 28.6545 28.2184V21.2152C28.6545 20.9848 28.4652 20.7873 28.2348 20.779C24.1119 20.6556 20.1454 20.1042 16.4504 19.1414C16.4175 19.1332 16.3764 19.1249 16.3434 19.1249L16.3352 19.1332ZM7.16774 15.4629C7.01961 15.4629 6.87971 15.537 6.79742 15.6686C4.46029 19.4377 3.06954 23.7663 2.77328 28.1937C2.77328 28.3171 2.8062 28.4323 2.88849 28.5146C2.97079 28.6051 3.086 28.6545 3.20121 28.6545H11.5704C11.8009 28.6545 11.9984 28.4652 12.0066 28.2348C12.1218 24.9019 12.5497 21.6678 13.2821 18.6065C13.3315 18.3925 13.2163 18.1703 13.0023 18.0963C10.9121 17.3556 9.02757 16.4916 7.38993 15.5205C7.3241 15.4794 7.2418 15.4629 7.16774 15.4629ZM31.7899 2.92141C31.6911 2.92141 31.6006 2.95433 31.5183 3.01193C31.4196 3.09423 31.3537 3.21767 31.3537 3.34933V17.6354C31.3537 17.7507 31.4031 17.8659 31.4854 17.9482C31.5677 18.0304 31.6747 18.0716 31.7899 18.0716H31.8063C35.6659 17.9482 39.3609 17.4379 42.7843 16.5574C42.8995 16.5245 42.9982 16.4504 43.0558 16.3434C43.1134 16.2365 43.1217 16.113 43.0805 15.9978C40.6282 8.85475 36.4477 3.97476 31.8804 2.92964C31.8475 2.92964 31.8146 2.92141 31.7816 2.92141H31.7899ZM28.2101 2.92141C28.2101 2.92141 28.1443 2.92141 28.1114 2.92964C23.5441 3.96653 19.3636 8.85475 16.9113 15.9896C16.8701 16.1048 16.8866 16.2282 16.9359 16.3352C16.9936 16.4422 17.0923 16.5163 17.2075 16.5492C20.6309 17.4297 24.3259 17.9399 28.1854 18.0634H28.2019C28.3171 18.0634 28.4241 18.0222 28.5064 17.9399C28.5887 17.8576 28.638 17.7424 28.638 17.6272V3.35756C28.638 3.22589 28.5804 3.10246 28.4735 3.02016C28.3994 2.95433 28.3006 2.92964 28.2019 2.92964L28.2101 2.92141ZM41.1384 5.14333C41.0067 5.14333 40.8833 5.20093 40.7928 5.30791C40.6693 5.46427 40.6693 5.68646 40.7928 5.84282C42.8336 8.35276 44.496 11.5046 45.7386 15.2078C45.7797 15.3148 45.8538 15.4053 45.9608 15.4629C46.0184 15.4876 46.0842 15.504 46.15 15.504C46.1994 15.504 46.2488 15.4958 46.2982 15.4794C48.0016 14.8622 49.5652 14.1462 50.956 13.3397C51.063 13.2739 51.1452 13.1669 51.1617 13.0435C51.1864 12.92 51.1535 12.7884 51.0712 12.6896C48.446 9.49664 45.072 6.9044 41.3112 5.18447C41.2536 5.15979 41.196 5.14333 41.1302 5.14333H41.1384ZM18.8534 5.14333C18.7958 5.14333 18.7299 5.15979 18.6723 5.18447C14.9115 6.9044 11.5375 9.50487 8.91236 12.6896C8.83006 12.7884 8.79715 12.92 8.82184 13.0435C8.84652 13.1669 8.92059 13.2739 9.02757 13.3397C10.4019 14.138 11.9654 14.8539 13.6854 15.4711C13.7347 15.4876 13.7841 15.4958 13.8335 15.4958C13.8993 15.4958 13.9652 15.4794 14.0228 15.4547C14.1297 15.4053 14.2038 15.3148 14.245 15.1996C15.4876 11.4964 17.1499 8.35276 19.1908 5.84282C19.3142 5.68646 19.3225 5.46427 19.1908 5.30791C19.1085 5.20093 18.9768 5.14333 18.8451 5.14333H18.8534Z" fill="#FF7600"/>
        </svg>

    )
}

export const Svg2 = (props) => {
    return (
        <svg width="35" height="68" viewBox="0 0 35 68" fill="none" className={props.className} onClick={props.onClick}>
            <g clip-path="url(#clip0_540_21160)">
                <path d="M35 64.4836H33.6191V23.6201C33.6191 22.8051 32.955 22.141 32.14 22.141H25.4162V9.04808C25.4162 8.23307 24.7521 7.56899 23.9371 7.56899H18.8508V1.47909C18.8508 0.664079 18.1868 0 17.3718 0C16.5567 0 15.8927 0.664079 15.8927 1.47909V7.56899H10.8064C9.99142 7.56899 9.32734 8.23307 9.32734 9.04808V22.1335H2.5809C1.76589 22.1335 1.10181 22.7975 1.10181 23.6125V64.4836H0.0981445H35ZM12.278 10.5272H22.4505V22.1335H12.278V10.5272ZM4.06753 25.0992H30.6533V64.4836H4.06753V25.0992Z" fill="#FF7600"/>
                <path d="M1.47909 64.4836C0.664079 64.4836 0 65.1477 0 65.9627C0 66.7777 0.664079 67.4418 1.47909 67.4418H33.2417C34.0567 67.4418 34.7208 66.7777 34.7208 65.9627C34.7208 65.1477 34.0567 64.4836 33.2417 64.4836H1.47909Z" fill="#FF7600"/>
                <path d="M10.7913 27.8687C9.97634 27.8687 9.31226 28.5327 9.31226 29.3477V60.235C9.31226 61.05 9.97634 61.7141 10.7913 61.7141C11.6063 61.7141 12.2704 61.05 12.2704 60.235V29.3477C12.2704 28.5327 11.6063 27.8687 10.7913 27.8687Z" fill="#FF7600"/>
                <path d="M17.3641 27.8687C16.5491 27.8687 15.885 28.5327 15.885 29.3477V60.235C15.885 61.05 16.5491 61.7141 17.3641 61.7141C18.1791 61.7141 18.8432 61.05 18.8432 60.235V29.3477C18.8432 28.5327 18.1791 27.8687 17.3641 27.8687Z" fill="#FF7600"/>
                <path d="M19.96 12.4438H14.7606C13.938 12.4438 13.2815 13.1079 13.2815 13.9229C13.2815 14.7379 13.9456 15.402 14.7606 15.402H19.96C20.775 15.402 21.4391 14.7379 21.4391 13.9229C21.4391 13.1079 20.775 12.4438 19.96 12.4438Z" fill="#FF7600"/>
                <path d="M19.96 17.1301H14.7606C13.938 17.1301 13.2815 17.7942 13.2815 18.6092C13.2815 19.4242 13.9456 20.0883 14.7606 20.0883H19.96C20.775 20.0883 21.4391 19.4242 21.4391 18.6092C21.4391 17.7942 20.775 17.1301 19.96 17.1301Z" fill="#FF7600"/>
                <path d="M23.9295 27.8687C23.107 27.8687 22.4504 28.5327 22.4504 29.3477V60.235C22.4504 61.05 23.1145 61.7141 23.9295 61.7141C24.7445 61.7141 25.4086 61.05 25.4086 60.235V29.3477C25.4086 28.5327 24.7445 27.8687 23.9295 27.8687Z" fill="#FF7600"/>
            </g>
            <defs>
                <clipPath id="clip0_540_21160">
                    <rect width="35" height="67.4493" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export const Svg3 = (props) => {
    return (
        <svg width="60" height="54" viewBox="0 0 60 54" fill="none" className={props.className} onClick={props.onClick}>
            <g clip-path="url(#clip0_540_21171)">
                <path d="M54.7131 52.932C54.2021 52.932 53.7835 52.5133 53.7835 52.0024C53.7835 38.8102 43.0537 28.0804 29.8615 28.0804C16.6693 28.0804 5.93958 38.8173 5.93958 52.0024C5.93958 52.5133 5.52089 52.932 5.00995 52.932C4.49901 52.932 4.08032 52.5133 4.08032 52.0024C4.08032 37.7883 15.6474 26.2212 29.8615 26.2212C44.0756 26.2212 55.6427 37.7883 55.6427 52.0024C55.6427 52.5133 55.224 52.932 54.7131 52.932Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M42.3937 52.932C41.8828 52.932 41.4641 52.5133 41.4641 52.0024C41.4641 45.5092 40.1939 39.4134 37.8946 34.8504C35.6947 30.4861 32.842 28.0804 29.8615 28.0804C26.881 28.0804 24.0283 30.4861 21.8284 34.8504C19.5221 39.4134 18.2589 45.5092 18.2589 52.0024C18.2589 52.5133 17.8402 52.932 17.3293 52.932C16.8183 52.932 16.3997 52.5133 16.3997 52.0024C16.3997 45.2253 17.7409 38.8315 20.1678 34.013C22.7013 28.9888 26.143 26.2212 29.8615 26.2212C33.58 26.2212 37.0218 28.9888 39.5552 34.013C41.9893 38.8315 43.3234 45.2253 43.3234 52.0024C43.3234 52.5133 42.9047 52.932 42.3937 52.932Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M29.8616 40.3997C22.7014 40.3997 15.8108 38.8527 10.971 36.1561C10.524 35.9077 10.3607 35.34 10.6091 34.8929C10.8575 34.4458 11.4252 34.2826 11.8723 34.531C16.4423 37.0786 22.9994 38.5405 29.8545 38.5405C36.7096 38.5405 43.2667 37.0786 47.8368 34.531C48.2839 34.2826 48.8516 34.4387 49.0999 34.8929C49.3483 35.34 49.1922 35.9077 48.738 36.1561C43.8983 38.8527 37.0148 40.3997 29.8474 40.3997H29.8616Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M29.8615 52.861C29.3506 52.861 28.9319 52.4423 28.9319 51.9314V27.1579C28.9319 26.647 29.3506 26.2283 29.8615 26.2283C30.3725 26.2283 30.7911 26.647 30.7911 27.1579V51.9314C30.7911 52.4423 30.3725 52.861 29.8615 52.861Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M58.7155 52.932H1.28436C0.773423 52.932 0.354736 52.5133 0.354736 52.0024C0.354736 51.4914 0.773423 51.0728 1.28436 51.0728H58.7155C59.2264 51.0728 59.6451 51.4914 59.6451 52.0024C59.6451 52.5133 59.2264 52.932 58.7155 52.932Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M29.961 12.7592C26.5406 12.7592 23.7588 9.97744 23.7588 6.55698C23.7588 3.13652 26.5406 0.354736 29.961 0.354736C33.3815 0.354736 36.1633 3.13652 36.1633 6.55698C36.1633 9.97744 33.3815 12.7592 29.961 12.7592ZM29.961 2.20689C27.5625 2.20689 25.618 4.1584 25.618 6.54989C25.618 8.94137 27.5696 10.8929 29.961 10.8929C32.3525 10.8929 34.304 8.94137 34.304 6.54989C34.304 4.1584 32.3525 2.20689 29.961 2.20689Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M38.9166 25.9585C38.4766 25.9585 38.0934 25.6463 38.0082 25.2063L37.0999 20.4305C36.5535 17.6842 34.1123 15.6901 31.3092 15.6901H28.7687C26.0082 15.6901 23.5813 17.6487 22.9994 20.3382L22.1052 25.1992C22.013 25.7031 21.5304 26.0366 21.0266 25.9444C20.5227 25.8521 20.1892 25.3695 20.2814 24.8657L21.1756 19.9905V19.9621C21.942 16.4068 25.1354 13.8308 28.7687 13.8308H31.3092C34.9994 13.8308 38.1998 16.4565 38.9237 20.0756L39.832 24.8586C39.9243 25.3624 39.5978 25.8521 39.094 25.9444C39.0372 25.9585 38.9733 25.9585 38.9166 25.9585Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M10.7652 17.3081C7.75638 17.3081 5.30103 14.8598 5.30103 11.8439C5.30103 8.82789 7.74928 6.37964 10.7652 6.37964C13.7812 6.37964 16.2295 8.82789 16.2295 11.8439C16.2295 14.8598 13.7812 17.3081 10.7652 17.3081ZM10.7652 8.24599C8.77826 8.24599 7.16028 9.86397 7.16028 11.851C7.16028 13.8379 8.77826 15.4559 10.7652 15.4559C12.7522 15.4559 14.3702 13.8379 14.3702 11.851C14.3702 9.86397 12.7522 8.24599 10.7652 8.24599Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M2.48374 32.3879C2.42696 32.3879 2.37019 32.3879 2.30633 32.3737C1.80248 32.2743 1.46895 31.7918 1.5683 31.2879L3.07983 23.3613V23.34C3.75399 20.2247 6.54997 17.968 9.73625 17.968H11.9148C15.1437 17.968 17.9539 20.2672 18.5855 23.4393C18.6848 23.9432 18.3584 24.4328 17.8545 24.5322C17.3507 24.6315 16.861 24.3051 16.7617 23.8013C16.3004 21.4949 14.2637 19.8273 11.9148 19.8273H9.73625C7.42282 19.8273 5.39326 21.4665 4.90361 23.7232L3.39207 31.6357C3.30692 32.0827 2.91662 32.3879 2.48374 32.3879Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M48.8942 17.3081C45.8853 17.3081 43.4299 14.8598 43.4299 11.8439C43.4299 8.82789 45.8782 6.37964 48.8942 6.37964C51.9101 6.37964 54.3584 8.82789 54.3584 11.8439C54.3584 14.8598 51.9101 17.3081 48.8942 17.3081ZM48.8942 8.24599C46.9072 8.24599 45.2892 9.86397 45.2892 11.851C45.2892 13.8379 46.9072 15.4559 48.8942 15.4559C50.8811 15.4559 52.4991 13.8379 52.4991 11.851C52.4991 9.86397 50.8811 8.24599 48.8942 8.24599Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
                <path d="M57.1757 32.3879C56.7357 32.3879 56.3525 32.0756 56.2673 31.6357L54.7558 23.7232C54.2661 21.4665 52.2366 19.8273 49.9232 19.8273H47.7446C45.3957 19.8273 43.359 21.502 42.8977 23.8013C42.7984 24.3051 42.3087 24.6315 41.8049 24.5322C41.301 24.4328 40.9746 23.9432 41.074 23.4393C41.7055 20.2672 44.5157 17.968 47.7446 17.968H49.9232C53.1094 17.968 55.9054 20.2247 56.5725 23.34V23.3613L58.0911 31.2879C58.1905 31.7918 57.8569 32.2814 57.3531 32.3737C57.2963 32.3879 57.2324 32.3879 57.1757 32.3879Z" fill="#FF7600" stroke="#FF7600" stroke-miterlimit="10"/>
            </g>
            <defs>
                <clipPath id="clip0_540_21171">
                    <rect width="60" height="53.2868" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}
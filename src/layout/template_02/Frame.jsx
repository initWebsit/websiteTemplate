import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Header from './Header'
import Menu from './Menu'
// import Background from './Background';
import './Frame.less'


const DurationTime = 200

function MobileLayout(props) {
    const [menuCloseDelay, setMenuCloseDelay] = useState(0)
    const [menuCloseLock, setMenuCloseLock] = useState(false)
    const [menuOpenLock, setMenuOpenLock] = useState(false)
    const [resizeStatus, setResizeState] = useState(false)

    if ($q.is.android) {
        window.addEventListener('visibilitychange', () => {
            document.visibilityState == 'visible' && props.bfCache && window.location.reload();
        })
    }
    if ($q.is.ios) {
        window.addEventListener('pageshow', () => {
            document.visibilityState == 'visible' && props.bfCache && window.location.reload();
        })
    }

    const resizeFunc = () => {
        setResizeState(state => !state)
    }


    useEffect(() => {
        if (props.floatMenu && menuCloseDelay === 0) {
            setMenuCloseDelay(DurationTime)
            setMenuOpenLock(true)
            setTimeout(() => setMenuOpenLock(false), DurationTime)
        }

        if (!props.floatMenu && menuCloseDelay > 0) {
            setMenuCloseLock(true)
            setTimeout(() => {
                setMenuCloseDelay(0)
                setMenuCloseLock(false)
            }, DurationTime)
        }
    }, [props.floatMenu])

    useEffect(() => {
        window.addEventListener('resize', resizeFunc)

        return () => {
            window.removeEventListener('resize', resizeFunc)
        }
    }, [])


    return (
        //该style是为了解决手机端safari浏览器顶部和顶部状态栏影响vh高度布局的问题，后代div统一用height：100%去继承即可
        <div className="layout-m-frame" style={{ height: window.innerHeight > 200 ? window.innerHeight : 200 }}>
            {/*<Background />*/}
            <Header menuCloseLock={menuCloseLock} menuOpenLock={menuOpenLock} />
            {(props.floatMenu || menuCloseDelay > 0) && <Menu />}
            <Outlet />
        </div>
    )
}

export default connect(
    ({ app }) => $_.pick(app, ['floatMenu', 'bfCache']),
    ({ app }) => ({ actions: $_.pick(app, ['setFloatMenu']) })
)(MobileLayout)

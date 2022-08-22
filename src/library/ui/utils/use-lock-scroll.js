import { useTouch } from './use-touch';
import { useEffect } from 'react';
import { getScrollParent } from './get-scroll-parent';
import { supportsPassive } from '../utils/supports-passive';
var totalLockCount = 0;
var BODY_LOCK_CLASS = 'am-overflow-hidden'; // 移植自vant：https://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts

export function useLockScroll(rootRef, shouldLock) {
    var touch = useTouch();

    var onTouchMove = function onTouchMove(event) {
        touch.move(event);
        var direction = touch.deltaY.current > 0 ? '10' : '01';
        var el = getScrollParent(event.target, rootRef.current);
        var scrollHeight = el.scrollHeight,
            offsetHeight = el.offsetHeight,
            scrollTop = el.scrollTop;
        var status = '11';

        if (scrollTop === 0) {
            status = offsetHeight >= scrollHeight ? '00' : '01';
        } else if (scrollTop + offsetHeight >= scrollHeight) {
            status = '10';
        }

        if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
            if (typeof event.cancelable !== 'boolean' || event.cancelable) {
                event.preventDefault();
            }

            event.stopPropagation();
        }
    };

    var lock = function lock() {
        document.addEventListener('touchstart', touch.start);
        document.addEventListener('touchmove', onTouchMove, supportsPassive ? {
            passive: false
        } : false);

        if (!totalLockCount) {
            document.body.classList.add(BODY_LOCK_CLASS);
        }

        totalLockCount++;
    };

    var unlock = function unlock() {
        if (totalLockCount) {
            document.removeEventListener('touchstart', touch.start);
            document.removeEventListener('touchmove', onTouchMove);
            totalLockCount--;

            if (!totalLockCount) {
                document.body.classList.remove(BODY_LOCK_CLASS);
            }
        }
    };

    useEffect(function () {
        if (shouldLock) {
            lock();
            return function () {
                unlock();
            };
        }
    }, [shouldLock]);
}
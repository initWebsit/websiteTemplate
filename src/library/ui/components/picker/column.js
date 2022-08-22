import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import { convertPx } from '../../utils/convert-px';
import { rubberbandIfOutOfBounds, bound } from '../../utils/rubberband';
var classPrefix = "b-picker";
export var Column = function Column(props) {
    var itemHeight = convertPx(34);
    var value = props.value,
        onSelect = props.onSelect,
        column = props.column;

    var _useSpring = useSpring(function () {
        return {
            from: {
                y: 0
            },
            config: {
                tension: 400,
                mass: 0.8
            }
        };
    }),
        y = _useSpring[0].y,
        api = _useSpring[1];

    useEffect(function () {
        if (!value) {
            return;
        }

        var targetIndex = column.findIndex(function (item) {
            return item.value === value;
        });

        if (targetIndex < 0) {
            return;
        }

        var finalPosition = targetIndex * -itemHeight;
        api.start({
            y: finalPosition,
            immediate: y.idle
        });
    }, [value]);
    useEffect(function () {
        if (column.length === 0) {
            if (value !== null) {
                props.onSelect(null);
            }
        } else {
            if (!column.some(function (item) {
                return item.value === value;
            })) {
                var firstItem = column[0];
                props.onSelect(firstItem.value);
            }
        }
    });
    var bind = useDrag(function (state) {
        var min = -((column.length - 1) * itemHeight);
        var max = 0;

        if (state.last) {
            var position = state.movement[1] + state.vxvy[1] * 50;
            var targetIndex = -Math.round(bound(position, min, max) / itemHeight);
            var finalPosition = targetIndex * -itemHeight;
            api.start({
                y: finalPosition
            });
            onSelect(column[targetIndex].value);
        } else {
            var _position = state.movement[1];
            api.start({
                y: rubberbandIfOutOfBounds(_position, min, max, itemHeight * 50, 0.2)
            });
        }
    }, {
        axis: 'y',
        initial: function initial() {
            return [0, y.get()];
        },
        filterTaps: true
    });
    return /*#__PURE__*/React.createElement("div", Object.assign({
        className: classPrefix + "-column"
    }, bind()), /*#__PURE__*/React.createElement(animated.div, {
        style: {
            y: y
        },
        className: classPrefix + "-column-wheel"
    }, column.map(function (item, index) {
        function handleClick() {
            var finalPosition = index * -itemHeight;
            api.start({
                y: finalPosition
            });
            onSelect(column[index].value);
        }

        return /*#__PURE__*/React.createElement("div", {
            key: item.value,
            className: classPrefix + "-column-item",
            onClick: handleClick
        }, /*#__PURE__*/React.createElement("div", {
            className: classPrefix + "-column-item-label"
        }, item.label));
    })));
};
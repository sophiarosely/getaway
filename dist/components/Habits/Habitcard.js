var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tracking from './Tracking';
var HabitCard = function (_a) {
    var id = _a.id, name = _a.name, type = _a.type;
    var _b = useState(false), isTrackingOpen = _b[0], setIsTrackingOpen = _b[1];
    var openTracking = function () {
        setIsTrackingOpen(!isTrackingOpen);
    };
    var closeTracking = function () {
        setIsTrackingOpen(false);
    };
    return (_jsxs("div", { children: [_jsxs(Card, __assign({ sx: { backgroundColor: '#333' } }, { children: [_jsxs(CardContent, { children: [_jsx(Typography, __assign({ sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true }, { children: "Habit" })), _jsx(Typography, { variant: "h5", component: "div" }), _jsxs(Typography, __assign({ sx: { mb: 1.5 }, color: "text.secondary" }, { children: ["Habit Type: ", type] })), _jsx(Typography, __assign({ variant: "body2" }, { children: name }))] }), _jsx(CardActions, { children: _jsx(Button, __assign({ size: "small", onClick: openTracking }, { children: "Tracking" })) })] })), isTrackingOpen && (_jsx(Tracking, { onClose: closeTracking }))] }));
};
export default HabitCard;
//# sourceMappingURL=Habitcard.js.map
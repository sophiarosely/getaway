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
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
var CheckIn = function () {
    // What do I want to happen on click?
    // state for showing feeling
    var _a = useState(''), userFeelings = _a[0], SetUserFeelings = _a[1];
    // state for showing success display
    var _b = useState(false), showAlert = _b[0], setShowAlert = _b[1];
    var FeelingSelector = function (e) {
        console.log(e.target.textContent);
        SetUserFeelings(e.target.textContent);
    };
    return (_jsxs("div", __assign({ style: {
            border: '1px solid black',
            textAlign: 'center',
        } }, { children: [_jsx("h1", { children: "How are you feeling this check in?" }), _jsxs(ButtonGroup, __assign({ variant: 'contained', "aria-label": 'outlined primary button group', orientation: 'vertical' }, { children: [_jsx(Button, __assign({ onClick: FeelingSelector, sx: { background: 'blue', color: 'white' } }, { children: "High Energy, Pleasant" })), _jsx(Button, __assign({ onClick: FeelingSelector, sx: { background: 'red', color: 'white' } }, { children: "High Energy, Unpleasant" })), _jsx(Button, __assign({ onClick: FeelingSelector, sx: { background: 'green', color: 'black' } }, { children: "Low Energy, Pleasant" })), _jsx(Button, __assign({ onClick: FeelingSelector, sx: { background: 'yellow', color: 'black' } }, { children: "Low Energy, Unpleasant" }))] })), _jsxs("p", __assign({ style: { fontWeight: 'bold' } }, { children: ["Your feelings are: ", userFeelings] })), _jsx("p", { children: "If correct, click the submit button." }), _jsx("p", { children: "If not, select the correct choice." }), _jsx(Button, __assign({ variant: 'outlined', onClick: function () {
                    setShowAlert(true);
                    setTimeout(function () {
                        setShowAlert(false);
                    }, 3000); // hide alert after 3 seconds
                } }, { children: "Submit feeling!" })), showAlert && (_jsx("div", __assign({ style: {
                    margin: '0 auto',
                    textAlign: 'center',
                    maxWidth: '25rem',
                } }, { children: _jsxs(Alert, __assign({ severity: 'success', color: 'success', style: { fontWeight: 'bold', textAlign: 'center' } }, { children: [_jsx(AlertTitle, { children: "Success" }), "Successfully submitted user feelings of ", userFeelings, "!"] })) })))] })));
};
export default CheckIn;
//# sourceMappingURL=CheckIn.js.map
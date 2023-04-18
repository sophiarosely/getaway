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
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
var Affirmations = function () {
    var _a = useState(''), userMood = _a[0], setUserMood = _a[1];
    var _b = useState(''), affirmations = _b[0], setAffirmations = _b[1];
    var handleSubmit = function () {
        axios.get("/affirmations/mood/".concat(userMood))
            .then(function (_a) {
            var data = _a.data;
            return setAffirmations(data);
        })
            .catch(function (err) { return console.error(err); });
    };
    return (_jsxs("div", { children: [_jsxs("center", { children: [_jsx("h1", { children: "Affirmations" }), _jsx("h2", { children: "What affirmations are you looking for today? " }), _jsx("h3", { children: "Today, I am feeling..." }), _jsx(TextField, { id: "standard-basic", label: "", variant: "standard", onChange: function (e) { return setUserMood(e.target.value); } }), _jsx(Button, __assign({ variant: "text", onClick: function () { return handleSubmit(); } }, { children: "Enter" }))] }), _jsx("div", __assign({ id: "affirmations" }, { children: affirmations }))] }));
};
export default Affirmations;
//# sourceMappingURL=Affirmations.js.map
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
import { useEffect } from 'react';
var Login = function () {
    var google = function () {
        window.open("".concat(process.env.REACT_APP_CLIENT_URL, "auth/google/"), "_self");
    };
    useEffect(function () {
        document.body.classList.add('login-page');
        return function () {
            document.body.classList.remove('login-page');
        };
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", { children: "Login" }), _jsx("button", __assign({ className: "googleLogin", onClick: google }, { children: "Log In" }))] }));
};
export default Login;
//# sourceMappingURL=Login.js.map
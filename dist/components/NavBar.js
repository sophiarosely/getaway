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
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SpaIcon from "@mui/icons-material/Spa";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookIcon from "@mui/icons-material/Book";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";
var data = [
    { name: "DashBoard", icon: _jsx(DashboardIcon, {}), link: "/" },
    { name: "Growth", icon: _jsx(SpaIcon, {}), link: "/habits" },
    { name: "Guidance", icon: _jsx(BookIcon, {}), link: "/guidance" },
    { name: "Meditation", icon: _jsx(SelfImprovementIcon, {}), link: "/meditation" },
    { name: "Recess", icon: _jsx(NaturePeopleIcon, {}), link: "/recess" },
    { name: "Affirmations", icon: _jsx(FavoriteIcon, {}), link: "/affirmations" },
    { name: "Profile", icon: _jsx(AccountCircleIcon, {}), link: "/profile" },
];
function NavBar() {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var logout = function () {
        window.open("".concat(process.env.REACT_APP_CLIENT_URL, "auth/logout"), "_self");
    };
    var getList = function () { return (_jsx("div", __assign({ style: { width: 250 }, onClick: function () { return setOpen(false); } }, { children: data.map(function (item) { return (_jsx(Link, __assign({ to: { pathname: item.link }, style: { textDecoration: "none" } }, { children: _jsxs(ListItem, __assign({ button: true }, { children: [_jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { primary: item.name })] })) }), item.name)); }) }))); };
    return (_jsxs("div", { children: [_jsx(Button, __assign({ onClick: function () { return setOpen(true); } }, { children: "Click me" })), _jsx(Drawer, __assign({ open: open, anchor: 'left', onClose: function () { return setOpen(false); } }, { children: getList() })), _jsx(Button, __assign({ onClick: logout }, { children: "Logout" }))] }));
}
export default NavBar;
//# sourceMappingURL=NavBar.js.map
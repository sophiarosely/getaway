import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Habits from './pages/Habits';
import Affirmations from './pages/Affirmations';
import Recess from './pages/Recess';
import Guidance from './pages/Guidance';
import Profile from './pages/Profile';
import Meditation from './pages/Meditation';
import NavBar from './components/NavBar';
import axios from 'axios';
import Login from './pages/Login';
import { useState, useEffect } from 'react';
import MusicBar from './components/MusicBar';
var App = function () {
    var _a = useState(null), user = _a[0], setUser = _a[1];
    useEffect(function () {
        var getUser = function () {
            axios.get("".concat(process.env.REACT_APP_CLIENT_URL, "auth/login/success"))
                .then(function (response) {
                if (response.status === 200) {
                    return response.data;
                }
                else {
                    throw new Error("auth failed");
                }
            }).then(function (resObj) {
                setUser(resObj.user);
                localStorage.setItem('user', JSON.stringify(resObj.user));
            })
                .catch(function (err) {
                console.error('couldnt get the user to the state', err);
            });
        };
        getUser();
    }, []);
    console.log(user);
    return (_jsx(BrowserRouter, { children: _jsxs("div", { children: [_jsx(NavBar, {}), _jsxs(Routes, { children: [user ? (_jsx(Route, { path: "/", element: _jsx(Home, {}) })) : (_jsx(Route, { path: "/", element: _jsx(Login, {}) })), _jsx(Route, { path: "/habits", element: _jsx(Habits, {}) }), _jsx(Route, { path: "/affirmations", element: _jsx(Affirmations, {}) }), _jsx(Route, { path: "/recess", element: _jsx(Recess, {}) }), _jsx(Route, { path: "/guidance", element: _jsx(Guidance, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/meditation", element: _jsx(Meditation, {}) })] }), _jsx(MusicBar, {})] }) }));
};
export default App;
//# sourceMappingURL=App.js.map
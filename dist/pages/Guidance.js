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
import { useState, useEffect } from "react";
import axios from "axios";
import TherapistList from "../components/TherapistList";
var Guidance = function () {
    var _a = useState(0), userLat = _a[0], setLat = _a[1];
    var _b = useState(0), userLong = _b[0], setLong = _b[1];
    var _c = useState(null), pagetoken = _c[0], setpagetoken = _c[1];
    var _d = useState(false), geolocationLoaded = _d[0], setGeolocationLoaded = _d[1];
    var _e = useState([]), therapists = _e[0], setTherapists = _e[1];
    useEffect(function () {
        //function get the user lat and long
        navigator.geolocation.getCurrentPosition(function (position) {
            var _a = position.coords, latitude = _a.latitude, longitude = _a.longitude;
            setLat(latitude);
            setLong(longitude);
            setGeolocationLoaded(true);
        });
    }, []);
    useEffect(function () {
        //if lat and long has been loaded run get request
        if (geolocationLoaded) {
            getAllTherapists();
        }
    }, [geolocationLoaded, userLat, userLong]);
    var getAllTherapists = function () {
        axios.get('/therapist/search', {
            params: {
                lat: userLat,
                long: userLong
            }
        })
            .then(function (response) {
            setTherapists(response.data.results);
            setpagetoken(response.data.next_page_token);
        })
            .catch(function (err) {
            console.error(err, "could not get therpaists clientside");
        });
    };
    var getNextTwenty = function () {
        axios.get('/therapist/next20', {
            params: {
                pagetoken: pagetoken
            }
        })
            .then(function (response) {
            setpagetoken(response.data.next_page_token);
            setTherapists(response.data.results);
        })
            .catch(function (err) {
            console.error('failed to get next twenty search results', err);
        });
    };
    console.log('hi', therapists);
    return (_jsxs("div", { children: [_jsx("h1", { children: "Guidance" }), _jsx(TherapistList, { therapists: therapists }), _jsx("button", __assign({ onClick: getNextTwenty }, { children: "Next20" }))] }));
};
export default Guidance;
//# sourceMappingURL=Guidance.js.map
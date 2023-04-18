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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import HabitCard from '../components/Habits/Habitcard';
import MenuItem from '@mui/material/MenuItem';
var Habits = function () {
    var types = [
        {
            type: "Excersize"
        }, {
            type: "Eating"
        }, {
            type: "Focus"
        }, {
            type: "Choices"
        }
    ];
    var _a = useState([]), habits = _a[0], setHabits = _a[1];
    var _b = useState(""), newHabit = _b[0], setNewHabit = _b[1];
    var _c = useState(""), type = _c[0], setType = _c[1];
    var onCreate = function () {
        setHabits(__spreadArray(__spreadArray([], habits, true), [{ id: habits.length + 1, name: newHabit, type: type }], false));
        setType("");
        setNewHabit("");
        console.log("hi");
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Bad Habits" }), _jsx(TextField, { required: true, id: "outlined-required", label: "Required", helperText: "Enter Tracking", value: newHabit, onChange: function (event) { return setNewHabit(event.target.value); } }), _jsx(TextField, __assign({ id: "outlined-select-currency", select: true, label: "Select", onChange: function (event) { return setType(event.target.value); }, helperText: "Please select activity type" }, { children: types.map(function (option) { return (_jsx(MenuItem, __assign({ value: option.type }, { children: option.type }), option.type)); }) })), _jsx(Button, __assign({ variant: "text", onClick: onCreate }, { children: "Create Habit" })), habits.map(function (habit) { return (_jsx(HabitCard, { id: habit.id, name: habit.name, type: habit.type })); }), newHabit] }));
};
export default Habits;
//# sourceMappingURL=Habits.js.map
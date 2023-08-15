import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect } from "react";
import ReactSummernote from "./ReactSummernote";
import './styles.css';
export const Summernote = forwardRef(function Summernote({ name, className = '', setValue, error, defaultValue, placeholder, noteEditorClass = 'item-design' }, ref) {
    useEffect(() => {
        // $('.note-editing-area').addClass(noteEditorClass)
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: className + (error ? ' error' : ''), children: _jsx(ReactSummernote, { ref: ref, name: name, placeholder: placeholder, onChange: setValue, value: String(defaultValue), options: window.summernoteOptions }) }), _jsx("div", { className: "red fw-500", children: error })] }));
});

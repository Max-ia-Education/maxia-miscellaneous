import { useState } from "react";
export const useShow = (defaultVisibility = false) => {
    const [visible, setVisible] = useState(defaultVisibility);
    const hide = () => setVisible(false);
    const show = () => setVisible(true);
    const toggle = () => setVisible(prev => !prev);
    return { visible, show, hide, toggle };
};
const onlyNumbers = (str) => {
    return str.replace(/\D/g, '');
};
const formatPhone = (phone) => {
    phone = onlyNumbers(phone);
    const idx_hyphen = phone.length === 11 ? 7 : 6;
    let phone_out = '';
    if (phone.length > 0)
        phone_out = '(' + phone.slice(0, 2);
    if (phone.length > 1)
        phone_out += ') ' + phone.slice(2, idx_hyphen);
    if (phone.length > idx_hyphen)
        phone_out += '-' + phone.slice(idx_hyphen);
    return phone_out;
};
export const usePhone = (_default = '') => {
    const [phone, setPhone] = useState(formatPhone(_default ?? ''));
    const onChangeHandler = (e) => {
        if (Math.abs(e.length - phone.length) > 1) {
            setPhone(formatPhone(e));
            return;
        }
        if (e.length < phone.length) {
            setPhone(e);
            return;
        }
        switch (e.length) {
            case 1:
                setPhone('(' + e);
                return;
            case 3:
                setPhone(e + ') ');
                return;
            case 11:
                setPhone(e + '-');
                return;
            case 15:
                setPhone(formatPhone(e));
                return;
            default:
                setPhone(e);
                return;
        }
    };
    return {
        phone_beautified: phone,
        phone: onlyNumbers(phone),
        changeHandler: onChangeHandler
    };
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const useShow = (defaultVisibility = false) => {
    const [visible, setVisible] = useState(defaultVisibility);
    const hide = () => setVisible(false);
    const show = () => setVisible(true);
    const toggle = () => setVisible(prev => !prev);
    return { visible, show, hide, toggle };
};
function isTUseLinkObject(params) {
    return (!Array.isArray(params));
}
export function useLink(params) {
    let route = [];
    if (isTUseLinkObject(params)) {
        let { validacaoDisciplina = false, roteiro_estudos = false } = params;
        route = params.route;
        if (validacaoDisciplina) {
            route = ['avaliacao_adaptadas', 'elaboracoes', ':avaliacao_conhecimento_id', ':disciplina_id', ...route];
        }
        if (roteiro_estudos) {
            route = ['roteiro_estudos', ':turma_avaliacao_id', ':materia_id', ...route];
        }
    }
    else {
        route = params;
    }
    const routeParams = useParams();
    return route.map(p => p[0] === ':' ? routeParams[p.slice(1)] : p).join('/');
}
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
export const usePhone = (defaultValue = '') => {
    const [phone, setPhone] = useState(formatPhone(defaultValue ?? ''));
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
export const useCountdownTimer = (t_0) => {
    const [timeLeft, setTimeLeft] = useState(t_0);
    useEffect(() => {
        setTimeLeft(t_0);
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [t_0]);
    return timeLeft;
};
